import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { Gem } from "../../Models/Items/Gem";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class GemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  // TODO: add option for regular gem name:
  // - regular
  // - common
  // - gem name (Ruby)
  // - custom
  public applyFilter(): void {
    switch (JewelrySettings.gems.filter) {
      case SettingsConstants.all: // show all
        this.upsertGems(GemConstants.chippedFlawedRegularGems);
        this.upsertGems(GemConstants.flawlessGems);
        this.upsertGems(GemConstants.perfectGems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.upsertGems(GemConstants.flawlessGems);
        this.upsertGems(GemConstants.perfectGems);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.hideGems(GemConstants.flawlessGems);
        this.upsertGems(GemConstants.perfectGems);
        return;
      case "hide": // hide chipped/flawed/regular/flawless gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.hideGems(GemConstants.flawlessGems);
        this.hideGems(GemConstants.perfectGems);
        return;
    }
  }

  protected hideGems(gems: Gem[]): void {
    this.collection.upsertMultipleHidden(gems.map(gem => gem.key));
  }

  protected upsertGems(gems: Gem[]): void {
    this.collection.upsertMultipleIfHasHighlightOrBigTooltip(ItemEntry.fromGems(gems, JewelrySettings.gems.isHighlightEnabled, JewelrySettings.gems.bigTooltip));
  }
}
