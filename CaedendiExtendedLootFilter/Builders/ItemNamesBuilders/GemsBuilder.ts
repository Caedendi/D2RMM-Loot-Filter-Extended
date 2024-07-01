import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { Gem } from "../../Models/Gem";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class GemsBuilder extends BaseBuilder implements IBuilder {
  protected readonly chippedFlawedRegular: Gem[] = [
    new Gem("gcv", GemConstants.clrAmethyst, GemConstants.chipped), // Chipped Amethyst
    new Gem("gcw", GemConstants.clrDiamond, GemConstants.chipped), // Chipped Diamond
    new Gem("gcg", GemConstants.clrEmerald, GemConstants.chipped), // Chipped Emerald
    new Gem("gcr", GemConstants.clrRuby, GemConstants.chipped), // Chipped Ruby
    new Gem("gcb", GemConstants.clrSapphire, GemConstants.chipped), // Chipped Sapphire
    new Gem("gcy", GemConstants.clrTopaz, GemConstants.chipped), // Chipped Topaz
    new Gem("skc", GemConstants.clrSkull, GemConstants.chipped), // Chipped Skull
    new Gem("gfv", GemConstants.clrAmethyst, GemConstants.flawed), // Flawed Amethyst
    new Gem("gfw", GemConstants.clrDiamond, GemConstants.flawed), // Flawed Diamond
    new Gem("gfg", GemConstants.clrEmerald, GemConstants.flawed), // Flawed Emerald
    new Gem("gfr", GemConstants.clrRuby, GemConstants.flawed), // Flawed Ruby
    new Gem("gfb", GemConstants.clrSapphire, GemConstants.flawed), // Flawed Sapphire
    new Gem("gfy", GemConstants.clrTopaz, GemConstants.flawed), // Flawed Topaz
    new Gem("skf", GemConstants.clrSkull, GemConstants.flawed), // Flawed Skull
    new Gem("gsv", GemConstants.clrAmethyst, GemConstants.amethyst), // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see the "ItemNameAffixesBuilder" section.
    // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
    new Gem("gsy", GemConstants.clrTopaz, GemConstants.topaz), // Topaz
    new Gem("sku", GemConstants.clrSkull, GemConstants.skull), // Skull
  ];
  protected readonly flawless: Gem[] = [
    new Gem("gzv", GemConstants.clrAmethyst, GemConstants.flawless), // Flawless Amethyst
    new Gem("glw", GemConstants.clrDiamond, GemConstants.flawless), // Flawless Diamond
    new Gem("glg", GemConstants.clrEmerald, GemConstants.flawless), // Flawless Emerald
    new Gem("glr", GemConstants.clrRuby, GemConstants.flawless), // Flawless Ruby
    new Gem("glb", GemConstants.clrSapphire, GemConstants.flawless), // Flawless Sapphire
    new Gem("gly", GemConstants.clrTopaz, GemConstants.flawless), // Flawless Topaz
    new Gem("skl", GemConstants.clrSkull, GemConstants.flawless), // Flawless Skull
  ];
  protected readonly perfect: Gem[] = [
    new Gem("gpv", GemConstants.clrAmethyst, GemConstants.perfect), // Perfect Amethyst
    new Gem("gpw", GemConstants.clrDiamond, GemConstants.perfect), // Perfect Diamond
    new Gem("gpg", GemConstants.clrEmerald, GemConstants.perfect), // Perfect Emerald
    new Gem("gpr", GemConstants.clrRuby, GemConstants.perfect), // Perfect Ruby
    new Gem("gpb", GemConstants.clrSapphire, GemConstants.perfect), // Perfect Sapphire
    new Gem("gpy", GemConstants.clrTopaz, GemConstants.perfect), // Perfect Topaz
    new Gem("skz", GemConstants.clrSkull, GemConstants.perfect), // Perfect Skull
  ];

  constructor() {
    super();
  }

  public build(): void {
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
        // chipped
        this.collection.upsert("gcv", `Chipped Amethyst`);
        this.collection.upsert("gcw", `Chipped Diamond`);
        this.collection.upsert("gcg", `Chipped Emerald`);
        this.collection.upsert("gcr", `Chipped Ruby`);
        this.collection.upsert("gcb", `Chipped Sapphire`);
        this.collection.upsert("gcy", `Chipped Topaz`);
        this.collection.upsert("skc", `Chipped Skull`);
        // flawed
        this.collection.upsert("gfv", `Flawed Amethyst`);
        this.collection.upsert("gfw", `Flawed Diamond`);
        this.collection.upsert("gfg", `Flawed Emerald`);
        this.collection.upsert("gfr", `Flawed Ruby`);
        this.collection.upsert("gfb", `Flawed Sapphire`);
        this.collection.upsert("gfy", `Flawed Topaz`);
        this.collection.upsert("skf", `Flawed Skull`);
        // regular
        this.collection.upsert("gsv", `Amethyst`);
        // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section above.
        // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
        this.collection.upsert("gsy", `Topaz`);
        this.collection.upsert("sku", `Skull`);
        // flawless
        this.collection.upsert("gzv", `Flawless Amethyst`);
        this.collection.upsert("glw", `Flawless Diamond`);
        this.collection.upsert("glg", `Flawless Emerald`);
        this.collection.upsert("glr", `Flawless Ruby`);
        this.collection.upsert("glb", `Flawless Sapphire`);
        this.collection.upsert("gly", `Flawless Topaz`);
        this.collection.upsert("skl", `Flawless Skull`);
        //perfect
        this.collection.upsert("gpv", `Perfect Amethyst`);
        this.collection.upsert("gpw", `Perfect Diamond`);
        this.collection.upsert("gpg", `Perfect Emerald`);
        this.collection.upsert("gpr", `Perfect Ruby`);
        this.collection.upsert("gpb", `Perfect Sapphire`);
        this.collection.upsert("gpy", `Perfect Topaz`);
        this.collection.upsert("skz", `Perfect Skull`);
        return;
    }
  }

  protected hideGems(gems: Gem[]): void {
    gems.forEach(gem => {
      this.collection.upsert(gem.getId(), SettingsConstants.hidden);
    });
  }

  protected highlightGems(gems: Gem[]): void {
    gems.forEach(gem => {
      this.collection.upsert(gem.getId(), Helper.generateSingleHighlight(gem.getColor(), GemConstants.highlight, GemConstants.padding, GemConstants.clrName, gem.getName()));
    });
  }
}
