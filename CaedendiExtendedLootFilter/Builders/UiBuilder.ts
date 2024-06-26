import { ModConfigSingleValue } from "../../../types";
import { CollectionConstants } from "../Constants/CollectionConstants";
import { FileConstants } from "../Constants/FileConstants";
import { HighlightConstants } from "../Constants/HighlightConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { AbstractItemBuilder } from "./AbstractItemBuilder";

export class UiBuilder extends AbstractItemBuilder {
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
  // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
  customizeQuestItems(setting:ModConfigSingleValue) {
    let questCol = this.getCollectionById(CollectionConstants.quest);

    let ass = "ass";
    let xyz = "xyz";

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.upsert(questCol, ass, `${prefix}Book of Skill${suffix}`); // Book of Skill
        this.upsert(questCol, xyz, `${prefix}Potion of Life${suffix}`); // Potion of Life
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(questCol, ass, `Book of Skill`); // Book of Skill
        this.upsert(questCol, xyz, `Potion of Life`); // Potion of Life
        return;
    }
  }

  addBigTooltips(settingQuest: ModConfigSingleValue) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    if (settingQuest !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, settingQuest.toString());
    }
  }
}
