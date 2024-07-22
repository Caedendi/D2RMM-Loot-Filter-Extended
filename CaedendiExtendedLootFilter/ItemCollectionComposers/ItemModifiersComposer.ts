import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { ItemEntry } from "../Models/ItemCollectionEntries/ItemEntry";
import { Settings } from "../Settings/Settings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

/**
 * Builder for ItemModifiers.json. 
 * 
 * Used for Malah's Potion and Scroll of Resistance.
 */
export class ItemModifiersComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter() {
    let ice = "ice";
    let tr2 = "tr2";

    switch (Settings.filter.questEndgame.quest) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.collection.upsert(this.createQuestEntry(ice, "Malah's Potion"));
        this.collection.upsert(this.createQuestEntry(tr2, "Scroll of Resistance"));
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

  private createQuestEntry(key: string, name: string): ItemEntry {
    return new ItemEntry(key, name, HighlightConstants.uniqueColorName, HighlightConstants.questPattern, Settings.bigTooltips.questEndgame.questItems);
  }
}
