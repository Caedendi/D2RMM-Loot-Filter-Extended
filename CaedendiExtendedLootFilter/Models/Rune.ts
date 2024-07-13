export class Rune {
  protected readonly number: number;
  protected readonly name: string;

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

  public getNumber(): number {
    return this.number;
  }

  public getName(): string {
    return this.name;
  }
}
