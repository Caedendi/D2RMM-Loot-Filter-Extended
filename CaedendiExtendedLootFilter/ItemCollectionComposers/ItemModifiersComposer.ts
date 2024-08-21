import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { QuestConstants } from "../Constants/Items/QuestConstants";
import { IHighlight } from "../Models/Highlights/Interfaces/IHighlight";
import { ItemEntry } from "../Models/ItemCollectionEntries/ItemEntry";
import { QuestEndgameSettings } from "../Settings/Filter/QuestEndgameSettings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

// TODO: add inheritance for QuestEndgameItemsComposer, UiComposer and ItemModifiersComposer to remove duplicate code

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
    this.applyQuestItems();
  }

  protected applyQuestItems(): void {
    QuestConstants.questItemExceptionsAct5.forEach(key => this.upsertQuestItem(key, QuestEndgameSettings.highlights.quest));
  }

  private upsertQuestItem(key: string, highlight: IHighlight | null) {
    this.upsertEntry(new ItemEntry(key, null, HighlightConstants.uniqueNameColor, highlight, QuestEndgameSettings.bigTooltips.questItems));
  }

  private upsertEntry(entry: ItemEntry): void {
    this.collection.upsertIfHasHighlightOrBigTooltip(entry);
  }
}
