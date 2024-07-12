import { ItemCollection } from "../../Models/ItemCollection";
import { IItemBuilder } from "./Interfaces/IItemBuilder";

export abstract class ItemBuilderBase implements IItemBuilder {
  protected collection: ItemCollection;
  
  public abstract applyFilter(): void;

  public getCollection(): ItemCollection {
    return this.collection;
  }
}
