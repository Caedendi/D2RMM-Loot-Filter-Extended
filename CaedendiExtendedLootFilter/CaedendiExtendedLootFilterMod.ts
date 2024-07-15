import { D2rmmVersion } from "./Models/D2rmmVersion";
import { IItemWriter } from "./Writers/ItemWriters/Interfaces/IItemWriter";
import { ItemModifiersWriter } from "./Writers/ItemWriters/ItemModifiersWriter";
import { ItemNameAffixesWriter } from "./Writers/ItemWriters/ItemNameAffixesWriter";
import { ItemNamesWriter } from "./Writers/ItemWriters/ItemNamesWriter";
import { ItemRunesWriter } from "./Writers/ItemWriters/ItemRunesWriter";
import { UiWriter } from "./Writers/ItemWriters/UiWriter";

export class CaedendiExtendedLootFilterMod {
  public readonly requiredD2rmmVersion: D2rmmVersion = new D2rmmVersion(1, 7, 0);
  protected writers: IItemWriter[];
  
  public build(): void {
    this.checkVersion();
    this.initializeWriters();
    this.runWriters();
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
    this.writers.push(new ItemNamesWriter()); // Most items
    this.writers.push(new ItemNameAffixesWriter()); // Gold, Superior/Inferior affixes, Gems (exceptions)
    this.writers.push(new ItemRunesWriter()); // Runes
    this.writers.push(new UiWriter()); // Quest items (exceptions)
    this.writers.push(new ItemModifiersWriter()); // Quest items (exceptions)
    
    /*
    (new       ItemLevelBuilder()).build(); // iLvl
    (new     ItemQualityBuilder()).build(); // Quality (normal/exceptional/elite)
    (new     LightPillarBuilder()).build(); // Light Pillars
    (new       DropSoundBuilder()).build(); // Drop Sounds
    (new   ProfileHdModsBuilder()).build(); // _profilehd.json stuff
    */
  }
  
  /**
   * Builds the mod by running all writers.
   */
  protected runWriters(): void {
    this.writers.forEach(writer => writer.run());
  }
}
