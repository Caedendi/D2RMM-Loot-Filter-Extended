import { FileConstants } from "../Constants/FileConstants";
import { Settings } from "../Settings/Settings";
import { StatsAndModifiersSettings } from "../Settings/StatsAndModifiersSettings";
import { IBuilder } from "./Interfaces/IBuilder";

// TODO: convert to ItemQualityComposer for ItemNamesWriter
// since this excludes quest weapons and throwing pots, there should be no conflicts with other builders
// this way it will not conflict with CustomBuilder either
export class ItemQualityBuilder implements IBuilder {
  public build() { // todo: refactor if possible
    if (!Settings.statsAndModifiers.itemQuality.isEnabled) {
      return;
    }

    const fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);
    const fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    const fileItemNames = D2RMM.readJson(FileConstants.FILE_ITEM_NAMES_PATH);

    const fileWeaponsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode); // excludes quest items and throwing pots
    const fileArmorsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);    // filters nothing in vanilla but leaving it in for possible compatibility with other mods

    this.addEquipmentQuality(fileWeaponsWithQuality, fileItemNames);
    this.addEquipmentQuality(fileArmorsWithQuality, fileItemNames);

    D2RMM.writeJson(FileConstants.FILE_ITEM_NAMES_PATH, fileItemNames);
  }

  protected addEquipmentQuality(equipmentRowsWithQuality, itemNamesFile) {
    Object.entries(equipmentRowsWithQuality).forEach(([rowIndex, _]) => {
      let itemRow = equipmentRowsWithQuality[rowIndex];
      
      let nameIndex = itemNamesFile.findIndex(x => x.Key === itemRow["code"]); // get index and check if exists
      if (nameIndex < 0)
        return;
      
      let tag = `${StatsAndModifiersSettings.openChar}${this.getQualityIndicatorForItem(itemRow)}${StatsAndModifiersSettings.closeChar}`;
      this.setTagForAllTranslationsAtIndex(itemNamesFile, nameIndex, tag);
    });
  }

  // TODO: exact same function as BaseItemWriter.writeCustomName()
  protected setTagForAllTranslationsAtIndex(itemNamesFile, index: string, tag: string): void {
    for (const key in itemNamesFile[index]) {
      if (key === FileConstants.id || key === FileConstants.key) // set to all translation entries that aren't "Key" and "id"
        continue;

      itemNamesFile[index][key] = (Settings.statsAndModifiers.itemQuality.placement === "prefix")
        ? `${tag} ${itemNamesFile[index][key]}`  // prefix tag
        : `${itemNamesFile[index][key]} ${tag}`; // suffix tag
    }
  }

  protected getQualityIndicatorForItem(itemRow): string {
    if (itemRow.code === itemRow.ultracode)
      return StatsAndModifiersSettings.eliteQualityIndicator;
    if (itemRow.code === itemRow.ubercode)
      return StatsAndModifiersSettings.exceptionalQualityIndicator;

    return StatsAndModifiersSettings.normalQualityIndicator;
  }
}
