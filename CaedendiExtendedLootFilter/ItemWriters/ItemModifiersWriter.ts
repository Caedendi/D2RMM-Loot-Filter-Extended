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
    this.composers.push(new ItemModifiersComposer());
    this.composers.push(new CustomComposer(CustomFilterList.createForItemModifiersJson()));
  }
}
