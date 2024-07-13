import { CharmsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CharmsBuilder";
import { CustomItemNamesBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/CustomItemNamesBuilder";
import { EndgameItemsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/EndgameItemsBuilder";
import { GemsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/GemsBuilder";
import { HealingPotionsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/HealingPotionsBuilder";
import { JewelsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/JewelsBuilder";
import { JunkBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/JunkBuilder";
import { QuestItemsBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/QuestItemsBuilder";
import { ScrollsAndTomesBuilder } from "../Builders/ItemBuilders/ItemNamesBuilders/ScrollsAndTomesBuilder";
import { FileConstants } from "../Constants/FileConstants";
import { BaseItemWriter } from "./BaseItemWriter";
import { IWriter } from "./Interfaces/IWriter";

export class ItemNamesWriter extends BaseItemWriter implements IWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new HealingPotionsBuilder());
    this.builders.push(new ScrollsAndTomesBuilder());
    this.builders.push(new JunkBuilder());
    this.builders.push(new GemsBuilder());
    this.builders.push(new JewelsBuilder());
    this.builders.push(new CharmsBuilder());
    this.builders.push(new QuestItemsBuilder());
    this.builders.push(new EndgameItemsBuilder());
    this.builders.push(new CustomItemNamesBuilder());
  }
}
