import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class JunkSettings extends FilterSettingsBase {
  public static readonly goldTooltipColors: string = RawSettings.filter.junk.goldTooltipColors;
  public static readonly goldSuffix:        string = RawSettings.filter.junk.goldSuffix;
  public static readonly healingPotions:    string = RawSettings.filter.junk.healingPotions;
  public static readonly buffPotions:       string = RawSettings.filter.junk.buffPotions;
  public static readonly throwingPotions:   string = RawSettings.filter.junk.throwingPotions;
  public static readonly scrollsTomes:      string = RawSettings.filter.junk.scrollsTomes;
  public static readonly arrowsBolts:       string = RawSettings.filter.junk.arrowsBolts;
  public static readonly keys:              string = RawSettings.filter.junk.keys;
}
