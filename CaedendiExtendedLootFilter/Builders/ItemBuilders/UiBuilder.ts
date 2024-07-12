import { CollectionConstants } from "../../Constants/Items/CollectionConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { BigTooltipSetting } from "../../Models/BigTooltipSetting";
import { DoubleHighlightItemEntry } from "../../Models/DoubleHighlightItemEntry";
import { iLvlFix } from "../../Models/iLvlFix";
import { ItemBuilderBase } from "./ItemNamesBuilders/ItemBuilderBase";

export class UiBuilder extends ItemBuilderBase {
  constructor() {
    super();
  }

  public build(): void {
    if (config.Quest === SettingsConstants.disabled) {
      return;
    }

    this.applyFilter(config.Quest as string);
    this.addBigTooltips(config.BigTooltipQuestItems as number as BigTooltipSetting);
  }

  // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
  protected applyFilter(setting: string) {
    let ass = "ass";
    let xyz = "xyz";

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.collection.upsert(new DoubleHighlightItemEntry(ass, "Book of Skill", iLvlFix.None, prefix, suffix));
        this.collection.upsert(new DoubleHighlightItemEntry(xyz, "Potion of Life", iLvlFix.None, prefix, suffix));
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor

        /*
        this.upsert(questCol, ass, `Book of Skill`); // Book of Skill
        this.upsert(questCol, xyz, `Potion of Life`); // Potion of Life
        */
        return;
    }
  }

  protected addBigTooltips(setting: BigTooltipSetting): void {
    this.collection.addBigTooltipToAllEntries(setting);
  }

  protected addBigTooltips(setting: BigTooltipSetting) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    if (setting !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, setting.toString());
    }
  }
}
