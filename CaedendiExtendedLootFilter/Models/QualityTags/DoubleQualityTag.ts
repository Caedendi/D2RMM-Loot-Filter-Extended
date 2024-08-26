import { DoubleQualityIndicatorPair } from "./DoubleQualityIndicatorPair";
import { IQualityTag } from "./Interfaces/IQualityTag";

export class DoubleQualityTag implements IQualityTag {
  /**
   * indicators
   */
  private readonly _indicators: DoubleQualityIndicatorPair;
  protected get indicators(): DoubleQualityIndicatorPair {
    return this._indicators;
  }

  /**
   * padding
   */
  private readonly _padding: string;
  protected get padding(): string {
    return this._padding;
  }

  constructor(indicators: DoubleQualityIndicatorPair, padding: string) {
    this._indicators = indicators;
    this._padding = padding;
  }

  public static create(indicators: DoubleQualityIndicatorPair | null, padding: string) {
    if (indicators == null)
      return null;

    return new DoubleQualityTag(indicators, padding);
  }

  public apply(displayName: string): string {
    return `${this.indicators.prefix}${this.padding}${displayName}${this.padding}${this.indicators.suffix}`;
  }
}
