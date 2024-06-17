import { CharConstants } from "../Constants/CharConstants";
import { CollectionConstants } from "../Constants/CollectionConstants";
import { FileConstants } from "../Constants/FileConstants";
import { JewelryConstants } from "../Constants/JewelryConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { AbstractItemBuilder } from "./AbstractItemBuilder";


export class ItemLevelBuilder extends AbstractItemBuilder {
  constructor() {
    super(CharConstants.empty);

    [
      CollectionConstants.weapons,
      // CollectionConstants.armor,
      CollectionConstants.misc,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if (!(config.ItemLevel === "show" || config.ItemLevel === "btt" || config.ItemLevel === "fix" || config.ItemLevel === "fix-btt")) {
      return;
    }

    // contrary to all other builders, these 3 collections are used for items that we do _not_ want to show their iLvl
    let weaponsCol = this.getCollectionById(CollectionConstants.weapons);
    // let armorCol   = this.getCollectionById(CollectionConstants.armor);
    let miscCol = this.getCollectionById(CollectionConstants.misc);
    this.addExclusions(weaponsCol, miscCol);

    this.enableForWeapons(weaponsCol.map(item => item.id));
    this.enableForArmor();
    this.enableForMiscItems(miscCol.map(item => item.id));
  }

  addExclusions(weaponsCol, miscCol) {
    this.upsert(weaponsCol, "tpot", CharConstants.empty); // always exclude throwing potions

    if (!config.IsBigTooltipsEnabled || !SettingsConstants.shouldExcludeIlvlForBigTooltips) {
      return;
    }

    if (config.BigTooltipFacets !== SettingsConstants.disabled) {
      this.upsert(miscCol, JewelryConstants.jewel, CharConstants.empty);
    }

    if (config.BigTooltipUniqueCharms !== SettingsConstants.disabled) {
      JewelryConstants.charms.forEach(charm => {
        this.upsert(miscCol, charm, CharConstants.empty);
      });
    }

    if (config.BigTooltipQuestItems !== SettingsConstants.disabled) {
      // this.upsert(miscCol, "vip", CharConstants.empty); // amulet of the viper // todo: check if this has ilvl and correct here + in quest item naming
      [
        "leg", // Wirt's Leg
        "hdm", // Horadric Malus
        "msf", // Staff of Kings
        "hst", // Horadric Staff
        "g33", // The Gidbinn
        "qf1", // Khalim's Flail
        "qf2", // Khalim's Will
        "hfh", // Hell Forge Hammer
      ].forEach(questWeapon => {
        this.upsert(weaponsCol, questWeapon, CharConstants.empty);
      });
    }
  }

  enableForWeapons(exclusions) {
    this.enableForWeaponsArmor(FileConstants.FILE_WEAPONS_PATH, exclusions);
  }

  enableForArmor() {
    this.enableForWeaponsArmor(FileConstants.FILE_ARMOR_PATH, []);
  }

  enableForWeaponsArmor(path, exclusions) {
    const fileWeapons = D2RMM.readTsv(path);

    // in these files, all entries need ShowLevel to be set to 1, except those in the exclusions list.
    fileWeapons.rows.forEach((row) => {
      if (exclusions.includes(row.code) || exclusions.includes(row.type)) {
        return;
      }
      row.ShowLevel = 1;
    });

    D2RMM.writeTsv(path, fileWeapons);
  }

  enableForMiscItems(exclusions) {
    const fileMisc = D2RMM.readTsv(FileConstants.FILE_MISC_PATH);

    // in this file, we only want the entries matching JewelryConstants.iLvlJewelry to have their ShowLevel be set to 1.
    // matching JewelryConstants.iLvlJewelry against the exclusions list makes the target list even smaller.
    let misc = JewelryConstants.iLvlJewelry.filter(item => !exclusions.includes(item));
    fileMisc.rows.forEach((row) => {
      if (misc.includes(row.code)) {
        row.ShowLevel = 1;
      }
    });

    D2RMM.writeTsv(FileConstants.FILE_MISC_PATH, fileMisc);
  }
}
