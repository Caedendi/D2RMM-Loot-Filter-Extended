import { DropSoundBuilder } from "./Builders/DropSoundBuilder";
import { FilterBuilder } from "./Builders/FilterBuilder";
import { IBuilder } from "./Builders/Interfaces/IBuilder";
import { ItemLevelBuilder } from "./Builders/ItemLevelBuilder";
import { ItemQualityBuilder } from "./Builders/ItemQualityBuilder";
import { LightPillarBuilder } from "./Builders/LightPillarBuilder";
import { ProfileHdModsBuilder } from "./Builders/ProfileHdModsBuilder";
import { D2rmmVersion } from "./Models/D2rmmVersion";

export class CaedendiExtendedLootFilterMod {
  public readonly requiredD2rmmVersion: D2rmmVersion = new D2rmmVersion(1, 7, 0);
  protected builders: IBuilder[];
  
  public build(): void {
    this.checkVersion();
    this.initializeBuilders();
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

  protected initializeBuilders(): void {
    this.builders.push(new FilterBuilder());        // loot filter
    this.builders.push(new ItemLevelBuilder());     // iLvl
    this.builders.push(new ItemQualityBuilder());   // Quality (normal/exceptional/elite)
    this.builders.push(new LightPillarBuilder());   // Light Pillars
    this.builders.push(new DropSoundBuilder());     // Drop Sounds
    this.builders.push(new ProfileHdModsBuilder()); // _profilehd.json stuff
  }

  protected buildAll(): void {
    this.builders.forEach(builder => builder.build());
  }
}
