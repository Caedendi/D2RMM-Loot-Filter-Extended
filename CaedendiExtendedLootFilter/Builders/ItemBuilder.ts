import { CharConstants } from "../Constants/CharConstants";
import { FileConstants } from "../Constants/FileConstants";
import { IItemBuilder } from "./Interfaces/IItemBuilder";

export abstract class ItemBuilder implements IItemBuilder {
  collections = [];
  target = CharConstants.empty;

  // TODO: refactor
  constructor(target: string) {
    if (new.target === ItemBuilder) {
      throw new TypeError("Cannot construct abstract AbstractItemBuilder instances directly.");
    }

    this.target = target;
  }

  public abstract build(): void;

  // public upsert(array: {id: string, value: string}[], id: string, value: string): void {
  public upsert<T>(array: {id: string, value: T}[], id: string, value: T): void { 
    const i = array.findIndex(x => x.id === id);
    if (i > -1) array[i] = { id: id, value: value };
    else array.push({ id: id, value: value });
  }

  public initCollection(id: string): void {
    this.upsert(this.collections, id, []);
  }

  public getCollectionById(id: string): {id: string, value: string}[] {
    const i = this.collections.findIndex(x => x.id === id);
    if (i < 0)
      throw new Error(`Can't find subcollection \"${id}\" in this.collections.`);
    return this.collections[i].value;
  }

  public mergeCollections(): {id: string, value: string}[] {
    return this.collections.flatMap(sub => sub.value);
  }

  /**
   * Update all entries in this.target matching the IDs in this.collections to their new values.
   */
  public applyCustomNames(): void {
    let customNames = this.mergeCollections();
    if (customNames.length == 0) {
      throw new Error(`Could not find any subcollections.`);
    }

    let file = D2RMM.readJson(this.target); // copy existing file
    Object.entries(file).forEach((item) => {
      var idList = customNames.map(x => x.id);
      if (idList.includes(item[FileConstants.key])) { // todo: was item.Key, now replaced
        for (const key in item) {
          if (key !== FileConstants.id && key !== FileConstants.key) {
            item[key] = customNames.find(x => x.id == item[FileConstants.key]).value;
          }
        }
      }
    });

    // TODO: test

    // file.forEach((item) => {
    //   var idList = customNames.map(x => x.id);
    //   if (idList.includes(item[FileConstants.key])) { // todo: was item.Key, now replaced
    //     for (const key in item) {
    //       if (key !== FileConstants.id && key !== FileConstants.key) {
    //         item[key] = customNames.find(x => x.id == [item.Key]).value;
    //       }
    //     }
    //   }
    // });
    
    D2RMM.writeJson(this.target, file); // overwrite existing file with new file
  }
}
