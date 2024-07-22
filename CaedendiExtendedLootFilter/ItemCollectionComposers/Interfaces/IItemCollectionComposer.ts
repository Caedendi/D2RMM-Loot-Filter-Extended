import { ItemCollection } from "../../Models/ItemCollectionEntries/ItemCollection";

export interface IItemCollectionComposer {
  getCollection(): ItemCollection;
  applyFilter(): void;
}
