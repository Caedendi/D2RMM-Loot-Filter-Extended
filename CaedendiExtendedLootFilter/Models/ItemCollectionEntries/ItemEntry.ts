import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { D2Color } from "../Colors/D2Color";
import { BigTooltip } from "./BigTooltip";
import { IHighlightPattern } from "./IHighlightPattern";
import { IItemEntry } from "./IItemEntry";

// - key
// - visible/hidden
// - item name
//   - new name (hardcoded)
//   - empty (vanilla translated name)
// - highlight
//   - no highlight
//   - single highlight (with/without padding) prefix
//   - double highlight pattern
//   - ilvl + indent fix
// - big tooltip
// - item quality tag
// - runes:
//   - rune affix
//   - number

// TOOD: ilvl indent fix and big tooltips
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
  private _highlightPattern: IHighlightPattern | null;
  protected get highlightPattern(): IHighlightPattern | null {
    return this._highlightPattern;
  }
  protected set highlightPattern(value: IHighlightPattern) {
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

  /**
   * TODO: ItemEntry Constructor
   */
  constructor(
    key: string, 
    newName?: string | null, 
    nameColor?: D2Color, 
    pattern?: IHighlightPattern | null, 
    bigTooltipSetting?: BigTooltipSetting | null
  ) {
    this._key = key;
    this._newName = newName ??= null;
    this._nameColor = nameColor ??= ColorConstants.none;
    this._highlightPattern = pattern ??= null;
    this._bigTooltip = (bigTooltipSetting != undefined && bigTooltipSetting != BigTooltipSetting.Disabled) ? new BigTooltip(bigTooltipSetting) : null;
  }

  public static createHidden(key: string): ItemEntry {
    let entry = new ItemEntry(key);
    entry.isVisible = false;

    return entry;
  }

  public generateDisplayName(translatedName: string): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    let displayName = this.applyNewName(translatedName);
    displayName = this.applyHighlightPattern(displayName);
    displayName = this.applyBigTooltip(displayName);

    return displayName;
  }

  protected applyNewName(translatedName: string) {
    return this._newName === CharConstants.empty ? translatedName : `${this._nameColor}${this._newName}`;
  }

  protected applyHighlightPattern(displayName: string): string {
    if (this._highlightPattern == null)
      return displayName;

    displayName = this._highlightPattern.apply(displayName);

    return displayName;
  }

  protected applyBigTooltip(displayName: string): string {
    if (this._bigTooltip == null)
      return displayName;

    return this._bigTooltip.apply(displayName, this.highlightPattern);
  }
}
