import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { GemConstants } from "../../Constants/Items/GemConstants";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { D2Color } from "../Colors/D2Color";
import { Gem } from "../Items/Gem";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { SingleHighlight } from "../Highlights/SingleHighlight";
import { BigTooltip } from "../BigTooltip";

export class ItemEntry implements IItemEntry {
  /**
   * Key / item code
   */
  private readonly _key: string;
  public get key(): string {
    return this._key;
  }
  /**
   * Visibility
   */
  private _isVisible: boolean = true;
  public get isVisible(): boolean {
    return this._isVisible;
  }
  public set isVisible(value: boolean) {
    this._isVisible = value;
  }
  /**
   * Name color
   */
  private readonly _nameColor: D2Color;
  protected get nameColor(): D2Color {
    return this._nameColor;
  }
  /**
   * Name replacement. Leave empty to use vanilla translated name.
   */
  private readonly _newName: string | null;
  protected get newName(): string | null {
    return this._newName;
  }
  /**
   * Highlight pattern
   */
  private _highlightPattern: IHighlight | null;
  protected get highlightPattern(): IHighlight | null {
    return this._highlightPattern;
  }
  protected set highlightPattern(value: IHighlight) {
    this._highlightPattern = value;
  }
  /**
   * Big tooltip
   */
  private _bigTooltip: BigTooltip | null;
  protected get bigTooltip(): BigTooltip | null {
    return this._bigTooltip;
  }
  protected set bigTooltip(value: BigTooltip) {
    this._bigTooltip = value;
  }

  constructor(
    key: string, 
    newName?: string | null, 
    nameColor?: D2Color | null, 
    highlight?: IHighlight | null, 
    bigTooltipSetting?: EBigTooltipSetting | null
  ) {
    this._key = key;
    this._newName = newName ??= null;
    this._nameColor = nameColor ??= ColorConstants.none;
    this._highlightPattern = highlight ??= null;
    this._bigTooltip = (bigTooltipSetting != undefined && bigTooltipSetting != EBigTooltipSetting.Disabled) ? new BigTooltip(bigTooltipSetting) : null;
  }

  public static createArray(items: [string, string][]): ItemEntry[] {
    return items.map<ItemEntry>(item => new ItemEntry(item[0], item[1]));
  }

  public static createHidden(key: string): ItemEntry {
    let entry = new ItemEntry(key);
    entry.isVisible = false;

    return entry;
  }

  // TODO: convert fromGem to Gem.ToItemEntry()
  public static fromGem(gem: Gem): ItemEntry {
    return new ItemEntry(gem.key, gem.name, GemConstants.clrName, new SingleHighlight(GemConstants.highlight, gem.color, GemConstants.padding), Settings.bigTooltips.jewelry.gemsSetting);
  }

  public static fromGems(gems: Gem[]): ItemEntry[] {
    return gems.map<ItemEntry>(gem => this.fromGem(gem));
  }

  public generateDisplayName(translatedName: string): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    let displayName = this.applyNewName(translatedName);
    displayName = this.applyHighlightPattern(displayName);
    displayName = this.applyBigTooltip(displayName);
    displayName = this.removeRedundantColorCodes(displayName);

    return displayName;
  }

  protected applyNewName(translatedName: string) {
    return this._newName === CharConstants.empty ? translatedName : `${this._nameColor}${this._newName}`;
  }

  protected applyHighlightPattern(displayName: string): string {
    if (this._highlightPattern == null)
      return displayName;

    return this._highlightPattern.apply(displayName);
  }

  protected applyBigTooltip(displayName: string): string {
    if (this._bigTooltip == null)
      return displayName;

    return this._bigTooltip.apply(displayName, this.highlightPattern);
  }

  // TODO: test
  /**
   * Removes all adjacent redundant color codes from a name. Assumes occurrences of "ÿc" are always followed by a valid color code character.
   * @param name The item name.
   * @param startColor The item's default or current tooltip color.
   * @returns The provided name with all duplicate adjacent color codes removed.
   */
  protected removeRedundantColorCodes(name: string, startColor?: D2Color): string {
    if (name.length < 3) // name too short to have a color code
      return name;

    let i = name.indexOf(D2Color.prefix);
    if (i == -1) // no color code found
      return name;

    let nextColor = new D2Color(name[i+2]);
    
    // if adjacent color code matches startColor, remove it and proceed with next recursive iteration
    if (nextColor.equals(startColor ??= ColorConstants.none)) {
      name = name.replace(startColor.toString(), CharConstants.empty);
      return this.removeRedundantColorCodes(name, startColor);
    }

    // if next color code does not match, proceed to search from there on
    return this.removeRedundantColorCodes(name.slice(i+3), nextColor);
  }
}
