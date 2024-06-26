import { D2Color } from "./D2Color";

export class SunderCharm {
  protected id: string;
  protected name: string;
  protected color: D2Color;

  constructor(id: string, name: string, color: D2Color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getColor(): D2Color {
    return this.color;
  }
}