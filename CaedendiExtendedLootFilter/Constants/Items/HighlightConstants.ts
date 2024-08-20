import { D2Color } from "../../Models/Colors/D2Color";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSize";
import { Settings } from "../../Settings/Settings";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { SettingsConstants } from "../SettingsConstants";

export abstract class HighlightConstants {
  public static character: string  = Settings.filter.settings.highlightCharacter !== SettingsConstants.custom ? Settings.filter.settings.highlightCharacter : '*'; // replace * with desired custom character [CSTM-HLCTR]
  public static defaultHighlightColor: D2Color = Settings.filter.settings.defaultHighlightColor;

  public static paddingNone = CharConstants.empty;
  public static padding1    = CharConstants.space;
  public static padding2    = CharConstants.space.repeat(2);
  public static padding3    = CharConstants.space.repeat(3);
  public static padding5    = CharConstants.space.repeat(5);

  public static patternNone = CharConstants.empty;
  public static pattern2    = this.character.repeat(2);
  public static pattern3    = this.character.repeat(3);
  public static pattern4    = this.character.repeat(4);
  public static pattern5    = this.character.repeat(5);
  public static pattern10   = this.character.repeat(10);
  public static pattern2x10 = `${this.pattern10}${this.padding2}${this.pattern10}`;
  public static pattern3x10 = `${this.pattern10}${this.padding2}${this.pattern10}${this.padding2}${this.pattern10}`;

  // TODO: remove?
  public static uniqueColorName = ColorConstants.gold;
  public static uniqueColorHighlight = this.defaultHighlightColor;
  public static uniquePattern = this.pattern10;
  public static uniquePadding = this.padding5;
  public static uniquePrefix = `${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}${this.uniquePadding}`;
  public static uniqueSuffix = `${this.uniquePadding}${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}`;

  public static questPrefix = this.uniquePrefix;
  public static questSuffix = this.uniqueSuffix;

  public static bttPadding = this.padding5;
  public static bttPickUpMsg = `${ColorConstants.purple}Pick Up`;

  public static doubleHighlightSizes = [
    { setting: EDoubleHighlightSetting.SMALL,             pattern: this.pattern2,    padding: this.padding2 },
    { setting: EDoubleHighlightSetting.MEDIUM,            pattern: this.pattern5,    padding: this.padding3 },
    { setting: EDoubleHighlightSetting.LARGE,             pattern: this.pattern10,   padding: this.padding5 },
    { setting: EDoubleHighlightSetting.EXTRA_LARGE,       pattern: this.pattern2x10, padding: this.padding5 },
    { setting: EDoubleHighlightSetting.EXTRA_EXTRA_LARGE, pattern: this.pattern3x10, padding: this.padding5 }, // TODO: switch to XL if BTT is enabled
  ];
}
