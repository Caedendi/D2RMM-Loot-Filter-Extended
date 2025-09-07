import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { IHighlight } from "../Models/Highlights/Interfaces/IHighlight";
import { ItemEntry } from "../Models/ItemCollectionEntries/ItemEntry";
import { QuestEndgameSettings } from "../Settings/Filter/QuestEndgameSettings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

/**
 * Acts as a base for UiComposer, ItemModifiersComposer and QuestEndgameItemsComposer.
 */
export abstract class QuestItemsComposerBase extends ItemCollectionComposerBase implements IItemCollectionComposer {
  /**
   * itemCodes
   */
  private readonly _itemCodes: string[];
  protected get itemCodes(): string[] {
    return this._itemCodes;
  }

  constructor(itemCodes: string[]) {
    super();
    this._itemCodes = itemCodes;
  }

  public applyFilter() {
    this.applyQuestItems();
  }

  protected applyQuestItems(): void {
    this.itemCodes.forEach(key => this.upsertQuestItem(key, QuestEndgameSettings.highlights.quest));
  }

  protected upsertQuestItem(key: string, highlight: IHighlight | null) {
    this.upsertEntry(new ItemEntry(key, null, HighlightConstants.uniqueNameColor, highlight, QuestEndgameSettings.bigTooltips.questItems));
  }

  protected upsertEntry(entry: ItemEntry): void {
    this.collection.upsertIfHasHighlightOrBigTooltip(entry);
  }
}
