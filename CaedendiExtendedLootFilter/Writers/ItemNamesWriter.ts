import { CharmsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CharmsBuilder";
import { CustomFilterListBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CustomFilterListBuilder";
import { EndgameItemsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/EndgameItemsBuilder";
import { GemsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/GemsBuilder";
import { HealingPotionsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/HealingPotionsBuilder";
import { JewelsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/JewelsBuilder";
import { JunkBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/JunkBuilder";
import { QuestItemsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/QuestItemsBuilder";
import { ScrollsAndTomesBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/ScrollsAndTomesBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { CharmConstants } from "../Constants/Items/CharmConstants";
import { CollectionConstants } from "../Constants/Items/CollectionConstants";
import { EndgameConstants } from "../Constants/Items/EndgameConstants";
import { FacetConstants } from "../Constants/Items/FacetConstants";
import { GemConstants } from "../Constants/Items/GemConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { BaseWriter } from "./BaseWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemNamesWriter extends BaseWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);
  }

  public initializeBuilders(): void {
    this.builders.push(new HealingPotionsBuilder());
    this.builders.push(new ScrollsAndTomesBuilder());
    this.builders.push(new JunkBuilder());
    this.builders.push(new GemsBuilder());
    this.builders.push(new JewelsBuilder());
    this.builders.push(new CharmsBuilder());
    this.builders.push(new QuestItemsBuilder());
    this.builders.push(new EndgameItemsBuilder());
    this.builders.push(new CustomFilterListBuilder());
    
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

  //==================//
  //   Big Tooltips   //
  //==================//
  protected addBigTooltips(settingGems: string, settingFacets: string, settingUniqueCharms: string, settingQuest: string, settingEssences: string, settingToken: string, settingKeys: string, settingOrgans: string, settingStandard: string): void {
    if (!config.IsBigTooltipsEnabled) {
      return;
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
  }
}
