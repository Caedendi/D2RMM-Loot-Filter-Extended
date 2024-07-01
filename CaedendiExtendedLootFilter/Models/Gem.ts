import { D2Color } from "./D2Color";

export class Gem {
  protected readonly id: string;
  protected readonly color: D2Color;
  protected readonly name: string;

  constructor(id: string, color: D2Color, name: string) {
    this.id = id;
    this.color = color;
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public getColor(): D2Color {
    return this.color;
  }

  public getName(): string {
    return this.name;
  }
}
