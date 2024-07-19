import { CharConstants } from "../../Constants/CharConstants";
import { Settings } from "../../Settings/Settings";
import { D2Color } from "../D2Color";
import { IItemEntry } from "../IItemEntry";
import { BigTooltip } from "./BigTooltip";
import { IHighlightPattern } from "./IHighlightPattern";
import { SingleHighlight } from "./SingleHighlight";

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
export class NewItemEntry implements IItemEntry {
  private readonly _key: string;
  public get key(): string {
    return this._key;
  }
  private _isVisible: boolean = true;
  public get isVisible(): boolean {
    return this._isVisible;
  }
  public set isVisible(value: boolean) {
    this._isVisible = value;
  }
  private readonly _nameColor: D2Color;
  protected get nameColor(): D2Color {
    return this._nameColor;
  }
  private readonly _newName?: string;
  public get newName(): string {
    return this._newName;
  }
  protected _highlightPattern?: IHighlightPattern;
  protected _bigTooltip?: BigTooltip;

  constructor(key: string, newName?: string, nameColor?: D2Color, pattern?: IHighlightPattern, bigTooltip?: BigTooltip) {
    this._key = key;
    this._newName = newName;
    this._nameColor = nameColor;
    this._highlightPattern = pattern;
    this._bigTooltip = bigTooltip;
  }

  public static createHidden(key: string): NewItemEntry {
    let entry = new NewItemEntry(key);
    entry.isVisible = false;

    return entry;
  }

  public generateDisplayName(translatedName: string): string {
    if (!this._isVisible)
      return Settings.filter.settings.hidden;

    let displayName = this._newName === CharConstants.empty ? translatedName : `${this._nameColor}${this._newName}`;
    
    if (this._highlightPattern != null)
      displayName = this._highlightPattern.apply(displayName);


    // if:
    // - has single highlight pattern
    // - if has big tooltip
    // - big tooltip has pickup message (PuMsg)
    // => PuMsg should have indent (= highlight pattern length)

    if (this._bigTooltip != null)
      displayName = this._bigTooltip.apply(displayName);

    return displayName;
  }

  // TODO: test if this only works on SingleHighlights vs DoubleHighlights
  protected isSingleHighlightPattern(pattern: IHighlightPattern): pattern is SingleHighlight {
    return (pattern as SingleHighlight).getIndent !== undefined;
  }
}
