import { CustomFilterList } from "../../../CustomFilterList";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";

// TODO: refactor to ItemNamesBuilder method so other builders/writers can also implement custom filter lists
export class CustomFilterListBuilder extends ItemBuilderBase implements IItemBuilder {
  constructor() {
    super();
  }
  
  public build(): void {
    if (!config.shouldUseCustomFilterList as boolean) {
      return;
    }

    this.collection.upsertMultiple(CustomFilterList.create().getEntries());
  }
}
