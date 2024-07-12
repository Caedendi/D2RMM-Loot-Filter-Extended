import { ItemCollection } from "../../../Models/ItemCollection";

export interface IItemBuilder {
  getCollection(): ItemCollection;
  applyFilter(): void;
}
