import { CharConstants } from "../../Constants/CharConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleQualityIndicatorPair } from "../../Models/QualityTags/DoubleQualityIndicatorPair";
import { EQualityTagPosition } from "../../Models/QualityTags/EQualityTagPosition";
import { CustomSettings } from "../CustomSettings";
import { EItemQuality } from "../Enums/EItemQuality";
import { RawSettings } from "../RawSettings";

export abstract class ItemQualitySettings {
  protected static readonly brackets:    string  = RawSettings.filter.statsAndModifiers.itemQuality.single.brackets;
  protected static readonly styleSingle: string  = RawSettings.filter.statsAndModifiers.itemQuality.single.style;
  protected static readonly styleDouble: string  = RawSettings.filter.statsAndModifiers.itemQuality.double.style;

  public static readonly position:       EQualityTagPosition = RawSettings.filter.statsAndModifiers.itemQuality.position;
  public static readonly isEnabled:      boolean = RawSettings.filter.statsAndModifiers.itemQuality.isEnabled;
  public static readonly paddingSingle:  string  = CharConstants.space.repeat(RawSettings.filter.statsAndModifiers.itemQuality.single.padding);
  public static readonly paddingDouble:  string  = CharConstants.space.repeat(RawSettings.filter.statsAndModifiers.itemQuality.double.padding);

  public static singleNormalQualityIndicator:      string = this.getSingleQualityIndicator(EItemQuality.Normal);
  public static singleExceptionalQualityIndicator: string = this.getSingleQualityIndicator(EItemQuality.Exceptional);
  public static singleEliteQualityIndicator:       string = this.getSingleQualityIndicator(EItemQuality.Elite);

  public static openChar:  string = this.getSingleQualityIndicatorOpenChar();
  public static closeChar: string = this.getSingleQualityIndicatorCloseChar();

  public static doubleNormalQualityIndicators:      DoubleQualityIndicatorPair | null = this.getDoubleQualityIndicators(EItemQuality.Normal);
  public static doubleExceptionalQualityIndicators: DoubleQualityIndicatorPair | null = this.getDoubleQualityIndicators(EItemQuality.Exceptional);
  public static doubleEliteQualityIndicators:       DoubleQualityIndicatorPair | null = this.getDoubleQualityIndicators(EItemQuality.Elite);

  private static getSingleQualityIndicator(itemQuality: EItemQuality): string {
    if (this.styleSingle === SettingsConstants.custom)
      return [
          { quality: EItemQuality.Normal,      indicator: CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.single.normal },
          { quality: EItemQuality.Exceptional, indicator: CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.single.exceptional },
          { quality: EItemQuality.Elite,       indicator: CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.single.elite },
        ].find(q => q.quality == itemQuality)!.indicator;

    let indicator = [
        { quality: EItemQuality.Normal,      indicator: 'n' },
        { quality: EItemQuality.Exceptional, indicator: 'x' },
        { quality: EItemQuality.Elite,       indicator: 'e' },
      ].find(q => q.quality == itemQuality)!.indicator;

    if (this.styleSingle === "uppercase")
      indicator = indicator.toUpperCase();

    return indicator;
  }

  private static getSingleQualityIndicatorOpenChar(): string {
    return [
        { setting: SettingsConstants.disabled, char: CharConstants.empty },
        { setting: SettingsConstants.custom,   char: CustomSettings.filter.statsAndModifiers.itemQuality.bracketStyle.openChar },
        { setting: "square", char: '[' },
        { setting: "round",  char: '(' },
      ].find(o => o.setting === this.brackets)!.char;
  }

  private static getSingleQualityIndicatorCloseChar(): string {
    return [
        { setting: SettingsConstants.disabled, char: CharConstants.empty },
        { setting: SettingsConstants.custom,   char: CustomSettings.filter.statsAndModifiers.itemQuality.bracketStyle.closeChar },
        { setting: "square", char: ']' },
        { setting: "round",  char: ')' },
      ].find(o => o.setting === this.brackets)!.char;
  }

  private static getDoubleQualityIndicators(itemQuality: EItemQuality): DoubleQualityIndicatorPair | null {
    let settings: { quality: EItemQuality, indicators: DoubleQualityIndicatorPair | null }[];

    switch (this.styleDouble) {
      case SettingsConstants.custom:
        settings = [
          { quality: EItemQuality.Normal,      indicators: new DoubleQualityIndicatorPair(CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.double.prefix.normal, CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.double.suffix.normal) },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair(CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.double.prefix.normal, CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.double.suffix.normal) },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair(CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.double.prefix.normal, CustomSettings.filter.statsAndModifiers.itemQuality.indicatorStyle.double.suffix.normal) },
        ];
        break;
      case "dots-1":
        settings = [
          { quality: EItemQuality.Normal,      indicators: null },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair("·", "·") },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair(":", ":") },
        ];
        break;
      case "dots-2":
        settings = [
          { quality: EItemQuality.Normal,      indicators: new DoubleQualityIndicatorPair( "·", "·" ) },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair( ":", ":" ) },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair("·:", ":·") },
        ];
        break;
      case "dashes-1":
        settings = [
          { quality: EItemQuality.Normal,      indicators: null },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair("-", "-") },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair("=", "=") },
        ];
        break;
      case "dashes-2":
        settings = [
          { quality: EItemQuality.Normal,      indicators: new DoubleQualityIndicatorPair( "-", "-" ) },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair( "=", "=" ) },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair("-=", "=-") },
        ];
        break;
      case "dashes-3":
        settings = [
          { quality: EItemQuality.Normal,      indicators: new DoubleQualityIndicatorPair("-", "-") },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair("+", "+") },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair("#", "#") },
        ];
        break;
      case "dashes-4":
        settings = [
          { quality: EItemQuality.Normal,      indicators: null },
          { quality: EItemQuality.Exceptional, indicators: new DoubleQualityIndicatorPair( "+", "+" ) },
          { quality: EItemQuality.Elite,       indicators: new DoubleQualityIndicatorPair("++", "++") },
        ];
        break;
      default:
        throw new Error(`Invalid double Item Quality indicator setting: "${this.styleDouble}".`);
    }
    
    return settings.find(q => q.quality == itemQuality)!.indicators;
  }
}
