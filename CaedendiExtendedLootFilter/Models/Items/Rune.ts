export class Rune {
  /**
   * number property
   */
  private readonly _number: number;
  protected get number(): number {
    return this._number;
  }
  /**
   * name property
   */
  private readonly _name: string;
  protected get name(): string {
    return this._name;
  }

  constructor(
    number: number,
    name: string,
  ) {
    this._number = number;
    this._name = name;
  }

  public getKey(): string {
    return this.number < 10 ? `r0${this.number}` : `r${this.number}`;
  }
}
