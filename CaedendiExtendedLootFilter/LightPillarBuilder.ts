import { CharConstants } from "./CharConstants";
import { FileConstants } from "./FileConstants";
import { LightPillarConstants } from "./LightPillarConstants";
import { RuneConstants } from "./RuneConstants";

export class LightPillarBuilder {
  build() {
    if (!config.IsLightPillarsEnabled) {
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
    if (!config.ShouldAddLightPillarRunesLow && !config.ShouldAddLightPillarRunesLowMid
      && !config.ShouldAddLightPillarRunesMid && !config.ShouldAddLightPillarRunesHigh) {
      return;
    }

    RuneConstants.tiers.forEach((tier) => {
      if (!tier.hasLightPillar || (config.ShouldDisableLightPillarForHidden && !tier.isVisible)) {
        return;
      }

      tier.runes.forEach((rune) => {
        this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}rune\\`, `${rune.name.toLowerCase()}_rune`);
      });
    });
  }

  // rings & amulets
  pushLightPillarsForRingsAmulets() {
    if (!config.ShouldAddLightPillarRingsAmulets) {
      return;
    }

    this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}ring\\`, "ring");
    this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}amulet\\`, "amulet");
  }

  // gems & jewels
  pushLightPillarsForGemsJewels() {
    if (!config.ShouldAddLightPillarGemsJewels
      || (config.ShouldDisableLightPillarForHidden && config.Gems == "hide")) {
      return;
    }

    let gemQualities = this.getLightPillarGemQualities();

    let gemTypes = ["amethyst", "diamond", "emerald", "ruby", "saphire", "topaz", "skull"];
    gemQualities.forEach((quality) => {
      gemTypes.forEach((type) => {
        this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}gem\\`, `${quality}${type}`);
      });
    });
  }

  getLightPillarGemQualities() {
    let gemQualities = ["perfect_"];
    if (config.Gems === "perfect" && config.ShouldDisableLightPillarForHidden) {
      return gemQualities;
    }
    gemQualities.push("flawless_");
    if (config.Gems === "flawless" && config.ShouldDisableLightPillarForHidden) {
      return gemQualities;
    }

    return gemQualities.concat([CharConstants.empty, "flawed_", "chipped_"]);
  }

  // charms
  pushLightPillarsForCharms() {
    if (!config.ShouldAddLightPillarCharms) {
      return;
    }

    ["small", "medium", "large"].forEach((charm) => {
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}charm\\`, `charm_${charm}`);
    });
    // pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC}torch\\`, "torch"); // enable this to turn Fallen groups into a dance party
    if (!config.ShouldAddLightPillarQuestItems) {
      this.pushLightPillarToPath(`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`, "mephisto_soul_stone");
    }
  }

  // quest items
  pushLightPillarsForQuestItems() {
    if (!config.ShouldAddLightPillarQuestItems && !config.ShouldAddLightPillarQuestWeapons) {
      return;
    }

    let questItems = [];

    // quest items
    if (config.ShouldAddLightPillarQuestItems) {
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
    if (config.ShouldAddLightPillarQuestWeapons) {
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
    if (!config.ShouldAddLightPillarEssences) {
      return;
    }

    let essences = ["burning_essence_of_terror", "charged_essense_of_hatred", "festering_essence_of_destruction", "twisted_essence_of_suffering"];
    essences.forEach((essence) => {
      this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_QUEST, essence);
    });
  }

  // token
  pushLightPillarForToken() {
    if (!config.ShouldAddLightPillarTokens) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_QUEST, "token_of_absolution");
  }

  // pandemonium keys
  pushLightPillarsForKeys() {
    if (!config.ShouldAddLightPillarKeys) {
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
    if (!config.ShouldAddLightPillarOrgans) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "horn");
    if (config.ShouldAddLightPillarQuestItems) {
      return;
    }

    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "brain");
    this.pushLightPillarToPath(LightPillarConstants.PATH_ITEMS_MISC_BODY_PART, "eye");
  }

  // standard of heroes
  pushLightPillarForStandardOfHeroes() {
    if (!config.ShouldAddLightPillarStandardOfHeroes
      || (config.ShouldDisableLightPillarForHidden && config.Endgame === "hsh")) {
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
