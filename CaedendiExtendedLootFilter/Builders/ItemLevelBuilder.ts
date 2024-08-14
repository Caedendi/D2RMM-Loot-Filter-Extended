import { FileConstants } from "../Constants/FileConstants";
import { CharmConstants } from "../Constants/Items/CharmConstants";
import { JewelryConstants } from "../Constants/Items/JewelryConstants";
import { EBigTooltipSetting } from "../Settings/EBigTooltipSetting";
import { Settings } from "../Settings/Settings";
import { IBuilder } from "./Interfaces/IBuilder";

//  extends ItemBuilderBase implements IItemBuilder
export class ItemLevelBuilder implements IBuilder {
  protected readonly shouldHideOnBtt = Settings.filter.statsAndModifiers.itemLevel.shouldHideOnBigTooltips;
  
  protected readonly weaponsExclusions: string[] = [];
  protected readonly miscExclusions: string[] = [];

  public build() {
    if (!Settings.filter.statsAndModifiers.itemLevel.isEnabled)
      return;

    this.setWeaponsExclusions();
    this.setMiscExclusions();

    this.enableForWeapons();
    this.enableForArmor();
    this.enableForMiscItems();
  }

  private setWeaponsExclusions(): void {
    this.weaponsExclusions.push("tpot"); // always exclude throwing pots

    if (!this.shouldHideOnBtt || Settings.filter.questEndgame.bigTooltips.questItems == EBigTooltipSetting.Disabled)
      return;

    // exclude quest weapons with iLvls if Big Tooltips is enabled
    [
      "leg", // Wirt's Leg
      "hdm", // Horadric Malus
      "msf", // Staff of Kings
      "hst", // Horadric Staff
      "g33", // The Gidbinn
      "qf1", // Khalim's Flail
      "qf2", // Khalim's Will
      "hfh", // Hell Forge Hammer
    ].forEach(questWeapon => this.weaponsExclusions.push(questWeapon));
  }
    
  protected setMiscExclusions(): void {
    if (!this.shouldHideOnBtt)
      return;
    
    if (Settings.filter.jewelry.facets.bigTooltip != EBigTooltipSetting.Disabled)
      this.miscExclusions.push(JewelryConstants.jewelId);
    if (Settings.filter.jewelry.charms.bigTooltipUnique != EBigTooltipSetting.Disabled)
      CharmConstants.charmIds.forEach(charm => this.miscExclusions.push(charm));

    // TODO: check charms ilvls with BTT for uniques and magics
    // TODO: add warning to charms BTT description
  }

  protected enableForWeapons() {
    this.enableForWeaponsArmor(FileConstants.FILE_WEAPONS_PATH, this.weaponsExclusions);
  }

  protected enableForArmor() {
    this.enableForWeaponsArmor(FileConstants.FILE_ARMOR_PATH, []);
  }

  protected enableForWeaponsArmor(path: string, exclusions: string[]) {
    const file = D2RMM.readTsv(path);

    // in these files, all entries need ShowLevel to be set to 1, except those in the exclusions list.
    file.rows.forEach(row => {
      if (exclusions.includes(row.code) || exclusions.includes(row.type))
        return;

      row.ShowLevel = "1";
    });

    D2RMM.writeTsv(path, file);
  }

  protected enableForMiscItems() {
    const file = D2RMM.readTsv(FileConstants.FILE_MISC_PATH);

    // in this file, we only want the entries matching JewelryConstants.iLvlJewelry to have their ShowLevel be set to 1.
    // matching JewelryConstants.iLvlJewelry against the exclusions list makes the target list even smaller.
    let misc = JewelryConstants.iLvlJewelry.filter(item => !this.miscExclusions.includes(item));
    file.rows.forEach((row) => {
      if (misc.includes(row.code))
        row.ShowLevel = "1";
    });

    D2RMM.writeTsv(FileConstants.FILE_MISC_PATH, file);
  }
}
