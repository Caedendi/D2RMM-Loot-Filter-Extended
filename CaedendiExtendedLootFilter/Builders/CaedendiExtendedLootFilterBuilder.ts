import * as DropSoundBuilder from "./DropSoundBuilder";
import * as ItemLevelBuilder from "./ItemLevelBuilder";
import * as ItemModifiersBuilder from "./ItemModifiersBuilder";
import * as ItemNameAffixesBuilder from "./ItemNameAffixesBuilder";
import * as ItemNamesBuilder from "./ItemNamesBuilder";
import * as ItemQualityBuilder from "./ItemQualityBuilder";
import * as ItemRunesBuilder from "./ItemRunesBuilder";
import * as LightPillarBuilder from "./LightPillarBuilder";
import * as ProfileHdModsBuilder from "./ProfileHdModsBuilder";
import * as UiBuilder from "./UiBuilder";

/**
 * Master Builder
 */
export class CaedendiExtendedLootFilterBuilder {
  build() {
    if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.6) {
      D2RMM.error("Requires D2RMM version 1.6.0 or higher.");
      return;
    }

    (new ItemNameAffixesBuilder.ItemNameAffixesBuilder()).build(); // Gold, Superior/Inferior affixes, Gems (exceptions)
    (new       ItemRunesBuilder.ItemRunesBuilder()).build(); // Runes
    (new       ItemNamesBuilder.ItemNamesBuilder()).build(); // Most items
    (new              UiBuilder.UiBuilder()).build(); // Quest items (exceptions)
    (new   ItemModifiersBuilder.ItemModifiersBuilder()).build(); // Quest items (exceptions)
    (new       ItemLevelBuilder.ItemLevelBuilder()).build(); // iLvl
    (new     ItemQualityBuilder.ItemQualityBuilder()).build(); // Quality (normal/exceptional/elite)
    (new     LightPillarBuilder.LightPillarBuilder()).build(); // Light Pillars
    (new       DropSoundBuilder.DropSoundBuilder()).build(); // Drop Sounds
    (new   ProfileHdModsBuilder.ProfileHdModsBuilder()).build(); // _profilehd.json stuff
  }
}