import { Rune } from "../../Models/Items/Rune";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

/** I consider the rune tiers to be:
 * - low:      1-15 (El-Hel)
 * - low-mid: 16-20 (Io-Lem)
 * - mid:     21-15 (Pul-Gul)
 * - high:    26-33 (Vex-Zod)
 * 
 * I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.
 */
export abstract class RuneConstants {
  public static tiers = {
    low: [
      new Rune(1, "El"), // TODO: remove names when translations are fixed
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
    ] as Rune[],
    lowMid: [
      new Rune(8, "Ral"),
      new Rune(15, "Hel"),
      new Rune(16, "Io"),
      new Rune(17, "Lum"),
      new Rune(18, "Ko"),
      new Rune(19, "Fal"),
    ] as Rune[],
    mid: [
      new Rune(20, "Lem"),
      new Rune(21, "Pul"),
      new Rune(22, "Um"),
      new Rune(23, "Mal"),
      new Rune(24, "Ist"),
      new Rune(25, "Gul"),
    ] as Rune[],
    high: [
      new Rune(26, "Vex"),
      new Rune(27, "Ohm"),
      new Rune(28, "Lo"),
      new Rune(29, "Sur"),
      new Rune(30, "Ber"),
      new Rune(31, "Jah"),
      new Rune(32, "Cham"),
      new Rune(33, "Zod"),
    ] as Rune[],
  };

  public static defaultNameColor = ColorConstants.orange;
  public static highlightColor   = HighlightConstants.defaultHighlightColor;

  public static tiersWithHighlights         = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
  public static tiersWithHighlightedNumbers = [3, 4];    // rune tiers where the added numbers (33) are in the highlight color instead of default
  public static tiersWithHighlightedNames   = [4];       // rune tiers where the rune name is in the highlight color instead of default
  public static tiersWithAlternateColor     = [3, 4];    // rune tiers that use the alternate color if enabled

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
    "符文",
  ];
}
