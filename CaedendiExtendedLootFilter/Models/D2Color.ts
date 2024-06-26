import { ColorConstants } from "../Constants/Colors/ColorConstants";

export class D2Color {
  protected code: string;
  protected name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public getCode(): string {
    return `${ColorConstants.prefix}${this.code}`;
  }

  public getName(): string {
    return this.name;
  }
}
