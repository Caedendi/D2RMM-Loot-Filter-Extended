import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { CharmsComposer } from "../ItemCollectionComposers/ItemNamesComposers/CharmsComposer";
import { EndgameItemsComposer } from "../ItemCollectionComposers/ItemNamesComposers/EndgameItemsComposer";
import { EquipmentQualityComposer } from "../ItemCollectionComposers/ItemNamesComposers/EquipmentQualityComposer";
import { GemsComposer } from "../ItemCollectionComposers/ItemNamesComposers/GemsComposer";
import { HealingPotionsComposer } from "../ItemCollectionComposers/ItemNamesComposers/HealingPotionsComposer";
import { JewelsComposer } from "../ItemCollectionComposers/ItemNamesComposers/JewelsComposer";
import { JunkComposer } from "../ItemCollectionComposers/ItemNamesComposers/JunkComposer";
import { QuestItemsComposer } from "../ItemCollectionComposers/ItemNamesComposers/QuestItemsComposer";
import { ScrollsAndTomesComposer } from "../ItemCollectionComposers/ItemNamesComposers/ScrollsAndTomesComposer";
import { BaseItemWriter } from "./BaseItemWriter";
import { IItemWriter } from "./Interfaces/IItemWriter";

export class ItemNamesWriter extends BaseItemWriter implements IItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);
  }

  protected initializeBuilders(): void {
    this.builders.push(new HealingPotionsComposer());
    this.builders.push(new ScrollsAndTomesComposer());
    this.builders.push(new JunkComposer());
    this.builders.push(new GemsComposer());
    this.builders.push(new JewelsComposer());
    this.builders.push(new CharmsComposer());
    this.builders.push(new QuestItemsComposer());
    this.builders.push(new EndgameItemsComposer());
    this.builders.push(new EquipmentQualityComposer());
    this.builders.push(new CustomComposer(CustomFilterList.createForItemNamesJson()));
  }
}
