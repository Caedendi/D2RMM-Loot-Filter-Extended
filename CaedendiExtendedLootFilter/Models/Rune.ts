export class Rune {
  number: number;
  name: string;

  constructor(
    number: number,
    name: string,
  ) {
    this.number = number;
    this.name = name;
  }

  public getKey(): string {
    return this.number < 10 ? `r0${this.number}` : `r${this.number}`;
  }
}
