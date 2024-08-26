import { FileConstants } from "../../Constants/FileConstants";
import { EquipmentEntry } from "../../Models/ItemCollectionEntries/EquipmentEntry";
import { DoubleQualityIndicatorPair } from "../../Models/QualityTags/DoubleQualityIndicatorPair";
import { DoubleQualityTag } from "../../Models/QualityTags/DoubleQualityTag";
import { EQualityTagPosition } from "../../Models/QualityTags/EQualityTagPosition";
import { IQualityTag } from "../../Models/QualityTags/Interfaces/IQualityTag";
import { SingleQualityTag } from "../../Models/QualityTags/SingleQualityTag";
import { EiLvlDigits } from "../../Settings/Enums/EiLvlDigits";
import { ItemQualitySettings } from "../../Settings/Filter/ItemQualitySettings";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

/**
 * Composes a list of all equipment entries from armor.txt and weapons.txt that have a Normal, Exceptional or Elite item quality, excluding quest items.
 */
export class EquipmentQualityComposer extends ItemCollectionComposerBase {
  constructor() {
      super();
  }

  public applyFilter(): void {
    if (!ItemQualitySettings.isEnabled) {
      return;
    }

    let fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    let fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);

    let armorRowsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);    // filters nothing in vanilla but leaving it in for compatibility with other mods that could add such items
    let weaponRowsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode); // excludes quest items and throwing pots

    this.addEquipmentQuality(armorRowsWithQuality);
    this.addEquipmentQuality(weaponRowsWithQuality);

    D2RMM.writeTsv(FileConstants.FILE_ARMOR_PATH, fileArmor);
    D2RMM.writeTsv(FileConstants.FILE_WEAPONS_PATH, fileWeapons);
  }

  protected addEquipmentQuality(items) {
    Object.entries(items).forEach(([i, _]) => this.collection.upsert(
      new EquipmentEntry(items[i].code, EiLvlDigits.None, this.createQualityTag(items[i]))
    ));
  }

  protected createQualityTag(itemRow): IQualityTag {
    return ItemQualitySettings.position == EQualityTagPosition.PREFIX_AND_SUFFIX
      ? DoubleQualityTag.create(this.getDoubleQualityIndicatorsForItem(itemRow), ItemQualitySettings.paddingDouble)
      : new SingleQualityTag(ItemQualitySettings.position, (this.getSingleQualityIndicatorForItem(itemRow)), ItemQualitySettings.openChar, ItemQualitySettings.closeChar, ItemQualitySettings.paddingSingle);
  }

  protected getSingleQualityIndicatorForItem(itemRow): string {
    if (itemRow.code === itemRow.ultracode)
      return ItemQualitySettings.singleEliteQualityIndicator;
    if (itemRow.code === itemRow.ubercode)
      return ItemQualitySettings.singleExceptionalQualityIndicator;

    return ItemQualitySettings.singleNormalQualityIndicator;
  }

  protected getDoubleQualityIndicatorsForItem(itemRow): DoubleQualityIndicatorPair | null {
    if (itemRow.code === itemRow.ultracode)
      return ItemQualitySettings.doubleEliteQualityIndicators;
    if (itemRow.code === itemRow.ubercode)
      return ItemQualitySettings.doubleExceptionalQualityIndicators;

    return ItemQualitySettings.doubleNormalQualityIndicators;
  }
}
