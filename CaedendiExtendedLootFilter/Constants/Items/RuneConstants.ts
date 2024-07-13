import { Rune } from "../../Models/Rune";
import { RuneTier } from "../../Models/RuneTier";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";
import { SettingsConstants } from "../SettingsConstants";
import { BigTooltipSetting } from "../../Settings/BigTooltipsSettings";

/** I consider the rune tiers to be:
 * - low:      1-15 (El-Hel)
 * - low-mid: 16-20 (Io-Lem)
 * - mid:     21-15 (Pul-Gul)
 * - high:    26-33 (Vex-Zod)
 * 
 * I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.
 */
export abstract class RuneConstants {
  private static tierLow: Rune[] = [
    new Rune(1, "El"),
    new Rune(2, "Eld"),
    new Rune(3, "Tir"),
    new Rune(4, "Nef"),
    new Rune(5, "Eth"),
    new Rune(6, "Ith"),
    new Rune(7, "Tal"),
    new Rune(9, "Ort"),
    new Rune(10, "Thul"),
    new Rune(11, "Amn"),
    new Rune(12, "Sol"),
    new Rune(13, "Shael"),
    new Rune(14, "Dol"),
  ];
  private static tierLowMid = [
    new Rune(8, "Ral"),
    new Rune(15, "Hel"),
    new Rune(16, "Io"),
    new Rune(17, "Lum"),
    new Rune(18, "Ko"),
    new Rune(19, "Fal"),
  ];
  private static tierMid = [
    new Rune(20, "Lem"),
    new Rune(21, "Pul"),
    new Rune(22, "Um"),
    new Rune(23, "Mal"),
    new Rune(24, "Ist"),
    new Rune(25, "Gul"),
  ];
  private static tierHigh = [
    new Rune(26, "Vex"),
    new Rune(27, "Ohm"),
    new Rune(28, "Lo"),
    new Rune(29, "Sur"),
    new Rune(30, "Ber"),
    new Rune(31, "Jah"),
    new Rune(32, "Cham"),
    new Rune(33, "Zod"),
  ];

  public static clrName = ColorConstants.orange;
  public static clrHighlight = HighlightConstants.color;
  public static colorAlternate = config.RunesHighlightColorAlt.toString() !== SettingsConstants.custom 
  ? ColorConstants.getColorByCode(config.RunesHighlightColorAlt as string) 
  : ColorConstants.purple; // replace ColorConstants.purple with desired custom color [CSTM-HLCRA]

  // set the highlight patterns for each rune tier
  private static patternLow = HighlightConstants.patternNone; // 
  private static patternLowMid = HighlightConstants.pattern5; // *****
  private static patternMid = HighlightConstants.pattern10;   // **********
  private static patternHigh = config.BigTooltipRunesHigh === SettingsConstants.disabled 
    ? HighlightConstants.pattern3x10  // ********** ********** **********, or
    : HighlightConstants.pattern2x10; // ********** ********** (with big tooltips)

  // set the amount of spaces between the rune name and the highlight patterns for each rune tier
  private static paddingLow    = HighlightConstants.paddingNone;
  private static paddingLowMid = HighlightConstants.padding3;
  private static paddingMid    = HighlightConstants.padding5;
  private static paddingHigh   = HighlightConstants.padding5;

  public static tiers = [
    new RuneTier(1, this.tierLow,    this.paddingLow,    this.patternLow,    config.ShouldShowRunesLow    as boolean, config.BigTooltipRunesLow    as number as BigTooltipSetting, config.ShouldAddLightPillarRunesLow    as boolean, config.DropSoundRunesLow    as string),
    new RuneTier(2, this.tierLowMid, this.paddingLowMid, this.patternLowMid, config.ShouldShowRunesLowMid as boolean, config.BigTooltipRunesLowMid as number as BigTooltipSetting, config.ShouldAddLightPillarRunesLowMid as boolean, config.DropSoundRunesLowMid as string),
    new RuneTier(3, this.tierMid,    this.paddingMid,    this.patternMid,    config.ShouldShowRunesMid    as boolean, config.BigTooltipRunesMid    as number as BigTooltipSetting, config.ShouldAddLightPillarRunesMid    as boolean, config.DropSoundRunesMid    as string),
    new RuneTier(4, this.tierHigh,   this.paddingHigh,   this.patternHigh,   config.ShouldShowRunesHigh   as boolean, config.BigTooltipRunesHigh   as number as BigTooltipSetting, config.ShouldAddLightPillarRunesHigh   as boolean, config.DropSoundRunesHigh   as string),
  ];

  public static tiersWithHighlights         = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
  public static tiersWithHighlightedNumbers = [3, 4];    // rune tiers where the added numbers (33) are in the highlight color instead of default
  public static tiersWithHighlightedNames   = [4];       // rune tiers where the rune name is in the highlight color instead of default
  public static tiersWithAlternateColor     = [3, 4];    // rune tiers that use the alternate color if enabled
}
