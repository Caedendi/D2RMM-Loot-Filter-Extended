import { RuneTier } from "../../Models/RuneTier";
import { Settings } from "../../Settings/Settings";
import { RuneConstants } from "./RuneConstants";

export abstract class RuneTierConstants {
  public static tiers = [
    new RuneTier(1, RuneConstants.tierLow,    RuneConstants.paddingLow,    RuneConstants.patternLow,    Settings.filter.runes.isLowRunesVisible,    Settings.bigTooltips.runes.lowRunesSetting,    Settings.lightPillars.runes.isLowRunesEnabled,    Settings.dropSounds.runes.low),
    new RuneTier(2, RuneConstants.tierLowMid, RuneConstants.paddingLowMid, RuneConstants.patternLowMid, Settings.filter.runes.isLowMidRunesVisible, Settings.bigTooltips.runes.lowMidRunesSetting, Settings.lightPillars.runes.isLowMidRunesEnabled, Settings.dropSounds.runes.lowMid),
    new RuneTier(3, RuneConstants.tierMid,    RuneConstants.paddingMid,    RuneConstants.patternMid,    Settings.filter.runes.isMidRunesVisible,    Settings.bigTooltips.runes.midRunesSetting,    Settings.lightPillars.runes.isMidRunesEnabled,    Settings.dropSounds.runes.mid),
    new RuneTier(4, RuneConstants.tierHigh,   RuneConstants.paddingHigh,   RuneConstants.patternHigh,   Settings.filter.runes.isHighRunesVisible,   Settings.bigTooltips.runes.highRunesSetting,   Settings.lightPillars.runes.isHighRunesEnabled,   Settings.dropSounds.runes.high),
  ];
}
