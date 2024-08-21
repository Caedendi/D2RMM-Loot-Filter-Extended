import { Rune } from "../../Models/Items/Rune";
import { RuneTier } from "../../Models/Items/RuneTier";
import { DropSoundsSettings } from "../../Settings/DropSoundsSettings";
import { LightPillarsSettings } from "../../Settings/LightPillarsSettings";
import { RunesSettings } from "../../Settings/Filter/RunesSettings";

export abstract class RuneConstants {
  /**
   * Runes El (1) up to Dol (14), except Ral (8).
   */
  public static lowRunes: Rune[] = [
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

  /**
   * Runes Ral (8) and Hel (15) up to Fal (19).
   */
  public static lowMidRunes: Rune[] = [
    new Rune(8, "Ral"),
    new Rune(15, "Hel"),
    new Rune(16, "Io"),
    new Rune(17, "Lum"),
    new Rune(18, "Ko"),
    new Rune(19, "Fal"),
  ];

  /**
   * Runes Lem (20) up to Gul (25).
   */
  public static midRunes: Rune[] = [
    new Rune(20, "Lem"),
    new Rune(21, "Pul"),
    new Rune(22, "Um"),
    new Rune(23, "Mal"),
    new Rune(24, "Ist"),
    new Rune(25, "Gul"),
  ];

  /**
   * Runes Vex (26) up to Zod (33).
   */
  public static highRunes: Rune[] = [
    new Rune(26, "Vex"),
    new Rune(27, "Ohm"),
    new Rune(28, "Lo"),
    new Rune(29, "Sur"),
    new Rune(30, "Ber"),
    new Rune(31, "Jah"),
    new Rune(32, "Cham"),
    new Rune(33, "Zod"),
  ];
  
  /** I consider the rune tiers to be:
   * - low:      1-15 (El-Hel)
   * - low-mid: 16-20 (Io-Lem)
   * - mid:     21-15 (Pul-Gul)
   * - high:    26-33 (Vex-Zod)
   * 
   * I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.
   */
  public static tiers = [
    new RuneTier(1, this.lowRunes,    RunesSettings.low.isVisible,    RunesSettings.low.nameColor,    RunesSettings.low.numberColor,    RunesSettings.low.highlight,    RunesSettings.low.bigTooltip,    LightPillarsSettings.runes.isLowEnabled,    DropSoundsSettings.runes.low),
    new RuneTier(2, this.lowMidRunes, RunesSettings.lowMid.isVisible, RunesSettings.lowMid.nameColor, RunesSettings.lowMid.numberColor, RunesSettings.lowMid.highlight, RunesSettings.lowMid.bigTooltip, LightPillarsSettings.runes.isLowMidEnabled, DropSoundsSettings.runes.lowMid),
    new RuneTier(3, this.midRunes,    RunesSettings.mid.isVisible,    RunesSettings.mid.nameColor,    RunesSettings.mid.numberColor,    RunesSettings.mid.highlight,    RunesSettings.mid.bigTooltip,    LightPillarsSettings.runes.isMidEnabled,    DropSoundsSettings.runes.mid),
    new RuneTier(4, this.highRunes,   RunesSettings.high.isVisible,   RunesSettings.high.nameColor,   RunesSettings.high.numberColor,   RunesSettings.high.highlight,   RunesSettings.high.bigTooltip,   LightPillarsSettings.runes.isHighEnabled,   DropSoundsSettings.runes.high),
  ];

  public static translatedAffixes: string[] = [
    // prefixes
    "Rune ",
    "Runa ",
    "Руна ",
    "符文：",
    // suffixes
    " Rune",
    "-Rune",
    " 룬",
    "・ルーン",
    "符文",
  ];
}
