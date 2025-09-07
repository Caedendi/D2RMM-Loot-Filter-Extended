import { QuestConstants } from "../Constants/Items/QuestConstants";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { QuestItemsComposerBase } from "./QuestItemsComposerBase";

/**
 * Composer for ui.json.
 * 
 * Used for Book of Skill and Potion of Life.
 */
export class UiComposer extends QuestItemsComposerBase implements IItemCollectionComposer {
  constructor() {
    super(QuestConstants.questItemExceptionsAct23);
  }
}
