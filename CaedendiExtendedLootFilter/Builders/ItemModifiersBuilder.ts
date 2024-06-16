import { CollectionConstants } from "../Constants/CollectionConstants.ts";
import { FileConstants } from "../Constants/FileConstants.ts";
import { HighlightConstants } from "../Constants/HighlightConstants.ts";
import { SettingsConstants } from "../Constants/SettingsConstants.ts";
import { Helper } from "../helper.ts";
import { AbstractItemBuilder } from "./AbstractItemBuilder.ts";


export class ItemModifiersBuilder extends AbstractItemBuilder {
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

    this.customizeQuestItems(config.Quest);
    this.addBigTooltips(config.BigTooltipQuestItems);
    this.applyCustomNames();
  }

  //=================//
  //   Quest Items   //
  //=================//
  // Section specific to Malah's Potion and Scroll of Resistance, as these items are in a different file.
  customizeQuestItems(setting) {
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

  addBigTooltips(settingQuest) {
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
