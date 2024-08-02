import { RuneTier } from "../../Models/Items/RuneTier";
import { Settings } from "../../Settings/Settings";
import { RuneConstants } from "./RuneConstants";

export abstract class RuneTierConstants {
  public static tiers = [
    new RuneTier(1, RuneConstants.tiers.low,    Settings.filter.runes.isLowRunesVisible,    RuneConstants.highlightLow,    Settings.bigTooltips.runes.lowRunesSetting,    Settings.lightPillars.runes.isLowRunesEnabled,    Settings.dropSounds.runes.low),
    new RuneTier(2, RuneConstants.tiers.lowMid, Settings.filter.runes.isLowMidRunesVisible, RuneConstants.highlightLowMid, Settings.bigTooltips.runes.lowMidRunesSetting, Settings.lightPillars.runes.isLowMidRunesEnabled, Settings.dropSounds.runes.lowMid),
    new RuneTier(3, RuneConstants.tiers.mid,    Settings.filter.runes.isMidRunesVisible,    RuneConstants.highlightMid,    Settings.bigTooltips.runes.midRunesSetting,    Settings.lightPillars.runes.isMidRunesEnabled,    Settings.dropSounds.runes.mid),
    new RuneTier(4, RuneConstants.tiers.high,   Settings.filter.runes.isHighRunesVisible,   RuneConstants.highlightHigh,   Settings.bigTooltips.runes.highRunesSetting,   Settings.lightPillars.runes.isHighRunesEnabled,   Settings.dropSounds.runes.high),
  ];
}
