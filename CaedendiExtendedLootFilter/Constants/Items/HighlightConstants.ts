import { D2Color } from "../../Models/D2Color";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { SettingsConstants } from "../SettingsConstants";

export class HighlightConstants {
  static character: string  = config.HighlightCharacter !== SettingsConstants.custom ? config.HighlightCharacter.toString() : '*';                                           // replace * with desired custom character [CSTM-HLCTR]
  static color:     D2Color = config.HighlightColor     !== SettingsConstants.custom ? ColorConstants.getColorByCode(config.HighlightColor.toString()) : ColorConstants.red; // replace ColorConstants.red with desired custom color [CSTM-HLCLR]

  static paddingNone = CharConstants.empty;
  static padding1    = CharConstants.space;
  static padding2    = CharConstants.space.repeat(2);
  static padding3    = CharConstants.space.repeat(3);
  static padding5    = CharConstants.space.repeat(5);
  static padding10   = CharConstants.space.repeat(10);

  static patternNone = CharConstants.empty;
  static pattern2    = this.character.repeat(2);
  static pattern3    = this.character.repeat(3);
  static pattern4    = this.character.repeat(4);
  static pattern5    = this.character.repeat(5);
  static pattern10   = this.character.repeat(10);
  static pattern2x10 = `${this.pattern10}${this.padding2}${this.pattern10}`;
  static pattern3x10 = `${this.pattern10}${this.padding2}${this.pattern10}${this.padding2}${this.pattern10}`;

  static uniqueColorName = ColorConstants.gold;
  static uniqueColorHighlight = this.color;
  static uniquePattern = this.pattern10;
  static uniquePadding = this.padding5;
  static uniquePrefix = `${this.uniqueColorHighlight.getCode()}${this.uniquePattern}${this.uniqueColorName.getCode()}${this.uniquePadding}`;
  static uniqueSuffix = `${this.uniquePadding}${this.uniqueColorHighlight.getCode()}${this.uniquePattern}${this.uniqueColorName.getCode()}`;

  static questPrefix = this.uniquePrefix;
  static questSuffix = this.uniqueSuffix;

  static bttPadding = this.padding5;
  static bttPickUpMsg = `${ColorConstants.purple.getCode()}Pick Up`;
}
