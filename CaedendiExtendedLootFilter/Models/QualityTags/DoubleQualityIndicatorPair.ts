export class DoubleQualityIndicatorPair {
  private readonly _prefix: string;
  public get prefix(): string {
    return this._prefix;
  }

  private readonly _suffix: string;
  public get suffix(): string {
    return this._suffix;
  }

  constructor(prefix: string, suffix: string) {
    this._prefix = prefix;
    this._suffix = suffix;
  }
}
