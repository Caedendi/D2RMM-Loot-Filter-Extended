export class D2rColor {
  /**
   * name
   */
  private readonly _name: string;
  public get name(): string {
    return this._name;
  }
  /**
   * code
   */
  private readonly _code: string;
  public get code(): string {
    return this._code;
  }

  protected readonly prefix = "$FontColor";

  constructor(name: string) {
    this._name = name;
    this._code = name;
  }

  public toString(): string {
    return `${this.prefix}${this.code}`;
  }
}
