import { CharConstants } from "../../Constants/CharConstants";

export class D2Color {
  /**
   * code
   */
  private readonly _code: string;
  public get code(): string {
    return this._code;
  }
  /**
   * name
   */
  private readonly _name: string;
  public get name(): string {
    return this._name;
  }
  /**
   * prefix
   */
  private readonly _prefix = "ÿc";
  protected get prefix() {
    return this._prefix;
  }

  constructor(code: string, name: string) {
    this._code = code;
    this._name = name;
  }

  public toString(): string {
    if (this.code === CharConstants.empty)
      return CharConstants.empty;
    
    return `${this.prefix}${this.code}`;
  }
}
