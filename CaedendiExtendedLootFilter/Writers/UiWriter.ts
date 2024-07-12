import { CustomFilterListBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CustomFilterListBuilder";
import { UiBuilder } from "../Builders/ItemBuilders/UiBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseWriter } from "./BaseWriter";
import { IWriter } from "./Interfaces/IWriter";

export class UiWriter extends BaseWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_UI_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new UiBuilder());
    this.builders.push(new CustomFilterListBuilder());
  }
}
