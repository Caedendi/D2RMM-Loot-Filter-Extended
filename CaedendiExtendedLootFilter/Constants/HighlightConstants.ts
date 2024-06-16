import { BaseColorConstants } from "./BaseColorConstants.ts";
import { CharConstants } from "./CharConstants.ts";
import { ColorConstants } from "./ColorConstants.ts";

export class HighlightConstants {
  static character = config.HighlightCharacter !== this.custom ? config.HighlightCharacter                              : '*'; // replace * with desired custom character [CSTM-HLCTR]
  static color     = config.HighlightColor     !== this.custom ? `${BaseColorConstants.prefix}${config.HighlightColor}` : '1'; // replace 1 with desired custom color character (see above) [CSTM-HLCLR]

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
  static uniquePrefix = `${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}${this.uniquePadding}`;
  static uniqueSuffix = `${this.uniquePadding}${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}`;

  static questPrefix = this.uniquePrefix;
  static questSuffix = this.uniqueSuffix;

  static bttPadding = this.padding5;
  static bttPickUpMsg = `${ColorConstants.purple}Pick Up`;
}
