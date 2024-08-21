import { D2Color } from "../../Models/Colors/D2Color";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class ShortSupInfPrefixesSettings extends FilterSettingsBase {
  public static readonly isEnabled:          boolean = RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.isEnabled;
  public static readonly style:              string  = RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.style;
  public static readonly inferiorItemsColor: D2Color = RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.inferiorItemsColor;
}
