import { CustomFilterList } from "../../../CustomFilterList";
import { ItemBuilderBase } from "../ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";

// TODO: refactor to ItemNamesBuilder method so other builders/writers can also implement custom filter lists
export class CustomFilterListBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly shouldUseFilter: boolean = config.shouldUseCustomFilterList as boolean;

  constructor() {
    super();
  }
  
  public applyFilter(): void {
    if (!this.shouldUseFilter) {
      return;
    }

    this.collection.upsertMultiple(CustomFilterList.create().getEntries());
  }
}
