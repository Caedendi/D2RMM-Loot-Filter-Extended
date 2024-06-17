import { CharConstants } from "../Constants/CharConstants";
import { CollectionConstants } from "../Constants/CollectionConstants";
import { ColorConstants } from "../Constants/ColorConstants";
import { EndgameConstants } from "../Constants/EndgameConstants";
import { FileConstants } from "../Constants/FileConstants";
import { HighlightConstants } from "../Constants/HighlightConstants";
import { JewelryConstants } from "../Constants/JewelryConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../helper";
import { AbstractItemBuilder } from "./AbstractItemBuilder";

export class ItemNamesBuilder extends AbstractItemBuilder {
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

  build() {
    this.customizeHealingPotions(config.HealingPotions);
    this.customizeBuffPotions(config.BuffPotions);
    this.customizeThrowingPotions(config.ThrowingPotions);
    this.customizeScrollsAndTomes(config.ScrollsTomes);
    this.customizeArrowsAndBolts(config.ArrowsBolts);
    this.customizeKeys(config.Keys);
    this.customizeJewels(config.Jewels);
    this.customizeCharms(config.Charms);
    this.customizeGems(config.Gems);
    this.customizeQuestItems(config.Quest);
    this.customizeEndgameItems(config.Endgame);
    this.customizeCustomFilterList(config.shouldUseCustomFilterList);

    this.addBigTooltips(config.BigTooltipGems, config.BigTooltipFacets, config.BigTooltipUniqueCharms, config.BigTooltipQuestItems,
      config.BigTooltipEssences, config.BigTooltipTokens, config.BigTooltipKeys, config.BigTooltipOrgans, config.BigTooltipStandardOfHeroes);

    this.applyCustomNames();
  }


