import { CharConstants } from "../Constants/CharConstants";
import { IBaseWriter } from "./Interfaces/IBaseWriter";

export abstract class BaseWriter implements IBaseWriter {
  protected target: string = CharConstants.empty;

  // TODO: refactor
  constructor(target: string) {
    if (new.target === BaseWriter) {
      throw new TypeError("Cannot construct abstract BaseWriter instances directly.");
    }

    this.target = target;
  }

  public initCollection(id: string): void {
    this.upsert(this.collections, id, []);
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
