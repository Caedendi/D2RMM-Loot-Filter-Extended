import { ModConfigValue } from "../../../types";
import { BuffPotionsBuilder } from "../Builders/ItemNamesBuilders/BuffPotionsBuilder";
import { HealingPotionsBuilder } from "../Builders/ItemNamesBuilders/HealingPotionsBuilder";
import { ThrowingPotionsBuilder } from "../Builders/ItemNamesBuilders/ThrowingPotionsBuilder";
import { ScrollsAndTomesBuilder } from "../Builders/ItemNamesBuilders/ScrollsAndTomesBuilder";
import { AmmoBuilder } from "../Builders/ItemNamesBuilders/AmmoBuilder";
import { KeysBuilder } from "../Builders/ItemNamesBuilders/KeysBuilder";
import { JewelryBuilder } from "../Builders/ItemNamesBuilders/JewelryBuilder";
import { CharmsBuilder } from "../Builders/ItemNamesBuilders/CharmsBuilder";
import { GemsBuilder } from "../Builders/ItemNamesBuilders/GemsBuilder";
import { QuestItemsBuilder } from "../Builders/ItemNamesBuilders/QuestItemsBuilder";
import { EndgameItemsBuilder } from "../Builders/ItemNamesBuilders/EndgameItemsBuilder";
import { CustomFilterListBuilder } from "../Builders/ItemNamesBuilders/CustomFilterListBuilder";
import { CharConstants } from "../Constants/CharConstants";
import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { CharmConstants } from "../Constants/Items/CharmConstants";
import { CollectionConstants } from "../Constants/Items/CollectionConstants";
import { EndgameConstants } from "../Constants/Items/EndgameConstants";
import { FacetConstants } from "../Constants/Items/FacetConstants";
import { GemConstants } from "../Constants/Items/GemConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { JewelryConstants } from "../Constants/Items/JewelryConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { D2Color } from "../Models/D2Color";
import { BaseWriter } from "./BaseWriter";
import { IWriter } from "./Interfaces/IWriter";

// TODO:
// new design:
// - ItemNamesBuilder => ItemNamesCompiler / writer
// - individual builders, each with their own collection
// - ItemNamesCompiler holds all individual builders
// - creates a complete collection out of all individual builders' collections
// - uses target to write to file in one go

export class ItemNamesWriter extends BaseWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);

    // [
    //   CollectionConstants.junk,
    //   CollectionConstants.jewels,
    //   CollectionConstants.charms,
    //   CollectionConstants.gems,
    //   CollectionConstants.quest,
    //   CollectionConstants.endgame,
    //   CollectionConstants.customFilterList,
    // ].forEach(id => {
    //   this.initCollection(id);
    // });
  }

  public initializeBuilders(): void {
    this.builders.push(new HealingPotionsBuilder());
    this.builders.push(new BuffPotionsBuilder());
    this.builders.push(new ThrowingPotionsBuilder());
    this.builders.push(new ScrollsAndTomesBuilder());
    this.builders.push(new AmmoBuilder());
    this.builders.push(new KeysBuilder());
    // this.builders.push(new JewelryBuilder());
    // this.builders.push(new CharmsBuilder());
    // this.builders.push(new GemsBuilder());
    this.builders.push(new QuestItemsBuilder());
    this.builders.push(new EndgameItemsBuilder());
    this.builders.push(new CustomFilterListBuilder());
    
    throw new Error("Method not implemented.");
    
    this.validateConfigs(config);

    // this.customizeHealingPotions(config.HealingPotions as string);
    // this.customizeBuffPotions(config.BuffPotions as string);
    // this.customizeThrowingPotions(config.ThrowingPotions as string);
    // this.customizeScrollsAndTomes(config.ScrollsTomes as string);
    // this.customizeArrowsAndBolts(config.ArrowsBolts as string);
    // this.customizeKeys(config.Keys as string);
    // this.customizeJewels(config.Jewels as string);
    // this.customizeCharms(config.Charms as string);
    // this.customizeGems(config.Gems as string);
    this.customizeQuestItems(config.Quest as string);
    this.customizeEndgameItems(config.Endgame as string);
    // this.customizeCustomFilterList(config.shouldUseCustomFilterList as boolean);

    // TODO: refactor. add each type to its respective builder
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
  }

  protected validateConfigs(config: ModConfigValue): void {
    // todo
  }


  //==========//
  //   Junk   //
  //==========//
  // healing potions


  //==========//
  //   Gems   //
  //==========//


  //=============//
  //   Jewelry   //
  //=============//


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

    // TODO: refactor to iLvlIndent objects
    let indentNone = CharConstants.empty;
    let indentSingle = SettingsConstants.iLvlIndentFixQuestSingle;
    let indentDouble = SettingsConstants.iLvlIndentFixQuestDouble;

    let questItems = [
      // Act 1
      { id: "leg", name: "Wirt's Leg", iLvlIndent: indentDouble },
      { id: "hdm", name: "Horadric Malus", iLvlIndent: indentDouble },
      { id: "bks", name: "Scroll of Inifuss", iLvlIndent: indentNone },
      { id: "bkd", name: "Scroll of Inifuss", iLvlIndent: indentNone }, // deciphered

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
      Helper.addBigTooltips(gemsCol, settingGems, GemConstants.indentPickUpMsg);
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
        .concat(CharmConstants.uniqueLodCharmIds)
        .concat(CharmConstants.sunderCharms.map(sunder => sunder.getId()));
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
