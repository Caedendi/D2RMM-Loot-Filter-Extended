import { CharConstants } from "../Constants/CharConstants";
import { FileConstants } from "../Constants/FileConstants";
import { IItemCollectionComposer } from "../ItemCollectionComposers/Interfaces/IItemCollectionComposer";
import { ItemCollection } from "../Models/ItemCollectionEntries/ItemCollection";
import { Settings } from "../Settings/Settings";
import { IItemWriter } from "./Interfaces/IItemWriter";

/**
 * An abstract containing implementations for IWriter.
 * @class
 * @property {string} target The path to the target .json file.
 * @property {IBaseBuilder[]} builders A collection of builders.
 */
export abstract class BaseItemWriter implements IItemWriter {
  protected target: string = CharConstants.empty;
  protected composers: IItemCollectionComposer[] = [];

  constructor(target: string) {
    this.target = target;
    this.initializeBuilders();
  }

  /**
   * Initializes the list of builders for the target file.
   */
  protected abstract initializeBuilders(): void;

  /**
   * 
   */
  public applyFilters(): void {
    if (!Settings.filter.isEnabled)
      return;
    
    this.composers.forEach(composer => {
      composer.applyFilter();
    });
  }

  /**
   * Update all entries in this.target matching the IDs in this.collections to their new values.
   */
  public writeCustomNames(): void {
    let mergedCollection = this.createMergedCollection();
    var keys = mergedCollection.getKeys();
    
    let file = D2RMM.readJson(this.target);

    Object.entries(file).forEach(([index, _]) => {
      if (keys.includes(file[index][FileConstants.key])) // if file entry's Key value matches with one of the keys in entries
        this.writeCustomName(file, index, mergedCollection.getDisplayNameForKey(file[index][FileConstants.key]));
    });
    
    D2RMM.writeJson(this.target, file);
  }

  // sets all translated entries to "name"
  protected writeCustomName(file, index: string, name: string): void {
    for (const key in file[index]) { // for each property in this entry ...
      if (key === FileConstants.id || key === FileConstants.key) // ... that is a translation (not the id or Key property) ...
        continue;

        file[index][key] = name; // ... set to the corresponding name found in mergedCollection
    }
  }

  /**
   * 
   * @returns A single {@link ItemCollection} containing all entries in {@property builders} asd
   */
  protected createMergedCollection(): ItemCollection {
    let mergedCollection = new ItemCollection();
    this.composers.forEach(builder => {
      mergedCollection.upsertCollection(builder.getCollection());
    });

    return mergedCollection;
  }
}
