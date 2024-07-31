import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { GemsComposer } from "../ItemCollectionComposers/ItemNameAffixesComposers/GemsComposer";
import { GoldComposer } from "../ItemCollectionComposers/ItemNameAffixesComposers/GoldComposer";
import { ShortSupInferiorPrefixesComposer } from "../ItemCollectionComposers/ItemNameAffixesComposers/ShortSupInferiorPrefixesComposer";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemNameAffixesWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);
  }

  protected initializeBuilders(): void {
    this.composers.push(new GoldComposer());
    this.composers.push(new ShortSupInferiorPrefixesComposer());
    this.composers.push(new GemsComposer());
    this.composers.push(new CustomComposer(CustomFilterList.createForItemNameAffixesJson()));
  }
}
