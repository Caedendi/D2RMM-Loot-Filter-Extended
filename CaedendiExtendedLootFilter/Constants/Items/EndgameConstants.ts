import { DoubleHighlightItemEntry } from "../../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../../Models/ItemEntry";
import { iLvlFix } from "../../Settings/StatsAndModifiersSettings";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export abstract class EndgameConstants {
  public static clrName = ColorConstants.orange;
  public static clrHighlight = HighlightConstants.color;

  public static prefixEss = `${this.clrHighlight}${HighlightConstants.pattern5}${this.clrName}${HighlightConstants.padding3}`;
  public static prefixPkx = `${this.clrHighlight}${HighlightConstants.pattern10}${this.clrName}${HighlightConstants.padding5}`;
  public static prefixOrg = `${this.clrHighlight}${HighlightConstants.pattern3x10}${this.clrName}${HighlightConstants.padding5}`;
  public static prefixStd = `${this.clrHighlight}${HighlightConstants.pattern5}${HighlightConstants.uniqueColorName}${HighlightConstants.padding3}`;
  public static prefixToa = this.prefixPkx;

  public static suffixEss = `${HighlightConstants.padding3}${this.clrHighlight}${HighlightConstants.pattern5}${this.clrName}`;
  public static suffixPkx = `${HighlightConstants.padding5}${this.clrHighlight}${HighlightConstants.pattern10}${this.clrName}`;
  public static suffixOrg = `${HighlightConstants.padding5}${this.clrHighlight}${HighlightConstants.pattern3x10}${this.clrName}`;
  public static suffixStd = `${HighlightConstants.padding3}${this.clrHighlight}${HighlightConstants.pattern5}${HighlightConstants.uniqueColorName}`;
  public static suffixToa = this.suffixPkx;

  public static essences: ItemEntry[] = [
    new ItemEntry("tes", "Twisted Essence of Suffering"),
    new ItemEntry("ceh", "Charged Essense of Hatred"),
    new ItemEntry("bet", "Burning Essence of Terror"),
    new ItemEntry("fed", "Festering Essence of Destruction"),
  ];

  public static keys: ItemEntry[] = [
    new ItemEntry("pk1", "Key of Terror"),
    new ItemEntry("pk2", "Key of Hate"),
    new ItemEntry("pk3", "Key of Destruction"),
  ];

  public static organs: ItemEntry[] = [
    new ItemEntry("dhn", "Diablo's Horn"),
    new ItemEntry("bey", "Baal's Eye"),
    new ItemEntry("mbr", "Mephisto's Brain"),
  ];

  public static token:    DoubleHighlightItemEntry = new DoubleHighlightItemEntry("toa", "Token of Absolution", iLvlFix.None, this.prefixToa, this.suffixToa);
  public static standard: DoubleHighlightItemEntry = new DoubleHighlightItemEntry("std",  "Standard of Heroes", iLvlFix.None, this.prefixStd, this.suffixStd);
}
