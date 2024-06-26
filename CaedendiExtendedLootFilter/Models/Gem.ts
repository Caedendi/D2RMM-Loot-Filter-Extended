import { D2Color } from "./D2Color";

export class Gem {
  id: string;
  color: D2Color;
  name: string;

  constructor(id: string, color: D2Color, name: string) {
    this.id = id;
    this.color = color;
    this.name = name;
  }
}