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

  public applyFilter() {
    switch (Settings.filter.questEndgame.quest) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.collection.upsert(this.createQuestEntry("ass"));
        this.collection.upsert(this.createQuestEntry("xyz"));
        return;
    }
  }

  private createQuestEntry(key: string): ItemEntry {
    return new ItemEntry(key, null, HighlightConstants.uniqueColorName, HighlightConstants.questPattern, Settings.bigTooltips.questEndgame.questItems);
  }
}
