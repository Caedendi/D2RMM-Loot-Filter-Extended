import { Rune } from "../Models/Rune";
import { RuneTier } from "../Models/RuneTier";
import { BaseColorConstants } from "./BaseColorConstants";
import { ColorConstants } from "./ColorConstants";
import { HighlightConstants } from "./HighlightConstants";
import { SettingsConstants } from "./SettingsConstants";

/** I consider the rune tiers to be:
 * - low:      1-15 (El-Hel)
 * - low-mid: 16-20 (Io-Lem)
 * - mid:     21-15 (Pul-Gul)
 * - high:    26-33 (Vex-Zod)
 * 
 * I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.
 */
export class RuneConstants {
  static tierLow: Rune[] = [
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
  static tierLowMid = [
    new Rune(8, "Ral"),
    new Rune(15, "Hel"),
    new Rune(16, "Io"),
    new Rune(17, "Lum"),
    new Rune(18, "Ko"),
    new Rune(19, "Fal"),
  ];
  static tierMid = [
    new Rune(20, "Lem"),
    new Rune(21, "Pul"),
    new Rune(22, "Um"),
    new Rune(23, "Mal"),
    new Rune(24, "Ist"),
    new Rune(25, "Gul"),
  ];
  static tierHigh = [
    new Rune(26, "Vex"),
    new Rune(27, "Ohm"),
    new Rune(28, "Lo"),
    new Rune(29, "Sur"),
    new Rune(30, "Ber"),
    new Rune(31, "Jah"),
    new Rune(32, "Cham"),
    new Rune(33, "Zod"),
  ];

  static clrName = ColorConstants.orange;
  static clrHighlight = HighlightConstants.color;
  static colorAlternate = config.RunesHighlightColorAlt !== SettingsConstants.custom ? `${BaseColorConstants.prefix}${config.RunesHighlightColorAlt}` : ';'; // replace ; with desired custom color character (see above) [CSTM-HLCRA]

  // set the highlight patterns for each rune tier
  static patternLow = HighlightConstants.patternNone; // 
  static patternLowMid = HighlightConstants.pattern5; // *****
  static patternMid = HighlightConstants.pattern10; // **********
  static patternHigh = config.BigTooltipRunesHigh === SettingsConstants.disabled ? HighlightConstants.pattern3x10 : HighlightConstants.pattern2x10; // ********** ********** ********** or ********** ********** with big tooltips

  // set the amount of spaces between the rune name and the highlight patterns for each rune tier
  static paddingLow = HighlightConstants.paddingNone;
  static paddingLowMid = HighlightConstants.padding3;
  static paddingMid = HighlightConstants.padding5;
  static paddingHigh = HighlightConstants.padding5;

  static tiers = [
    new RuneTier(1, this.tierLow,    this.paddingLow,    this.patternLow,    config.ShouldShowRunesLow    as boolean, config.BigTooltipRunesLow    as string, config.ShouldAddLightPillarRunesLow    as boolean, config.DropSoundRunesLow    as string),
    new RuneTier(2, this.tierLowMid, this.paddingLowMid, this.patternLowMid, config.ShouldShowRunesLowMid as boolean, config.BigTooltipRunesLowMid as string, config.ShouldAddLightPillarRunesLowMid as boolean, config.DropSoundRunesLowMid as string),
    new RuneTier(3, this.tierMid,    this.paddingMid,    this.patternMid,    config.ShouldShowRunesMid    as boolean, config.BigTooltipRunesMid    as string, config.ShouldAddLightPillarRunesMid    as boolean, config.DropSoundRunesMid    as string),
    new RuneTier(4, this.tierHigh,   this.paddingHigh,   this.patternHigh,   config.ShouldShowRunesHigh   as boolean, config.BigTooltipRunesHigh   as string, config.ShouldAddLightPillarRunesHigh   as boolean, config.DropSoundRunesHigh   as string),
  ];

  static tiersHighlighted = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
  static tiersHighlightedNumbers = [3, 4]; // rune tiers where the added numbers (33) are in the highlight color instead of default
  static tiersHighlightedNames = [4]; // rune tiers where the rune name is in the highlight color instead of default
  static tiersAlternateColor = [3, 4]; // rune tiers that use the alternate color if enabled

  static isAlternateColor = config.RunesHighlightColorAlt !== SettingsConstants.disabled;
}
