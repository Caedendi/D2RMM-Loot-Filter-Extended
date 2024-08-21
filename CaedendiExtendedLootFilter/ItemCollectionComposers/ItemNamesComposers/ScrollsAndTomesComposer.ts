import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { SingleHighlight } from "../../Models/Highlights/SingleHighlight";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { RawSettings } from "../../Settings/RawSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class ScrollsAndTomesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (RawSettings.filter.junk.scrollsTomes) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight scrolls and tomes
        this.highlightScrolls();
        this.highlightTomes();
        return;
      case "hide": // highlight tomes, hide scrolls
        this.highlightTomes();
        this.hideScrolls();
        return;
    }
  }

  protected highlightScrolls(): void {
    [ 
      { key: "tsc", name: "TP" }, // Scroll of Town Portal
      { key: "isc", name: "ID" }, // Scroll of Identify
    ].forEach(item => this.collection.upsert(new ItemEntry(item.key, item.name, ColorConstants.white, new SingleHighlight(CharConstants.plus, ColorConstants.green, HighlightConstants.paddingNone))));
  }

  protected highlightTomes(): void {
    [ 
      { key: "tbk", name: "TP Tome" }, // Tome of Town Portal
      { key: "ibk", name: "ID Tome" }, // Tome of Identify
    ].forEach(item => this.collection.upsert(new ItemEntry(item.key, item.name, ColorConstants.white, new SingleHighlight(CharConstants.plus, ColorConstants.darkGreen, HighlightConstants.paddingNone))));
  }

  protected hideScrolls(): void {
    [ 
      "tsc", // Scroll of Town Portal
      "isc", // Scroll of Identify
    ].forEach(scroll => this.collection.upsertHidden(scroll));
  }
}
