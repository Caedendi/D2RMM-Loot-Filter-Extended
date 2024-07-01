import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export class GemConstants {
  static amethyst = "Amethyst";
  static diamond = "Diamond";
  static emerald = "Emerald";
  static ruby = "Ruby";
  static sapphire = "Sapphire";
  static topaz = "Topaz";
  static skull = "Skull";

  static chipped = "Chipped";
  static flawed = "Flawed";
  static flawless = "Flawless";
  static perfect = "Perfect";

  static clrAmethyst = ColorConstants.purple;
  static clrDiamond = ColorConstants.white;
  static clrEmerald = ColorConstants.green;
  static clrRuby = ColorConstants.red;
  static clrSapphire = ColorConstants.blue;
  static clrTopaz = ColorConstants.yellow;
  static clrSkull = ColorConstants.gray;

  static clrName = ColorConstants.white;
  static highlight = CharConstants.o;
  static padding = HighlightConstants.padding1;

  static indentPickUpMsg = (config.Gems === "all" || config.Gems === "flawless" || config.Gems === "perfect") ? CharConstants.space.repeat(2) : CharConstants.empty; // indent for the pick up message if gem highlighting is enabled.
}
