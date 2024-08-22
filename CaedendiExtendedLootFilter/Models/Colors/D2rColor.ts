import { ED2rColor } from "./ED2rColor";

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
  private readonly _code: ED2rColor;
  public get code(): ED2rColor {
    return this._code;
  }

  protected readonly prefix = "$FontColor";

  constructor(code: ED2rColor) {
    this._code = code;
  }

  public toString(): string {
    return `${this.prefix}${this.code}`;
  }
}
