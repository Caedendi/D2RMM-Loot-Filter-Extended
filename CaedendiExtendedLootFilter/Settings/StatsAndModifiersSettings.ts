import { CharConstants } from "../Constants/CharConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Settings } from "./Settings";

// TODO: update
export abstract class StatsAndModifiersSettings {
  // ilvl
  public static iLvlIndentFixSingle: string = CharConstants.space.repeat(4); // for single digit ilvl items
  public static iLvlIndentFixDouble: string = CharConstants.space.repeat(6); // for double digit ilvl items

  // item quality
  protected static customNormalQualityIndicator:      string = "custom n"; // replace "custom n" to your preference. [CSTM-QLTY]
  protected static customExceptionalQualityIndicator: string = "custom x"; // replace "custom x" to your preference. [CSTM-QLTY]
  protected static customEliteQualityIndicator:       string = "custom e"; // replace "custom e" to your preference. [CSTM-QLTY]

  public static normalQualityIndicator:      string = this.createQualityIndicator(EItemQuality.Normal);
  public static exceptionalQualityIndicator: string = this.createQualityIndicator(EItemQuality.Exceptional);
  public static eliteQualityIndicator:       string = this.createQualityIndicator(EItemQuality.Elite);

  public static openChar:  string = this.getQualityIndicatorOpenChar();
  public static closeChar: string = this.getQualityIndicatorCloseChar();

  private static createQualityIndicator(itemQuality: EItemQuality): string {
    if (Settings.statsAndModifiers.itemQuality.style === SettingsConstants.custom)
      return this.getCustomQualityIndicator(itemQuality);

    let indicator = this.getQualityIndicator(itemQuality);
    if (Settings.statsAndModifiers.itemQuality.style === "uppercase")
      return indicator.toUpperCase();

    return indicator;
  }

  private static getCustomQualityIndicator(itemQuality: EItemQuality): string {
    return [
        { quality: EItemQuality.Normal,      indicator: this.customNormalQualityIndicator },
        { quality: EItemQuality.Exceptional, indicator: this.customExceptionalQualityIndicator },
        { quality: EItemQuality.Elite,       indicator: this.customEliteQualityIndicator },
      ].find(q => q.quality == itemQuality)!.indicator;
  }

  private static getQualityIndicator(itemQuality: EItemQuality): string {
    return [
        { quality: EItemQuality.Normal,      indicator: 'n' },
        { quality: EItemQuality.Exceptional, indicator: 'x' },
        { quality: EItemQuality.Elite,       indicator: 'e' },
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
