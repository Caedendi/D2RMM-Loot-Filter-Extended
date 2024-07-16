import { ItemCollection } from "../Models/ItemCollection";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";

export abstract class ItemCollectionComposerBase implements IItemCollectionComposer {
  protected collection: ItemCollection = new ItemCollection();

  public getCollection(): ItemCollection {
    return this.collection;
  }
  
  public abstract applyFilter(): void;
}
