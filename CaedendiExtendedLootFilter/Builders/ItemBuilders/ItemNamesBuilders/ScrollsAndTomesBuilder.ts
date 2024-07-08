import { CharConstants } from "../../../Constants/CharConstants";
import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { D2Color } from "../../../Models/D2Color";
import { SingleHighlightItemEntry } from "../../../Models/SingleHighlightItemEntry";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";

export class ScrollsAndTomesBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly clrScroll: D2Color = ColorConstants.green;
  protected readonly clrTome:   D2Color = ColorConstants.darkGreen;
  protected readonly clrName:   D2Color = ColorConstants.white;
  protected readonly pattern:   string  = CharConstants.plus;
  protected readonly padding:   string  = HighlightConstants.paddingNone;
  
  constructor() {
    super();
  }

  public build(): void {
    switch (config.ScrollsTomes as string) { // todo: validate setting as string
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.highlightScrolls(this.clrScroll, this.clrName, this.pattern, this.padding);
        this.highlightTomes(  this.clrTome,   this.clrName, this.pattern, this.padding);
        return;
      case "hide": // hide scrolls, show books
        this.highlightTomes(this.clrTome, this.clrName, this.pattern, this.padding);
        this.hideScrolls();
        return;
      case SettingsConstants.custom: // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert("tsc", "Scroll of Town Portal");
        this.collection.upsert("isc", "Scroll of Identify");
        this.collection.upsert("tbk", "Tome of Town Portal");
        this.collection.upsert("ibk", "Tome of Identify");
        return;
    }
  }

  protected hideScrolls(): void {
    this.collection.upsert("tsc", SettingsConstants.hidden); // Scroll of Town Portal
    this.collection.upsert("isc", SettingsConstants.hidden); // Scroll of Identify
  }

  protected highlightScrolls(clrHighlight: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.collection.upsertEntry(new SingleHighlightItemEntry("tsc", "TP", pattern, clrHighlight, padding, clrName)); // Scroll of Town Portal
    this.collection.upsertEntry(new SingleHighlightItemEntry("isc", "ID", padding, clrHighlight, padding, clrName)); // Scroll of Identify
  }

  protected highlightTomes(clrHighlight: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.collection.upsertEntry(new SingleHighlightItemEntry("tbk", "TP Tome", pattern, clrHighlight, padding, clrName)); // Tome of Town Portal
    this.collection.upsertEntry(new SingleHighlightItemEntry("ibk", "ID Tome", pattern, clrHighlight, padding, clrName)); // Tome of Identify
  }
}
