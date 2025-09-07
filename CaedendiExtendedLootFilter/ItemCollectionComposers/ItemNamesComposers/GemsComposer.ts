import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { GemEntry } from "../../Models/ItemCollectionEntries/GemEntry";
import { Gem } from "../../Models/Items/Gem";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class GemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  // TODO: fix shortened displaynames when highlighted not displaying correctly
  // TODO: add option for regular gem name:
  // - regular
  // - common
  // - standard
  // - gem name (Ruby)
  // - custom
  public applyFilter(): void {
    // this.processChippedFlawedRegularGems();
    // this.processFlawlessGems();
    // this.processPerfectGems();

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
      case SettingsConstants.hide: // hide chipped/flawed/regular/flawless/perfect gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.hideGems(GemConstants.flawlessGems);
        this.hideGems(GemConstants.perfectGems);
        return;
    }
  }

  protected hideGems(gems: Gem[]): void {
    this.collection.upsertMultipleHidden(gems.map(gem => gem.key));
  }

  // protected processChippedFlawedRegularGems() {
  //   const highlightSetting = JewelrySettings.gems.filter;
  //   this.upsertGems(GemConstants.chippedFlawedRegularGems, highlightSetting, JewelrySettings.gems.bigTooltip);
  // }

  // protected processFlawlessGems() {
  //   const highlightSetting = JewelrySettings.gems.filter;
  //   this.upsertGems(GemConstants.flawlessGems, highlightSetting, JewelrySettings.gems.bigTooltip);
  // }

  // protected processPerfectGems() {
  //   const highlightSetting = JewelrySettings.gems.filter;
  //   this.upsertGems(GemConstants.perfectGems, highlightSetting, JewelrySettings.gems.bigTooltip);
  // }

  protected upsertGems(gems: Gem[]): void {
    this.collection.upsertMultipleIfHasHighlightOrBigTooltip(GemEntry.fromArray(gems, JewelrySettings.gems.isHighlightEnabled, JewelrySettings.gems.bigTooltip));
  }
}
