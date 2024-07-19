import { CharConstants } from "../../Constants/CharConstants";
import { Settings } from "../../Settings/Settings";
import { iLvlFix } from "../../Settings/StatsAndModifiersSettings";
import { BigTooltip } from "./BigTooltip";
import { HighlightPattern } from "./HighlightPattern";
import { QualityTag } from "./QualityTag";

// - key
// - visible/hidden
// - item name
//   - new name (hardcoded)
//   - empty (vanilla translated name)
// - highlight
//   - no highlight
//   - single highlight (with/without padding) prefix
//   - double highlight pattern
// - big tooltip
// - ilvl + indent fix
// - item quality tag
// - runes:
//   - rune affix
//   - number
export class NewItemEntry {
  protected readonly _key: string;
  protected _isVisible: boolean = true;
  protected _newName: string;
  protected _highlightPattern?: HighlightPattern;
  protected _iLvlFix: iLvlFix = iLvlFix.None;
  protected _bigTooltip?: BigTooltip;
  protected _qualityTag?: QualityTag;

  constructor(key: string) {
    this._key = key;
  }

  public generateDisplayName(): string {
    if (!this._isVisible)
      return Settings.filter.settings.hidden;

    let displayName = CharConstants.empty;

    // if (!this.hasBigTooltip())
    //   return this.name;

    // // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    // return `${this.bigTooltipSuffix}${this.bigTooltipPadding}${this.name}${this.bigTooltipPadding}${this.bigTooltipPrefix}`;
  }
}
