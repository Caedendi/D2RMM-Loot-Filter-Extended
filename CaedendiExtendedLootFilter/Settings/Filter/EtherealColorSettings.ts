import { D2rColor } from "../../Models/Colors/D2rColor";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class EtherealColorSettings extends FilterSettingsBase {
  public static readonly isEnabled: boolean  = RawSettings.filter.statsAndModifiers.ethColor.isEnabled;
  public static readonly color:     D2rColor = RawSettings.filter.statsAndModifiers.ethColor.color;
}
