import { CustomBuilder } from "../Builders/ItemBuilders/CustomBuilder";
import { ItemRunesBuilder } from "../Builders/ItemBuilders/ItemRunesBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemRunesWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_RUNES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemRunesBuilder());
    this.builders.push(new CustomBuilder(CustomFilterList.createForItemRunesJson()))
  }
}
