import { D2rColor } from "../../Models/Colors/D2rColor";
import { RawSettings } from "../RawSettings";

export abstract class EtherealColorSettings {
  public static readonly isEnabled: boolean  = RawSettings.filter.statsAndModifiers.ethColor.isEnabled;
  public static readonly color:     D2rColor = RawSettings.filter.statsAndModifiers.ethColor.color;
}
