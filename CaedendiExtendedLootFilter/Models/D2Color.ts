import { CharConstants } from "../Constants/CharConstants";

export class D2Color {
  protected code: string;
  protected name: string;

  protected readonly prefix = "ÿc";

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public toString(): string {
    if (this.code === CharConstants.empty)
      return CharConstants.empty;
    
    return `${this.prefix}${this.code}`;
  }

  public getName(): string {
    return this.name;
  }

  public getCode(): string {
    return this.code;
  }
}
