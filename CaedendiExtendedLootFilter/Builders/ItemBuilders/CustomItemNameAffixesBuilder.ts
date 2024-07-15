import { CustomFilterList } from "../../CustomFilterList";
import { Settings } from "../../Settings/Settings";
import { IItemBuilder } from "./Interfaces/IItemBuilder";
import { ItemBuilderBase } from "./ItemBuilderBase";

export class CustomItemNameAffixesBuilder extends ItemBuilderBase implements IItemBuilder {
  constructor() {
    super();
  }
  
  public applyFilter(): void {
    if (!Settings.filter.isCustomFilterListEnabled) {
      return;
    }

    this.collection.upsertCollection(CustomFilterList.createForItemNameAffixesJson());
  }
}
