import { RawSettings } from "./RawSettings";

export class TooltipModsSettings {
  public static readonly isEnabled: boolean = RawSettings.tooltips.isTooltipModsEnabled;
  public static readonly opacity:   number  = RawSettings.tooltips.tooltipOpacity;
  public static readonly size:      number  = RawSettings.tooltips.tooltipSize;
}
