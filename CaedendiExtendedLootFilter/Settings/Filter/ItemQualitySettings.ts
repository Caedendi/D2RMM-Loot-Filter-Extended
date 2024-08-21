import { CharConstants } from "../../Constants/CharConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { EItemQuality } from "../Enums/EItemQuality";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class ItemQualitySettings extends FilterSettingsBase {
  public static readonly isEnabled:   boolean = RawSettings.filter.statsAndModifiers.itemQuality.isEnabled;
  public static readonly placement:   string  = RawSettings.filter.statsAndModifiers.itemQuality.placement;
  public static readonly brackets:    string  = RawSettings.filter.statsAndModifiers.itemQuality.brackets;
  public static readonly styleSingle: string  = RawSettings.filter.statsAndModifiers.itemQuality.styleSingle;
  public static readonly styleDouble: string  = RawSettings.filter.statsAndModifiers.itemQuality.styleDouble;

  public static singleNormalQualityIndicator:      string = this.createSingleQualityIndicator(EItemQuality.Normal);
  public static singleExceptionalQualityIndicator: string = this.createSingleQualityIndicator(EItemQuality.Exceptional);
  public static singleEliteQualityIndicator:       string = this.createSingleQualityIndicator(EItemQuality.Elite);

  public static doubleNormalQualityIndicator:      string = this.createDoubleQualityIndicator(EItemQuality.Normal);
  public static doubleExceptionalQualityIndicator: string = this.createDoubleQualityIndicator(EItemQuality.Exceptional);
  public static doubleEliteQualityIndicator:       string = this.createDoubleQualityIndicator(EItemQuality.Elite);

  public static openChar:  string = this.getSingleQualityIndicatorOpenChar();
  public static closeChar: string = this.getSingleQualityIndicatorCloseChar();

  protected static customSingleNormalQualityIndicator:      string = "[custom n]"; // replace "custom n" to your preference. [CSTM-QTYS]
  protected static customSingleExceptionalQualityIndicator: string = "[custom x]"; // replace "custom x" to your preference. [CSTM-QTYS]
  protected static customSingleEliteQualityIndicator:       string = "[custom e]"; // replace "custom e" to your preference. [CSTM-QTYS]

  protected static customDoubleNormalQualityIndicator:      string = "[custom n]"; // replace "custom n" to your preference. [CSTM-QTYD]
  protected static customDoubleExceptionalQualityIndicator: string = "[custom x]"; // replace "custom x" to your preference. [CSTM-QTYD]
  protected static customDoubleEliteQualityIndicator:       string = "[custom e]"; // replace "custom e" to your preference. [CSTM-QTYD]

  private static createSingleQualityIndicator(itemQuality: EItemQuality): string {
    if (RawSettings.filter.statsAndModifiers.itemQuality.styleSingle === SettingsConstants.custom)
      return this.getCustomSingleQualityIndicator(itemQuality);

    let indicator = this.getSingleQualityIndicator(itemQuality);
    if (RawSettings.filter.statsAndModifiers.itemQuality.styleSingle === "uppercase")
      return indicator.toUpperCase();

    return indicator;
  }

  private static getCustomSingleQualityIndicator(itemQuality: EItemQuality): string {
    return [
        { quality: EItemQuality.Normal,      indicator: this.customSingleNormalQualityIndicator },
        { quality: EItemQuality.Exceptional, indicator: this.customSingleExceptionalQualityIndicator },
        { quality: EItemQuality.Elite,       indicator: this.customSingleEliteQualityIndicator },
      ].find(q => q.quality == itemQuality)!.indicator;
  }

  private static getSingleQualityIndicator(itemQuality: EItemQuality): string {
    return [
        { quality: EItemQuality.Normal,      indicator: 'n' },
        { quality: EItemQuality.Exceptional, indicator: 'x' },
        { quality: EItemQuality.Elite,       indicator: 'e' },
      ].find(q => q.quality == itemQuality)!.indicator;
  }

  private static getSingleQualityIndicatorOpenChar(): string {
    return [
        { setting: SettingsConstants.disabled, char: CharConstants.empty },
        { setting: "square", char: '[' },
        { setting: "round",  char: '(' },
      ].find(o => o.setting === RawSettings.filter.statsAndModifiers.itemQuality.brackets)!.char;
  }

  private static getSingleQualityIndicatorCloseChar(): string {
    return [
        { setting: SettingsConstants.disabled, char: CharConstants.empty },
        { setting: "square", char: ']' },
        { setting: "round",  char: ')' },
      ].find(o => o.setting === RawSettings.filter.statsAndModifiers.itemQuality.brackets)!.char;
  }

  private static createDoubleQualityIndicator(itemQuality: EItemQuality): string {
    if (RawSettings.filter.statsAndModifiers.itemQuality.styleDouble === SettingsConstants.custom)
      return this.getCustomDoubleQualityIndicator(itemQuality);

    return CharConstants.empty;

    // TODO: implement
    return this.getDoubleQualityIndicator(itemQuality);
  }

  private static getCustomDoubleQualityIndicator(itemQuality: EItemQuality): string {
    return [
        { quality: EItemQuality.Normal,      indicator: this.customDoubleNormalQualityIndicator },
        { quality: EItemQuality.Exceptional, indicator: this.customDoubleExceptionalQualityIndicator },
        { quality: EItemQuality.Elite,       indicator: this.customDoubleEliteQualityIndicator },
      ].find(q => q.quality == itemQuality)!.indicator;
  }

  private static getDoubleQualityIndicator(itemQuality: EItemQuality): string {
    throw new Error("not implemented");
    
    let indicator = CharConstants.empty;

    switch (RawSettings.filter.statsAndModifiers.itemQuality.styleDouble) {
      case "dashes":
        
    }

    let dashesAll = [
      { quality: EItemQuality.Normal, indicator: "-" },
      { quality: EItemQuality.Normal, indicator: "=" },
      { quality: EItemQuality.Normal, indicator: "≡" }, // test
    ];
    let dashesXE = [
      { quality: EItemQuality.Normal, indicator: CharConstants.empty },
      { quality: EItemQuality.Normal, indicator: "-" },
      { quality: EItemQuality.Normal, indicator: "=" }, // test
    ];

    let dots = [
      { quality: EItemQuality.Normal, indicator: "" },
      { quality: EItemQuality.Normal, indicator: "·" }, // TODO: middle dot test, also as new highlight character
      { quality: EItemQuality.Normal, indicator: ":" }, // test
    ];

    return [
        { quality: EItemQuality.Normal,      indicator: 'n' },
        { quality: EItemQuality.Exceptional, indicator: 'x' },
        { quality: EItemQuality.Elite,       indicator: 'e' },
      ].find(q => q.quality == itemQuality)!.indicator;
  }
}
