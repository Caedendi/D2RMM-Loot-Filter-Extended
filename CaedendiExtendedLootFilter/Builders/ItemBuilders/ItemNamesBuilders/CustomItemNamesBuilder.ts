import { CustomFilterList } from "../../../CustomFilterList";
import { ItemBuilderBase } from "../ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { Settings } from "../../../Settings/Settings";

export class CustomItemNamesBuilder extends ItemBuilderBase implements IItemBuilder {
  constructor() {
    super();
  }
  
  public applyFilter(): void {
    if (!Settings.filter.isCustomFilterListEnabled) {
      return;
    }

    this.collection.upsertCollection(CustomFilterList.createForItemNamesJson());
  }
}
