import { IBuilder } from "../Builders/ItemNamesBuilders/Interfaces/IBuilder";
import { CharConstants } from "../Constants/CharConstants";
import { FileConstants } from "../Constants/FileConstants";
import { ItemCollection } from "../Models/ItemCollection";
import { IWriter } from "./Interfaces/IWriter";

/**
 * An abstract containing implementations for IWriter.
 * @class
 * @property {string} target The path to the target .json file.
 * @property {IBaseBuilder[]} builders A collection of builders.
 */
export abstract class BaseWriter implements IWriter {
  protected target: string = CharConstants.empty;
  protected builders: IBuilder[] = [];

  constructor(target: string) {
    this.target = target;
    this.initializeBuilders();
  }

  /**
   * Initializes the list of builders for the target file.
   */
  public abstract initializeBuilders(): void;

  /**
   * Builds all builders, merges their collections into one and writes these entries to the target file.
   */
  public run(): void {
    this.buildAll();
    let mergedCollection = this.createMergedCollection();
    this.writeCustomNames(mergedCollection);
  }

  /**
   * 
   */
  protected buildAll(): void {
    this.builders.forEach(builder => {
      builder.build();
    });
  }

  /**
   * 
   * @returns A single {@link ItemCollection} containing all entries in {@property builders} asd
   */
  protected createMergedCollection(): ItemCollection {
    let id = this.constructor.name.replace("Writer", "Collection");
    let result = new ItemCollection(id);
    this.builders.forEach(builder => {
      result = result.concat(builder.getCollection());
    });

    return result;
  }

  /**
   * Update all entries in this.target matching the IDs in this.collections to their new values.
   */
  protected writeCustomNames(customNames: ItemCollection): void {
    let entries = customNames.getEntries();
    if (entries == undefined || entries == null || entries.length == 0) {
      return;
    }

    let file = D2RMM.readJson(this.target); // copy existing file
    var idList = entries.map(entry => entry.id);
    Object.entries(file).forEach((item) => {
      if (idList.includes(item[FileConstants.key])) { // todo: was item.Key, now replaced
        for (const key in item) {
          if (key !== FileConstants.id && key !== FileConstants.key) {
            item[key] = entries.find(x => x.id === item[FileConstants.key])?.value ?? "";
          }
        }
      }
    });

    /*
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
    */
    
    D2RMM.writeJson(this.target, file);
  }
}
