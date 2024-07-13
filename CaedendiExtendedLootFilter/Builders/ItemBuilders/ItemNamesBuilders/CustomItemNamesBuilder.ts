import { CustomFilterList } from "../../../CustomFilterList";
import { ItemBuilderBase } from "../ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";

export class CustomItemNamesBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly shouldUseFilter: boolean = config.shouldUseCustomFilterList as boolean;

  constructor() {
    super();
  }
  
  public applyFilter(): void {
    if (!this.shouldUseFilter) {
      return;
    }

    this.collection.upsertCollection(CustomFilterList.createForItemNamesJson());
  }
}
