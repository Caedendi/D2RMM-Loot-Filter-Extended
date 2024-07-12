import { D2rmmVersion } from "./Models/D2rmmVersion";
import { IWriter } from "./Writers/Interfaces/IWriter";
import { ItemNamesWriter } from "./Writers/ItemNamesWriter";
import { DropSoundBuilder } from "./Builders/DropSoundBuilder";
import { ItemLevelBuilder } from "./Builders/ItemLevelBuilder";
import { ItemModifiersBuilder } from "./Builders/ItemBuilders/ItemModifiersBuilder";
import { ItemNameAffixesBuilder } from "./Builders/ItemBuilders/ItemNameAffixesBuilder";
import { ItemQualityBuilder } from "./Builders/ItemQualityBuilder";
import { ItemRunesBuilder } from "./Builders/ItemBuilders/ItemRunesBuilder";
import { LightPillarBuilder } from "./Builders/LightPillarBuilder";
import { ProfileHdModsBuilder } from "./Builders/ProfileHdModsBuilder";
import { UiBuilder } from "./Builders/ItemBuilders/UiBuilder";

/**
 * Master Builder
 */
export class CaedendiExtendedLootFilterMod {
  public readonly requiredD2rmmVersion: D2rmmVersion = new D2rmmVersion(1, 7, 0);
  protected writers: IWriter[];
  
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
    this.writers.push(new ItemNamesWriter());
  }
  
  /**
   * Builds the mod by running all writers.
   */
  protected runWriters(): void {
    (new ItemNameAffixesBuilder()).build(); // Gold, Superior/Inferior affixes, Gems (exceptions)
    (new       ItemRunesBuilder()).build(); // Runes
    
    // (new       ItemNamesBuilder()).build(); // Most items
    this.itemNamesWriter.run();
    
    (new              UiBuilder()).build(); // Quest items (exceptions)
    (new   ItemModifiersBuilder()).build(); // Quest items (exceptions)
    (new       ItemLevelBuilder()).build(); // iLvl
    (new     ItemQualityBuilder()).build(); // Quality (normal/exceptional/elite)
    (new     LightPillarBuilder()).build(); // Light Pillars
    (new       DropSoundBuilder()).build(); // Drop Sounds
    (new   ProfileHdModsBuilder()).build(); // _profilehd.json stuff
  }
}
