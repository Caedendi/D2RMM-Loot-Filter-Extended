import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { Gem } from "../../Models/Items/Gem";
import { Settings } from "../../Settings/Settings";
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
    if (Settings.filter.jewelry.gems.filter === SettingsConstants.hide)
      return;

    switch (Settings.filter.jewelry.gems) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(GemConstants.chippedFlawedRegularGems);
        this.highlightGems(GemConstants.flawlessGems);
        this.highlightGems(GemConstants.perfectGems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.highlightGems(GemConstants.flawlessGems);
        this.highlightGems(GemConstants.perfectGems);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.hideGems(GemConstants.flawlessGems);
        this.highlightGems(GemConstants.perfectGems);
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

  protected highlightGems(gems: Gem[]): void {
    this.collection.upsertMultiple(ItemEntry.fromGems(gems));
  }
}
