import { CharConstants } from "../../Constants/CharConstants";

export class D2Color {
  /**
   * code
   */
  private readonly _code: string;
  public get code(): string {
    return this._code;
  }

  constructor(code: string) {
    this._code = code;
  }

  public equals(color: D2Color): boolean {
    return this.code === color.code;
  }

  public toString(): string {
    if (this.code === CharConstants.empty)
      return CharConstants.empty;
    
    return `${D2Color.prefix}${this.code}`;
  }

  public static prefix = "ÿc";
}
