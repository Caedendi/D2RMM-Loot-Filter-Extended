
import { CustomBuilder } from "../../Builders/ItemBuilders/CustomBuilder";
import { ItemModifiersBuilder } from "../../Builders/ItemBuilders/ItemModifiersBuilder";
import { FileConstants } from "../../Constants/FileConstants";
import { CustomFilterList } from "../../CustomFilterList";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemModifiersWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_MODIFIERS_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemModifiersBuilder());
    this.builders.push(new CustomBuilder(CustomFilterList.createForItemModifiersJson()));
  }
}
