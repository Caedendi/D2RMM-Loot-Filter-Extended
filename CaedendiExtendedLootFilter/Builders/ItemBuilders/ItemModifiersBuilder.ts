import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { BigTooltipSetting } from "../../Models/BigTooltipSetting";
import { DoubleHighlightItemEntry } from "../../Models/DoubleHighlightItemEntry";
import { iLvlFix } from "../../Models/iLvlFix";
import { IItemBuilder } from "./Interfaces/IItemBuilder";
import { ItemBuilderBase } from "./ItemBuilderBase";

/**
 * Builder for ItemModifiers.json. 
 * 
 * Used for Malah's Potion and Scroll of Resistance.
 */
export class ItemModifiersBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly filterSetting: string = config.Quest as string
  protected readonly bigTooltipsSetting: BigTooltipSetting = config.BigTooltipQuestItems as number as BigTooltipSetting;

  constructor() {
    super();
  }

  public applyFilter() {
    let ice = "ice";
    let tr2 = "tr2";
    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (this.filterSetting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.collection.upsert(new DoubleHighlightItemEntry(ice, "Malah's Potion",       iLvlFix.None, prefix, suffix));
        this.collection.upsert(new DoubleHighlightItemEntry(tr2, "Scroll of Resistance", iLvlFix.None, prefix, suffix));
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        /*
        this.upsert(questCol, ice, `Malah's Potion`); // Malah's Potion
        this.upsert(questCol, tr2, `Scroll of Resistance`); // Scroll of Resistance
        */
        return;
    }
  }

  public addBigTooltips(): void {
    if (this.bigTooltipsSetting != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToAllEntries(this.bigTooltipsSetting);
  }
}
