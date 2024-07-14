import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Settings } from "../Settings/Settings";
import { StatsAndModifiersSettings } from "../Settings/StatsAndModifiersSettings";

export class ItemQualityBuilder {
  // todo: refactor if possible
  build() {
    if (config.ItemQuality === SettingsConstants.disabled) {
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

  addEquipmentQuality(equipmentRowsWithQuality, itemNamesFile) {
    equipmentRowsWithQuality.forEach(item => {
      // get index and check if exists
      const index = itemNamesFile.findIndex(x => x.Key === item.code);
      if (index < 0) {
        return;
      }
      
      // create quality tag
      var indicator = this.getQualityIndicatorForItem(item);
      let tag = `${StatsAndModifiersSettings.openChar}${indicator}${StatsAndModifiersSettings.closeChar}`;

      // set indicator tag in name for all items
      for (const key in itemNamesFile[index]) {
        if (key !== FileConstants.id && key !== FileConstants.key) { // set to all entries that arent "Key" and "id"
          itemNamesFile[index][key] = Settings.statsAndModifiers.itemQuality.placement === "prefix" 
            ? `${tag} ${itemNamesFile[index][key]}`
            : `${itemNamesFile[index][key]} ${tag}`;
        }
      }
    });
  }

  private getQualityIndicatorForItem(item): string {
    return item.code === item.ultracode 
      ? StatsAndModifiersSettings.eliteQualityIndicator 
      : (item.code === item.ubercode 
        ? StatsAndModifiersSettings.exceptionalQualityIndicator 
        : StatsAndModifiersSettings.normalQualityIndicator
        );
  }
}
