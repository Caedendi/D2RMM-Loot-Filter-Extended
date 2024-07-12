import { ItemNameAffixesBuilder } from "../Builders/ItemBuilders/ItemNameAffixesBuilder";
import { CustomFilterListBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CustomFilterListBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemNameAffixesWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemNameAffixesBuilder());
    // this.builders.push(new CustomFilterListBuilder()); // TODO: custom filter list for this writer
  }
}
