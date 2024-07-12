import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { BigTooltipSetting } from "../../Models/BigTooltipSetting";
import { DoubleHighlightItemEntry } from "../../Models/DoubleHighlightItemEntry";
import { iLvlFix } from "../../Models/iLvlFix";
import { ItemBuilderBase } from "./ItemBuilderBase";

export class UiBuilder extends ItemBuilderBase {
  protected readonly filterSetting:      string = config.Quest as string;
  protected readonly bigTooltipsSetting: BigTooltipSetting = config.BigTooltipQuestItems as number as BigTooltipSetting;

  constructor() {
    super();
  }

  // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
  public applyFilter() {
    let ass = "ass";
    let xyz = "xyz";

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (this.filterSetting) {
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

  public addBigTooltips(): void {
    if (this.bigTooltipsSetting != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToAllEntries(this.bigTooltipsSetting);
  }
}
