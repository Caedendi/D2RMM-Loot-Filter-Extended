import { CharConstants } from "../Constants/CharConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { Settings } from "./Settings";

enum ItemQuality {
  Normal = 0,
  Exceptional = 1,
  Elite = 2,
}

// TODO
export abstract class StatsAndModifiersSettings {
  // ilvl
  public static iLvlIndentFixSingle: string = CharConstants.space.repeat(4); // for single digit ilvl items
  public static iLvlIndentFixDouble: string = CharConstants.space.repeat(6); // for double digit ilvl items

  // item quality
  protected static customNormalQualityIndicator:      string = "custom n"; // replace "custom n" to your preference. [CSTM-QLTY]
  protected static customExceptionalQualityIndicator: string = "custom x"; // replace "custom x" to your preference. [CSTM-QLTY]
  protected static customEliteQualityIndicator:       string = "custom e"; // replace "custom e" to your preference. [CSTM-QLTY]

  // public static iLvlIndentFixQuality: string = this.iLvlIndentFixDouble; // for double digit ilvl items when item quality is enabled // TODO: check if needed

  // public static getiLvlIndent(fix?: iLvlDigits): string {
  //   if (!Helper.isDefined(fix) || !Settings.statsAndModifiers.itemLevel.shouldFixIndentation || fix === iLvlDigits.None)
  //     return CharConstants.empty;

  //   if (fix == iLvlDigits.Single)
  //     return this.iLvlIndentFixSingle;
  //   if (fix == iLvlDigits.Double)
  //     return this.iLvlIndentFixDouble;

  //   throw new Error("Helper.getiLvlIndent() received undefined iLvlFix value.");
  // }

  public static normalQualityIndicator:      string = this.createQualityIndicator(ItemQuality.Normal);
  public static exceptionalQualityIndicator: string = this.createQualityIndicator(ItemQuality.Normal);
  public static eliteQualityIndicator:       string = this.createQualityIndicator(ItemQuality.Normal);

  public static openChar:  string = this.getQualityIndicatorOpenChar();
  public static closeChar: string = this.getQualityIndicatorCloseChar();

  private static createQualityIndicator(itemQuality: ItemQuality): string {
    if (Settings.statsAndModifiers.itemQuality.style === SettingsConstants.custom)
      return this.getCustomQualityIndicator(itemQuality);

    let indicator = this.getQualityIndicator(itemQuality);
    if (Settings.statsAndModifiers.itemQuality.style === "uppercase")
      return indicator.toUpperCase();

    return indicator;
  }

  private static getCustomQualityIndicator(itemQuality: ItemQuality): string {
    return [
        { quality: ItemQuality.Normal,      indicator: this.customNormalQualityIndicator },
        { quality: ItemQuality.Exceptional, indicator: this.customExceptionalQualityIndicator },
        { quality: ItemQuality.Elite,       indicator: this.customEliteQualityIndicator },
      ].find(q => q.quality == itemQuality)!.indicator;
  }

  private static getQualityIndicator(itemQuality: ItemQuality): string {
    return [
        { quality: ItemQuality.Normal,      indicator: 'n' },
        { quality: ItemQuality.Exceptional, indicator: 'x' },
        { quality: ItemQuality.Elite,       indicator: 'e' },
      ].find(q => q.quality == itemQuality)!.indicator;
  }

  private static getQualityIndicatorOpenChar(): string {
    return [
        { setting: SettingsConstants.disabled, char: CharConstants.empty },
        { setting: "square", char: '[' },
        { setting: "round",  char: '(' },
      ].find(o => o.setting === Settings.statsAndModifiers.itemQuality.brackets)!.char;
  }

  private static getQualityIndicatorCloseChar(): string {
    return [
        { setting: SettingsConstants.disabled, char: CharConstants.empty },
        { setting: "square", char: ']' },
        { setting: "round",  char: ')' },
      ].find(o => o.setting === Settings.statsAndModifiers.itemQuality.brackets)!.char;
  }
}

/**
 * Represents the amount of digits the iLvl has when shown in the item name.
 * 
 * Use None if the item has no iLvl, Single if it _always_ has a single digit iLvl (1 to 9, like Khalim's Will) and Double if it can have a two digits iLvl (10-99, like most items).
 */
export enum iLvlDigits {
  None = 0,
  Single = 1,
  Double = 2,
}
