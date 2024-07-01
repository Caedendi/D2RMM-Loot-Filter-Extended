import { ItemCollection } from "../../../Models/ItemCollection";

export interface IBuilder {
  build(): void;
  getCollection(): ItemCollection;
}
