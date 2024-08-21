import { RawSettings } from "./RawSettings";
import { FilterSettingsBase } from "./Filter/FilterSettingsBase";

export class TooltipModsSettings extends FilterSettingsBase {
  public static readonly isEnabled: boolean = RawSettings.tooltips.isTooltipModsEnabled;
  public static readonly opacity:   number  = RawSettings.tooltips.tooltipOpacity;
  public static readonly size:      number  = RawSettings.tooltips.tooltipSize;
}
