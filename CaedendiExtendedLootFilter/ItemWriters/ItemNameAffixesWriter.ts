import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { ItemNameAffixesComposer } from "../ItemCollectionComposers/ItemNameAffixesComposer";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemNameAffixesWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);
  }

  protected initializeBuilders(): void {
    this.composers.push(new ItemNameAffixesComposer());
    this.composers.push(new CustomComposer(CustomFilterList.createForItemNameAffixesJson()));
  }
}
