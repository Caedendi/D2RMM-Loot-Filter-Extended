import { RuneTier } from "../../Models/Items/RuneTier";
import { RuneSettings } from "../../Settings/RuneSettings";
import { RuneConstants } from "./RuneConstants";

/** I consider the rune tiers to be:
 * - low:      1-15 (El-Hel)
 * - low-mid: 16-20 (Io-Lem)
 * - mid:     21-15 (Pul-Gul)
 * - high:    26-33 (Vex-Zod)
 * 
 * I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.
 */
export abstract class RuneTierConstants {
  public static tiers = [
    new RuneTier(1, RuneConstants.lowRunes,    RuneSettings.isLowVisible,    RuneSettings.lowNameColor,    RuneSettings.lowNumberColor,    RuneSettings.lowHighlight,    RuneSettings.lowBigTooltipSetting,    RuneSettings.isLowLightPillarsEnabled,    RuneSettings.lowDropSound),
    new RuneTier(2, RuneConstants.lowMidRunes, RuneSettings.isLowMidVisible, RuneSettings.lowMidNameColor, RuneSettings.lowMidNumberColor, RuneSettings.lowMidHighlight, RuneSettings.lowMidBigTooltipSetting, RuneSettings.isLowMidLightPillarsEnabled, RuneSettings.lowMidDropSound),
    new RuneTier(3, RuneConstants.midRunes,    RuneSettings.isMidVisible,    RuneSettings.midNameColor,    RuneSettings.midNumberColor,    RuneSettings.midHighlight,    RuneSettings.midBigTooltipSetting,    RuneSettings.isMidLightPillarsEnabled,    RuneSettings.midDropSound),
    new RuneTier(4, RuneConstants.highRunes,   RuneSettings.isHighVisible,   RuneSettings.highNameColor,   RuneSettings.highNumberColor,   RuneSettings.highHighlight,   RuneSettings.highBigTooltipSetting,   RuneSettings.isHighLightPillarsEnabled,   RuneSettings.highDropSound),
  ];
}
