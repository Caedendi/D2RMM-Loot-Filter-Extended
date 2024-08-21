import { RawSettings } from "./RawSettings";
import { SettingsBase } from "./SettingsBase";

export class TooltipsModsSettings extends SettingsBase {
  public static readonly isEnabled: boolean = RawSettings.tooltips.isTooltipModsEnabled;
  public static readonly opacity:   number  = RawSettings.tooltips.tooltipOpacity;
  public static readonly size:      number  = RawSettings.tooltips.tooltipSize;
}
