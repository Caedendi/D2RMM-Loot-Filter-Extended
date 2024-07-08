import { ItemCollection } from "../../../Models/ItemCollection";

export interface IItemBuilder {
  build(): void;
  getCollection(): ItemCollection;
}
