import { Helper } from "../Helper";
import { ItemEntry } from "./ItemEntry";
import { iLvlFix } from "./iLvlFix";

export class DoubleHighlightItemEntry extends ItemEntry {
  protected prefix: string;
  protected suffix: string;
  protected readonly ilvlFix: iLvlFix;
  protected readonly shouldFixiLvlIndent: boolean = false;

  constructor(
    key: string,
    name: string,
    ilvlFix?: iLvlFix,
    prefix?: string,
    suffix?: string
  ) {
    super(key, name);
    this.prefix = prefix ?? "";
    this.suffix = suffix ?? "";
    this.ilvlFix = ilvlFix ?? iLvlFix.None;
  }

  public generateDisplayName(): string {
    let indent = this.shouldFixiLvlIndent ? Helper.getiLvlIndent(this.ilvlFix) : "";
    return `${indent}${this.prefix}${this.name}${this.suffix}`;
  }

  public static createArray(array: [string, string, iLvlFix?, string?, string?][]): ItemEntry[] {
    return array.map<DoubleHighlightItemEntry>(x => new DoubleHighlightItemEntry(x[0], x[1], x[2], x[3], x[4]));
  }

  public setPrefix(prefix: string): void {
    this.prefix = prefix;
  }

  public setSuffix(prefix: string): void {
    this.prefix = prefix;
  }

  public setPrefixSuffix(prefix: string, suffix: string): void {
    this.prefix = prefix;
    this.suffix = suffix;
  }
}
