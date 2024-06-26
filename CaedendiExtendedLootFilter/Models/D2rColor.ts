import { FontColorConstants } from "../Constants/FontColorConstants";

export class D2rColor {
  protected name: string;
  protected code: string;

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }

  public getName(): string {
    return this.name;
  }

  public getCode(): string {
    return `${FontColorConstants.prefix}${this.code}`;
  }
}