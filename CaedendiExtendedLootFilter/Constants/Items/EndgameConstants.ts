import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSize";
import { ColorConstants } from "../Colors/ColorConstants";

export abstract class EndgameConstants {
  public static clrName = ColorConstants.orange;

  public static essences: string[] = [ "tes", "ceh", "bet", "fed" ];
  public static keys:     string[] = [ "pk1", "pk2", "pk3" ];
  public static organs:   string[] = [ "dhn", "bey", "mbr" ];
  public static token:    string = "toa";
  public static standard: string = "std";

  // TODO: colors
  public static patternEss = new DoubleHighlight(EDoubleHighlightSetting.SMALL);
  public static patternPkx = new DoubleHighlight(EDoubleHighlightSetting.MEDIUM);
  public static patternOrg = new DoubleHighlight(EDoubleHighlightSetting.EXTRA_LARGE);
  public static patternStd = this.patternEss;
  public static patternToa = this.patternPkx;
}
