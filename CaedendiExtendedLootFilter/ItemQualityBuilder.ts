import { FileConstants } from "./FileConstants";
import { SettingsConstants } from "./SettingsConstants";

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

    this.addEquipmentQuality(fileWeaponsWithQuality, fileItemNames, config.ItemQuality);
    this.addEquipmentQuality(fileArmorsWithQuality, fileItemNames, config.ItemQuality);

    D2RMM.writeJson(FileConstants.FILE_ITEM_NAMES_PATH, fileItemNames);
  }

  addEquipmentQuality(equipment, itemNames, setting) {
    let txtNormal = config.ItemQuality !== SettingsConstants.custom ? 'n' : "custom n"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
    let txtExceptional = config.ItemQuality !== SettingsConstants.custom ? 'x' : "custom x"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
    let txtElite = config.ItemQuality !== SettingsConstants.custom ? 'e' : "custom e"; // replace custom with desired custom quality indicator. [CSTM-QLTY]

    equipment.forEach(item => {
      var quality = (item.code === item.ultracode ? txtElite : (item.code === item.ubercode ? txtExceptional : txtNormal));

      const index = itemNames.findIndex((x) => x.Key === item.code);
      if (index < 0) {
        return;
      }

      for (const key in itemNames[index]) {
        if (key !== FileConstants.id && key !== FileConstants.key) {
          switch (setting) {
            case "suf-par":
              itemNames[index][key] = `${itemNames[index][key]} (${quality})`;
              continue;
            case "suf-bts":
              itemNames[index][key] = `${itemNames[index][key]} [${quality}]`;
              continue;
            case "pre-par":
              itemNames[index][key] = `(${quality}) ${itemNames[index][key]}`;
              continue;
            case "pre-bts":
              itemNames[index][key] = `[${quality}] ${itemNames[index][key]}`;
              continue;
            case SettingsConstants.custom:
              itemNames[index][key] = `${itemNames[index][key]} (${quality})`; // to set custom quality indicator, see [CSTM-QLTY]
              continue;
          }
        }
      }
    });
  }
}
