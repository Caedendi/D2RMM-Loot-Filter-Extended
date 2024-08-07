import { IQualityTag } from "./Interfaces/IQualityTag";

export abstract class QualityTagBase implements IQualityTag {
  protected _indicator: string;

  constructor(indicator: string) {
    this._indicator = indicator;
  }

  public abstract apply(displayName: string): string;
}
