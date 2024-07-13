import { CustomUiBuilder } from "../Builders/ItemBuilders/CustomUiBuilder";
import { UiBuilder } from "../Builders/ItemBuilders/UiBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class UiWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_UI_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new UiBuilder());
    this.builders.push(new CustomUiBuilder());
  }
}
