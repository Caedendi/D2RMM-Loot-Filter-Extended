import { CustomBuilder } from "../../Builders/ItemBuilders/CustomBuilder";
import { ItemNameAffixesBuilder } from "../../Builders/ItemBuilders/ItemNameAffixesBuilder";
import { FileConstants } from "../../Constants/FileConstants";
import { CustomFilterList } from "../../CustomFilterList";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemNameAffixesWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemNameAffixesBuilder());
    this.builders.push(new CustomBuilder(CustomFilterList.createForItemNameAffixesJson()));
  }
}
