import { DoubleHighlightPattern } from "../../Models/Highlights/DoubleHighlightPattern";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export abstract class EndgameConstants {
  public static clrName = ColorConstants.orange;

  public static essences: string[] = [ "tes", "ceh", "bet", "fed" ];
  public static keys:     string[] = [ "pk1", "pk2", "pk3" ];
  public static organs:   string[] = [ "dhn", "bey", "mbr" ];
  public static token:    string = "toa";
  public static standard: string = "std";

  public static patternEss = new DoubleHighlightPattern(HighlightConstants.pattern5,    HighlightConstants.padding3);
  public static patternPkx = new DoubleHighlightPattern(HighlightConstants.pattern10,   HighlightConstants.padding5);
  public static patternOrg = new DoubleHighlightPattern(HighlightConstants.pattern3x10, HighlightConstants.padding5);
  public static patternStd = this.patternEss;
  public static patternToa = this.patternPkx;
}
