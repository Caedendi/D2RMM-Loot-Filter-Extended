import { ModConfigValue } from "../../../../types";
import { CharConstants } from "../../Constants/CharConstants";
import { CollectionConstants } from "../../Constants/CollectionConstants";
import { ColorConstants } from "../../Constants/ColorConstants";
import { EndgameConstants } from "../../Constants/EndgameConstants";
import { FacetConstants } from "../../Constants/FacetConstants";
import { FileConstants } from "../../Constants/FileConstants";
import { GemConstants } from "../../Constants/GemConstants";
import { HighlightConstants } from "../../Constants/HighlightConstants";
import { JewelryConstants } from "../../Constants/JewelryConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { D2Color } from "../../Models/D2Color";
import { AbstractItemBuilder } from "../AbstractItemBuilder";
import { IHealingPotionsBuilder } from "./Interfaces/IHealingPotionsBuilder";
import { IItemNamesBuilder } from "./Interfaces/IItemNamesBuilder";

export class ItemNamesBuilder extends AbstractItemBuilder implements IItemNamesBuilder {
  protected healingPotionsBuilder: IHealingPotionsBuilder;

  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);

    [
      CollectionConstants.junk,
      CollectionConstants.jewels,
      CollectionConstants.charms,
      CollectionConstants.gems,
      CollectionConstants.quest,
      CollectionConstants.endgame,
      CollectionConstants.customFilterList,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

   public build(): void {
    this.validateConfigs(config);

    this.healingPotionsBuilder.build();

    // this.customizeHealingPotions(config.HealingPotions as string);
    this.customizeBuffPotions(config.BuffPotions as string);
    this.customizeThrowingPotions(config.ThrowingPotions as string);
    this.customizeScrollsAndTomes(config.ScrollsTomes as string);
    this.customizeArrowsAndBolts(config.ArrowsBolts as string);
    this.customizeKeys(config.Keys as string);
    this.customizeJewels(config.Jewels as string);
    this.customizeCharms(config.Charms as string);
    this.customizeGems(config.Gems as string);
    this.customizeQuestItems(config.Quest as string);
    this.customizeEndgameItems(config.Endgame as string);
    this.customizeCustomFilterList(config.shouldUseCustomFilterList as boolean);

    this.addBigTooltips(
      config.BigTooltipGems.toString(),
      config.BigTooltipFacets.toString(),
      config.BigTooltipUniqueCharms.toString(),
      config.BigTooltipQuestItems.toString(),
      config.BigTooltipEssences.toString(),
      config.BigTooltipTokens.toString(),
      config.BigTooltipKeys.toString(),
      config.BigTooltipOrgans.toString(),
      config.BigTooltipStandardOfHeroes.toString()
    );

    this.applyCustomNames();
  }

  protected validateConfigs(config: ModConfigValue): void {
    // todo
  }


  //==========//
  //   Junk   //
  //==========//
  // healing potions

  protected customizeBuffPotions(setting: string): void {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    let pots = [
      { id: "yps", name: "Antidote" }, // Antidote Potion
      { id: "wms", name: "Thawing" }, // Thawing Potion
      { id: "vps", name: "Stamina" }, // Stamina Potion
    ];

    const clrHighlight = ColorConstants.green;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.plus;
    const padding = HighlightConstants.paddingNone;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, pot.name));
        });
        return;
      case "hide": // hide all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, SettingsConstants.hidden);
        });
        return;
      case SettingsConstants.custom: // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "yps", "Antidote Potion");
        this.upsert(junkCol, "wms", "Thawing Potion");
        this.upsert(junkCol, "vps", "Stamina Potion");
        return;
    }
  }

  protected customizeThrowingPotions(setting: string): void {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrGas = ColorConstants.darkGreen;
    const clrOil = ColorConstants.orange;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.o;
    const padding = HighlightConstants.padding1;

    let pots = [
      { id: "gpl", name: "Gas 1", clr: clrGas }, // Strangling Gas Potion
      { id: "gpm", name: "Gas 2", clr: clrGas }, // Choking Gas Potion
      { id: "gps", name: "Gas 3", clr: clrGas }, // Rancid Gas Potion
      { id: "opl", name: "Oil 1", clr: clrOil }, // Fulminating Potion
      { id: "opm", name: "Oil 2", clr: clrOil }, // Exploding Potion
      { id: "ops", name: "Oil 3", clr: clrOil }, // Oil Potion
    ];

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
        });
        return;
      case "hide": // hide all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, SettingsConstants.hidden);
        });
        return;
      case SettingsConstants.custom: // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "gpl", "Strangling Gas Potion");
        this.upsert(junkCol, "gpm", "Choking Gas Potion");
        this.upsert(junkCol, "gps", "Rancid Gas Potion");
        this.upsert(junkCol, "opl", "Fulminating Potion");
        this.upsert(junkCol, "opm", "Exploding Potion");
        this.upsert(junkCol, "ops", "Oil Potion");
        return;
    }
  }

  protected customizeScrollsAndTomes(setting: string): void {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrScroll = ColorConstants.green;
    const clrTome = ColorConstants.darkGreen;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.plus;
    const padding = HighlightConstants.paddingNone;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.highlightScrolls(junkCol, clrScroll, clrName, pattern, padding);
        this.highlightTomes(junkCol, clrTome, clrName, pattern, padding);
        return;
      case "hide": // hide scrolls, show books
        this.highlightTomes(junkCol, clrTome, clrName, pattern, padding);
        this.hideScrolls(junkCol);
        return;
      case SettingsConstants.custom: // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "tsc", "Scroll of Town Portal");
        this.upsert(junkCol, "isc", "Scroll of Identify");
        this.upsert(junkCol, "tbk", "Tome of Town Portal");
        this.upsert(junkCol, "ibk", "Tome of Identify");
        return;
    }
  }

  protected hideScrolls(paperCollection): void {
    this.upsert(paperCollection, "tsc", SettingsConstants.hidden); // Scroll of Town Portal
    this.upsert(paperCollection, "isc", SettingsConstants.hidden); // Scroll of Identify
  }

  protected highlightScrolls(paperCollection, clrHighlight: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.upsert(paperCollection, "tsc", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP")); // Scroll of Town Portal
    this.upsert(paperCollection, "isc", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID")); // Scroll of Identify
  }

  protected highlightTomes(paperCollection, clrHighlight: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.upsert(paperCollection, "tbk", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP Tome")); // Tome of Town Portal
    this.upsert(paperCollection, "ibk", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID Tome")); // Tome of Identify
  }

  protected customizeArrowsAndBolts(setting: string): void {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrHighlight = ColorConstants.gray;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.o;
    const padding = HighlightConstants.padding1;
    const aqv = "aqv";
    const cqv = "cqv";
    const arrowsName = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Arrows");
    const boltsName = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Bolts");

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.upsert(junkCol, aqv, arrowsName);
        this.upsert(junkCol, cqv, boltsName);
        return;
      case "arw":
        this.upsert(junkCol, aqv, arrowsName);
        this.upsert(junkCol, cqv, SettingsConstants.hidden);
        return;
      case "blt":
        this.upsert(junkCol, aqv, SettingsConstants.hidden);
        this.upsert(junkCol, cqv, boltsName);
        return;
      case "hide":
        this.upsert(junkCol, aqv, SettingsConstants.hidden); // Arrow Quiver
        this.upsert(junkCol, cqv, SettingsConstants.hidden); // Crossbow Bolt Quiver
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, aqv, "Arrows");
        this.upsert(junkCol, cqv, "Bolts");
        return;
    }
  }

  protected customizeKeys(setting: string): void {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "hide":
        this.upsert(junkCol, "key", SettingsConstants.hidden);
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "key", "Key");
        return;
    }
  }


  //==========//
  //   Gems   //
  //==========//
  protected customizeGems(setting: string): void {
    let gemsCol = this.getCollectionById(CollectionConstants.gems);

    let chippedFlawedRegular = [
      { id: "gcv", color: GemConstants.clrAmethyst, name: GemConstants.chipped }, // Chipped Amethyst
      { id: "gcw", color: GemConstants.clrDiamond, name: GemConstants.chipped }, // Chipped Diamond
      { id: "gcg", color: GemConstants.clrEmerald, name: GemConstants.chipped }, // Chipped Emerald
      { id: "gcr", color: GemConstants.clrRuby, name: GemConstants.chipped }, // Chipped Ruby
      { id: "gcb", color: GemConstants.clrSapphire, name: GemConstants.chipped }, // Chipped Sapphire
      { id: "gcy", color: GemConstants.clrTopaz, name: GemConstants.chipped }, // Chipped Topaz
      { id: "skc", color: GemConstants.clrSkull, name: GemConstants.chipped }, // Chipped Skull
      { id: "gfv", color: GemConstants.clrAmethyst, name: GemConstants.flawed }, // Flawed Amethyst
      { id: "gfw", color: GemConstants.clrDiamond, name: GemConstants.flawed }, // Flawed Diamond
      { id: "gfg", color: GemConstants.clrEmerald, name: GemConstants.flawed }, // Flawed Emerald
      { id: "gfr", color: GemConstants.clrRuby, name: GemConstants.flawed }, // Flawed Ruby
      { id: "gfb", color: GemConstants.clrSapphire, name: GemConstants.flawed }, // Flawed Sapphire
      { id: "gfy", color: GemConstants.clrTopaz, name: GemConstants.flawed }, // Flawed Topaz
      { id: "skf", color: GemConstants.clrSkull, name: GemConstants.flawed }, // Flawed Skull
      { id: "gsv", color: GemConstants.clrAmethyst, name: GemConstants.amethyst }, // Amethyst


      // For Ruby, Sapphire, Emerald and Diamond, see the "ItemNameAffixesBuilder" section.
      // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
      { id: "gsy", color: GemConstants.clrTopaz, name: GemConstants.topaz }, // Topaz
      { id: "sku", color: GemConstants.clrSkull, name: GemConstants.skull }, // Skull
    ];
    let flawless = [
      { id: "gzv", color: GemConstants.clrAmethyst, name: GemConstants.flawless }, // Flawless Amethyst
      { id: "glw", color: GemConstants.clrDiamond, name: GemConstants.flawless }, // Flawless Diamond
      { id: "glg", color: GemConstants.clrEmerald, name: GemConstants.flawless }, // Flawless Emerald
      { id: "glr", color: GemConstants.clrRuby, name: GemConstants.flawless }, // Flawless Ruby
      { id: "glb", color: GemConstants.clrSapphire, name: GemConstants.flawless }, // Flawless Sapphire
      { id: "gly", color: GemConstants.clrTopaz, name: GemConstants.flawless }, // Flawless Topaz
      { id: "skl", color: GemConstants.clrSkull, name: GemConstants.flawless }, // Flawless Skull
    ];
    let perfect = [
      { id: "gpv", color: GemConstants.clrAmethyst, name: GemConstants.perfect }, // Perfect Amethyst
      { id: "gpw", color: GemConstants.clrDiamond, name: GemConstants.perfect }, // Perfect Diamond
      { id: "gpg", color: GemConstants.clrEmerald, name: GemConstants.perfect }, // Perfect Emerald
      { id: "gpr", color: GemConstants.clrRuby, name: GemConstants.perfect }, // Perfect Ruby
      { id: "gpb", color: GemConstants.clrSapphire, name: GemConstants.perfect }, // Perfect Sapphire
      { id: "gpy", color: GemConstants.clrTopaz, name: GemConstants.perfect }, // Perfect Topaz
      { id: "skz", color: GemConstants.clrSkull, name: GemConstants.perfect }, // Perfect Skull
    ];

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(gemsCol, chippedFlawedRegular);
        this.highlightGems(gemsCol, flawless);
        this.highlightGems(gemsCol, perfect);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(gemsCol, chippedFlawedRegular);
        this.highlightGems(gemsCol, flawless);
        this.highlightGems(gemsCol, perfect);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(gemsCol, chippedFlawedRegular);
        this.hideGems(gemsCol, flawless);
        this.highlightGems(gemsCol, perfect);
        return;
      case "hide": // hide chipped/flawed/regular/flawless gems
        this.hideGems(gemsCol, chippedFlawedRegular);
        this.hideGems(gemsCol, flawless);
        this.hideGems(gemsCol, perfect);
        return;
      case SettingsConstants.custom: // [CSTM-GEM1]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        // chipped
        this.upsert(gemsCol, "gcv", `Chipped Amethyst`);
        this.upsert(gemsCol, "gcw", `Chipped Diamond`);
        this.upsert(gemsCol, "gcg", `Chipped Emerald`);
        this.upsert(gemsCol, "gcr", `Chipped Ruby`);
        this.upsert(gemsCol, "gcb", `Chipped Sapphire`);
        this.upsert(gemsCol, "gcy", `Chipped Topaz`);
        this.upsert(gemsCol, "skc", `Chipped Skull`);
        // flawed
        this.upsert(gemsCol, "gfv", `Flawed Amethyst`);
        this.upsert(gemsCol, "gfw", `Flawed Diamond`);
        this.upsert(gemsCol, "gfg", `Flawed Emerald`);
        this.upsert(gemsCol, "gfr", `Flawed Ruby`);
        this.upsert(gemsCol, "gfb", `Flawed Sapphire`);
        this.upsert(gemsCol, "gfy", `Flawed Topaz`);
        this.upsert(gemsCol, "skf", `Flawed Skull`);
        // regular
        this.upsert(gemsCol, "gsv", `Amethyst`);
        // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section above.
        // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
        this.upsert(gemsCol, "gsy", `Topaz`);
        this.upsert(gemsCol, "sku", `Skull`);
        // flawless
        this.upsert(gemsCol, "gzv", `Flawless Amethyst`);
        this.upsert(gemsCol, "glw", `Flawless Diamond`);
        this.upsert(gemsCol, "glg", `Flawless Emerald`);
        this.upsert(gemsCol, "glr", `Flawless Ruby`);
        this.upsert(gemsCol, "glb", `Flawless Sapphire`);
        this.upsert(gemsCol, "gly", `Flawless Topaz`);
        this.upsert(gemsCol, "skl", `Flawless Skull`);
        //perfect
        this.upsert(gemsCol, "gpv", `Perfect Amethyst`);
        this.upsert(gemsCol, "gpw", `Perfect Diamond`);
        this.upsert(gemsCol, "gpg", `Perfect Emerald`);
        this.upsert(gemsCol, "gpr", `Perfect Ruby`);
        this.upsert(gemsCol, "gpb", `Perfect Sapphire`);
        this.upsert(gemsCol, "gpy", `Perfect Topaz`);
        this.upsert(gemsCol, "skz", `Perfect Skull`);
        return;
    }
  }

  protected hideGems(gemsCollection, gems): void {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, SettingsConstants.hidden);
    });
  }

  protected highlightGems(gemsCollection, gems): void {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, Helper.generateSingleHighlight(gem.color, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, gem.name));
    });
  }


  //=============//
  //   Jewelry   //
  //=============//
  protected customizeJewels(setting: string): void {
    let jewelsCol = this.getCollectionById(CollectionConstants.jewels);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "facet":
      case "facet-rb":
        this.upsert(jewelsCol, FacetConstants.facetId, `${SettingsConstants.iLvlIndentFixFacets}${FacetConstants.prefix}${FacetConstants.facetName}${FacetConstants.suffix}`);
        return;
      case SettingsConstants.custom: // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(jewelsCol, JewelryConstants.jewelId, `${ColorConstants.red}Jewel${ColorConstants.blue}`); // includes (unidentified) magic, rare and unique jewels
        this.upsert(jewelsCol, FacetConstants.facetId, `Rainbow Facet`); // identified facets
        return;
    }
  }

  protected customizeCharms(setting: string): void {
    let charmsCol = this.getCollectionById(CollectionConstants.charms);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.highlightUnidentifiedCharms(charmsCol);
        this.highlightUniqueCharms(charmsCol);
        this.highlightSunderCharms(charmsCol);
        return;
      case "uniq":
        this.highlightUniqueCharms(charmsCol);
        this.highlightSunderCharms(charmsCol);
        return;
      case "unid":
        this.highlightUnidentifiedCharms(charmsCol);
        return;
      case SettingsConstants.custom: // [CSTM-CHA]
        this.upsert(charmsCol, JewelryConstants.charmSmallId, `Small Charm`);
        this.upsert(charmsCol, JewelryConstants.charmLargeId, `Large Charm`);
        this.upsert(charmsCol, JewelryConstants.charmGrandId, `Grand Charm`);
        this.upsert(charmsCol, JewelryConstants.anniId, `Annihilus`);
        this.upsert(charmsCol, JewelryConstants.torchId, `Hellfire Torch`);
        this.upsert(charmsCol, JewelryConstants.gheedsId, `Gheed's Fortune`);
        this.upsert(charmsCol, JewelryConstants.sunderMagiId, `Black Cleft`);
        this.upsert(charmsCol, JewelryConstants.sunderPhysId, `Bone Break`);
        this.upsert(charmsCol, JewelryConstants.sunderColdId, `Cold Rupture`);
        this.upsert(charmsCol, JewelryConstants.sunderLiteId, `Crack of the Heavens`);
        this.upsert(charmsCol, JewelryConstants.sunderFireId, `Flame Rift`);
        this.upsert(charmsCol, JewelryConstants.sunderPoisId, `Rotting Fissure`);
        return;
    }
  }

  protected highlightUnidentifiedCharms(charmsCollection): void {
    let suffix = "Charm";
    this.upsert(charmsCollection, JewelryConstants.charmSmallId, `Small ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.upsert(charmsCollection, JewelryConstants.charmLargeId, `Large ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.upsert(charmsCollection, JewelryConstants.charmGrandId, `Grand ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
  }

  protected highlightUniqueCharms(charmsCollection): void {
    [JewelryConstants.anniId, JewelryConstants.torchId, JewelryConstants.gheedsId].forEach(charm => {
      this.upsert(charmsCollection, charm, `${SettingsConstants.iLvlIndentFixCharms}${JewelryConstants.charmsUniquePrefix}${charm}${JewelryConstants.charmsUniqueSuffix}`);
    });
  }

  protected highlightSunderCharms(charmsCollection): void {
    if (config.IsSunderAltPattern) {
      JewelryConstants.sunderCharms.forEach(sunder => {
        let sunderAltPatternName = Helper.generateDoubleHighlight(sunder.getColor(), HighlightConstants.uniquePattern, HighlightConstants.uniquePadding, HighlightConstants.uniqueColorName, sunder.getName());
        this.upsert(charmsCollection, sunder.getId(), `${SettingsConstants.iLvlIndentFixCharms}${sunderAltPatternName}`);
      });
    }
    else {
      JewelryConstants.sunderCharms.forEach(sunder => {
        let sunderName = `${SettingsConstants.iLvlIndentFixCharms}${JewelryConstants.charmsUniquePrefix}${sunder.getName()}${JewelryConstants.charmsUniqueSuffix}`;
        this.upsert(charmsCollection, sunder.getId(), sunderName);
      });
    }
  }

  //=================//
  //   Quest Items   //
  //=================//
  protected customizeQuestItems(setting: string): void {
    let questCol = this.getCollectionById(CollectionConstants.quest);

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightQuestItems(questCol, prefix, suffix);
        this.highlightCube(questCol, prefix, suffix);
        return;
      case "xhc": // exclude cube
        this.highlightQuestItems(questCol, prefix, suffix);
        return;
      case SettingsConstants.custom: // [CSTM-QST1]
        // todo: refactor
        // Act 1
        this.upsert(questCol, "leg", `Wirt's Leg`); // Wirt's Leg
        this.upsert(questCol, "hdm", `Horadric Malus`); // Horadric Malus
        this.upsert(questCol, "bks", `Scroll of Inifuss`); // Scroll of Inifuss
        this.upsert(questCol, "bkd", `Scroll of Inifuss`); // Scroll of Inifuss (deciphered)

        // Act 2
        this.upsert(questCol, "tr1", `Horadric Scroll`); // Horadric Scroll
        this.upsert(questCol, "box", `Horadric Cube`); // Horadric Cube
        this.upsert(questCol, "msf", `Staff of Kings`); // Staff of Kings
        this.upsert(questCol, "vip", `Amulet of the Viper`); // Amulet of the Viper
        this.upsert(questCol, "hst", `Horadric Staff`); // Horadric Staff

        // Act 3
        this.upsert(questCol, "j34", `A Jade Figurine`); // A Jade Figurine
        this.upsert(questCol, "g34", `The Golden Bird`); // The Golden Bird
        this.upsert(questCol, "bbb", `Lam Esen's Tome`); // Lam Esen's Tome
        this.upsert(questCol, "g33", `The Gidbinn`); // The Gidbinn
        this.upsert(questCol, "qf1", `Khalim's Flail`); // Khalim's Flail
        this.upsert(questCol, "qf2", `Khalim's Will`); // Khalim's Will
        this.upsert(questCol, "qey", `Khalim's Eye`); // Khalim's Eye
        this.upsert(questCol, "qhr", `Khalim's Heart`); // Khalim's Heart
        this.upsert(questCol, "qbr", `Khalim's Brain`); // Khalim's Brain
        this.upsert(questCol, "mss", `Mephisto's Soulstone`); // Mephisto's Soulstone

        // Act 4
        this.upsert(questCol, "hfh", `Hell Forge Hammer`); // Hell Forge Hammer




        // Act 5
        // See exceptions [CSTM-QST2]
        // Extra
        this.upsert(questCol, "Staff of Kings", `Staff of Kings`); // Staff of Kings
        this.upsert(questCol, "Amulet of the Viper", `Amulet of the Viper`); // Amulet of the Viper
        this.upsert(questCol, "Horadric Staff", `Horadric Staff`); // Horadric Staff
        this.upsert(questCol, "LamTome", `Lam Esen's Tome`); // Lam Esen's Tome
        this.upsert(questCol, "KhalimFlail", `Khalim's Flail`); // Khalim's Flail
        this.upsert(questCol, "SuperKhalimFlail", `Khalim's Will`); // Khalim's Will
        this.upsert(questCol, "Hell Forge Hammer", `Hell Forge Hammer`); // Hell Forge Hammer
        return;
    }
  }

  protected highlightQuestItems(questCollection, prefix, suffix): void {
    // for Book of Skill and Potion of Life, see [CSTM-QST2]
    let indentNone = CharConstants.empty;
    let indentSingle = SettingsConstants.iLvlIndentFixQuestSingle;
    let indentDouble = SettingsConstants.iLvlIndentFixQuestDouble;

    let questItems = [
      // Act 1
      { id: "leg", name: "Wirt's Leg", iLvlIndent: indentDouble },
      { id: "hdm", name: "Horadric Malus", iLvlIndent: indentDouble },
      { id: "bks", name: "Scroll of Inifuss", iLvlIndent: indentNone },
      { id: "bkd", name: "Scroll of Inifuss", iLvlIndent: indentNone },

      // Act 2
      { id: "tr1", name: "Horadric Scroll", iLvlIndent: indentNone },
      { id: "msf", name: "Staff of Kings", iLvlIndent: indentDouble },
      { id: "vip", name: "Amulet of the Viper", iLvlIndent: indentNone },
      { id: "hst", name: "Horadric Staff", iLvlIndent: indentSingle },

      // Act 3
      { id: "j34", name: "A Jade Figurine", iLvlIndent: indentNone },
      { id: "g34", name: "The Golden Bird", iLvlIndent: indentNone },
      { id: "bbb", name: "Lam Esen's Tome", iLvlIndent: indentNone },
      { id: "g33", name: "The Gidbinn", iLvlIndent: indentDouble },
      { id: "qf1", name: "Khalim's Flail", iLvlIndent: indentDouble },
      { id: "qf2", name: "Khalim's Will", iLvlIndent: indentSingle },
      { id: "qey", name: "Khalim's Eye", iLvlIndent: indentNone },
      { id: "qhr", name: "Khalim's Heart", iLvlIndent: indentNone },
      { id: "qbr", name: "Khalim's Brain", iLvlIndent: indentNone },
      { id: "mss", name: "Mephisto's Soulstone", iLvlIndent: indentNone },

      // Act 4
      { id: "hfh", name: "Hell Forge Hammer", iLvlIndent: indentDouble },

      // Act 5
      // See exceptions [CSTM-QST2]
      // Extra
      { id: "Staff of Kings", name: "Staff of Kings", iLvlIndent: indentDouble },
      { id: "Amulet of the Viper", name: "Amulet of the Viper", iLvlIndent: indentNone },
      { id: "Horadric Staff", name: "Horadric Staff", iLvlIndent: indentSingle },
      { id: "LamTome", name: "Lam Esen's Tome", iLvlIndent: indentNone },
      { id: "KhalimFlail", name: "Khalim's Flail", iLvlIndent: indentDouble },
      { id: "SuperKhalimFlail", name: "Khalim's Will", iLvlIndent: indentSingle },
      { id: "Hell Forge Hammer", name: "Hell Forge Hammer", iLvlIndent: indentDouble },
    ];

    questItems.forEach(item => {
      let indent = SettingsConstants.shouldExcludeIlvlForBigTooltips ? CharConstants.empty : item.iLvlIndent;
      this.upsert(questCollection, item.id, `${indent}${prefix}${item.name}${suffix}`);
    });
  }

  protected highlightCube(questCollection, prefix, suffix): void {
    this.upsert(questCollection, "box", `${prefix}Horadric Cube${suffix}`); // Horadric Cube
  }

  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  protected customizeEndgameItems(setting: string): void {
    let endgameCol = this.getCollectionById(CollectionConstants.endgame);

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightEndgameItems(endgameCol);
        this.highlightStandardOfHeroes(endgameCol);
        return;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems(endgameCol);
        return;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems(endgameCol);
        this.hideStandardOfHeroes(endgameCol);
        return;
      case SettingsConstants.custom: // [CSTM-END]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(endgameCol, "tes", `Twisted Essence of Suffering`);
        this.upsert(endgameCol, "ceh", `Charged Essense of Hatred`);
        this.upsert(endgameCol, "bet", `Burning Essence of Terror`);
        this.upsert(endgameCol, "fed", `Festering Essence of Destruction`);
        this.upsert(endgameCol, "toa", `Token of Absolution`);
        this.upsert(endgameCol, "pk1", `Key of Terror`);
        this.upsert(endgameCol, "pk2", `Key of Hate`);
        this.upsert(endgameCol, "pk3", `Key of Destruction`);
        this.upsert(endgameCol, "dhn", `Diablo's Horn`);
        this.upsert(endgameCol, "bey", `Baal's Eye`);
        this.upsert(endgameCol, "mbr", `Mephisto's Brain`);
        this.upsert(endgameCol, "std", `Standard of Heroes`);
        return;
    }
  }

  protected highlightEndgameItems(endgameCollection): void {
    let endgameItems = [].concat(EndgameConstants.essences, EndgameConstants.keys, EndgameConstants.organs);
    endgameItems.push(EndgameConstants.token);

    endgameItems.forEach(item => {
      this.upsert(endgameCollection, item.id, `${item.prefix}${item.name}${item.suffix}`);
    });
  }

  protected highlightStandardOfHeroes(endgameCollection): void {
    this.upsert(endgameCollection, EndgameConstants.standard.id, `${EndgameConstants.standard.prefix}${EndgameConstants.standard.name}${EndgameConstants.standard.suffix}`);
  }

  protected hideStandardOfHeroes(endgameCollection): void {
    this.upsert(endgameCollection, EndgameConstants.standard.id, SettingsConstants.hidden);
  }


  //========================//
  //   Custom Filter List   //
  //========================//
  protected customizeCustomFilterList(shouldUseCustomFilterList): void {
    let cflCol = this.getCollectionById(CollectionConstants.customFilterList);
    // This list changes entries in item-names.json, so it supports all base items (amulet, berserker axe), sets (Tal Rasha's Guardianship, Angelic Halo) and uniques (Griffon's Eye, The Stone of Jordan). 
    // Search the file for what key to use.
    const PFL_CLR_NAME = ColorConstants.purple;
    const PFL_CLR_PATTERN = ColorConstants.red;
    const PFL_PATTERN = HighlightConstants.pattern10;
    const PFL_PADDING = HighlightConstants.padding5;

    if (shouldUseCustomFilterList) { // [CSTM-CFL]
      // ADD YOUR CUSTOM ITEM NAMES HERE
      // examples
      // this.upsert(cflCol,           "jav", "");                                                          // Javelin, hide
      // this.upsert(cflCol,           "jav", SettingsConstants.hidden);                                    // Javelin, hide
      // this.upsert(cflCol,           "jav", `${ColorConstants.black}Javelin`);                            // Javelin, color name black
      // this.upsert(cflCol,           "7gw", `${ColorConstants.red}Unearthed Wand${ColorConstants.blue}`); // Unearthed Wand, color name red
      // this.upsert(cflCol,           "7gw", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Unearthed Wand")}${ColorConstants.blue}`); // Unearthed Wand, highlight
      // this.upsert(cflCol,   "Death's Web", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Death's Web"                         )}`); // Unearthed Wand, highlight
      // this.upsert(cflCol,           "skp", "");                                                  // Skull Cap, hide
      // this.upsert(cflCol,           "skp", SettingsConstants.hidden);                            // Skull Cap, hide
      // this.upsert(cflCol,           "skp", `${ColorConstants.black}Skull Cap`);                  // Skull Cap, color name black
      // this.upsert(cflCol,           "ci3", `${ColorConstants.red}Diadem${ColorConstants.blue}`); // Diadem, color name red
      // this.upsert(cflCol,           "ci3", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Diadem")}${ColorConstants.blue}`); // Diadem, highlight
      // this.upsert(cflCol, "Griffon's Eye", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Griffon's Eye"               )}`); // Griffon's Eye, highlight
    }
  }


  //==================//
  //   Big Tooltips   //
  //==================//
  protected addBigTooltips(settingGems: string, settingFacets: string, settingUniqueCharms: string, settingQuest: string, settingEssences: string, settingToken: string, settingKeys: string, settingOrgans: string, settingStandard: string): void {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    // gems
    if (settingGems !== SettingsConstants.disabled) {
      let gemsCol = this.getCollectionById(CollectionConstants.gems);
      Helper.addBigTooltips(gemsCol, settingGems, JewelryConstants.indentPickUpMsg);
    }

    // facets
    if (settingFacets !== SettingsConstants.disabled) {
      let jewelsCol = this.getCollectionById(CollectionConstants.jewels);
      Helper.addBigTooltipForId(jewelsCol, FacetConstants.facetId, settingFacets);
    }

    // unique charms
    if (settingUniqueCharms !== SettingsConstants.disabled) {
      let charmsCol = this.getCollectionById(CollectionConstants.charms);
      let uniqueCharms = []
        .concat(JewelryConstants.uniqueLodCharmIds)
        .concat(JewelryConstants.sunderCharms.map(sunder => sunder.getId()));
      Helper.addBigTooltipsForIds(charmsCol, uniqueCharms, settingUniqueCharms);
    }

    // quest items
    if (settingQuest !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, settingQuest);
    }

    // essences
    if (settingEssences !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.essences.map(ess => ess.id), settingEssences);
    }

    // tokens of absolution
    if (settingToken !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipForId(endgameCol, EndgameConstants.token.id, settingToken);
    }

    // pandemonium keys
    if (settingKeys !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.keys.map(key => key.id), settingKeys);
    }

    // pandemonium organs
    if (settingOrgans !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.organs.map(org => org.id), settingOrgans);
    }

    // standard of heroes
    if (settingStandard !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipForId(endgameCol, EndgameConstants.standard.id, settingStandard);
    }
  }
}
