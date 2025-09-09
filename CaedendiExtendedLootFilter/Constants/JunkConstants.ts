import { D2Color } from "../Models/Colors/D2Color";
import { SingleHighlight } from "../Models/Highlights/SingleHighlight";
import { EPotionType } from "../Models/Items/EPotionType";
import { CharConstants } from "./CharConstants";
import { ColorConstants } from "./Colors/ColorConstants";
import { HighlightConstants } from "./Items/HighlightConstants";

export abstract class JunkConstants {
  public static readonly nameColor: D2Color = ColorConstants.white;

  public static getPotionHighlight(type: EPotionType): SingleHighlight {
    const highlights: { [key in EPotionType]: SingleHighlight } = {
      [EPotionType.HEALING]:      new SingleHighlight(CharConstants.plus, ColorConstants.red,       HighlightConstants.padding.none),
      [EPotionType.MANA]:         new SingleHighlight(CharConstants.plus, ColorConstants.blue,      HighlightConstants.padding.none),
      [EPotionType.REJUVENATION]: new SingleHighlight(CharConstants.plus, ColorConstants.red,       HighlightConstants.padding.none),
      [EPotionType.BUFF]:         new SingleHighlight(CharConstants.plus, ColorConstants.red,       HighlightConstants.padding.none),
      [EPotionType.OIL]:          new SingleHighlight(CharConstants.o,    ColorConstants.orange,    HighlightConstants.padding.p1),
      [EPotionType.GAS]:          new SingleHighlight(CharConstants.o,    ColorConstants.darkGreen, HighlightConstants.padding.p1),
    };

    return highlights[type];
  }
}
