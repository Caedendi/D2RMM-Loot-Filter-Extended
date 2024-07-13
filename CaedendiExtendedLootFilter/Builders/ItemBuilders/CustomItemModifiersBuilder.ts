import { CustomFilterList } from "../../CustomFilterList";
import { IItemBuilder } from "./Interfaces/IItemBuilder";
import { ItemBuilderBase } from "./ItemBuilderBase";

export class CustomItemModifiersBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly shouldUseFilter: boolean = config.shouldUseCustomFilterList as boolean;

  constructor() {
    super();
  }
  
  public applyFilter(): void {
    if (!this.shouldUseFilter) {
      return;
    }

    this.collection.upsertCollection(CustomFilterList.createForItemModifiersJson());
  }
}
