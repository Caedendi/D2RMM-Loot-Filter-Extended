import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { ItemRunesComposer } from "../ItemCollectionComposers/ItemRunesComposer";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemRunesWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_RUNES_PATH);
  }

  protected initializeBuilders(): void {
    this.composers.push(new ItemRunesComposer());
    this.composers.push(new CustomComposer(CustomFilterList.createForItemRunesJson()))
  }
}
