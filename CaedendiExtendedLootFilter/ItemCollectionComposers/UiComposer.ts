import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { QuestConstants } from "../Constants/Items/QuestConstants";
import { IHighlight } from "../Models/Highlights/Interfaces/IHighlight";
import { ItemEntry } from "../Models/ItemCollectionEntries/ItemEntry";
import { QuestEndgameSettings } from "../Settings/QuestEndgameSettings";
import { Settings } from "../Settings/Settings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

// TODO: add inheritance for QuestEndgameItemsComposer, UiComposer and ItemModifiersComposer to remove duplicate code

export class UiComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter() {
    this.applyQuestItems();
  }

  protected applyQuestItems(): void {
    QuestConstants.questItemExceptionsAct23.forEach(key => this.upsertQuestItem(key, QuestEndgameSettings.highlight.quest));
  }

  private upsertQuestItem(key: string, highlight: IHighlight | null) {
    this.upsertEntry(new ItemEntry(key, null, HighlightConstants.uniqueColorName, highlight, Settings.filter.questEndgame.bigTooltips.questItems));
  }

  private upsertEntry(entry: ItemEntry): void {
    this.collection.upsertIfHasHighlightOrBigTooltip(entry);
  }
}
