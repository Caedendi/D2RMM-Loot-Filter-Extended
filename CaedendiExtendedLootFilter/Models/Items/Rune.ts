export class Rune {
  /**
   * key
   */
  public get key(): string {
    return this.number < 10 ? `r0${this.number}` : `r${this.number}`;
  }

  /**
   * number
   */
  private readonly _number: number;
  public get number(): number {
    return this._number;
  }
  /**
   * name
   */
  private readonly _name: string;
  public get name(): string {
    return this._name;
  }

  constructor(
    number: number,
    name: string,
  ) {
    this._number = number;
    this._name = name;
  }
}
