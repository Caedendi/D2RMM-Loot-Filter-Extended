import { CharConstants } from "../Constants/CharConstants";
import { FileConstants } from "../Constants/FileConstants";
import { LightPillarConstants } from "../Constants/LightPillarConstants";
import { RuneConstants } from "../Constants/Items/RuneConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Settings } from "../Settings/Settings";

export class LightPillarBuilder {
  protected readonly isEnabled = Settings.lightPillars.isEnabled;
  protected readonly shouldExcludeForHidden = Settings.lightPillars.shouldExcludeForHidden;
  protected readonly gemsFilterSetting = Settings.filter.jewelry.gems;

  build() {
    if (!this.isEnabled) {
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
  pushLightPillarsForRunes() {
    RuneConstants.tiers.forEach(tier => {
      if (!tier.getHasLightPillar() || (this.shouldExcludeForHidden && tier.isHidden())) {
        return;
      }

      tier.getRunes().forEach((rune) => {
        this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}rune\\`, `${rune.getName().toLowerCase()}_rune`);
      });
    });
  }

  // rings & amulets
  pushLightPillarsForRingsAmulets() {
    if (Settings.lightPillars.jewelry.isRingsEnabled)
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}ring\\`, "ring");
    if (Settings.lightPillars.jewelry.isAmuletsEnabled)
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}amulet\\`, "amulet");
  }

  // gems & jewels
  pushLightPillarsForGemsJewels() {
    if (!Settings.lightPillars.jewelry.isGemsJewelsEnabled
      || (this.shouldExcludeForHidden && Settings.filter.jewelry.gems === SettingsConstants.disabled)) {
      return;
    }

    let gemQualities = this.getLightPillarGemQualities();

    let gemTypes = ["amethyst", "diamond", "emerald", "ruby", "saphire", "topaz", "skull"]; // "saphire": not a typo
    gemQualities.forEach((quality) => {
      gemTypes.forEach((type) => {
        this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}gem\\`, `${quality}${type}`);
      });
    });
  }

  getLightPillarGemQualities() {
    let gemQualities = ["perfect_"];
    if (this.gemsFilterSetting === "perfect" && Settings.lightPillars.shouldExcludeForHidden) {
      return gemQualities;
    }
    gemQualities.push("flawless_");
    if (this.gemsFilterSetting === "flawless" && Settings.lightPillars.shouldExcludeForHidden) {
      return gemQualities;
    }

    return gemQualities.concat([CharConstants.empty, "flawed_", "chipped_"]);
  }

  // charms
  pushLightPillarsForCharms() {
    if (!Settings.lightPillars.jewelry.isCharmsEnabled) {
      return;
    }

    ["small", "medium", "large"].forEach((charm) => {
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}charm\\`, `charm_${charm}`);
    });
    // pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}torch\\`, "torch"); // enable this to turn Fallen groups into a dance party
    if (!Settings.lightPillars.questEndgame.isQuestItemsEnabled) {
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "mephisto_soul_stone");
    }
  }

  // quest items
  pushLightPillarsForQuestItems() {
    if (!Settings.lightPillars.questEndgame.isQuestItemsEnabled && !Settings.lightPillars.questEndgame.isQuestWeaponsEnabled) {
      return;
    }

    let questItems: [string, string][] = [];

    // quest items
    if (Settings.lightPillars.questEndgame.isQuestItemsEnabled) {
      questItems = questItems.concat([
        // act 1
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "bark_scroll"], // Scroll of Inifuss & Malah's Potion
        [`${LightPillarConstants.PATH_ITEMS_MISC}scroll\\`, "deciphered_bark_scroll"], // Scroll of Inifuss (deciphered)

        // act 2
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "book_of_skill"], // Book of Skill
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "scroll_of_horadric_quest_info"], // Horadric Scroll
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "horadric_cube"], // Horadric Cube
        [`${LightPillarConstants.PATH_ITEMS_MISC}amulet\\`, "viper_amulet"], // Amulet of the Viper

        // act 3
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "jade_figurine"], // A Jade Figurine
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "gold_bird"], // The Golden Bird
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "scroll_of_self_resurrect"], // Potion of Life & Malah's Potion
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "lam_esens_tome"], // Lam Esen's Tome
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "eye"], // Khalim's Eye
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "heart"], // Khalim's Heart
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "brain"], // Khalim's Brain
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "mephisto_soul_stone"], // Mephisto's Soulstone
        // act 4
        // none
        // act 5
        // Malah's Potion       => see Potion of Life (scroll_of_self_resurrect)
        // Scroll of Resistance => see Scroll of Inifuss (bark_scroll)
      ]);
    }

    // quest weapons
    if (Settings.lightPillars.questEndgame.isQuestWeaponsEnabled) {
      questItems = questItems.concat([
        // act 1
        [`${LightPillarConstants.PATH_ITEMS_WEAPON}club\\`, "wirts_leg"], // Wirt's Leg
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_HAMMER}`, "horadric_malus"], // Horadric Malus

        // act 2
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_STAFF}`, "staff_of_the_kings"], // Staff of Kings
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_STAFF}`, "horadric_staff"], // Horadric Staff

        // act 3
        [`${LightPillarConstants.PATH_ITEMS_WEAPON}knife\\`, "gidbinn"], // The Gidbinn
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_MACE}`, "khalim_flail"], // Khalim's Flail
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_MACE}`, "super_khalim_flail"], // Khalim's Will

        // act 4
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_HAMMER}`, "hellforge_hammer"], // Hell Forge Hammer
        // act 5
        // none
      ]);
    }

    questItems.forEach((item) => {
      this.pushLightPillarToPath(item[0], item[1]);
    });
  }

  // essences
  pushLightPillarsForEssences() {
    if (!Settings.lightPillars.questEndgame.isEssencesEnabled) {
      return;
    }

    let essences = ["burning_essence_of_terror", "charged_essense_of_hatred", "festering_essence_of_destruction", "twisted_essence_of_suffering"];
    essences.forEach((essence) => {
      this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_QUEST, essence);
    });
  }

  // token
  pushLightPillarForToken() {
    if (!Settings.lightPillars.questEndgame.isTokensEnabled) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_QUEST, "token_of_absolution");
  }

  // pandemonium keys
  pushLightPillarsForKeys() {
    if (!Settings.lightPillars.questEndgame.isKeysEnabled) {
      return;
    }

    let path = `${LightPillarConstants.PATH_ITEMS_MISC}key\\mephisto_key`;
    var file = D2RMM.readJson(`${path}${FileConstants.FILE_EXTENSION_JSON}`);
    this.pushLightPillarToFile(file);
    for (var i = 1; i <= 3; i++) {
      let index = (i == 1) ? CharConstants.empty : `${i}`;
      D2RMM.writeJson(`${path}${index}${FileConstants.FILE_EXTENSION_JSON}`, file);
    }
  }

  // pandemonium event (ubers) organs
  pushLightPillarsForUberOrgans() {
    if (!Settings.lightPillars.questEndgame.isOrgansEnabled) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "horn");
    if (Settings.lightPillars.questEndgame.isQuestItemsEnabled) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "brain");
    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "eye");
  }

  // standard of heroes
  pushLightPillarForStandardOfHeroes() {
    if (!Settings.lightPillars.questEndgame.isStandardEnabled
      || (Settings.lightPillars.shouldExcludeForHidden && Settings.filter.questEndgame.endgame === "hsh")) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "flag");
  }

  pushLightPillarToPath(path, item) {
    let filePath = `${path}${item}${FileConstants.FILE_EXTENSION_JSON}`;
    let file = D2RMM.readJson(filePath);
    this.pushLightPillarToFile(file);
    D2RMM.writeJson(filePath, file);
  }

  pushLightPillarToFile(file) {
    file.dependencies.particles.push(LightPillarConstants.LIGHT_PILLAR_COMPONENT.particle);
    file.entities = file.entities.concat(LightPillarConstants.LIGHT_PILLAR_COMPONENT.entities);
  }
}
