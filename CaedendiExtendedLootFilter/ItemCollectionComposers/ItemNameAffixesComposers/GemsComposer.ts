import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { GemEntry } from "../../Models/ItemCollectionEntries/GemEntry";
import { Gem } from "../../Models/Items/Gem";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

// TODO: add inheritance for this GemsComposer and ItemNames GemsComposer?
export class GemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly gems: Gem[] = GemConstants.gemExceptions;

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (JewelrySettings.gems.filter) {
      case SettingsConstants.all: // show all
        this.highlightGems(this.gems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
      case "perfect":  // hide chipped/flawed/regular/flawless gems
      case SettingsConstants.hide:
        this.hideGems();
        return;
    }
  }

  protected hideGems() {
    this.collection.upsertMultipleHidden(this.gems.map<string>(gem => gem.key));
  }

  protected highlightGems(gems: Gem[]) {
    const gemEntries = GemEntry.fromArray(gems, JewelrySettings.gems.isHighlightEnabled, JewelrySettings.gems.bigTooltip);
    this.collection.upsertMultipleIfHasHighlightOrBigTooltip(gemEntries);
  }
}
