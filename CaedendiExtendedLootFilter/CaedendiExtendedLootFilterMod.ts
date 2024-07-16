import { D2rmmVersion } from "./Models/D2rmmVersion";
import { IItemWriter } from "./Writers/ItemWriters/Interfaces/IItemWriter";
import { ItemModifiersWriter } from "./Writers/ItemWriters/ItemModifiersWriter";
import { ItemNameAffixesWriter } from "./Writers/ItemWriters/ItemNameAffixesWriter";
import { ItemNamesWriter } from "./Writers/ItemWriters/ItemNamesWriter";
import { ItemRunesWriter } from "./Writers/ItemWriters/ItemRunesWriter";
import { UiWriter } from "./Writers/ItemWriters/UiWriter";

export class CaedendiExtendedLootFilterMod {
  public readonly requiredD2rmmVersion: D2rmmVersion = new D2rmmVersion(1, 7, 0);
  protected itemWriters: IItemWriter[];
  protected featureWriters: IItemWriter[];
  
  public build(): void {
    this.checkVersion();
    this.initializeWriters();
    this.runItemWriters();
  }
  
  protected checkVersion() {
    let fullVersion = D2RMM.getFullVersion();
    if (fullVersion == null) {
      throw new Error(this.requiredD2rmmVersion.getErrorMessage());
    }
    
    let currentD2rmmVersion = D2rmmVersion.fromArray(fullVersion);
    if (!currentD2rmmVersion.isOrExceeds(this.requiredD2rmmVersion)) {
      throw new Error(this.requiredD2rmmVersion.getErrorMessage());
    }
  }

  protected initializeWriters(): void {
    // item filter writers
    this.itemWriters.push(new ItemNamesWriter()); // Most items
    this.itemWriters.push(new ItemNameAffixesWriter()); // Gold, Superior/Inferior affixes, Gems (exceptions)
    this.itemWriters.push(new ItemRunesWriter()); // Runes
    this.itemWriters.push(new UiWriter()); // Quest items (exceptions)
    this.itemWriters.push(new ItemModifiersWriter()); // Quest items (exceptions)
    
    // feature writers
    /*
    (new       ItemLevelBuilder()).build(); // iLvl
    (new     ItemQualityBuilder()).build(); // Quality (normal/exceptional/elite)
    (new     LightPillarBuilder()).build(); // Light Pillars
    (new       DropSoundBuilder()).build(); // Drop Sounds
    (new   ProfileHdModsBuilder()).build(); // _profilehd.json stuff
    */
  }
  
  /**
   * Builds all builders, merges their collections into one and writes these entries to the target file.
   */
  protected runItemWriters(): void {
    this.itemWriters.forEach(writer => {
      writer.applyFilters();
      writer.addBigTooltips();
      writer.writeCustomNames();
    });
  }

  protected runFeatureWriters(): void {
    this.featureWriters.forEach(writer => writer.run());
  }
}
