import { FileConstants } from "../../Constants/FileConstants";
import { Settings } from "../../Settings/Settings";
import { StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class EquipmentQualityComposer extends ItemCollectionComposerBase implements ItemCollectionComposerBase {
  constructor() {
      super();
  }

  public applyFilter(): void { // todo: refactor if possible
    if (!Settings.statsAndModifiers.itemQuality.isEnabled) {
      return;
    }

    // TODO:
    // this feature needs to read the current item name and either prefix or suffix the item quality tag to it
    // current implementation of ItemEntry does not support this, needs a rewrite to only add a prefix or suffix
    return; 

    let fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);
    let fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    let fileItemNames = D2RMM.readJson(FileConstants.FILE_ITEM_NAMES_PATH);

    let weaponRowsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode); // excludes quest items and throwing pots
    let armorRowsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);    // filters nothing in vanilla but leaving it in for possible compatibility with other mods

    this.addEquipmentQuality(weaponRowsWithQuality, fileItemNames);
    this.addEquipmentQuality(armorRowsWithQuality, fileItemNames);

    D2RMM.writeJson(FileConstants.FILE_ITEM_NAMES_PATH, fileItemNames);
  }

  protected addEquipmentQuality(fileRows, itemNamesFile) {
    Object.entries(fileRows).forEach(([rowIndex, _]) => {
      let itemRow = fileRows[rowIndex];
      
      let nameIndex = itemNamesFile.findIndex(x => x.Key === itemRow["code"]); // get index and check if exists
      if (nameIndex < 0)
        return;
      let tag = `${StatsAndModifiersSettings.openChar}${this.getQualityIndicatorForItem(itemRow)}${StatsAndModifiersSettings.closeChar}`;
      this.setTagForAllTranslationsAtIndex(itemNamesFile, nameIndex, tag);
    });
  }

  // TODO: almost exact same function as BaseItemWriter.writeCustomName()
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
