import { CollectionConstants } from "../Constants/Items/CollectionConstants";
import { FileConstants } from "../Constants/FileConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { ItemBuilder } from "./ItemBuilder";


export class ItemModifiersBuilder extends ItemBuilder {
  constructor() {
    super(FileConstants.FILE_UI_PATH);

    [
      CollectionConstants.quest,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if (config.Quest === SettingsConstants.disabled) {
      return;
    }

    this.customizeQuestItems(config.Quest as string);
    this.addBigTooltips(config.BigTooltipQuestItems as string);
    this.applyCustomNames();
  }

  //=================//
  //   Quest Items   //
  //=================//
  // Section specific to Malah's Potion and Scroll of Resistance, as these items are in a different file.
  customizeQuestItems(setting:string) {
    let questCol = this.getCollectionById(CollectionConstants.quest);

    let ice = "ice";
    let tr2 = "tr2";

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.upsert(questCol, ice, `${prefix}Malah's Potion${suffix}`); // Malah's Potion
        this.upsert(questCol, tr2, `${prefix}Scroll of Resistance${suffix}`); // Scroll of Resistance
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(questCol, ice, `Malah's Potion`); // Malah's Potion
        this.upsert(questCol, tr2, `Scroll of Resistance`); // Scroll of Resistance
        return;
    }
  }

  addBigTooltips(settingQuest:string) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    // todo
    if (settingQuest !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, settingQuest);
    }
  }
}
