import { CharConstants } from "../Constants/CharConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { ItemEntry } from "./ItemEntry";
import { iLvlFix } from "./iLvlFix";

export class DoubleHighlightItemEntry extends ItemEntry {
  protected readonly ilvlFix: iLvlFix;
  protected highlightPrefix: string;
  protected highlightSuffix: string;
  protected readonly shouldFixiLvlIndent: boolean = false; // TODO: fix use

  constructor(
    key: string,
    name: string,
    ilvlFix?: iLvlFix,
    highlightPrefix?: string,
    highlightSuffix?: string
  ) {
    super(key, name);
    this.ilvlFix = ilvlFix ?? iLvlFix.None;
    this.highlightPrefix = highlightPrefix ?? CharConstants.empty;
    this.highlightSuffix = highlightSuffix ?? CharConstants.empty;
  }

  public static fromItemEntry(entry: ItemEntry, ilvlFix?: iLvlFix, prefix?: string, suffix?: string): DoubleHighlightItemEntry {
    return new DoubleHighlightItemEntry(entry.getKey(), entry.getName(), ilvlFix, prefix, suffix);
  }

  public generateDisplayName(): string {
    if (!this.isVisible)
      return SettingsConstants.hidden;

    let indent = this.shouldFixiLvlIndent ? Helper.getiLvlIndent(this.ilvlFix) : CharConstants.empty;
    let displayName = `${indent}${this.highlightPrefix}${this.name}${this.highlightSuffix}`;
    
    if (!this.hasBigTooltip)
      return displayName;

    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    return `${this.bigTooltipSuffix}${this.bigTooltipPadding}${displayName}${this.bigTooltipPadding}${this.bigTooltipPrefix}`;
  }

  public static createArray(array: [string, string, iLvlFix?, string?, string?][]): ItemEntry[] {
    return array.map<DoubleHighlightItemEntry>(x => new DoubleHighlightItemEntry(x[0], x[1], x[2], x[3], x[4]));
  }

  public setPrefix(prefix: string): void {
    this.highlightPrefix = prefix;
  }

  public setSuffix(prefix: string): void {
    this.highlightPrefix = prefix;
  }

  public setPrefixSuffix(prefix: string, suffix: string): void {
    this.highlightPrefix = prefix;
    this.highlightSuffix = suffix;
  }
}