  //==========//
  //   Junk   //
  //==========//
  customizeHealingPotions(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrHeal = ColorConstants.red;
    const clrMana = ColorConstants.blue;
    const clrRej = ColorConstants.purple;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.plus;
    const padding = HighlightConstants.paddingNone;

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightLv123Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions(junkCol);
        return;
      case SettingsConstants.custom: // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "hp1", `${clrHeal}+${clrName}HP1`); // Minor Healing Potion
        this.upsert(junkCol, "hp2", `${clrHeal}+${clrName}HP2`); // Light Healing Potion
        this.upsert(junkCol, "hp3", `${clrHeal}+${clrName}HP3`); // Healing Potion
        this.upsert(junkCol, "hp4", `${clrHeal}+${clrName}HP4`); // Greater Healing Potion
        this.upsert(junkCol, "hp5", `${clrHeal}+${clrName}HP5`); // Super Healing Potion

        this.upsert(junkCol, "mp1", `${clrMana}+${clrName}MP1`); // Minor Mana Potion
        this.upsert(junkCol, "mp2", `${clrMana}+${clrName}MP2`); // Light Mana Potion
        this.upsert(junkCol, "mp3", `${clrMana}+${clrName}MP3`); // Mana Potion
        this.upsert(junkCol, "mp4", `${clrMana}+${clrName}MP4`); // Greater Mana Potion
        this.upsert(junkCol, "mp5", `${clrMana}+${clrName}MP5`); // Super Mana Potion

        this.upsert(junkCol, "rvs", `${clrRej}+${clrName}RPS`); // Rejuvenation Potion
        this.upsert(junkCol, "rvl", `${clrRej}+${clrName}RPF`); // Full Rejuvenation Potion
        return;
    }
  }

  hideHealingPotions(potionsCollection) {
    [
      "hp1", "hp2", "hp3", "hp4", "hp5",
      "mp1", "mp2", "mp3", "mp4", "mp5",
      "rvs", "rvl",
    ].forEach(pot => {
      this.upsert(potionsCollection, pot, SettingsConstants.hidden);
    });
  }

  highlightLv123Potions(potionsCollection, clrHeal, clrMana, clrName, pattern, padding) {
    [
      { id: "hp1", name: "HP1", clr: clrHeal },
      { id: "hp2", name: "HP2", clr: clrHeal },
      { id: "hp3", name: "HP3", clr: clrHeal },
      { id: "mp1", name: "MP1", clr: clrMana },
      { id: "mp2", name: "MP2", clr: clrMana },
      { id: "mp3", name: "MP3", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

  highlightLv4Potions(potionsCollection, clrHeal, clrMana, clrName, pattern, padding) {
    [
      { id: "hp4", name: "HP4", clr: clrHeal },
      { id: "mp4", name: "MP4", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

  highlightLv5Potions(potionsCollection, clrHeal, clrMana, clrName, pattern, padding) {
    [
      { id: "hp5", name: "HP5", clr: clrHeal },
      { id: "mp5", name: "MP5", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

  highlightSmallRejuvs(potionsCollection, clrRej, clrName, pattern, padding) {
    this.upsert(potionsCollection, "rvs", Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPS"));
  }

  highlightFullRejuvs(potionsCollection, clrRej, clrName, pattern, padding) {
    this.upsert(potionsCollection, "rvl", Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPF"));
  }

  customizeBuffPotions(setting) {
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

  customizeThrowingPotions(setting) {
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

  customizeScrollsAndTomes(setting) {
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

  hideScrolls(paperCollection) {
    this.upsert(paperCollection, "tsc", SettingsConstants.hidden); // Scroll of Town Portal
    this.upsert(paperCollection, "isc", SettingsConstants.hidden); // Scroll of Identify
  }

  highlightScrolls(paperCollection, clrHighlight, clrName, pattern, padding) {
    this.upsert(paperCollection, "tsc", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP")); // Scroll of Town Portal
    this.upsert(paperCollection, "isc", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID")); // Scroll of Identify
  }

  highlightTomes(paperCollection, clrHighlight, clrName, pattern, padding) {
    this.upsert(paperCollection, "tbk", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP Tome")); // Tome of Town Portal
    this.upsert(paperCollection, "ibk", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID Tome")); // Tome of Identify
  }

  customizeArrowsAndBolts(setting) {
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

  customizeKeys(setting) {
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
  customizeGems(setting) {
    let gemsCol = this.getCollectionById(CollectionConstants.gems);

    let chippedFlawedRegular = [
      { id: "gcv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.chipped }, // Chipped Amethyst
      { id: "gcw", color: JewelryConstants.clrDiamond, name: JewelryConstants.chipped }, // Chipped Diamond
      { id: "gcg", color: JewelryConstants.clrEmerald, name: JewelryConstants.chipped }, // Chipped Emerald
      { id: "gcr", color: JewelryConstants.clrRuby, name: JewelryConstants.chipped }, // Chipped Ruby
      { id: "gcb", color: JewelryConstants.clrSapphire, name: JewelryConstants.chipped }, // Chipped Sapphire
      { id: "gcy", color: JewelryConstants.clrTopaz, name: JewelryConstants.chipped }, // Chipped Topaz
      { id: "skc", color: JewelryConstants.clrSkull, name: JewelryConstants.chipped }, // Chipped Skull
      { id: "gfv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.flawed }, // Flawed Amethyst
      { id: "gfw", color: JewelryConstants.clrDiamond, name: JewelryConstants.flawed }, // Flawed Diamond
      { id: "gfg", color: JewelryConstants.clrEmerald, name: JewelryConstants.flawed }, // Flawed Emerald
      { id: "gfr", color: JewelryConstants.clrRuby, name: JewelryConstants.flawed }, // Flawed Ruby
      { id: "gfb", color: JewelryConstants.clrSapphire, name: JewelryConstants.flawed }, // Flawed Sapphire
      { id: "gfy", color: JewelryConstants.clrTopaz, name: JewelryConstants.flawed }, // Flawed Topaz
      { id: "skf", color: JewelryConstants.clrSkull, name: JewelryConstants.flawed }, // Flawed Skull
      { id: "gsv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.amethyst }, // Amethyst


      // For Ruby, Sapphire, Emerald and Diamond, see the "ItemNameAffixesBuilder" section.
      // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
      { id: "gsy", color: JewelryConstants.clrTopaz, name: JewelryConstants.topaz }, // Topaz
      { id: "sku", color: JewelryConstants.clrSkull, name: JewelryConstants.skull }, // Skull
    ];
    let flawless = [
      { id: "gzv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.flawless }, // Flawless Amethyst
      { id: "glw", color: JewelryConstants.clrDiamond, name: JewelryConstants.flawless }, // Flawless Diamond
      { id: "glg", color: JewelryConstants.clrEmerald, name: JewelryConstants.flawless }, // Flawless Emerald
      { id: "glr", color: JewelryConstants.clrRuby, name: JewelryConstants.flawless }, // Flawless Ruby
      { id: "glb", color: JewelryConstants.clrSapphire, name: JewelryConstants.flawless }, // Flawless Sapphire
      { id: "gly", color: JewelryConstants.clrTopaz, name: JewelryConstants.flawless }, // Flawless Topaz
      { id: "skl", color: JewelryConstants.clrSkull, name: JewelryConstants.flawless }, // Flawless Skull
    ];
    let perfect = [
      { id: "gpv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.perfect }, // Perfect Amethyst
      { id: "gpw", color: JewelryConstants.clrDiamond, name: JewelryConstants.perfect }, // Perfect Diamond
      { id: "gpg", color: JewelryConstants.clrEmerald, name: JewelryConstants.perfect }, // Perfect Emerald
      { id: "gpr", color: JewelryConstants.clrRuby, name: JewelryConstants.perfect }, // Perfect Ruby
      { id: "gpb", color: JewelryConstants.clrSapphire, name: JewelryConstants.perfect }, // Perfect Sapphire
      { id: "gpy", color: JewelryConstants.clrTopaz, name: JewelryConstants.perfect }, // Perfect Topaz
      { id: "skz", color: JewelryConstants.clrSkull, name: JewelryConstants.perfect }, // Perfect Skull
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

  hideGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, SettingsConstants.hidden);
    });
  }

  highlightGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, Helper.generateSingleHighlight(gem.color, JewelryConstants.highlight, JewelryConstants.padding, JewelryConstants.clrName, gem.name));
    });
  }


  //=============//
  //   Jewelry   //
  //=============//
  customizeJewels(setting) {
    let jewelsCol = this.getCollectionById(CollectionConstants.jewels);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "facet":
      case "facet-rb":
        this.upsert(jewelsCol, JewelryConstants.facet, `${SettingsConstants.iLvlIndentFixFacets}${JewelryConstants.facetPrefix}${JewelryConstants.facet}${JewelryConstants.facetSuffix}`);
        return;
      case SettingsConstants.custom: // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(jewelsCol, JewelryConstants.jewel, `${ColorConstants.red}Jewel${ColorConstants.blue}`); // includes (unidentified) magic, rare and unique jewels
        this.upsert(jewelsCol, JewelryConstants.facet, `Rainbow Facet`); // identified facets
        return;
    }
  }

  customizeCharms(setting) {
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
        this.upsert(charmsCol, JewelryConstants.charmSmall, `Small Charm`);
        this.upsert(charmsCol, JewelryConstants.charmLarge, `Large Charm`);
        this.upsert(charmsCol, JewelryConstants.charmGrand, `Grand Charm`);
        this.upsert(charmsCol, JewelryConstants.anni, `Annihilus`);
        this.upsert(charmsCol, JewelryConstants.torch, `Hellfire Torch`);
        this.upsert(charmsCol, JewelryConstants.gheeds, `Gheed's Fortune`);
        this.upsert(charmsCol, JewelryConstants.sunderMagic, `Black Cleft`);
        this.upsert(charmsCol, JewelryConstants.sunderPhys, `Bone Break`);
        this.upsert(charmsCol, JewelryConstants.sunderCold, `Cold Rupture`);
        this.upsert(charmsCol, JewelryConstants.sunderLite, `Crack of the Heavens`);
        this.upsert(charmsCol, JewelryConstants.sunderFire, `Flame Rift`);
        this.upsert(charmsCol, JewelryConstants.sunderPsn, `Rotting Fissure`);
        return;
    }
  }

  highlightUnidentifiedCharms(charmsCollection) {
    let suffix = "Charm";
    this.upsert(charmsCollection, JewelryConstants.charmSmall, `Small ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.upsert(charmsCollection, JewelryConstants.charmLarge, `Large ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.upsert(charmsCollection, JewelryConstants.charmGrand, `Grand ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
  }

  highlightUniqueCharms(charmsCollection) {
    [JewelryConstants.anni, JewelryConstants.torch, JewelryConstants.gheeds].forEach(charm => {
      this.upsert(charmsCollection, charm, `${SettingsConstants.iLvlIndentFixCharms}${JewelryConstants.charmsUniquePrefix}${charm}${JewelryConstants.charmsUniqueSuffix}`);
    });
  }

  highlightSunderCharms(charmsCollection) {
    if (config.IsSunderAltPattern) {
      JewelryConstants.sunderCharms.forEach(charm => {
        this.upsert(charmsCollection, charm.name, SettingsConstants.iLvlIndentFixCharms + Helper.generateDoubleHighlight(charm.color, HighlightConstants.uniquePattern, HighlightConstants.uniquePadding, HighlightConstants.uniqueColorName, charm.name));
      });
    }
    else {
      JewelryConstants.sunderCharms.forEach(charm => {
        this.upsert(charmsCollection, charm.name, `${SettingsConstants.iLvlIndentFixCharms}${JewelryConstants.charmsUniquePrefix}${charm.name}${JewelryConstants.charmsUniqueSuffix}`);
      });
    }
  }

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
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

  highlightQuestItems(questCollection, prefix, suffix) {
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

  highlightCube(questCollection, prefix, suffix) {
    this.upsert(questCollection, "box", `${prefix}Horadric Cube${suffix}`); // Horadric Cube
  }

  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(setting) {
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

  highlightEndgameItems(endgameCollection) {
    let endgameItems = [].concat(EndgameConstants.essences, EndgameConstants.keys, EndgameConstants.organs);
    endgameItems.push(EndgameConstants.token);

    endgameItems.forEach(item => {
      this.upsert(endgameCollection, item.id, `${item.prefix}${item.name}${item.suffix}`);
    });
  }

  highlightStandardOfHeroes(endgameCollection) {
    this.upsert(endgameCollection, EndgameConstants.standard.id, `${EndgameConstants.standard.prefix}${EndgameConstants.standard.name}${EndgameConstants.standard.suffix}`);
  }

  hideStandardOfHeroes(endgameCollection) {
    this.upsert(endgameCollection, EndgameConstants.standard.id, SettingsConstants.hidden);
  }


  //========================//
  //   Custom Filter List   //
  //========================//
  customizeCustomFilterList(shouldUseCustomFilterList) {
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
  addBigTooltips(settingGems, settingFacets, settingUniqueCharms, settingQuest, settingEssences, settingToken, settingKeys, settingOrgans, settingStandard) {
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
      Helper.addBigTooltipForId(jewelsCol, JewelryConstants.facet, settingFacets);
    }

    // unique charms
    if (settingUniqueCharms !== SettingsConstants.disabled) {
      let charmsCol = this.getCollectionById(CollectionConstants.charms);
      let uniqueCharms = []
        .concat(JewelryConstants.uniqueLodCharms)
        .concat(JewelryConstants.sunderCharms.map(sunder => sunder.name));
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
