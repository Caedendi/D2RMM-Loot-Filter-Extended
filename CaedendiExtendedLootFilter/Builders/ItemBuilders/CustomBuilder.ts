import { ItemCollection } from "../../Models/ItemCollection";
import { Settings } from "../../Settings/Settings";
import { IItemBuilder } from "./Interfaces/IItemBuilder";
import { ItemBuilderBase } from "./ItemBuilderBase";

export class CustomBuilder extends ItemBuilderBase implements IItemBuilder {
  protected customFilterList: ItemCollection;

  constructor(customFilterList: ItemCollection) {
    super();
    this.customFilterList = customFilterList;
  }
  
  public applyFilter(): void {
    if (!Settings.filter.isCustomFilterListEnabled) {
      return;
    }

    this.collection.upsertCollection(this.customFilterList);
  }
}
