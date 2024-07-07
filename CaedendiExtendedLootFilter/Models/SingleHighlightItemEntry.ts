import { GemConstants } from "../Constants/Items/GemConstants";
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
    return `${this.highlightColor}${this.highlight}${this.padding}${this.nameColor}${this.name}`;
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

  // TODO: remove?
  public static fromGem(gem: Gem): SingleHighlightItemEntry {
    return new SingleHighlightItemEntry(
      gem.getKey(),
      gem.getName(),
      GemConstants.highlight,
      gem.getColor(),
      GemConstants.padding,
      GemConstants.clrName
    );
  }

  public static fromGems(gems: Gem[]): SingleHighlightItemEntry[] {
    return gems.map<SingleHighlightItemEntry>(gem => new SingleHighlightItemEntry(
      gem.getKey(),
      gem.getName(),
      GemConstants.highlight,
      gem.getColor(),
      GemConstants.padding,
      GemConstants.clrName
    ));
  }
}
