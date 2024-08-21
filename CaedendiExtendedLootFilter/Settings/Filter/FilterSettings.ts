import { D2Color } from "../../Models/Colors/D2Color";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export class FilterSettings extends FilterSettingsBase {
  public static readonly isEnabled:                 boolean = RawSettings.filter.isEnabled;
  public static readonly isCustomFilterListEnabled: boolean = RawSettings.filter.isCustomFilterListEnabled;

  public static readonly highlightCharacter:     string = RawSettings.filter.settings.highlightCharacter;
  public static readonly defaultHighlightColor: D2Color = RawSettings.filter.settings.defaultHighlightColor;
  public static readonly hidden:                 string = RawSettings.filter.settings.hidden;
}
