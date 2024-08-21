import { D2Color } from "../../Models/Colors/D2Color";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EBigTooltipSetting } from "../Enums/EBigTooltipSetting";
import { EDoubleHighlightSetting } from "../Enums/EDoubleHighlightSetting";
import { RawSettings } from "../RawSettings";

export class FilterSettings {
  public static readonly isEnabled:                 boolean = RawSettings.filter.isEnabled;
  public static readonly isCustomFilterListEnabled: boolean = RawSettings.filter.isCustomFilterListEnabled;

  public static readonly highlightCharacter:     string = RawSettings.filter.settings.highlightCharacter;
  public static readonly defaultHighlightColor: D2Color = RawSettings.filter.settings.defaultHighlightColor;
  public static readonly hidden:                 string = RawSettings.filter.settings.hidden;
}
