import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { ItemModifiersComposer } from "../ItemCollectionComposers/ItemModifiersComposer";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemModifiersWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_MODIFIERS_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemModifiersComposer());
    this.builders.push(new CustomComposer(CustomFilterList.createForItemModifiersJson()));
  }
}
