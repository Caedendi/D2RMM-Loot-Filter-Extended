import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { Gem } from "../../Models/Items/Gem";
import { RawSettings } from "../../Settings/RawSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class GemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly gems: Gem[] = GemConstants.gemExceptions;

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (RawSettings.filter.jewelry.gems.filter) {
      case SettingsConstants.all: // show all
        this.highlightGems(this.gems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
      case "perfect":  // hide chipped/flawed/regular/flawless gems
        this.hideGems();
        return;
    }
  }

  protected hideGems() {
    this.collection.upsertMultipleHidden(this.gems.map<string>(gem => gem.key));
  }

  protected highlightGems(gems: Gem[]) {
    this.collection.upsertMultipleIfHasHighlightOrBigTooltip(ItemEntry.fromGems(gems, RawSettings.filter.jewelry.gems.isHighlightEnabled, RawSettings.filter.jewelry.gems.bigTooltip));
  }
}
