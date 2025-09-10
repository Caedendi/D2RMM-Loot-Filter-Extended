import { GemEntry } from "../Models/ItemCollectionEntries/GemEntry";
import { Gem } from "../Models/Items/Gem";
import { JewelrySettings } from "../Settings/Filter/JewelrySettings";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

export abstract class GemsComposerBase extends ItemCollectionComposerBase {
  constructor() {
    super();
  }

  protected hideGems(gems: Gem[]): void {
    this.collection.upsertMultipleHidden(gems.map(gem => gem.key));
  }

  protected upsertGems(gems: Gem[]): void {
    this.collection.upsertMultipleIfHasHighlightOrBigTooltip(GemEntry.fromArray(gems, JewelrySettings.gems.isHighlightEnabled, JewelrySettings.gems.bigTooltip));
  }
}
