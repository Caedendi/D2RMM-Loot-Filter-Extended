import { CustomFilterList } from "../../CustomFilterList";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class CustomFilterListBuilder extends BaseBuilder implements IBuilder {
  constructor() {
    super();
  }
  
  public build(): void {
    if (!config.shouldUseCustomFilterList as boolean) {
      return;
    }

    CustomFilterList.create().forEach(item => {
      this.collection.upsert(item.getKey(), item.getName());
    });
  }
}
