import { CharConstants } from "../Constants/CharConstants";
import { FileConstants } from "../Constants/FileConstants";
import { RuneConstants } from "../Constants/Items/RuneConstants";
import { LightPillarConstants } from "../Constants/LightPillarConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { JewelrySettings } from "../Settings/Filter/JewelrySettings";
import { QuestEndgameSettings } from "../Settings/Filter/QuestEndgameSettings";
import { LightPillarsSettings } from "../Settings/LightPillarsSettings";
import { IBuilder } from "./Interfaces/IBuilder";

export class LightPillarBuilder implements IBuilder {
  protected readonly shouldExcludeHiddenItems: boolean = LightPillarsSettings.shouldExcludeForHidden;

  public build() {
    if (!LightPillarsSettings.isEnabled) {
      return;
    }

    this.pushLightPillarsForRunes();
    this.pushLightPillarsForRingsAmulets();
    this.pushLightPillarsForGemsJewels();
    this.pushLightPillarsForCharms();
    this.pushLightPillarsForQuestItems();
    this.pushLightPillarsForEssences();
    this.pushLightPillarForToken();
    this.pushLightPillarsForKeys();
    this.pushLightPillarsForUberOrgans();
    this.pushLightPillarForStandardOfHeroes();
  }

  // runes
  protected pushLightPillarsForRunes() {
    RuneConstants.tiers.forEach(tier => {
      if (!tier.hasLightPillar || (this.shouldExcludeHiddenItems && !tier.isVisible))
        return;

      tier.runes.forEach((rune) => {
        this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}rune\\`, `${rune.name.toLowerCase()}_rune`);
      });
    });
  }

  // rings & amulets
  protected pushLightPillarsForRingsAmulets() {
    if (LightPillarsSettings.jewelry.isRingsEnabled)
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}ring\\`, "ring");
    if (LightPillarsSettings.jewelry.isAmuletsEnabled)
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}amulet\\`, "amulet");
  }

  // gems & jewels
  protected pushLightPillarsForGemsJewels() {
    if (!LightPillarsSettings.jewelry.isGemsJewelsEnabled
      || (this.shouldExcludeHiddenItems && JewelrySettings.gems.filter === SettingsConstants.hide)) {
      return;
    }

    const gemQualities = this.getLightPillarGemQualities();
    const gemTypes = ["amethyst", "diamond", "emerald", "ruby", "saphire", "topaz", "skull"]; // "saphire" is not a typo
    gemQualities.forEach((quality) => {
      gemTypes.forEach((type) => {
        this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}gem\\`, `${quality}${type}`);
      });
    });
  }

  private getLightPillarGemQualities() {
    let gemQualities = ["perfect_"];
    if (JewelrySettings.gems.filter === "perfect" && this.shouldExcludeHiddenItems) {
      return gemQualities;
    }
    gemQualities.push("flawless_");
    if (JewelrySettings.gems.filter === "flawless" && this.shouldExcludeHiddenItems) {
      return gemQualities;
    }

    return gemQualities.concat([CharConstants.empty, "flawed_", "chipped_"]);
  }

  // charms
  protected pushLightPillarsForCharms() {
    if (!LightPillarsSettings.jewelry.isCharmsEnabled) {
      return;
    }

    ["small", "medium", "large"].forEach(charm => this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}charm\\`, `charm_${charm}`));
    // this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}torch\\`, "torch"); // enable this to turn Fallen groups into a dance party
    if (!LightPillarsSettings.questEndgame.isQuestItemsEnabled)
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "mephisto_soul_stone");
  }

  // quest items
  protected pushLightPillarsForQuestItems() {
    if (!LightPillarsSettings.questEndgame.isQuestItemsEnabled && !LightPillarsSettings.questEndgame.isQuestWeaponsEnabled)
      return;

    let questItems: [string, string][] = [];

    // quest items
    if (LightPillarsSettings.questEndgame.isQuestItemsEnabled) {
      questItems = questItems.concat([
        // act 1
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "bark_scroll"],                   // Scroll of Inifuss & Malah's Potion
        [`${LightPillarConstants.PATH_ITEMS_MISC}scroll\\`, "deciphered_bark_scroll"],      // Scroll of Inifuss (deciphered)

        // act 2
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "book_of_skill"],                 // Book of Skill
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "scroll_of_horadric_quest_info"], // Horadric Scroll
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "horadric_cube"],                 // Horadric Cube
        [`${LightPillarConstants.PATH_ITEMS_MISC}amulet\\`, "viper_amulet"],                // Amulet of the Viper

        // act 3
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "jade_figurine"],                 // A Jade Figurine
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "gold_bird"],                     // The Golden Bird
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "scroll_of_self_resurrect"],      // Potion of Life & Malah's Potion
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "lam_esens_tome"],                // Lam Esen's Tome
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "eye"],                       // Khalim's Eye
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "heart"],                     // Khalim's Heart
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "brain"],                     // Khalim's Brain
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "mephisto_soul_stone"],           // Mephisto's Soulstone
        // act 4
        // none
        // act 5
        // Malah's Potion       => see Potion of Life (scroll_of_self_resurrect)
        // Scroll of Resistance => see Scroll of Inifuss (bark_scroll)
      ]);
    }

    // quest weapons
    if (LightPillarsSettings.questEndgame.isQuestWeaponsEnabled) {
      questItems = questItems.concat([
        // act 1
        [`${LightPillarConstants.PATH_ITEMS_WEAPON}club\\`, "wirts_leg"],          // Wirt's Leg
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_HAMMER}`, "horadric_malus"],    // Horadric Malus

        // act 2
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_STAFF}`, "staff_of_the_kings"], // Staff of Kings
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_STAFF}`, "horadric_staff"],     // Horadric Staff

        // act 3
        [`${LightPillarConstants.PATH_ITEMS_WEAPON}knife\\`, "gidbinn"],           // The Gidbinn
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_MACE}`, "khalim_flail"],        // Khalim's Flail
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_MACE}`, "super_khalim_flail"],  // Khalim's Will

        // act 4
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_HAMMER}`, "hellforge_hammer"],  // Hell Forge Hammer
        // act 5
        // none
      ]);
    }

    questItems.forEach((item) => {
      this.pushLightPillarToPath(item[0], item[1]);
    });
  }

  // essences
  protected pushLightPillarsForEssences() {
    if (!LightPillarsSettings.questEndgame.isEssencesEnabled)
      return;

    const essences = ["burning_essence_of_terror", "charged_essense_of_hatred", "festering_essence_of_destruction", "twisted_essence_of_suffering"];
    essences.forEach(essence => {
      this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_QUEST, essence);
    });
  }

  // token
  protected pushLightPillarForToken() {
    if (!LightPillarsSettings.questEndgame.isTokensEnabled)
      return;

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_QUEST, "token_of_absolution");
  }

  // pandemonium keys
  protected pushLightPillarsForKeys() {
    if (!LightPillarsSettings.questEndgame.isKeysEnabled)
      return;

    const path = `${LightPillarConstants.PATH_ITEMS_MISC}key\\mephisto_key`;
    let file = D2RMM.readJson(`${path}${FileConstants.FILE_EXTENSION_JSON}`);
    this.pushLightPillarToFile(file);
    for (let i = 1; i <= 3; i++) {
      const index = (i == 1) ? CharConstants.empty : `${i}`;
      D2RMM.writeJson(`${path}${index}${FileConstants.FILE_EXTENSION_JSON}`, file);
    }
  }

  // pandemonium event (ubers) organs
  protected pushLightPillarsForUberOrgans() {
    if (!LightPillarsSettings.questEndgame.isOrgansEnabled)
      return;

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "horn");
    if (LightPillarsSettings.questEndgame.isQuestItemsEnabled)
      return;

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "brain");
    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "eye");
  }

  // standard of heroes
  protected pushLightPillarForStandardOfHeroes() {
    if (!LightPillarsSettings.questEndgame.isStandardEnabled
      || (this.shouldExcludeHiddenItems && !QuestEndgameSettings.filter.shouldShowStandard))
      return;

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "flag");
  }

  protected pushLightPillarToPath(path: string, item: string) {
    const filePath = `${path}${item}${FileConstants.FILE_EXTENSION_JSON}`;
    let file = D2RMM.readJson(filePath);
    this.pushLightPillarToFile(file);
    D2RMM.writeJson(filePath, file);
  }

  protected pushLightPillarToFile(file) {
    file.dependencies.particles.push(LightPillarConstants.LIGHT_PILLAR_COMPONENT.particle);
    file.entities = file.entities.concat(LightPillarConstants.LIGHT_PILLAR_COMPONENT.entities);
  }
}
