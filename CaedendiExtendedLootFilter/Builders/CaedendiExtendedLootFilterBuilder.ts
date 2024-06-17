import { DropSoundBuilder } from "./DropSoundBuilder";
import { ItemLevelBuilder } from "./ItemLevelBuilder";
import { ItemModifiersBuilder } from "./ItemModifiersBuilder";
import { ItemNameAffixesBuilder } from "./ItemNameAffixesBuilder";
import { ItemNamesBuilder } from "./ItemNamesBuilder";
import { ItemQualityBuilder } from "./ItemQualityBuilder";
import { ItemRunesBuilder } from "./ItemRunesBuilder";
import { LightPillarBuilder } from "./LightPillarBuilder";
import { ProfileHdModsBuilder } from "./ProfileHdModsBuilder";
import { UiBuilder } from "./UiBuilder";

/**
 * Master Builder
 */
export class CaedendiExtendedLootFilterBuilder {
  build() {
    if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.6) {
      D2RMM.error("Requires D2RMM version 1.6.0 or higher.");
      return;
    }

    (new ItemNameAffixesBuilder()).build(); // Gold, Superior/Inferior affixes, Gems (exceptions)
    (new       ItemRunesBuilder()).build(); // Runes
    (new       ItemNamesBuilder()).build(); // Most items
    (new              UiBuilder()).build(); // Quest items (exceptions)
    (new   ItemModifiersBuilder()).build(); // Quest items (exceptions)
    (new       ItemLevelBuilder()).build(); // iLvl
    (new     ItemQualityBuilder()).build(); // Quality (normal/exceptional/elite)
    (new     LightPillarBuilder()).build(); // Light Pillars
    (new       DropSoundBuilder()).build(); // Drop Sounds
    (new   ProfileHdModsBuilder()).build(); // _profilehd.json stuff
  }
}
