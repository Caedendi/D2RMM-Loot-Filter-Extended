import { CharConstants } from "../../Constants/CharConstants";
import { ItemCollection } from "../../Models/ItemCollection";
import { IBaseBuilder } from "./Interfaces/IBaseBuilder";

export abstract class BaseBuilder implements IBaseBuilder {
  public collection: ItemCollection;

  public abstract build(): void;

  // public upsert(array: {id: string, value: string}[], id: string, value: string): void {
  public upsert<T>(array: {id: string, value: T}[], id: string, value: T): void { 
    const i = array.findIndex(x => x.id === id);
    if (i > -1) array[i] = { id: id, value: value };
    else array.push({ id: id, value: value });
  }

  // TODO: delete?
  public getCollectionById(id: string): {id: string, value: string}[] {
    const i = this.collections.findIndex(x => x.id === id);
    if (i < 0)
      throw new Error(`Can't find subcollection \"${id}\" in this.collections.`);
    return this.collections[i].value;
  }
}
