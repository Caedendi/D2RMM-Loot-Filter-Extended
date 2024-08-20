import { RuneConstants } from "../Constants/Items/RuneConstants";
import { RuneItemEntry } from "../Models/ItemCollectionEntries/RuneItemEntry";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

export class ItemRunesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    RuneConstants.tiers.forEach((tier) => {
      if (!tier.isVisible) {
        this.collection.upsertMultipleHidden(tier.getKeys());
        return;
      }

      tier.runes.forEach(rune => this.collection.upsert(new RuneItemEntry(rune, tier.nameColor, tier.numberColor, tier.highlight, tier.bigTooltipSetting)));
    });
  }
}
