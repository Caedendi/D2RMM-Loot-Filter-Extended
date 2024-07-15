import { CustomBuilder } from "../Builders/ItemBuilders/CustomBuilder";
import { ItemModifiersBuilder } from "../Builders/ItemBuilders/ItemModifiersBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemModifiersWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_MODIFIERS_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemModifiersBuilder());
    this.builders.push(new CustomBuilder(CustomFilterList.createForItemModifiersJson()));
  }
}
