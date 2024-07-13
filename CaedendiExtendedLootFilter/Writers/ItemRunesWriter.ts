import { CustomItemRunesBuilder } from "../Builders/ItemBuilders/CustomItemRunesBuilder";
import { CustomItemNamesBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CustomItemNamesBuilder";
import { ItemRunesBuilder } from "../Builders/ItemBuilders/ItemRunesBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemRunesWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_RUNES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemRunesBuilder());
    this.builders.push(new CustomItemRunesBuilder());
  }
}
