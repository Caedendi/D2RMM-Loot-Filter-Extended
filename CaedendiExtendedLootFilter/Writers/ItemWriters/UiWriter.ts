import { CustomBuilder } from "../../Builders/ItemBuilders/CustomBuilder";
import { UiBuilder } from "../../Builders/ItemBuilders/UiBuilder";
import { FileConstants } from "../../Constants/FileConstants";
import { CustomFilterList } from "../../CustomFilterList";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class UiWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_UI_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new UiBuilder());
    this.builders.push(new CustomBuilder(CustomFilterList.createForUiJson()));
  }
}
