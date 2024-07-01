import { ItemCollection } from "../../Models/ItemCollection";
import { IBuilder } from "./Interfaces/IBuilder";

export abstract class BaseBuilder implements IBuilder {
  protected collection: ItemCollection;
  
  public abstract build(): void;

  public getCollection(): ItemCollection {
    return this.collection;
  }
}
