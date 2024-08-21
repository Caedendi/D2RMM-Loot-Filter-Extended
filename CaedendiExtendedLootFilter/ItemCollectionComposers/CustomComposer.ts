import { ItemCollection } from "../Models/ItemCollectionEntries/ItemCollection";
import { RawSettings } from "../Settings/RawSettings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

export class CustomComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected customFilterList: ItemCollection;

  constructor(customFilterList: ItemCollection) {
    super();
    this.customFilterList = customFilterList;
  }
  
  public applyFilter(): void {
    if (!RawSettings.filter.isCustomFilterListEnabled) {
      return;
    }

    this.collection.upsertCollection(this.customFilterList);
  }
}
