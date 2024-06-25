import { BaseColorConstants } from "./BaseColorConstants";
import { ColorConstants } from "./ColorConstants";
import { HighlightConstants } from "./HighlightConstants";
import { SettingsConstants } from "./SettingsConstants";

export class RuneConstants {
  // I consider the rune tiers to be:
  // - low: 1-15 (El-Hel)
  // - low-mid: 16-20 (Io-Lem)
  // - mid: 21-15 (Pul-Gul)
  // - high: 26-33 (Vex-Zod)
  // I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.
  static tierLow = [
    { number: 1, name: "El" },
    { number: 2, name: "Eld" },
    { number: 3, name: "Tir" },
    { number: 4, name: "Nef" },
    { number: 5, name: "Eth" },
    { number: 6, name: "Ith" },
    { number: 7, name: "Tal" },
    { number: 9, name: "Ort" },
    { number: 10, name: "Thul" },
    { number: 11, name: "Amn" },
    { number: 12, name: "Sol" },
    { number: 13, name: "Shael" },
    { number: 14, name: "Dol" },
  ];
  static tierLowMid = [
    { number: 8, name: "Ral" },
    { number: 15, name: "Hel" },
    { number: 16, name: "Io" },
    { number: 17, name: "Lum" },
    { number: 18, name: "Ko" },
    { number: 19, name: "Fal" },
  ];
  static tierMid = [
    { number: 20, name: "Lem" },
    { number: 21, name: "Pul" },
    { number: 22, name: "Um" },
    { number: 23, name: "Mal" },
    { number: 24, name: "Ist" },
    { number: 25, name: "Gul" },
  ];
  static tierHigh = [
    { number: 26, name: "Vex" },
    { number: 27, name: "Ohm" },
    { number: 28, name: "Lo" },
    { number: 29, name: "Sur" },
    { number: 30, name: "Ber" },
    { number: 31, name: "Jah" },
    { number: 32, name: "Cham" },
    { number: 33, name: "Zod" },
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
    { level: 1, runes: this.tierLow, padding: this.paddingLow, pattern: this.patternLow, isVisible: config.ShouldShowRunesLow, bigTooltipSetting: config.BigTooltipRunesLow, hasLightPillar: config.ShouldAddLightPillarRunesLow, dropSound: config.DropSoundRunesLow },
    { level: 2, runes: this.tierLowMid, padding: this.paddingLowMid, pattern: this.patternLowMid, isVisible: config.ShouldShowRunesLowMid, bigTooltipSetting: config.BigTooltipRunesLowMid, hasLightPillar: config.ShouldAddLightPillarRunesLowMid, dropSound: config.DropSoundRunesLowMid },
    { level: 3, runes: this.tierMid, padding: this.paddingMid, pattern: this.patternMid, isVisible: config.ShouldShowRunesMid, bigTooltipSetting: config.BigTooltipRunesMid, hasLightPillar: config.ShouldAddLightPillarRunesMid, dropSound: config.DropSoundRunesMid },
    { level: 4, runes: this.tierHigh, padding: this.paddingHigh, pattern: this.patternHigh, isVisible: config.ShouldShowRunesHigh, bigTooltipSetting: config.BigTooltipRunesHigh, hasLightPillar: config.ShouldAddLightPillarRunesHigh, dropSound: config.DropSoundRunesHigh },
  ];

  static tiersHighlighted = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
  static tiersHighlightedNumbers = [3, 4]; // rune tiers where the added numbers (33) are in the highlight color instead of default
  static tiersHighlightedNames = [4]; // rune tiers where the rune name is in the highlight color instead of default
  static tiersAlternateColor = [3, 4]; // rune tiers that use the alternate color if enabled

  static isAlternateColor = config.RunesHighlightColorAlt !== SettingsConstants.none;
}
