import { GemConstants } from "../../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { Gem } from "../../../Models/Gem";
import { SingleHighlightItemEntry } from "../../../Models/SingleHighlightItemEntry";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { Helper } from "../../../Helper";
import { BigTooltipSetting } from "../../../Models/BigTooltipSetting";

export class GemsBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly chippedFlawedRegular: Gem[] = [
    new Gem("gcv", GemConstants.clrAmethyst, GemConstants.chipped ), // Chipped Amethyst
    new Gem("gcw", GemConstants.clrDiamond,  GemConstants.chipped ), // Chipped Diamond
    new Gem("gcg", GemConstants.clrEmerald,  GemConstants.chipped ), // Chipped Emerald
    new Gem("gcr", GemConstants.clrRuby,     GemConstants.chipped ), // Chipped Ruby
    new Gem("gcb", GemConstants.clrSapphire, GemConstants.chipped ), // Chipped Sapphire
    new Gem("gcy", GemConstants.clrTopaz,    GemConstants.chipped ), // Chipped Topaz
    new Gem("skc", GemConstants.clrSkull,    GemConstants.chipped ), // Chipped Skull
    new Gem("gfv", GemConstants.clrAmethyst, GemConstants.flawed  ), // Flawed Amethyst
    new Gem("gfw", GemConstants.clrDiamond,  GemConstants.flawed  ), // Flawed Diamond
    new Gem("gfg", GemConstants.clrEmerald,  GemConstants.flawed  ), // Flawed Emerald
    new Gem("gfr", GemConstants.clrRuby,     GemConstants.flawed  ), // Flawed Ruby
    new Gem("gfb", GemConstants.clrSapphire, GemConstants.flawed  ), // Flawed Sapphire
    new Gem("gfy", GemConstants.clrTopaz,    GemConstants.flawed  ), // Flawed Topaz
    new Gem("skf", GemConstants.clrSkull,    GemConstants.flawed  ), // Flawed Skull
    new Gem("gsv", GemConstants.clrAmethyst, GemConstants.amethyst), // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see the "ItemNameAffixesBuilder" section.
    // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
    new Gem("gsy", GemConstants.clrTopaz, GemConstants.topaz), // Topaz
    new Gem("sku", GemConstants.clrSkull, GemConstants.skull), // Skull
  ];
  protected readonly flawless: Gem[] = [
    new Gem("gzv", GemConstants.clrAmethyst, GemConstants.flawless), // Flawless Amethyst
    new Gem("glw", GemConstants.clrDiamond,  GemConstants.flawless), // Flawless Diamond
    new Gem("glg", GemConstants.clrEmerald,  GemConstants.flawless), // Flawless Emerald
    new Gem("glr", GemConstants.clrRuby,     GemConstants.flawless), // Flawless Ruby
    new Gem("glb", GemConstants.clrSapphire, GemConstants.flawless), // Flawless Sapphire
    new Gem("gly", GemConstants.clrTopaz,    GemConstants.flawless), // Flawless Topaz
    new Gem("skl", GemConstants.clrSkull,    GemConstants.flawless), // Flawless Skull
  ];
  protected readonly perfect: Gem[] = [
    new Gem("gpv", GemConstants.clrAmethyst, GemConstants.perfect),  // Perfect Amethyst
    new Gem("gpw", GemConstants.clrDiamond,  GemConstants.perfect),  // Perfect Diamond
    new Gem("gpg", GemConstants.clrEmerald,  GemConstants.perfect),  // Perfect Emerald
    new Gem("gpr", GemConstants.clrRuby,     GemConstants.perfect),  // Perfect Ruby
    new Gem("gpb", GemConstants.clrSapphire, GemConstants.perfect),  // Perfect Sapphire
    new Gem("gpy", GemConstants.clrTopaz,    GemConstants.perfect),  // Perfect Topaz
    new Gem("skz", GemConstants.clrSkull,    GemConstants.perfect),  // Perfect Skull
  ];

  constructor() {
    super();
  }

  public build(): void {
    this.applyFilter();
    this.addBigTooltips(config.BigTooltipGems as number as BigTooltipSetting);
  }

  protected applyFilter(): void {
    switch (config.Gems as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(this.chippedFlawedRegular);
        this.highlightGems(this.flawless);
        this.highlightGems(this.perfect);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(this.chippedFlawedRegular);
        this.highlightGems(this.flawless);
        this.highlightGems(this.perfect);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(this.chippedFlawedRegular);
        this.hideGems(this.flawless);
        this.highlightGems(this.perfect);
        return;
      case "hide": // hide chipped/flawed/regular/flawless gems
        this.hideGems(this.chippedFlawedRegular);
        this.hideGems(this.flawless);
        this.hideGems(this.perfect);
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

  protected addBigTooltips(setting: BigTooltipSetting) {
    this.collection.getEntries().forEach(entry => {
      entry.addBigTooltip(setting, GemConstants.indentPickUpMsg); // TODO: 
    });
    }
  }
}
