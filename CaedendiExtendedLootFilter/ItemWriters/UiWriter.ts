import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { UiComposer } from "../ItemCollectionComposers/UiComposer";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class UiWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_UI_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new UiComposer());
    this.builders.push(new CustomComposer(CustomFilterList.createForUiJson()));
  }
}
