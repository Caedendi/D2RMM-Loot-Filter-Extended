import { DoubleHighlightPattern } from "../../Models/ItemCollectionEntries/DoubleHighlightPattern";
import { IHighlightPattern } from "../../Models/ItemCollectionEntries/IHighlightPattern";
import { Rune } from "../../Models/Items/Rune";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { Settings } from "../../Settings/Settings";
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
  public static tierLow: Rune[] = [
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
  public static tierLowMid = [
    new Rune(8, "Ral"),
    new Rune(15, "Hel"),
    new Rune(16, "Io"),
    new Rune(17, "Lum"),
    new Rune(18, "Ko"),
    new Rune(19, "Fal"),
  ];
  public static tierMid = [
    new Rune(20, "Lem"),
    new Rune(21, "Pul"),
    new Rune(22, "Um"),
    new Rune(23, "Mal"),
    new Rune(24, "Ist"),
    new Rune(25, "Gul"),
  ];
  public static tierHigh = [
    new Rune(26, "Vex"),
    new Rune(27, "Ohm"),
    new Rune(28, "Lo"),
    new Rune(29, "Sur"),
    new Rune(30, "Ber"),
    new Rune(31, "Jah"),
    new Rune(32, "Cham"),
    new Rune(33, "Zod"),
  ];

  public static clrName        = ColorConstants.orange;
  public static clrHighlight   = HighlightConstants.defaultHighlightColor;

  protected static patternHigh = Settings.bigTooltips.runes.highRunesSetting == BigTooltipSetting.Disabled
    ? HighlightConstants.pattern3x10  // ********** ********** **********, or
    : HighlightConstants.pattern2x10; // ********** ********** (with big tooltips)

  public static highlightLow:    IHighlightPattern | null = null;
  public static highlightLowMid: IHighlightPattern | null = new DoubleHighlightPattern(HighlightConstants.pattern5,  HighlightConstants.padding3);
  public static highlightMid:    IHighlightPattern | null = new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5);
  public static highlightHigh:   IHighlightPattern | null = new DoubleHighlightPattern(this.patternHigh,  HighlightConstants.padding5);

  public static tiersWithHighlights         = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
  public static tiersWithHighlightedNumbers = [3, 4];    // rune tiers where the added numbers (33) are in the highlight color instead of default
  public static tiersWithHighlightedNames   = [4];       // rune tiers where the rune name is in the highlight color instead of default
  public static tiersWithAlternateColor     = [3, 4];    // rune tiers that use the alternate color if enabled
}
