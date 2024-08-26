import { EQualityTagPosition } from "./EQualityTagPosition";
import { IQualityTag } from "./Interfaces/IQualityTag";

export class SingleQualityTag implements IQualityTag {
  /**
   * position
   */
  private readonly _position: EQualityTagPosition;
  protected get position(): EQualityTagPosition {
    return this._position;
  }
  /**
   * indicator
   */
  private readonly _indicator: string;
  protected get indicator(): string {
    return this._indicator;
  }

  /**
   * openChar
   */
  private readonly _openChar: string;
  protected get openChar(): string {
    return this._openChar;
  }

  /**
   * closeChar
   */
  private readonly _closeChar: string;
  protected get closeChar(): string {
    return this._closeChar;
  }

  /**
   * padding
   */
  private readonly _padding: string;
  protected get padding(): string {
    return this._padding;
  }

  constructor(position: EQualityTagPosition, indicator: string, openChar: string, closeChar: string, padding: string) {
    this._position = position;
    this._indicator = indicator;
    this._openChar = openChar;
    this._closeChar = closeChar;
    this._padding = padding;
  }

  /**
   * 
   * @param displayName 
   * @returns 
   */
  public apply(displayName: string): string {
    let tag = `${this.openChar}${this.indicator}${this.closeChar}`;

    return this.position == EQualityTagPosition.PREFIX
      ? `${tag}${this.padding}${displayName}` 
      : `${displayName}${this.padding}${tag}`;
  }
}
