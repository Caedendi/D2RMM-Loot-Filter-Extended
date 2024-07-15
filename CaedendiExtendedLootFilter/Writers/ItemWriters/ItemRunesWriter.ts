import { CustomBuilder } from "../../Builders/ItemBuilders/CustomBuilder";
import { ItemRunesBuilder } from "../../Builders/ItemBuilders/ItemRunesBuilder";
import { FileConstants } from "../../Constants/FileConstants";
import { CustomFilterList } from "../../CustomFilterList";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemRunesWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_RUNES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemRunesBuilder());
    this.builders.push(new CustomBuilder(CustomFilterList.createForItemRunesJson()))
  }
}
