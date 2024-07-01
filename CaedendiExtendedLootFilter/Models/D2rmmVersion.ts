import { Helper } from "../Helper";

export class D2rmmVersion {
  public readonly major: number;
  public readonly minor: number;
  public readonly patch: number;

  constructor(major: number, minor: number, patch: number) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  public static fromArray(version: [number, number, number]) {
    version.forEach(v => {
      // if (v < 0 || v % 1 > 0 { // if lower than 0 or not a whole number // TODO: check
      if (v < 0 || !Helper.isWholeNumber(v)) {
        throw new Error(`Invalid D2RMM version numbers submitted: ${version}`);
      }
    });

    return new D2rmmVersion(version[0], version[1], version[2]);
  }

  public isOrExceeds(toMatch: D2rmmVersion): boolean {
    return this.major >= toMatch.major && this.minor >= toMatch.minor && this.patch >= toMatch.patch;
  }
  
  public toString(): string {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  public toArray(): [ number, number, number ] {
    return [ this.major, this.minor, this.patch ];
  }

  public getErrorMessage(): string {
    return `Requires D2RMM version ${this.toString()} or higher.`;
  }
}
