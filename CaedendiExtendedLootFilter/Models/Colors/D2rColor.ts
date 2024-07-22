import { FontColorConstants } from "../../Constants/Colors/FontColorConstants";

// TODO: refactor
export class D2rColor {
  protected name: string;
  protected code: string;

  protected readonly prefix = "$FontColor";

  constructor(name: string) {
    this.name = name;
    this.code = name;
  }

  public getName(): string {
    return this.name;
  }

  public getCode(): string {
    return this.code;
  }

  public toString(): string {
    return `${this.prefix}${this.code}`;
  }
}
