import { QuestConstants } from "../Constants/Items/QuestConstants";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { QuestItemsComposerBase } from "./QuestItemsComposerBase";

/**
 * Composer for ItemModifiers.json. 
 * 
 * Used for Malah's Potion and Scroll of Resistance.
 */
export class ItemModifiersComposer extends QuestItemsComposerBase implements IItemCollectionComposer {
  constructor() {
    super(QuestConstants.questItemExceptionsAct5);
  }
}
