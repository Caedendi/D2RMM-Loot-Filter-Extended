import { D2Color } from "../../Models/Colors/D2Color";
import { DoubleHighlightPattern } from "../../Models/Highlights/DoubleHighlightPattern";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { SettingsConstants } from "../SettingsConstants";

export abstract class HighlightConstants {
  static character: string  = Settings.filter.settings.highlightCharacter !== SettingsConstants.custom ? Settings.filter.settings.highlightCharacter : '*'; // replace * with desired custom character [CSTM-HLCTR]
  static defaultHighlightColor:     D2Color = Settings.filter.settings.highlightColor;

  static paddingNone = CharConstants.empty;
  static padding1    = CharConstants.space;
  static padding2    = CharConstants.space.repeat(2);
  static padding3    = CharConstants.space.repeat(3);
  static padding5    = CharConstants.space.repeat(5);

  static patternNone = CharConstants.empty;
  static pattern2    = this.character.repeat(2);
  static pattern3    = this.character.repeat(3);
  static pattern4    = this.character.repeat(4);
  static pattern5    = this.character.repeat(5);
  static pattern10   = this.character.repeat(10);
  static pattern2x10 = `${this.pattern10}${this.padding2}${this.pattern10}`;
  static pattern3x10 = `${this.pattern10}${this.padding2}${this.pattern10}${this.padding2}${this.pattern10}`;

  // TODO: remove?
  static uniqueColorName = ColorConstants.gold;
  static uniqueColorHighlight = this.defaultHighlightColor;
  static uniquePattern = this.pattern10;
  static uniquePadding = this.padding5;
  static uniquePrefix = `${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}${this.uniquePadding}`;
  static uniqueSuffix = `${this.uniquePadding}${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}`;

  static questPrefix = this.uniquePrefix;
  static questSuffix = this.uniqueSuffix;

  static readonly uniqPattern = new DoubleHighlightPattern(this.pattern10, this.padding5);
  static readonly questPattern = this.uniqPattern;

  static bttPadding = this.padding5;
  static bttPickUpMsg = `${ColorConstants.purple}Pick Up`;

  // todo: change 3x10 pattern for all instances if BTT enabled
  protected static patternXL = Settings.bigTooltips.runes.highRunesSetting == EBigTooltipSetting.Disabled
    ? HighlightConstants.pattern3x10  // ********** ********** **********, or
    : HighlightConstants.pattern2x10; // ********** ********** (with big tooltips)

  protected static highlightLevels = [
    { setting: "s",  pattern: HighlightConstants.pattern5,  padding: HighlightConstants.padding3 },
    { setting: "l",  pattern: HighlightConstants.pattern10, padding: HighlightConstants.padding5 },
    { setting: "xl", pattern: this.patternXL,               padding: HighlightConstants.padding5 },
  ];

  public static createHighlight(setting: string, highlightColor): IHighlight | null {
    if (setting === SettingsConstants.disabled)
      return null;

    let level = this.highlightLevels.find(level => level.setting = setting);

    return new DoubleHighlightPattern(level.pattern, level.padding, highlightColor);
  }
}
