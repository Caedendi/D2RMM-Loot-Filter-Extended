import { FileConstants } from "../../Constants/FileConstants";
import { EquipmentEntry } from "../../Models/ItemCollectionEntries/EquipmentEntry";
import { SingleQualityTag } from "../../Models/QualityTags/QualityTag";
import { EiLvlDigits } from "../../Settings/EiLvlDigits";
import { Settings } from "../../Settings/Settings";
import { StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

/**
 * Composes a list of all equipment entries from armor.txt and weapons.txt that have a Normal, Exceptional or Elite item quality, excluding quest items.
 */
export class EquipmentQualityComposer extends ItemCollectionComposerBase {
  constructor() {
      super();
  }

  // TODO: refactor this and StatsAndModifiersSettings
  
  // TODO: add more options
  // -name- & =name=
  // ·name· & :name:
  // -name- & +name+ & #name#
  public applyFilter(): void {
    if (!Settings.filter.statsAndModifiers.itemQuality.isEnabled) {
      return;
    }

    let fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    let fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);

    let armorRowsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);    // filters nothing in vanilla but leaving it in for compatibility with other mods that could add such items
    let weaponRowsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode); // excludes quest items and throwing pots

    this.addEquipmentQuality(armorRowsWithQuality);
    this.addEquipmentQuality(weaponRowsWithQuality);
  }

  protected addEquipmentQuality(rows) {
    Object.entries(rows).forEach(([i, _]) => {
      let row = rows[i];
      this.collection.upsert(new EquipmentEntry(row[FileConstants.key], EiLvlDigits.Double, new SingleQualityTag(this.getSingleQualityIndicatorForItem(row))));
    });
  }

  protected getSingleQualityIndicatorForItem(itemRow): string {
    if (itemRow.code === itemRow.ultracode)
      return StatsAndModifiersSettings.singleEliteQualityIndicator;
    if (itemRow.code === itemRow.ubercode)
      return StatsAndModifiersSettings.singleExceptionalQualityIndicator;

    return StatsAndModifiersSettings.singleNormalQualityIndicator;
  }

  protected getDoubleQualityIndicatorForItem(itemRow): string {
    if (itemRow.code === itemRow.ultracode)
      return StatsAndModifiersSettings.doubleEliteQualityIndicator;
    if (itemRow.code === itemRow.ubercode)
      return StatsAndModifiersSettings.doubleExceptionalQualityIndicator;

    return StatsAndModifiersSettings.doubleNormalQualityIndicator;
  }
}
