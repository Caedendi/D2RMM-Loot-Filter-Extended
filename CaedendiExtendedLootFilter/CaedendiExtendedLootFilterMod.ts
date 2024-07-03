import { D2rmmVersion } from "./Models/D2rmmVersion";
import { IWriter } from "./Writers/Interfaces/IWriter";
import { ItemNamesWriter } from "./Writers/ItemNamesWriter";
import { DropSoundBuilder } from "./Builders/DropSoundBuilder";
import { ItemLevelBuilder } from "./Builders/ItemLevelBuilder";
import { ItemModifiersBuilder } from "./Builders/ItemModifiersBuilder";
import { ItemNameAffixesBuilder } from "./Builders/ItemNameAffixesBuilder";
import { ItemQualityBuilder } from "./Builders/ItemQualityBuilder";
import { ItemRunesBuilder } from "./Builders/ItemRunesBuilder";
import { LightPillarBuilder } from "./Builders/LightPillarBuilder";
import { ProfileHdModsBuilder } from "./Builders/ProfileHdModsBuilder";
import { UiBuilder } from "./Builders/UiBuilder";

/**
 * Master Builder
 */
export class CaedendiExtendedLootFilterMod {
  public readonly requiredD2rmmVersion: D2rmmVersion = new D2rmmVersion(1, 7, 0);
  public readonly itemNamesWriter: IWriter;
  
  constructor() {
    this.checkVersion();
    
    // initialize writers
    this.itemNamesWriter = new ItemNamesWriter()
    // todo
  }
  
  /**
   * Builds the mod by running all writers.
   */
  public build(): void {
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
  
  protected checkVersion() {
    var v = D2RMM.getFullVersion();
    if (v == null) {
      throw new Error(this.requiredD2rmmVersion.getErrorMessage());
    }
    
    let currentD2rmmVersion = D2rmmVersion.fromArray(v);
    if (!currentD2rmmVersion.isOrExceeds(this.requiredD2rmmVersion)) {
      throw new Error(this.requiredD2rmmVersion.getErrorMessage());
    }
  }
}
