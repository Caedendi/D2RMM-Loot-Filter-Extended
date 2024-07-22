import { D2Color } from "../Colors/D2Color";

export class Gem {
  protected readonly key: string;
  protected readonly color: D2Color;
  protected readonly name: string;

  constructor(key: string, color: D2Color, name: string) {
    this.key = key;
    this.color = color;
    this.name = name;
  }

  public getKey(): string {
    return this.key;
  }

  public getColor(): D2Color {
    return this.color;
  }

  public getName(): string {
    return this.name;
  }
}
