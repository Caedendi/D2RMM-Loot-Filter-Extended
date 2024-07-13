import { CustomItemNameAffixesBuilder } from "../Builders/ItemBuilders/CustomItemNameAffixesBuilder";
import { ItemNameAffixesBuilder } from "../Builders/ItemBuilders/ItemNameAffixesBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemNameAffixesWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemNameAffixesBuilder());
    this.builders.push(new CustomItemNameAffixesBuilder());
  }
}
