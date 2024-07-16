import { IBigTooltipItemBuilder } from "../../Builders/ItemBuilders/Interfaces/IBigTooltipItemBuilder";
import { IItemBuilder } from "../../Builders/ItemBuilders/Interfaces/IItemBuilder";
import { CharConstants } from "../../Constants/CharConstants";
import { FileConstants } from "../../Constants/FileConstants";
import { Helper } from "../../Helper";
import { ItemCollection } from "../../Models/ItemCollection";
import { Settings } from "../../Settings/Settings";
import { IItemWriter } from "./Interfaces/IItemWriter";

/**
 * An abstract containing implementations for IWriter.
 * @class
 * @property {string} target The path to the target .json file.
 * @property {IBaseBuilder[]} builders A collection of builders.
 */
export abstract class BaseItemWriter implements IItemWriter {
  protected target: string = CharConstants.empty;
  protected builders: IItemBuilder[] = [];

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
    
    this.builders.forEach(builder => {
      builder.applyFilter();
    });
  }

  /**
   * Runs the IBigTooltipItemBuilder.addBigTooltips() function on all builders of type IBigTooltipItemBuilder.
   */
  public addBigTooltips(): void {
    if (!Settings.bigTooltips.isEnabled)
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
   * Update all entries in this.target matching the IDs in this.collections to their new values.
   */
  public writeCustomNames(): void {
    let entries = this.createMergedCollection().getEntries();
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
}
