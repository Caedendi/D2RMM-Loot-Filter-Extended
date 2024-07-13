import { CustomItemModifiersBuilder } from "../Builders/ItemBuilders/CustomItemModifiersBuilder";
import { ItemModifiersBuilder } from "../Builders/ItemBuilders/ItemModifiersBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemModifiersWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_MODIFIERS_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new ItemModifiersBuilder());
    this.builders.push(new CustomItemModifiersBuilder());
  }
}
