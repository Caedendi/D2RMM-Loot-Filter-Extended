import { FileConstants } from "../Constants/FileConstants";
import { CustomFilterList } from "../CustomFilterList";
import { CustomComposer } from "../ItemCollectionComposers/CustomComposer";
import { CharmsComposer } from "../ItemCollectionComposers/ItemNamesComposers/CharmsComposer";
import { QuestEndgameItemsComposer } from "../ItemCollectionComposers/ItemNamesComposers/QuestEndgameItemsComposer";
import { EquipmentQualityComposer } from "../ItemCollectionComposers/ItemNamesComposers/EquipmentQualityComposer";
import { GemsComposer } from "../ItemCollectionComposers/ItemNamesComposers/GemsComposer";
import { HealingPotionsComposer } from "../ItemCollectionComposers/ItemNamesComposers/HealingPotionsComposer";
import { JewelsComposer } from "../ItemCollectionComposers/ItemNamesComposers/JewelsComposer";
import { JunkComposer } from "../ItemCollectionComposers/ItemNamesComposers/JunkComposer";
import { ScrollsAndTomesComposer } from "../ItemCollectionComposers/ItemNamesComposers/ScrollsAndTomesComposer";
import { BaseItemWriter } from "./BaseItemWriter";

export class ItemNamesWriter extends BaseItemWriter {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);
  }

  protected initializeBuilders(): void {
    // each composer should compose a list of entries with unique keys not present in other composers, with CustomComposer being the sole exception.
    // if duplicate entries exist between composers, the earlier entries will be overwritten by the latest entry once all collections are merged.
    this.composers.push(new HealingPotionsComposer());
    this.composers.push(new ScrollsAndTomesComposer());
    this.composers.push(new JunkComposer());
    this.composers.push(new GemsComposer());
    this.composers.push(new JewelsComposer());
    // this.composers.push(new CharmsComposer());
    this.composers.push(new QuestEndgameItemsComposer());
    // this.composers.push(new EquipmentQualityComposer());
    this.composers.push(new CustomComposer(CustomFilterList.createForItemNamesJson()));
  }
}
