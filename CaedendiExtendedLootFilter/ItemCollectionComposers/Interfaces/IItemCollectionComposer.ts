import { ItemCollection } from "../../Models/ItemCollection";

export interface IItemCollectionComposer {
  getCollection(): ItemCollection;
  applyFilter(): void;
}
