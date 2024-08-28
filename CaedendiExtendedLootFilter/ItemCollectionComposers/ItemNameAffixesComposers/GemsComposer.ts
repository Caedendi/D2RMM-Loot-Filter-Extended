import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { GemEntry } from "../../Models/ItemCollectionEntries/GemEntry";
import { Gem } from "../../Models/Items/Gem";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class GemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly gems: Gem[] = GemConstants.gemExceptions;

  constructor() {
    super();
  }

  // TODO: fix shortened displaynames when highlighted not displaying correctly
  public applyFilter(): void {
    switch (JewelrySettings.gems.filter) {
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
    this.collection.upsertMultipleIfHasHighlightOrBigTooltip(GemEntry.fromArray(gems, JewelrySettings.gems.isHighlightEnabled, JewelrySettings.gems.bigTooltip));
  }
}
