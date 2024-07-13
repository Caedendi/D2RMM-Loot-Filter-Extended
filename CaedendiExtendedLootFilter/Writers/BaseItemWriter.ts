import { IBigTooltipItemBuilder } from "../Builders/ItemBuilders/Interfaces/IBigTooltipItemBuilder";
import { IItemBuilder } from "../Builders/ItemBuilders/Interfaces/IItemBuilder";
import { CharConstants } from "../Constants/CharConstants";
import { FileConstants } from "../Constants/FileConstants";
import { Helper } from "../Helper";
import { ItemCollection } from "../Models/ItemCollection";
import { IWriter } from "./Interfaces/IWriter";

/**
 * An abstract containing implementations for IWriter.
 * @class
 * @property {string} target The path to the target .json file.
 * @property {IBaseBuilder[]} builders A collection of builders.
 */
export abstract class BaseItemWriter implements IWriter {
  protected target: string = CharConstants.empty;
  protected builders: IItemBuilder[] = [];

  protected readonly isBigTooltipsEnabled: boolean = config.IsBigTooltipsEnabled as boolean;

  constructor(target: string) {
    this.target = target;
    this.initializeBuilders();
  }

  /**
   * Initializes the list of builders for the target file.
   */
  protected abstract initializeBuilders(): void;

  /**
   * Builds all builders, merges their collections into one and writes these entries to the target file.
   */
  public run(): void {
    this.applyFilters();
    this.addBigTooltips();
    this.writeCustomNames(this.createMergedCollection());
  }

  /**
   * 
   */
  protected applyFilters(): void {
    this.builders.forEach(builder => {
      builder.applyFilter();
    });
  }

  /**
   * Runs the IBigTooltipItemBuilder.addBigTooltips() function on all builders of type IBigTooltipItemBuilder.
   */
  protected addBigTooltips(): void {
    if (!this.isBigTooltipsEnabled)
      return;

    this.builders.forEach(builder => {
      if (this.isIBigTooltipItemBuilder(builder)) 
        builder.addBigTooltips();
    });
  }

  protected isIBigTooltipItemBuilder(builder: IItemBuilder): builder is IBigTooltipItemBuilder {
    return (builder as IBigTooltipItemBuilder).addBigTooltips !== undefined;
  }

  /**
   * 
   * @returns A single {@link ItemCollection} containing all entries in {@property builders} asd
   */
  protected createMergedCollection(): ItemCollection {
    let mergedCollection = new ItemCollection();
    this.builders.forEach(builder => {
      mergedCollection.upsertCollection(builder.getCollection());
    });

    return mergedCollection;
  }

  /**
   * Update all entries in this.target matching the IDs in this.collections to their new values.
   */
  protected writeCustomNames(customNames: ItemCollection): void {
    let entries = customNames.getEntries();
    if (!Helper.isDefined(entries) || entries.length == 0) {
      return;
    }

    let file = D2RMM.readJson(this.target); // copy existing file
    var keys = entries.map(entry => entry.getKey());
    Object.entries(file).forEach(item => {
      if (keys.includes(item[FileConstants.key])) { // todo: was item.Key, now replaced
        for (const key in item) {
          if (key !== FileConstants.id && key !== FileConstants.key) {
            item[key] = entries.find(entry => entry.getKey() === item[FileConstants.key])?.generateDisplayName() ?? "";
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
