import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { ItemEntry } from "../Models/ItemCollectionEntries/ItemEntry";
import { Settings } from "../Settings/Settings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

export class UiComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
  public applyFilter() {
    let ass = "ass";
    let xyz = "xyz";

    switch (Settings.filter.questEndgame.quest) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.collection.upsert(this.createQuestEntry(ass, "Book of Skill"));
        this.collection.upsert(this.createQuestEntry(xyz, "Potion of Life"));
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

  // TODO: add to ItemEntry? same method used in ItemModifiersComposer
  private createQuestEntry(key: string, name: string): ItemEntry {
    return new ItemEntry(key, name, HighlightConstants.uniqueColorName, HighlightConstants.questPattern, Settings.bigTooltips.questEndgame.questItems);
  }
}
