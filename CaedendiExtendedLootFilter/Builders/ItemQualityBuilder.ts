import { FileConstants } from "../Constants/FileConstants";
import { Settings } from "../Settings/Settings";
import { StatsAndModifiersSettings } from "../Settings/StatsAndModifiersSettings";
import { IBuilder } from "./Interfaces/IBuilder";

export class ItemQualityBuilder implements IBuilder {
  public build() { // todo: refactor if possible
    if (!Settings.statsAndModifiers.itemQuality.isEnabled) {
      return;
    }

    const fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);
    const fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    const fileItemNames = D2RMM.readJson(FileConstants.FILE_ITEM_NAMES_PATH);

    const fileWeaponsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode);
    const fileArmorsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);

    this.addEquipmentQuality(fileWeaponsWithQuality, fileItemNames);
    this.addEquipmentQuality(fileArmorsWithQuality, fileItemNames);

    D2RMM.writeJson(FileConstants.FILE_ITEM_NAMES_PATH, fileItemNames);
  }

  protected addEquipmentQuality(equipmentRowsWithQuality, itemNamesFile) {
    equipmentRowsWithQuality.forEach(item => {
      let index = itemNamesFile.findIndex(x => x.Key === item.code); // get index and check if exists
      if (index < 0)
        return;
      
      let tag = `${StatsAndModifiersSettings.openChar}${this.getQualityIndicatorForItem(item)}${StatsAndModifiersSettings.closeChar}`;
      this.setTagForAllTranslationsAtIndex(itemNamesFile, index, tag);
    });
  }

  protected setTagForAllTranslationsAtIndex(itemNamesFile, index, tag): void {
    // TODO: fix, is broken
    for (const key in itemNamesFile[index]) {
      if (key === FileConstants.id || key !== FileConstants.key) // set to all translation entries that aren't "Key" and "id"
        return;

      itemNamesFile[index][key] = (Settings.statsAndModifiers.itemQuality.placement === "prefix")
        ? `${tag} ${itemNamesFile[index][key]}`  // prefix tag
        : `${itemNamesFile[index][key]} ${tag}`; // suffix tag
    }
  }

  protected getQualityIndicatorForItem(item): string {
    if (item.code === item.ultracode)
      return StatsAndModifiersSettings.eliteQualityIndicator;
    if (item.code === item.ubercode)
      return StatsAndModifiersSettings.exceptionalQualityIndicator;

    return StatsAndModifiersSettings.normalQualityIndicator;
  }
}
