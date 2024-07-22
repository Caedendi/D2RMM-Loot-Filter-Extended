import { CharConstants } from "../Constants/CharConstants";
import { Settings } from "../Settings/Settings";
import { iLvlDigits, StatsAndModifiersSettings } from "../Settings/StatsAndModifiersSettings";
import { ItemEntry } from "./_old/ItemEntry";

export class DoubleHighlightItemEntry extends ItemEntry {
  protected readonly ilvlFix: iLvlDigits;
  protected highlightPrefix: string;
  protected highlightSuffix: string;
  protected readonly shouldFixiLvlIndent: boolean = false; // TODO: fix use

  constructor(
    key: string,
    name: string,
    ilvlFix?: iLvlDigits,
    highlightPrefix?: string,
    highlightSuffix?: string
  ) {
    super(key, name);
    this.ilvlFix = ilvlFix ?? iLvlDigits.None;
    this.highlightPrefix = highlightPrefix ?? CharConstants.empty;
    this.highlightSuffix = highlightSuffix ?? CharConstants.empty;
  }

  public static fromItemEntry(entry: ItemEntry, ilvlFix?: iLvlDigits, prefix?: string, suffix?: string): DoubleHighlightItemEntry {
    return new DoubleHighlightItemEntry(entry.getKey(), entry.getName(), ilvlFix, prefix, suffix);
  }

  public generateDisplayName(): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    let indent = this.shouldFixiLvlIndent ? StatsAndModifiersSettings.getiLvlIndent(this.ilvlFix) : CharConstants.empty;
    let displayName = `${indent}${this.highlightPrefix}${this.name}${this.highlightSuffix}`;
    
    if (!this.hasBigTooltip())
      return displayName;

    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    return `${this.bigTooltipSuffix}${this.bigTooltipPadding}${displayName}${this.bigTooltipPadding}${this.bigTooltipPrefix}`;
  }

  public static createArray(array: [string, string, iLvlDigits?, string?, string?][]): ItemEntry[] {
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
