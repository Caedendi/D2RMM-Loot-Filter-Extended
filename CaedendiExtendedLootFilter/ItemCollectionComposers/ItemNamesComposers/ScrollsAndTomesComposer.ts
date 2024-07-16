import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { D2Color } from "../../Models/D2Color";
import { SingleHighlightItemEntry } from "../../Models/SingleHighlightItemEntry";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { Settings } from "../../Settings/Settings";

export class ScrollsAndTomesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly clrScroll: D2Color = ColorConstants.green;
  protected readonly clrTome:   D2Color = ColorConstants.darkGreen;
  protected readonly clrName:   D2Color = ColorConstants.white;
  protected readonly pattern:   string  = CharConstants.plus;
  protected readonly padding:   string  = HighlightConstants.paddingNone;
  
  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.junk.scrollsTomes) { // todo: validate setting as string
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

        // TODO: refactor
        // this.collection.upsertOLD("tsc", "Scroll of Town Portal");
        // this.collection.upsertOLD("isc", "Scroll of Identify");
        // this.collection.upsertOLD("tbk", "Tome of Town Portal");
        // this.collection.upsertOLD("ibk", "Tome of Identify");
        return;
    }
  }

  protected hideScrolls(): void {
    this.collection.upsertHidden("tsc"); // Scroll of Town Portal
    this.collection.upsertHidden("isc"); // Scroll of Identify
  }

  protected highlightScrolls(clrHighlight: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.collection.upsert(new SingleHighlightItemEntry("tsc", "TP", pattern, clrHighlight, padding, clrName)); // Scroll of Town Portal
    this.collection.upsert(new SingleHighlightItemEntry("isc", "ID", padding, clrHighlight, padding, clrName)); // Scroll of Identify
  }

  protected highlightTomes(clrHighlight: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.collection.upsert(new SingleHighlightItemEntry("tbk", "TP Tome", pattern, clrHighlight, padding, clrName)); // Tome of Town Portal
    this.collection.upsert(new SingleHighlightItemEntry("ibk", "ID Tome", pattern, clrHighlight, padding, clrName)); // Tome of Identify
  }
}
