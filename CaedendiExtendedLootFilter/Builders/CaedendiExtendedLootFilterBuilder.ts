import { DropSoundBuilder } from "./DropSoundBuilder";
import { ICaedendiExtendedLootFilterBuilder } from "./Interfaces/ICaedendiExtendedLootFilterBuilder";
import { ItemLevelBuilder } from "./ItemLevelBuilder";
import { ItemModifiersBuilder } from "./ItemModifiersBuilder";
import { ItemNameAffixesBuilder } from "./ItemNameAffixesBuilder";
import { IItemNamesBuilder } from "../Writers/Interfaces/IItemNamesBuilder";
import { ItemNamesWriter } from "../Writers/ItemNamesBuilder";
import { ItemQualityBuilder } from "./ItemQualityBuilder";
import { ItemRunesBuilder } from "./ItemRunesBuilder";
import { LightPillarBuilder } from "./LightPillarBuilder";
import { ProfileHdModsBuilder } from "./ProfileHdModsBuilder";
import { UiBuilder } from "./UiBuilder";

/**
 * Master Builder
 */
export class CaedendiExtendedLootFilterBuilder implements ICaedendiExtendedLootFilterBuilder {
  itemNamesBuilder: IItemNamesBuilder;
  
  constructor() {
    this.itemNamesBuilder = new ItemNamesWriter();
  }

  public build(): void {
    if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.7) { // TODO: use new version checker in D2RMM 1.7.0
      throw new Error("Requires D2RMM version 1.7.0 or higher.");
    }

    (new ItemNameAffixesBuilder()).build(); // Gold, Superior/Inferior affixes, Gems (exceptions)
    (new       ItemRunesBuilder()).build(); // Runes

    // (new       ItemNamesBuilder()).build(); // Most items
    this.itemNamesBuilder.build();

    (new              UiBuilder()).build(); // Quest items (exceptions)
    (new   ItemModifiersBuilder()).build(); // Quest items (exceptions)
    (new       ItemLevelBuilder()).build(); // iLvl
    (new     ItemQualityBuilder()).build(); // Quality (normal/exceptional/elite)
    (new     LightPillarBuilder()).build(); // Light Pillars
    (new       DropSoundBuilder()).build(); // Drop Sounds
    (new   ProfileHdModsBuilder()).build(); // _profilehd.json stuff
  }
}
