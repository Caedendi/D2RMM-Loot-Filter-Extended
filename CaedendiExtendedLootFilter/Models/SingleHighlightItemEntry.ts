import { CharConstants } from "../Constants/CharConstants";
import { GemConstants } from "../Constants/Items/GemConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { Settings } from "../Settings/Settings";
import { D2Color } from "./D2Color";
import { Gem } from "./Gem";
import { ItemEntry } from "./ItemEntry";

export class SingleHighlightItemEntry extends ItemEntry {
  protected highlight: string;
  protected highlightColor: D2Color;
  protected padding: string;
  protected nameColor: D2Color;

  constructor(
    key: string, 
    name: string,
    highlight: string,
    highlightColor: D2Color,
    padding: string,
    nameColor: D2Color,
  ) {
    super(key, name);
    this.highlight = highlight;
    this.highlightColor = highlightColor;
    this.padding = padding;
    this.nameColor = nameColor;
  }

  public generateDisplayName(): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    let displayName = `${this.highlightColor}${this.highlight}${this.padding}${this.nameColor}${this.name}`;

    if (!this.hasBigTooltip)
      return displayName;

    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    return `${this.bigTooltipSuffix}${HighlightConstants.bttPadding}${displayName}${HighlightConstants.bttPadding}${this.bigTooltipPrefix}`;
  }

  public static createSingleColorArray(
    array: {key: string, name: string}[],
    highlight: string,
    highlightColor: D2Color,
    padding: string,
    nameColor: D2Color,
  ): SingleHighlightItemEntry[] {
    return array.map<SingleHighlightItemEntry>(entry => 
      new SingleHighlightItemEntry(entry.key, entry.name, highlight, highlightColor, padding, nameColor));
  }

  public static createMultiColorArray(
    array: {key: string, name: string, color: D2Color}[],
    highlight: string,
    padding: string,
    nameColor: D2Color,
  ): SingleHighlightItemEntry[] {
    return array.map<SingleHighlightItemEntry>(entry => 
      new SingleHighlightItemEntry(entry.key, entry.name, highlight, entry.color, padding, nameColor));
  }

  public static fromGem(gem: Gem): SingleHighlightItemEntry {
    return new SingleHighlightItemEntry(
      gem.getKey(), gem.getName(), GemConstants.highlight, gem.getColor(), GemConstants.padding, GemConstants.clrName);
  }

  public static fromGems(gems: Gem[]): SingleHighlightItemEntry[] {
    return gems.map<SingleHighlightItemEntry>(gem => this.fromGem(gem));
  }

  protected createTwosLinePickUpBigTooltipPrefix(): string {
    return `${this.newLine}${this.createPickUpIndent()}${HighlightConstants.bttPickUpMsg}`;
  }

  protected createFourLinesPickUpBigTooltipPrefix(): string {
    return `${this.newLine}${this.createPickUpIndent()}${HighlightConstants.bttPickUpMsg}${this.newLine}`;
  }

  // TODO: refactor to be generic and not use GemConstants
  private createPickUpIndent() {
    return `${this.highlight}${this.padding}`.length == 2 ? GemConstants.getPickUpMessageIndent() : CharConstants.empty;
  }
}
