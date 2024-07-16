import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Gem } from "../../Models/Gem";
import { SingleHighlightItemEntry } from "../../Models/SingleHighlightItemEntry";
import { Settings } from "../../Settings/Settings";
import { IBigTooltipItemCollectionComposer } from "../Interfaces/IBigTooltipItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class GemsComposer extends ItemCollectionComposerBase implements IBigTooltipItemCollectionComposer {

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.jewelry.gems) { // todo: validate setting as string
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
      case SettingsConstants.custom: // [CSTM-GEM1]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        
        /*
        
        // chipped
        this.collection.upsertEntry("gcv", `Chipped Amethyst`);
        this.collection.upsertEntry("gcw", `Chipped Diamond`);
        this.collection.upsertEntry("gcg", `Chipped Emerald`);
        this.collection.upsertEntry("gcr", `Chipped Ruby`);
        this.collection.upsertEntry("gcb", `Chipped Sapphire`);
        this.collection.upsertEntry("gcy", `Chipped Topaz`);
        this.collection.upsertEntry("skc", `Chipped Skull`);
        // flawed
        this.collection.upsertEntry("gfv", `Flawed Amethyst`);
        this.collection.upsertEntry("gfw", `Flawed Diamond`);
        this.collection.upsertEntry("gfg", `Flawed Emerald`);
        this.collection.upsertEntry("gfr", `Flawed Ruby`);
        this.collection.upsertEntry("gfb", `Flawed Sapphire`);
        this.collection.upsertEntry("gfy", `Flawed Topaz`);
        this.collection.upsertEntry("skf", `Flawed Skull`);
        // regular
        this.collection.upsertEntry("gsv", `Amethyst`);
        // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section above.
        // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
        this.collection.upsertEntry("gsy", `Topaz`);
        this.collection.upsertEntry("sku", `Skull`);
        // flawless
        this.collection.upsertEntry("gzv", `Flawless Amethyst`);
        this.collection.upsertEntry("glw", `Flawless Diamond`);
        this.collection.upsertEntry("glg", `Flawless Emerald`);
        this.collection.upsertEntry("glr", `Flawless Ruby`);
        this.collection.upsertEntry("glb", `Flawless Sapphire`);
        this.collection.upsertEntry("gly", `Flawless Topaz`);
        this.collection.upsertEntry("skl", `Flawless Skull`);
        //perfect
        this.collection.upsertEntry("gpv", `Perfect Amethyst`);
        this.collection.upsertEntry("gpw", `Perfect Diamond`);
        this.collection.upsertEntry("gpg", `Perfect Emerald`);
        this.collection.upsertEntry("gpr", `Perfect Ruby`);
        this.collection.upsertEntry("gpb", `Perfect Sapphire`);
        this.collection.upsertEntry("gpy", `Perfect Topaz`);
        this.collection.upsertEntry("skz", `Perfect Skull`);

        */

        return;
    }
  }

  protected hideGems(gems: Gem[]): void {
    this.collection.upsertMultipleHidden(gems.map(gem => gem.getKey()));
  }

  protected highlightGems(gems: Gem[]): void {
    this.collection.upsertMultiple(SingleHighlightItemEntry.fromGems(gems));
  }

  public addBigTooltips() {
    this.collection.addBigTooltipToAllEntries(Settings.bigTooltips.jewelry.gemsSetting);
  }
}
