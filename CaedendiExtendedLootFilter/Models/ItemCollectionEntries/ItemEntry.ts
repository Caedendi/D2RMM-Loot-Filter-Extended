import { CharConstants } from "../../Constants/CharConstants";
import { FilterSettings } from "../../Settings/Filter/FilterSettings";
import { BigTooltip } from "../BigTooltip";
import { D2Color } from "../Colors/D2Color";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IItemEntry } from "./Interfaces/IItemEntry";

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
  private readonly _nameColor: D2Color | null;
  protected get nameColor(): D2Color | null {
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
  private _highlight: IHighlight | null;
  public get highlight(): IHighlight | null {
    return this._highlight;
  }
  protected set highlight(value: IHighlight) {
    this._highlight = value;
  }
  /**
   * Big tooltip
   */
  private _bigTooltip: BigTooltip | null;
  public get bigTooltip(): BigTooltip | null {
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
    this._nameColor = nameColor ??= null;
    this._highlight = highlight ??= null;
    this._bigTooltip = (bigTooltipSetting != undefined && bigTooltipSetting != EBigTooltipSetting.DISABLED) ? new BigTooltip(bigTooltipSetting) : null;
  }

  public static createArray(items: [string, string][]): ItemEntry[] {
    return items.map<ItemEntry>(item => new ItemEntry(item[0], item[1]));
  }

  public static createHidden(key: string): ItemEntry {
    let entry = new ItemEntry(key);
    entry.isVisible = false;

    return entry;
  }

  public generateDisplayName(localizedName: string): string {
    if (!this.isVisible)
      return FilterSettings.hidden;
    
    let displayName = this.applyNewName(localizedName);
    displayName = this.applyNameColor(displayName);
    displayName = this.applyHighlightPattern(displayName);
    displayName = this.applyBigTooltip(displayName);
    displayName = this.removeRedundantColorCodes(displayName);

    return displayName;
  }

  protected applyNewName(localizedName: string) {
    return (this.newName == null || this.newName === CharConstants.empty) ? localizedName : this.newName;
  }

  protected applyNameColor(displayName: string) {
    return `${this.nameColor ?? CharConstants.empty}${displayName}`;
  }

  protected applyHighlightPattern(displayName: string): string {
    return this.highlight == null ? displayName : this.highlight.apply(displayName);
  }

  protected applyBigTooltip(displayName: string): string {
    return this.bigTooltip == null ? displayName : this.bigTooltip.apply(displayName, this.highlight);
  }

  /**
   * Removes all adjacent redundant color codes from a name. Assumes occurrences of "ÿc" are always followed by a valid color code character.
   * @param name The item name.
   * @param startColor The item's default or current tooltip color.
   * @returns The provided name with all duplicate adjacent color codes removed.
   */
  protected removeRedundantColorCodes(name: string, startColor?: D2Color): string {

    return name;
    // TODO: fix

    /*

    if (name.length < 3) // name too short to have a color code
      return name;

    let i = name.indexOf(D2Color.prefix);
    if (i == -1) // no color code found
      return name;

    let nextColor = new D2Color(name[i+2] as ED2ColorCode);
    
    // if adjacent color code matches startColor, remove it and proceed with next recursive iteration
    if (nextColor.equals(startColor)) {
      name = name.replace(startColor.toString(), CharConstants.empty);
      return this.removeRedundantColorCodes(name, startColor);
    }

    // if next color code does not match, proceed to search from there on
    return this.removeRedundantColorCodes(name.slice(i+3), nextColor);

    */
  }
}
