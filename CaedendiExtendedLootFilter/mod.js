////===============================================////
////===============================================////
////                                               ////
////   Caedendi's Extended Loot Filter for D2RMM   ////
////                    v3.0.0                     ////
////                                               ////
////===============================================////
////===============================================////


//===============//
//   Constants   //
//===============//

class CharConstants {
  static empty = '';
  static space = ' ';
  static newLine = "\n";
  static o     = 'o';
  static plus  = '+';
  static minus = '-';
}

class BaseColorConstants {
  static prefix = "ÿc";

  // all known colors in the game code
  // note: all numbered colors that are not a v2 are the exact same color as their non-number counterpart
  static white           = `${this.prefix}0`;
  static whiteSmoke      = `${this.prefix}=`;
  static whiteSmoke2     = `${this.prefix}E`;
  static whiteSmoke3     = `${this.prefix}F`;
  static whiteSmoke4     = `${this.prefix}G`;
  static whiteSmoke5     = `${this.prefix}H`;
  static grayDim         = `${this.prefix}I`;
  static grayDim2        = `${this.prefix}K`;
  static grayDimmer      = `${this.prefix}5`;
  static black           = `${this.prefix}6`;
  static red             = `${this.prefix}U`;
  static tomato          = `${this.prefix}1`;
  static crimson         = `${this.prefix}S`;
  static lime            = `${this.prefix}2`;
  static lime2           = `${this.prefix}Q`;
  static lime_v2         = `${this.prefix}C`;
  static limeGreen       = `${this.prefix}<`;
  static green           = `${this.prefix}A`;
  static green2          = `${this.prefix}:`;
  static deepSkyBlue     = `${this.prefix}N`;
  static lightSkyBlue    = `${this.prefix}T`;
  static mediumSlateBlue = `${this.prefix}P`;
  static cornFlowerBlue  = `${this.prefix}3`;
  static cornFlowerBlue2 = `${this.prefix}B`;
  static yellow          = `${this.prefix}9`;
  static lightYellow     = `${this.prefix}R`;
  static orange          = `${this.prefix}8`;
  static orange1         = `${this.prefix}J`;
  static orange2         = `${this.prefix}L`;
  static orange3         = `${this.prefix}@`;
  static violet          = `${this.prefix}O`;
  static darkViolet      = `${this.prefix};`;
  static tan             = `${this.prefix}4`;
  static tan2            = `${this.prefix}D`;
  static tan_v2          = `${this.prefix}7`;
  static wheat           = `${this.prefix}M`;
}

class ColorConstants {
  // loot filter colors
  static none      = CharConstants.empty;
  static white     = BaseColorConstants.white;
  static gray      = BaseColorConstants.grayDimmer;
  static black     = BaseColorConstants.black;
  static red       = BaseColorConstants.tomato;
  static green     = BaseColorConstants.lime;
  static darkGreen = BaseColorConstants.green;
  static blue      = BaseColorConstants.cornFlowerBlue;
  static lightBlue = BaseColorConstants.lightSkyBlue;
  static yellow    = BaseColorConstants.yellow;
  static orange    = BaseColorConstants.orange;
  static gold      = BaseColorConstants.tan;
  static purple    = BaseColorConstants.darkViolet;
  static pink      = BaseColorConstants.violet;
}

class FontColorConstants {
  // _profilehd.json colors
  static beige         = "$FontColorBeige";
  static black         = "$FontColorBlack";
  static currencyGold  = "$FontColorCurrencyGold";
  static darkGreen     = "$FontColorDarkGreen";
  static green         = "$FontColorGreen";
  static lightBlue     = "$FontColorLightBlue";
  static lightGray     = "$FontColorLightGray";
  static lightPurple   = "$FontColorLightPurple";
  static lightRed      = "$FontColorLightRed";
  static lightTeal     = "$FontColorLightTeal";
  static red           = "$FontColorRed";
  static veryLightGray = "$FontColorVeryLightGray";
  static white         = "$FontColorWhite";
}

class SettingsConstants {
  static hidden             = CharConstants.empty + CharConstants.space.repeat(config.HiddenItemTooltipSize);
  static highlightCharacter = config.HighlightCharacter !== this.custom ? config.HighlightCharacter                              : '*'; // replace * with desired custom character [CSTM-HLCTR]
  static highlightColor     = config.HighlightColor     !== this.custom ? `${BaseColorConstants.prefix}${config.HighlightColor}` : '1'; // replace 1 with desired custom color character (see above) [CSTM-HLCLR]
  
  static shouldFixIlvlIndent      = config.ItemLevel === "fix";
  static iLvlIndentFixSingle      = CharConstants.space.repeat(4); // for single digit ilvl items
  static iLvlIndentFixDouble      = CharConstants.space.repeat(6); // for double digit ilvl items
  static iLvlIndentFixQuality     = CharConstants.space.repeat(6); // for double digit ilvl items when item quality is enabled // todo: check if needed
  static iLvlIndentFixFacets      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixCharms      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixQuestSingle = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
  static iLvlIndentFixQuestDouble = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
  
  static disabled  = "none";
  static all       = "all";
  static custom    = "custom";
}

class PaddingConstants {
  static none = CharConstants.empty;
  static p1   = CharConstants.space;
  static p2   = CharConstants.space.repeat(2);
  static p3   = CharConstants.space.repeat(3);
  static p5   = CharConstants.space.repeat(5);
  static p10  = CharConstants.space.repeat(10);
}

class PatternConstants {
  static none  = CharConstants.empty;
  static p2    = SettingsConstants.highlightCharacter.repeat(2);
  static p5    = SettingsConstants.highlightCharacter.repeat(5);
  static p10   = SettingsConstants.highlightCharacter.repeat(10);
  static p2x10 = `${this.p10}${PaddingConstants.p2}${this.p10}`;
  static p3x10 = `${this.p10}${PaddingConstants.p2}${this.p10}${PaddingConstants.p2}${this.p10}`;
}

class FileConstants {
  // extensions
  static FILE_EXTENSION_JSON = ".json";
  static FILE_EXTENSION_TXT  = ".txt";
  
  // ui layouts
  static FILE_PROFILE_HD_PATH = `global\\ui\\layouts\\_profilehd${this.FILE_EXTENSION_JSON}`;
  
  // localized jsons
  static FILE_PATH_STRINGS          = "local\\lng\\strings\\";
  static FILE_ITEM_MODIFIERS_PATH   = `${this.FILE_PATH_STRINGS}item-modifiers${this.FILE_EXTENSION_JSON}`;
  static FILE_ITEM_NAMEAFFIXES_PATH = `${this.FILE_PATH_STRINGS}item-nameaffixes${this.FILE_EXTENSION_JSON}`;
  static FILE_ITEM_NAMES_PATH       = `${this.FILE_PATH_STRINGS}item-names${this.FILE_EXTENSION_JSON}`;
  static FILE_ITEM_RUNES_PATH       = `${this.FILE_PATH_STRINGS}item-runes${this.FILE_EXTENSION_JSON}`;
  static FILE_UI_PATH               = `${this.FILE_PATH_STRINGS}ui${this.FILE_EXTENSION_JSON}`;
  
  // excel
  static FILE_EXCEL        = "global\\excel\\"
  static FILE_WEAPONS_PATH = `${this.FILE_EXCEL}weapons${this.FILE_EXTENSION_TXT}`;
  static FILE_ARMOR_PATH   = `${this.FILE_EXCEL}armor${this.FILE_EXTENSION_TXT}`;
  static FILE_MISC_PATH    = `${this.FILE_EXCEL}misc${this.FILE_EXTENSION_TXT}`;
  static FILE_SOUNDS_PATH  = `${this.FILE_EXCEL}sounds${this.FILE_EXTENSION_TXT}`;
}

class RuneConstants {
  // I consider the rune tiers to be:
  // - low: 1-15 (El-Hel)
  // - low-mid: 16-20 (Io-Lem)
  // - mid: 21-15 (Pul-Gul)
  // - high: 26-33 (Vex-Zod)
  // I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.

  static tierLow = [
    { number: 1,  name: "El"    }, 
    { number: 2,  name: "Eld"   }, 
    { number: 3,  name: "Tir"   }, 
    { number: 4,  name: "Nef"   }, 
    { number: 5,  name: "Eth"   }, 
    { number: 6,  name: "Ith"   }, 
    { number: 7,  name: "Tal"   }, 
    { number: 9,  name: "Ort"   }, 
    { number: 10, name: "Thul"  }, 
    { number: 11, name: "Amn"   }, 
    { number: 12, name: "Sol"   }, 
    { number: 13, name: "Shael" }, 
    { number: 14, name: "Dol"   }, 
  ];
  static tierLowMid = [
    { number: 8,  name: "Ral" }, 
    { number: 15, name: "Hel" }, 
    { number: 16, name: "Io"  }, 
    { number: 17, name: "Lum" }, 
    { number: 18, name: "Ko"  }, 
    { number: 19, name: "Fal" }, 
  ];
  static tierMid = [
    { number: 20, name: "Lem" }, 
    { number: 21, name: "Pul" }, 
    { number: 22, name: "Um"  }, 
    { number: 23, name: "Mal" }, 
    { number: 24, name: "Ist" }, 
    { number: 25, name: "Gul" }, 
  ];
  static tierHigh = [
    { number: 26, name: "Vex"  }, 
    { number: 27, name: "Ohm"  }, 
    { number: 28, name: "Lo"   }, 
    { number: 29, name: "Sur"  }, 
    { number: 30, name: "Ber"  }, 
    { number: 31, name: "Jah"  }, 
    { number: 32, name: "Cham" }, 
    { number: 33, name: "Zod"  }, 
  ];

  static clrName      = ColorConstants.orange;
  static clrHighlight = SettingsConstants.highlightColor;
  static colorAlternate = config.RunesHighlightColorAlt !== SettingsConstants.custom ? `${BaseColorConstants.prefix}${config.RunesHighlightColorAlt}` : ';'; // replace 1 with desired custom color character (see above) [CSTM-HLCRA]

  // set the highlight patterns for each rune tier
  static patternLow     = CharConstants.empty;   // 
  static patternLowMid  = PatternConstants.p5;    // *****
  static patternMid     = PatternConstants.p10;   // **********
  static patternHigh    = config.BigTooltipRunesHigh === SettingsConstants.disabled ? PatternConstants.p3x10 : PatternConstants.p2x10; // ********** ********** ********** or ********** ********** with big tooltips

  // set the amount of spaces between the rune name and the highlight patterns for each rune tier
  static paddingLow = PaddingConstants.none;
  static paddingLowMid = PaddingConstants.p3;
  static paddingMid = PaddingConstants.p5;
  static paddingHigh = PaddingConstants.p5;

  static tiers = [
    { level: 1, runes: this.tierLow,    padding: this.paddingLow,    pattern: this.patternLow,    isVisible: config.ShouldShowRunesLow,    bigTooltipSetting: config.BigTooltipRunesLow,    hasLightPillar: config.ShouldAddLightPillarRunesLow,    dropSound: config.DropSoundRunesLow    },
    { level: 2, runes: this.tierLowMid, padding: this.paddingLowMid, pattern: this.patternLowMid, isVisible: config.ShouldShowRunesLowMid, bigTooltipSetting: config.BigTooltipRunesLowMid, hasLightPillar: config.ShouldAddLightPillarRunesLowMid, dropSound: config.DropSoundRunesLowMid },
    { level: 3, runes: this.tierMid,    padding: this.paddingMid,    pattern: this.patternMid,    isVisible: config.ShouldShowRunesMid,    bigTooltipSetting: config.BigTooltipRunesMid,    hasLightPillar: config.ShouldAddLightPillarRunesMid,    dropSound: config.DropSoundRunesMid    },
    { level: 4, runes: this.tierHigh,   padding: this.paddingHigh,   pattern: this.patternHigh,   isVisible: config.ShouldShowRunesHigh,   bigTooltipSetting: config.BigTooltipRunesHigh,   hasLightPillar: config.ShouldAddLightPillarRunesHigh,   dropSound: config.DropSoundRunesHigh   },
  ];

  static tiersHighlighted        = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
  static tiersHighlightedNumbers = [3, 4];    // rune tiers where the added numbers (33) are in the highlight color instead of default
  static tiersHighlightedNames   = [4];       // rune tiers where the rune name is in the highlight color instead of default
  static tiersAlternateColor     = [3, 4];    // rune tiers that use the alternate color if enabled

  static isAlternateColor = config.RunesHighlightColorAlt !== SettingsConstants.none;
}

class UniqueConstants {
  static clrName = ColorConstants.gold;
  static clrHighlight = SettingsConstants.highlightColor;
  static pattern = PatternConstants.p10;
  static padding = PaddingConstants.p5;
  static prefix = `${this.clrHighlight}${this.pattern}${this.clrName}${this.padding}`;
  static suffix = `${this.padding}${this.clrHighlight}${this.pattern}${this.clrName}`;
}

class JewelryConstants {
  static ring = "rin";
  static amulet = "amu";
  static jewel = "jew";

  static small = "cm1";
  static large = "cm2";
  static grand = "cm3";

  static anni = "Annihilus";
  static torch = "Hellfire Torch";
  static gheeds = "Gheed's Fortune";

  static sunderMagic = "Black Cleft";
  static sunderPhys = "Bone Break";
  static sunderCold = "Cold Rupture";
  static sunderLite = "Crack of the Heavens";
  static sunderFire = "Flame Rift";
  static sunderPsn = "Rotting Fissure";
}

class GemConstants {
  static amethyst = "Amethyst";
  static diamond  = "Diamond";
  static emerald  = "Emerald";
  static ruby     = "Ruby";
  static sapphire = "Sapphire";
  static topaz    = "Topaz";
  static skull    = "Skull";

  static chipped = "Chipped";
  static flawed = "Flawed";
  static flawless = "Flawless";
  static perfect = "Perfect";

  static clrAmethyst = ColorConstants.purple;
  static clrDiamond  = ColorConstants.white;
  static clrEmerald  = ColorConstants.green;
  static clrRuby     = ColorConstants.red;
  static clrSapphire = ColorConstants.blue;
  static clrTopaz    = ColorConstants.yellow;
  static clrSkull    = ColorConstants.gray;
  
  static clrName = ColorConstants.white;
  static highlight = CharConstants.o;
  static padding = PaddingConstants.p1;
}

class QuestConstants {
  static prefix = UniqueConstants.prefix;
  static suffix = UniqueConstants.suffix;
}

class BigTooltipConstants {
  static padding = PaddingConstants.p5;
  static pickUpMsg = `${CharConstants.newLine}${ColorConstants.purple}Pick Up`;
}

class LightPillarConstants {
  // item paths
  static PATH_ITEMS                = "hd\\items\\";
  static PATH_ITEMS_MISC           = `${this.PATH_ITEMS}misc\\`;
  static PATH_ITEMS_WEAPON         = `${this.PATH_ITEMS}weapon\\`;
  static PATH_ITEMS_MISC_BODY_PART = `${this.PATH_ITEMS_MISC}body_part\\`;
  static PATH_ITEMS_MISC_QUEST     = `${this.PATH_ITEMS_MISC}quest\\`;
  static PATH_ITEMS_WEAPON_HAMMER  = `${this.PATH_ITEMS_WEAPON}hammer\\`;
  static PATH_ITEMS_WEAPON_MACE    = `${this.PATH_ITEMS_WEAPON}mace\\`;
  static PATH_ITEMS_WEAPON_STAFF   = `${this.PATH_ITEMS_WEAPON}staff\\`;

  // vfx paths
  static PATH_VFX_BASE           = "data/hd/vfx/particles/overlays/";
  static PATH_HORADRIC_LIGHT     = `${this.PATH_VFX_BASE}object/horadric_light/fx_horadric_light.particles`;
  static PATH_PALADIN_FANATICISM = `${this.PATH_VFX_BASE}paladin/aura_fanatic/aura_fanatic.particles`;
  static PATH_VALKYRIE_START     = `${this.PATH_VFX_BASE}common/valkyriestart/valkriestart_overlay.particles`;

  // vfx names
  static DEFINITION_COMPONENT_TRANSFORM = "TransformDefinitionComponent";
  static DEFINITION_COMPONENT_VFX       = "VfxDefinitionComponent";
  static NAME_TRANSFORM1                = "component_transform1";
  static NAME_VFX_STOLEN                = "entity_vfx_filthyStolenMod";
  static NAME_VFX_ROOT                  = "entity_root_VfxDefinition";

  // vfx params
  static TYPE_ENTITY      = "Entity";
  static NAME_DROPLIGHT   = "droplight";
  static NAME_ENTITY_ROOT = "entity_root";
  static ID_DROPLIGHT     = 9999996974;
  static ID_ENTITY_ROOT   = 1079187010;

  // vfx light pillar
  static LIGHT_PILLAR_COMPONENT = {
    particle: {
      path: this.PATH_HORADRIC_LIGHT,
    },
    entities: [
      {
        type: this.TYPE_ENTITY,
        name: this.NAME_DROPLIGHT,
        id: this.ID_DROPLIGHT,
        components: [
          {
            type: this.DEFINITION_COMPONENT_TRANSFORM,
            name: this.NAME_TRANSFORM1,
            position: { x: 0.0, y: 0.0, z: 0.0 },
            orientation: { x: 0.0, y: 0.0, z: 0.0, w: 1.0 },
            scale: { x: 1.0, y: 1.0, z: 1.0 },
            inheritOnlyPosition: false
          },
          {
            type: this.DEFINITION_COMPONENT_VFX,
            name: this.NAME_VFX_STOLEN,
            filename: this.PATH_HORADRIC_LIGHT,
            hardKillOnDestroy: false
          }
        ]
      },
      {
        type: this.TYPE_ENTITY,
        name: this.NAME_ENTITY_ROOT,
        id: this.ID_ENTITY_ROOT,
        components: [
          {
            type: this.DEFINITION_COMPONENT_VFX,
            name: this.NAME_VFX_ROOT,
            filename: this.PATH_PALADIN_FANATICISM,
            hardKillOnDestroy: false
          }
        ]
      },
      {
        type: this.TYPE_ENTITY,
        name: this.NAME_DROPLIGHT,
        id: this.ID_DROPLIGHT,
        components: [
          {
            type: this.DEFINITION_COMPONENT_TRANSFORM,
            name: this.NAME_TRANSFORM1,
            position: { x: 0.0, y: 0.0, z: 0.0 },
            orientation: { x: 0.0, y: 0.0, z: 0.0, w: 1.0 },
            scale: { x: 1.0, y: 1.0, z: 1.0 },
            inheritOnlyPosition: false
          },
          {
            type: this.DEFINITION_COMPONENT_VFX,
            name: this.NAME_VFX_STOLEN,
            filename: this.PATH_VALKYRIE_START,
            hardKillOnDestroy: false
          }
        ]
      }
    ]
  };
}

class DropSoundConstants {
  // sound names
  static SOUND_NONE = "";
  static SOUND_ITEM_RUNE = "item_rune";
  static SOUND_PREFIX = "celf_"; // caedendi extended loot filter

  // channels
  static CHANNEL_ITEMS_SD = "sfx/items_sd";
  static CHANNEL_ITEMS_HD = "sfx/items_hd";
  
  // file names
  static FILE_CURSOR = "cursor\\";
  static FILE_OBJECT = "object\\";
  static FILE_EXTENSION_FLAC = ".flac";
  static FILE_NONE = `none${this.FILE_EXTENSION_FLAC}`;

  static SOUND_EFFECTS = {
    hostile: {
      sd: `${this.FILE_CURSOR}hostile${this.FILE_EXTENSION_FLAC}`,
      hd: `${this.FILE_CURSOR}cursor_hostile_1_hd${this.FILE_EXTENSION_FLAC}`,
    },
    hf_place: {
      sd: `${this.FILE_OBJECT}hellforgeplace${this.FILE_EXTENSION_FLAC}`,
      hd: `${this.FILE_OBJECT}object_hellforgeplace_hd${this.FILE_EXTENSION_FLAC}`,
    },
    hf_smash: {
      sd: `${this.FILE_OBJECT}hellforgesmash${this.FILE_EXTENSION_FLAC}`,
      hd: `${this.FILE_OBJECT}object_hellforgesmash_hd${this.FILE_EXTENSION_FLAC}`,
    },
    cairn_success: {
      sd: `${this.FILE_OBJECT}cairnsuccess${this.FILE_EXTENSION_FLAC}`,
      hd: `${this.FILE_OBJECT}object_cairnsuccess_hd${this.FILE_EXTENSION_FLAC}`,
    },
    portal_open: {
      sd: `${this.FILE_OBJECT}portalopen${this.FILE_EXTENSION_FLAC}`,
      hd: `${this.FILE_OBJECT}object_portalopen_hd${this.FILE_EXTENSION_FLAC}`,
    },
    quest_done: {
      sd: `${this.FILE_CURSOR}questdone${this.FILE_EXTENSION_FLAC}`,
      hd: `${this.FILE_CURSOR}cursor_questdone_1_hd${this.FILE_EXTENSION_FLAC}`,
    },
    none: {
      sd: this.FILE_NONE,
      hd: this.FILE_NONE,
    },
    custom: {
      sd: this.FILE_NONE, // Put your custom drop sound here [CSTM-DSND]
      hd: this.FILE_NONE, // Put your custom drop sound here [CSTM-DSND]
    },
  };
}

/**
 * Global helper functions
 */
class Helper {
  static upsert(array, id, value) {
    const i = array.findIndex(x => x.id === id);
    if (i > -1) array[i] = { id: id, value: value};
    else array.push({ id: id, value: value });
  }

  static getSubcollectionById(array, id) {
    let i = array.findIndex((x) => x.id === id);
    if (i < 0) 
      throw new Error(`Can't find subcollection \"${id}\" in array.`);
    return array[i].value;
  }

  static mergeSubcollections(array) {
    return array.flatMap(sub => sub.value);
  }

  static createBigTooltips(collection, setting) {
    collection.forEach(entry => entry.value = this.generateBigTooltip(setting, entry.value))   
  }

  /**
   * Generate an item name with a highlight pattern on the left side: `${ColorConstants.red}+HP1` or `${ColorConstants.gray}o Arrows`.
   * @param {*} patternColor The color of the highlight pattern.
   * @param {*} pattern The pattern for the highlight.
   * @param {*} padding The padding between the highlights and the item name.
   * @param {*} itemColor The color of the item name.
   * @param {*} itemName The name of the item.
   * @returns A complete item name with a colored highlight pattern on the left side.
   */
  static generateSingleHighlight(patternColor, pattern, padding, itemColor, itemName) {
    return `${patternColor}${pattern}${itemColor}${padding}${itemName}`;
  }

  /**
   * Generate an item name with a highlight pattern on both sides: `${ColorConstants.red}**********${ColorConstants.gold}     ${NAME}     ${ColorConstants.red}**********${ColorConstants.gold}`.
   * @param {*} patternColor The color of the highlight pattern.
   * @param {*} pattern The pattern for the highlight.
   * @param {*} padding The padding between the highlights and the item name.
   * @param {*} itemColor The color of the item name.
   * @param {*} itemName The name of the item.
   * @returns A complete item name with colored highlight patterns on both sides.
   */
  static generateDoubleHighlight(patternColor, pattern, padding, itemColor, itemName) {
    return `${patternColor}${pattern}${itemColor}${padding}${itemName}${padding}${patternColor}${pattern}${itemColor}`;
  }

  /**
   * 
   * @param {*} setting A setting as set in the Big Tooltips section of the settings menu. Determines the height of the Big Tooltip and if it contains the Pick Up message.
   * @param {*} name The item name (after other filtering and highlighting has been applied). Nothing in this line will be changed.
   * @returns A multi-line item name, which will show as a Big Tooltip when the item is on the ground.
   */
  static generateBigTooltip(setting, name) {
    if (setting === SettingsConstants.disabled) {
      return name;
    }

    // new lines work upside-down: adding \n will add a new line on top of the current one (instead of below like you would expect)
    if (setting === SettingsConstants.custom) { // [CSTM-BTT]
      // ADD YOUR CUSTOM BIG TOOLTIP HERE
      return CharConstants.newLine + `${BigTooltipConstants.padding}${name}${BigTooltipConstants.padding}` + CharConstants.newLine;
    }

    name = `${BigTooltipConstants.padding}${name}${BigTooltipConstants.padding}`;
    if (setting === "2") {
      return name + CharConstants.newLine;
    }
    if (setting === "2pu") {
      return name + BigTooltipConstants.pickUpMsg;
    }
    if (setting === "3") {
      return CharConstants.newLine + name + CharConstants.newLine;
    }
    if (setting === "4pu") {
      return CharConstants.newLine + name + BigTooltipConstants.pickUpMsg + CharConstants.newLine;
    }
    if (setting === "5") {
      return CharConstants.newLine + CharConstants.newLine + name + CharConstants.newLine + CharConstants.newLine;
    }

    return "undefined";
  }
}


//===============================================//
//   Loot Filter Builders - Item Name Features   //
//===============================================//

class AbstractItemNamesBuilder {
  constructor() {
    if (new.target === AbstractItemNamesBuilder) {
      throw new TypeError("Cannot construct abstract AbstractItemNamesBuilder instances directly");
    }
  }

  /**
   * Update all entries in path matching the IDs in customNames to new values.
   * @param {*} path The path to the file to apply custom names to.
   * @param {*} customNames An array of item code & name key/value pairs.
   */
  applyCustomNames(path, customNames) {
    // todo
    // if (customNames.length == 0) {
    //   return;
    // }
    
    let file = D2RMM.readJson(path); // copy existing file
    file.forEach((item) => { // overwrite provided entries with new names
      if (item.Key in customNames) {
        for (const key in item) {
          if (key !== "id" && key !== "Key") {
            item[key] = customNames[item.Key];
          }
        }
      }
    });
    D2RMM.writeJson(path, file); // overwrite existing file with new file
  }
  
  /**
   * Update all entries in path matching the IDs in customNames to new values.
   * @param {*} path The path to the file to apply custom names to.
   * @param {*} customNames An array of { id: x, value: y } objects
   */
  applyCustomNamesNew(path, customNames) {
    if (customNames.length == 0) {
      return;
    }
    
    let file = D2RMM.readJson(path); // copy existing file
    file.forEach((item) => { // overwrite provided entries with new names
      var idList = customNames.map(x => x.id)
      if (idList.includes(item.Key)) {
        for (const key in item) {
          if (key !== "id" && key !== "Key") {
            item[key] = customNames.find(x => x.id == [item.Key]).value;
          }
        }
      }
    });
    D2RMM.writeJson(path, file); // overwrite existing file with new file
  }
}

class CustomAffixesBuilder extends AbstractItemNamesBuilder {
  items = {};
  // items = [];
  // index = {};

  build() {
    // this.init();
    this.customizeGold(config.GoldAmount, config.GoldSuffix);
    this.shortenSupInferiorPrefixes(config.ShortSupInferiorPrefixes);
    this.customizeGems(config.Gems);
    
    // this.createBigTooltips();

    this.applyCustomNames(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH, this.items);
    // this.applyCustomNames(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH, this.items.flat());

    // customAffixes.items.forEach(collection => {
    //   applyCustomNames(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH, collection);
    // });
  }

  // init() {
  //   // creates a subcollection inside this.items for each item type.
  //   // the reason we're doing it like this is because we want to use named (string) indexes ("gems" etc) for convenience instead
  //   // of hardcoded numbers, but functions like .length and .forEach don't work with string indexes. This method circumvents that 
  //   // by referencing a const string name that's actually an index number underwater.

  //   // for (let i = 0; i < COL_CA.length; i++) {
  //   //   items[COL_CA[i].name] = i;
  //   // }


  //   let collections = [
  //     COL_GOLD,
  //     COL_QUALITY,
  //     COL_GEMS,
  //   ];
  //   initializeCollections2(ca, COL_CA);
  //   ca.forEach(col => {
  //     this.items[ca[col.name]] = {};
  //   });
  // }

  customizeGold(settingAmount, settingAffix) {
    let color = settingAmount === "wg" ? ColorConstants.gold : settingAmount === "gw" ? ColorConstants.white : ColorConstants.none;

    switch (settingAffix) {
      case SettingsConstants.disabled: // Gold displays as "1234 Gold".
        if (color !== ColorConstants.none) {
          this.items.gld = `${color}Gold`; 
        }
        return;
      case "g": // Gold displays as "1234 G".
        // this.items[ca[COL_GOLD]].gld = `${color}G`; 
        this.items.gld = `${color}G`; 
        return;
      case "hide": // Gold displays as "1234".
        this.items.gld = SettingsConstants.hidden;
        return;
      case SettingsConstants.custom: // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gld = `${ColorConstants.purple}Gold`;
        return;
    }
  }
  
  shortenSupInferiorPrefixes(setting) {
    var color = (setting === "color") ? ColorConstants.gray : ColorConstants.none;
    var superior = `${CharConstants.plus}`;
    var inferior = `${color}${CharConstants.minus}`;

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "short": // Enable
      case "color":   // Enable, gray Inferior items
        this.items["Hiquality"]   = superior;
        this.items["Damaged"]     = inferior;
        this.items["Cracked"]     = inferior;
        this.items["Low Quality"] = inferior;
        this.items["Crude"]       = inferior;
        return;
      case SettingsConstants.custom: // [CSTM-SPIF]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items["Hiquality"]   = `Superior`;
        this.items["Damaged"]     = `Damaged`;
        this.items["Cracked"]     = `Cracked`;
        this.items["Low Quality"] = `Low Quality`;
        this.items["Crude"]       = `Crude`;
        return;
    }
  }

  customizeGems(setting) {
    // These gem names also function as affixes, which is why they are located in the item-nameaffixes.json file.
    // Enabling filtering for these gems could also change for example the Ruby-part in a "Ruby Jewel of Fervor".
    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        // `${ColorConstants.green}o${ColorConstants.white} Emerald`;
        this.items.gsw = Helper.generateSingleHighlight(GemConstants.clrDiamond,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.diamond);  // Diamond
        this.items.gsg = Helper.generateSingleHighlight(GemConstants.clrEmerald,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.emerald);  // Emerald
        this.items.gsr = Helper.generateSingleHighlight(GemConstants.clrRuby,     GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.ruby);     // Ruby
        this.items.gsb = Helper.generateSingleHighlight(GemConstants.clrSapphire, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.sapphire); // Sapphire
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems();
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems();
        return;
      case SettingsConstants.custom: // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gsw = `Diamond`; 
        this.items.gsg = `Emerald`; 
        this.items.gsr = `Ruby`;
        this.items.gsb = `Sapphire`;
        return;
    }
  }

  hideGems() {
    this.items.gsw = SettingsConstants.hidden;
    this.items.gsg = SettingsConstants.hidden;
    this.items.gsr = SettingsConstants.hidden;
    this.items.gsb = SettingsConstants.hidden;
  }

  // createBigTooltips() {
  //   this.items.forEach(collection => {

  //   });
  // }
};

class CustomRunesBuilder extends AbstractItemNamesBuilder {
  runeCollections = [];
  // runes = new AwesomeArray();

  init() {
    RuneConstants.tiers.forEach((tier) => {
      Helper.upsert(this.runeCollections, tier.level, []);
    });
  }

  build() {
    this.init();
    this.customizeRunes(config.RunesHighlighting);
    this.createBigTooltips();
    this.applyCustomNamesNew(FileConstants.FILE_ITEM_RUNES_PATH, Helper.mergeSubcollections(this.runeCollections));
  }
  
  customizeRunes(setting) {
    const hasAffix               = [                       "nrs-hls",     "nrs", "hls"].includes(setting); // settings that keep the " Rune" affix
    const hasNumber              = [SettingsConstants.all, "nrs-raf", "nrs-hls", "nrs"].includes(setting); // settings that add rune numbers
    const hasSettingHighlighting = [SettingsConstants.all, "nrs-hls", "hls-raf", "hls"].includes(setting); // settings that add highlighting

    switch (setting) {
      case SettingsConstants.disabled:    // should not be reached
      case "raf":     // Remove affix
        return;
      case SettingsConstants.all:     // Add rune numbers + highlights + remove affix
      case "nrs-raf": // Add rune numbers + remove affix
      case "nrs-hls": // Add rune numbers + highlights
      case "hls-raf": // Add highlights + remove affix
      case "nrs":     // Add rune numbers
      case "hls":     // Add highlights
        this.generateRuneNames(setting, hasAffix, hasNumber, hasSettingHighlighting);
        return;
      case SettingsConstants.custom: // [CSTM-RUN]
        // ADD YOUR CUSTOM ITEM NAMES HERE. NOTE: THIS BYPASSES BIG TOOLTIPS SETTINGS.
        let clrMsg       = ColorConstants.purple;
        let clrRune      = ColorConstants.orange;
        let clrHighlight = ColorConstants.red;
        let highlight1   = "**";
        let highlight2   = "*****";
        let highlight3   = "**********";

        this.runes.r01 = `${clrRune}El (1)`;                                                                               // El
        this.runes.r02 = `${clrRune}Eld (2)`;                                                                              // Eld
        this.runes.r03 = `${clrRune}Tir (3)`;                                                                              // Tir
        this.runes.r04 = `${clrRune}Nef (4)`;                                                                              // Nef
        this.runes.r05 = `${clrRune}Eth (5)`;                                                                              // Eth
        this.runes.r06 = `${clrRune}Ith (6)`;                                                                              // Ith
        this.runes.r07 = `${clrRune}Tal (7)`;                                                                              // Tal
        this.runes.r08 = `${clrHighlight}${highlight1}${clrRune}  Ral (8)  ${clrHighlight}${highlight1}${clrRune}`;        // Ral
        this.runes.r09 = `${clrRune}Ort (9)`;                                                                              // Ort
        this.runes.r10 = `${clrRune}Thul (10)`;                                                                            // Thul
        this.runes.r11 = `${clrRune}Amn (11)`;                                                                             // Amn
        this.runes.r12 = `${clrRune}Sol (12)`;                                                                             // Sol
        this.runes.r13 = `${clrRune}Shael (13)`;                                                                           // Shael
        this.runes.r14 = `${clrRune}Dol (14)`;                                                                             // Dol
        this.runes.r15 = `${clrHighlight}${highlight1}${clrRune}  Hel (15) ${clrHighlight}${highlight1}${clrRune}`;        // Hel
        this.runes.r16 = `${clrRune}Io (16)`;                                                                              // Io
        this.runes.r17 = `${clrRune}Lum (17)`;                                                                             // Lum
        this.runes.r18 = `${clrHighlight}${highlight1}${clrRune}  Ko (18)  ${clrHighlight}${highlight1}${clrRune}`;        // Ko
        this.runes.r19 = `${clrHighlight}${highlight1}${clrRune}  Fal (19)  ${clrHighlight}${highlight1}${clrRune}`;       // Fal
        this.runes.r20 = `${clrHighlight}${highlight1}${clrRune}  Lem (20)  ${clrHighlight}${highlight1}${clrRune}`;       // Lem
        this.runes.r21 = `${clrHighlight}${highlight2}${clrRune}   Pul (21)   ${clrHighlight}${highlight2}${clrRune}`;     // Pul
        this.runes.r22 = `${clrHighlight}${highlight2}${clrRune}   Um (22)   ${clrHighlight}${highlight2}${clrRune}`;      // Um
        this.runes.r23 = `${clrHighlight}${highlight2}${clrRune}   Mal (23)   ${clrHighlight}${highlight2}${clrRune}`;     // Mal
        this.runes.r24 = `${clrHighlight}${highlight2}${clrRune}   Ist (24)   ${clrHighlight}${highlight2}${clrRune}`;     // Ist
        this.runes.r25 = `${clrHighlight}${highlight2}${clrRune}   Gul (25)   ${clrHighlight}${highlight2}${clrRune}`;     // Gul
        this.runes.r26 = `${clrHighlight}${highlight3}${clrRune}     Vex (26)     ${clrHighlight}${highlight3}${clrRune}`; // Vex
        this.runes.r27 = `${clrHighlight}${highlight3}${clrRune}     Ohm (27)     ${clrHighlight}${highlight3}${clrRune}`; // Ohm
        this.runes.r28 = `${clrHighlight}${highlight3}${clrRune}     Lo (28)     ${clrHighlight}${highlight3}${clrRune}`;  // Lo
        this.runes.r29 = `${clrHighlight}${highlight3}${clrRune}     Sur (29)     ${clrHighlight}${highlight3}${clrRune}`; // Sur
        this.runes.r30 = `${clrHighlight}${highlight3}${clrRune}     Ber (30)     ${clrHighlight}${highlight3}${clrRune}`; // Ber
        this.runes.r31 = `${clrHighlight}${highlight3}${clrRune}     Jah (31)     ${clrHighlight}${highlight3}${clrRune}`; // Jah
        // this.runes.r32 = `${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}`; // Cham
        this.runes.r32 = `\n\n${clrMsg}Pick Up\n${LTT_PADDING}${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}${LTT_PADDING}\n\n`; // Cham
        this.runes.r32 = Helper.generateBigTooltip(config.BigTooltipRunesHigh, `${clrHighlight}${PatternConstants.p2x10}${clrRune}${PaddingConstants.p10}Cham (32)${PaddingConstants.p10}${clrHighlight}${PatternConstants.p2x10}${clrRune}`); // Cham
        // this.runes.r32 = Helper.generateBigTooltip(`${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}`); // Cham
        // this.runes.r33 = `${clrHighlight}${highlight3}${clrRune}     Zod (33)     ${clrHighlight}${highlight3}${clrRune}`;  // Zod
        // this.runes.r33 = `${RuneConstants.clrHighlight}${PatternConstants.p10}${PaddingConstants.p5}${RuneConstants.clrName}Zod (33)${PaddingConstants.p5}${RuneConstants.clrHighlight}${PatternConstants.p10}${RuneConstants.clrName}`;  // Zod
        this.runes.r33 = Helper.generateDoubleHighlight(clrHighlight, PatternConstants.p10, PaddingConstants.p5, clrRune, "Zod Rune (33)"); // Zod
        return;
    }
  }

  generateRuneNames(setting, hasAffix, hasNumber, hasSettingHighlighting) {
    RuneConstants.tiers.forEach((tier) => {
      let tierCollection = Helper.getSubcollectionById(this.runeCollections, tier.level); // get this.runeCollections[tier.level]

      tier.runes.forEach((rune) => {
        let itemCode = rune.number < 10 ? `r0${rune.number}` : `r${rune.number}`;
        let runeName = !tier.isVisible ? SettingsConstants.hidden : this.generateRuneName(rune.name, rune.number, tier.level, tier.pattern, tier.padding, setting, hasAffix, hasNumber, hasSettingHighlighting);
        Helper.upsert(tierCollection, itemCode, runeName); // chuck generated code/name combination into this.runeCollections => [current tier] => [current rune]
      });
    });
  }

  generateRuneName(name, number, tier, highlightPattern, padding, setting, hasAffix, hasNumber, hasSettingHighlighting) {
    const hasHighlighting       = hasSettingHighlighting && RuneConstants.tiersHighlighted.includes(tier);
    const hasHighlightedNumber  = hasSettingHighlighting && RuneConstants.tiersHighlightedNumbers.includes(tier);
    const hasHighlightedName    = hasSettingHighlighting && RuneConstants.tiersHighlightedNames.includes(tier);
    const hasAlternateNameColor = RuneConstants.isAlternateColor && RuneConstants.tiersAlternateColor.includes(tier);

    var highlightColor1 = hasHighlighting ? RuneConstants.clrHighlight : ColorConstants.none;
    var highlightColor2 = highlightColor1;
    var nameColor1 = !hasAlternateNameColor ? (hasHighlightedName ? RuneConstants.clrHighlight : RuneConstants.clrName) : RuneConstants.colorAlternate;
    var nameColor2 = nameColor1;
    var numberColor = !hasAlternateNameColor ? (hasHighlightedNumber ? RuneConstants.clrHighlight : RuneConstants.clrName) : ColorConstants.none;

    if (hasAffix) {
      name = `${name} Rune`;
    }

    // remove duplicate color codes where possible
    if ((hasHighlighting && nameColor2 === highlightColor2) || !hasHighlighting) {
      nameColor2 = ColorConstants.none;
    }
    if (hasHighlighting && ((hasNumber && highlightColor2 === numberColor) || (!hasNumber && highlightColor2 === nameColor1))) {
      highlightColor2 = ColorConstants.none;
    }
    // set rune number
    if (hasNumber) {
      if (numberColor === nameColor1) {
        numberColor = ColorConstants.none;
      }
      name = `${name} ${numberColor}(${number})`;
    }
    // remove last duplicate color code where possible
    if (hasHighlighting && highlightColor1 === nameColor1) {
      nameColor1 = ColorConstants.none;
    }

    let runeName = `${highlightColor1}${highlightPattern}${nameColor1}${padding}${name}${padding}${highlightColor2}${highlightPattern}${nameColor2}`;

    return runeName;
    // return settingBigTooltip !== "disable" ? Helper.generateBigTooltip(settingBigTooltip, runeName) : runeName;
  }

  createBigTooltips() {
    RuneConstants.tiers.forEach(tier => {
      let runeCollection = Helper.getSubcollectionById(this.runeCollections, tier.level);
      Helper.createBigTooltips(runeCollection, tier.bigTooltipSetting);
    });
  }
};

class CustomItemsBuilder extends AbstractItemNamesBuilder {
  items = {};

  // facets
  FACET_COLOR_NAME = ColorConstants.gold;
  FACET_PATTERN = PatternConstants.p5;
  FACET_PADDING_1 = PaddingConstants.p1; // padding between individual patterns
  FACET_PADDING_2 = PaddingConstants.p3; // padding between name and FACET_ALTERNATE_PREFIX / FACET_ALTERNATE_SUFFIX
  FACET_ALTERNATE_PREFIX = `${ColorConstants.red}${this.FACET_PATTERN}${this.FACET_PADDING_1}${ColorConstants.yellow}${this.FACET_PATTERN}${this.FACET_PADDING_1}${ColorConstants.blue}${this.FACET_PATTERN}${this.FACET_PADDING_1}${ColorConstants.green}${this.FACET_PATTERN}${this.FACET_COLOR_NAME}${this.FACET_PADDING_2}`;
  FACET_ALTERNATE_SUFFIX = `${this.FACET_PADDING_2}${ColorConstants.green}${this.FACET_PATTERN}${this.FACET_PADDING_1}${ColorConstants.blue}${this.FACET_PATTERN}${this.FACET_PADDING_1}${ColorConstants.yellow}${this.FACET_PATTERN}${this.FACET_PADDING_1}${ColorConstants.red}${this.FACET_PATTERN}${this.FACET_COLOR_NAME}`;
  FACET_PREFIX = config.IsFacetAltPattern ? this.FACET_ALTERNATE_PREFIX : UniqueConstants.prefix;
  FACET_SUFFIX = config.IsFacetAltPattern ? this.FACET_ALTERNATE_SUFFIX : UniqueConstants.suffix;

  // charms
  CHARMS_UNIQUE_PREFIX = UniqueConstants.prefix;
  CHARMS_UNIQUE_SUFFIX = UniqueConstants.suffix;

  // endgame
  ENDGAME_COLOR_NAME = ColorConstants.orange;
  ENDGAME_COLOR_HIGHLIGHT = SettingsConstants.highlightColor;

  ESSENCE_PREFIX = `${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p5}${this.ENDGAME_COLOR_NAME}${PaddingConstants.p3}`;
  ESSENCE_SUFFIX = `${PaddingConstants.p3}${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p5}${this.ENDGAME_COLOR_NAME}`;
  KEY_PREFIX = `${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p10}${this.ENDGAME_COLOR_NAME}${PaddingConstants.p5}`;
  KEY_SUFFIX = `${PaddingConstants.p5}${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p10}${this.ENDGAME_COLOR_NAME}`;
  TOKEN_PREFIX = this.KEY_PREFIX;
  TOKEN_SUFFIX = this.KEY_SUFFIX;
  ORGAN_PREFIX = `${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p3x10}${this.ENDGAME_COLOR_NAME}${PaddingConstants.p5}`;
  ORGAN_SUFFIX = `${PaddingConstants.p5}${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p3x10}${this.ENDGAME_COLOR_NAME}`;

  STANDARD_OF_HEROES_PREFIX = `${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p5}${UniqueConstants.clrName}${PaddingConstants.p3}`;
  STANDARD_OF_HEROES_SUFFIX = `${PaddingConstants.p3}${this.ENDGAME_COLOR_HIGHLIGHT}${PatternConstants.p5}${UniqueConstants.clrName}`;
  
  build() {
    // this.init();
    this.customizeHealingPotions(config.HealingPotions);
    this.customizeBuffPotions(config.BuffPotions);
    this.customizeThrowingPotions(config.ThrowingPotions);
    this.customizeScrollsAndTomes(config.ScrollsTomes);
    this.customizeArrowsAndBolts(config.ArrowsBolts);
    this.customizeKeys(config.Keys);
    this.customizeJewels(config.Jewels);
    this.customizeCharms(config.Charms);
    this.customizeGems(config.Gems);
    this.customizeQuestItems(config.Quest);
    this.customizeEndgameItems(config.Endgame);
    this.customizeWeaponsAndArmor(config.ShouldFilterWeapons, config.ShouldFilterArmor);

    this.createBigTooltips();

    this.applyCustomNames(FileConstants.FILE_ITEM_NAMES_PATH, this.items);
    // this.applyCustomNames(FileConstants.FILE_ITEM_NAMES_PATH, this.items.flat());
  }

  // init() {
  //   // creates a subcollection inside this.items for each item type.
  //   // the reason we're doing it like this is because we want to use named (string) indexes ("gems" etc) for convenience instead
  //   // of hardcoded numbers, but functions like .length and .forEach don't work with string indexes. This method circumvents that 
  //   // by referencing a const string name that's actually an index number underwater.
  //   let collections = {
  //     name: COL_HEALPOTS, setting: 
  //     COL_HEALPOTS, 
  //     COL_BUFFPOTS, 
  //     COL_THROWPOTS, 
  //     COL_SCROLLS, 
  //     COL_AMMO, 
  //     COL_KEYS, 
  //     COL_GEMS, 
  //     COL_JEWELS, 
  //     COL_CHARMS, 
  //     COL_QUEST, 
  //     COL_ENDGAME, 
  //     COL_WEPARM, 
  //   };
  //   initializeCollections(ci, collections);
  //   collections.forEach(col => {
  //     this.items[ca[col]] = {};
  //   });
  // },

  customizeHealingPotions(setting) {
    const clrHeal = ColorConstants.red;
    const clrMana = ColorConstants.blue;
    const clrRej = ColorConstants.purple;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.plus;
    const padding = PaddingConstants.none;

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightLv123Potions(clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv4Potions(  clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(  clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs( clrRej,  clrName, pattern, padding);
        this.highlightFullRejuvs(  clrRej,  clrName, pattern, padding);
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions( clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions( clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(clrRej,  clrName, pattern, padding);
        this.highlightFullRejuvs( clrRej,  clrName, pattern, padding);
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions( clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(clrRej,  clrName, pattern, padding);
        this.highlightFullRejuvs( clrRej,  clrName, pattern, padding);
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions(clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(clrRej,  clrName, pattern, padding);
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions(clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(clrRej,  clrName, pattern, padding);
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions();
        this.highlightSmallRejuvs(clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(clrRej,  clrName, pattern, padding);
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions();
        this.highlightFullRejuvs(clrRej,  clrName, pattern, padding);
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions();
        return;
      case SettingsConstants.custom: // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.hp1 = `${clrHeal}+${clrName}HP1`;    // Minor Healing Potion
        this.items.hp2 = `${clrHeal}+${clrName}HP2`;    // Light Healing Potion
        this.items.hp3 = `${clrHeal}+${clrName}HP3`;    // Healing Potion
        this.items.hp4 = `${clrHeal}+${clrName}HP4`;    // Greater Healing Potion
        this.items.hp5 = `${clrHeal}+${clrName}HP5`;    // Super Healing Potion
        
        this.items.mp1 = `${clrMana}+${clrName}MP1`;   // Minor Mana Potion
        this.items.mp2 = `${clrMana}+${clrName}MP2`;   // Light Mana Potion
        this.items.mp3 = `${clrMana}+${clrName}MP3`;   // Mana Potion
        this.items.mp4 = `${clrMana}+${clrName}MP4`;   // Greater Mana Potion
        this.items.mp5 = `${clrMana}+${clrName}MP5`;   // Super Mana Potion
        
        this.items.rvs = `${clrRej}+${clrName}RPS`; // Rejuvenation Potion
        this.items.rvl = `${clrRej}+${clrName}RPF`; // Full Rejuvenation Potion
        return;
    }
  }

  hideHealingPotions() {
    this.items.hp1 = SettingsConstants.hidden; // Minor Healing Potion
    this.items.hp2 = SettingsConstants.hidden; // Light Healing Potion
    this.items.hp3 = SettingsConstants.hidden; // Healing Potion
    this.items.hp4 = SettingsConstants.hidden; // Greater Healing Potion
    this.items.hp5 = SettingsConstants.hidden; // Super Healing Potion
    
    this.items.mp1 = SettingsConstants.hidden; // Minor Mana Potion
    this.items.mp2 = SettingsConstants.hidden; // Light Mana Potion
    this.items.mp3 = SettingsConstants.hidden; // Mana Potion
    this.items.mp4 = SettingsConstants.hidden; // Greater Mana Potion
    this.items.mp5 = SettingsConstants.hidden; // Super Mana Potion
    
    this.items.rvs = SettingsConstants.hidden; // Rejuvenation Potion
    this.items.rvl = SettingsConstants.hidden; // Full Rejuvenation Potion
  }

  highlightLv123Potions(clrHeal, clrMana, clrName, pattern, padding) {
    this.items.hp1 = Helper.generateSingleHighlight(clrHeal, pattern, padding, clrName, "HP1"); // Minor Healing Potion
    this.items.hp2 = Helper.generateSingleHighlight(clrHeal, pattern, padding, clrName, "HP2"); // Light Healing Potion
    this.items.hp3 = Helper.generateSingleHighlight(clrHeal, pattern, padding, clrName, "HP3"); // Healing Potion
    this.items.mp1 = Helper.generateSingleHighlight(clrMana, pattern, padding, clrName, "MP1");    // Minor Mana Potion
    this.items.mp2 = Helper.generateSingleHighlight(clrMana, pattern, padding, clrName, "MP2");    // Light Mana Potion
    this.items.mp3 = Helper.generateSingleHighlight(clrMana, pattern, padding, clrName, "MP3");    // Mana Potion
  }

  highlightLv4Potions(clrHeal, clrMana, clrName, pattern, padding) {
    this.items.hp4 = Helper.generateSingleHighlight(clrHeal, pattern, padding, clrName, "HP4"); // Greater Healing Potion
    this.items.mp4 = Helper.generateSingleHighlight(clrMana, pattern, padding, clrName, "MP4");    // Greater Mana Potion
  }

  highlightLv5Potions(clrHeal, clrMana, clrName, pattern, padding) {
    this.items.hp5 = Helper.generateSingleHighlight(clrHeal, pattern, padding, clrName, "HP5"); // Super Healing Potion
    this.items.mp5 = Helper.generateSingleHighlight(clrMana, pattern, padding, clrName, "MP5");    // Super Mana Potion
  }

  highlightSmallRejuvs(clrRej, clrName, pattern, padding) {
    this.items.rvs = Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPS");   // Rejuvenation Potion
  }

  highlightFullRejuvs(clrRej, clrName, pattern, padding) {
    this.items.rvl = Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPF");   // Full Rejuvenation Potion
  }

  customizeBuffPotions(setting) {
    const clrHighlight = ColorConstants.green;
    const clrName      = ColorConstants.white;
    const pattern      = CharConstants.plus;
    const padding      = PaddingConstants.none;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.items.yps = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Antidote"); // Antidote Potion
        this.items.wms = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Thawing");  // Thawing Potion
        this.items.vps = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Stamina");  // Stamina Potion
        return;
      case "hide": // hide all
        this.items.yps = SettingsConstants.hidden;
        this.items.wms = SettingsConstants.hidden;
        this.items.vps = SettingsConstants.hidden;
        return;
      case SettingsConstants.custom: // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.yps = "Antidote Potion";
        this.items.wms = "Thawing Potion";
        this.items.vps = "Stamina Potion";
        return;
    }
  }

  customizeThrowingPotions(setting) {
    const clrGas = ColorConstants.darkGreen;
    const clrOil = ColorConstants.orange;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.o;
    const padding = PaddingConstants.p1;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.items.gpl = Helper.generateSingleHighlight(clrGas, pattern, padding, clrName, "Gas 1"); // Strangling Gas Potion
        this.items.gpm = Helper.generateSingleHighlight(clrGas, pattern, padding, clrName, "Gas 2"); // Choking Gas Potion
        this.items.gps = Helper.generateSingleHighlight(clrGas, pattern, padding, clrName, "Gas 3"); // Rancid Gas Potion
        this.items.opl = Helper.generateSingleHighlight(clrOil, pattern, padding, clrName, "Oil 1"); // Fulminating Potion
        this.items.opm = Helper.generateSingleHighlight(clrOil, pattern, padding, clrName, "Oil 2"); // Exploding Potion
        this.items.ops = Helper.generateSingleHighlight(clrOil, pattern, padding, clrName, "Oil 3"); // Oil Potion
        return;
      case "hide": // hide all
        this.items.gpl = SettingsConstants.hidden;
        this.items.gpm = SettingsConstants.hidden;
        this.items.gps = SettingsConstants.hidden;
        this.items.opl = SettingsConstants.hidden;
        this.items.opm = SettingsConstants.hidden;
        this.items.ops = SettingsConstants.hidden;
        return;
      case SettingsConstants.custom: // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gpl = "Strangling Gas Potion";
        this.items.gpm = "Choking Gas Potion";
        this.items.gps = "Rancid Gas Potion";
        this.items.opl = "Fulminating Potion";
        this.items.opm = "Exploding Potion";
        this.items.ops = "Oil Potion";
        return;
    }
  }

  customizeScrollsAndTomes(setting) {
    const clrScroll = ColorConstants.green;
    const clrTome   = ColorConstants.darkGreen;
    const clrName   = ColorConstants.white;
    const pattern   = CharConstants.plus;
    const padding   = PaddingConstants.none;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.highlightScrolls(clrScroll, clrName, pattern, padding);
        this.highlightTomes(clrTome, clrName, pattern, padding);
        return;
      case "hide": // hide scrolls, show books
        this.highlightTomes(clrTome, clrName, pattern, padding);
        this.hideScrolls();
        return;
      case SettingsConstants.custom: // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.tsc = "Scroll of Town Portal";
        this.items.isc = "Scroll of Identify";
        this.items.tbk = "Tome of Town Portal";
        this.items.ibk = "Tome of Identify";
        return;
    }
  }

  hideScrolls() {
    this.items.tsc = SettingsConstants.hidden; // Scroll of Town Portal
    this.items.isc = SettingsConstants.hidden; // Scroll of Identify
  }

  highlightScrolls(clrHighlight, clrName, pattern, padding) {
    this.items.tsc = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP"); // Scroll of Town Portal
    this.items.isc = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID"); // Scroll of Identify
  }

  highlightTomes(clrHighlight, clrName, pattern, padding) {
    this.items.tbk = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP Tome"); // Tome of Town Portal
    this.items.ibk = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID Tome"); // Tome of Identify
  }

  customizeArrowsAndBolts(setting) {
    const clrHighlight = ColorConstants.gray;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.o;
    const padding = PaddingConstants.p1;

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.items.aqv = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Arrows");
        this.items.cqv = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Bolts");
        return;
      case "hide":
        this.items.aqv = SettingsConstants.hidden; // Arrow Quiver
        this.items.cqv = SettingsConstants.hidden; // Crossbow Bolt Quiver
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.aqv = "Arrows";
        this.items.cqv = "Bolts";
        return;
    }
  }

  customizeKeys(setting) {
    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "hide":
        this.items.key = SettingsConstants.hidden;
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.key = "Key";
        return;
    }
  }
  

  //==========//
  //   Gems   //
  //==========//
  customizeGems(setting) {
    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightChippedFlawedRegular();
        this.highlightFlawless();
        this.highlightPerfect();
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideChippedFlawedRegular();
        this.highlightFlawless();
        this.highlightPerfect();
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideChippedFlawedRegular();
        this.hideFlawless();
        this.highlightPerfect();
        return;
      case "hide": // hide chipped/flawed/regular/flawless gems
        this.hideChippedFlawedRegular();
        this.hideFlawless();
        this.hidePerfect();
        return;
      case SettingsConstants.custom: // [CSTM-GEM1]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        // chipped
        this.items.gcv = `Chipped Amethyst`;
        this.items.gcw = `Chipped Diamond`;
        this.items.gcg = `Chipped Emerald`;
        this.items.gcr = `Chipped Ruby`;
        this.items.gcb = `Chipped Sapphire`;
        this.items.gcy = `Chipped Topaz`;
        this.items.skc = `Chipped Skull`;
        // flawed
        this.items.gfv = `Flawed Amethyst`;
        this.items.gfw = `Flawed Diamond`;
        this.items.gfg = `Flawed Emerald`;
        this.items.gfr = `Flawed Ruby`;
        this.items.gfb = `Flawed Sapphire`;
        this.items.gfy = `Flawed Topaz`;
        this.items.skf = `Flawed Skull`;
        // regular
        this.items.gsv = `Amethyst`;
        // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section above.
        // For some reason, the devs put these gems in another JSON file.
        this.items.gsy = `Topaz`;
        this.items.sku = `Skull`;
        // flawless
        this.items.gzv = `Flawless Amethyst`;
        this.items.glw = `Flawless Diamond`;
        this.items.glg = `Flawless Emerald`;
        this.items.glr = `Flawless Ruby`;
        this.items.glb = `Flawless Sapphire`;
        this.items.gly = `Flawless Topaz`;
        this.items.skl = `Flawless Skull`;
        //perfect
        this.items.gpv = `Perfect Amethyst`;
        this.items.gpw = `Perfect Diamond`;
        this.items.gpg = `Perfect Emerald`;
        this.items.gpr = `Perfect Ruby`;
        this.items.gpb = `Perfect Sapphire`;
        this.items.gpy = `Perfect Topaz`;
        this.items.skz = `Perfect Skull`;
        return;
    }
  }

  hideChippedFlawedRegular() {
    this.items.gcv = SettingsConstants.hidden;
    this.items.gcw = SettingsConstants.hidden;
    this.items.gcg = SettingsConstants.hidden;
    this.items.gcr = SettingsConstants.hidden;
    this.items.gcb = SettingsConstants.hidden;
    this.items.gcy = SettingsConstants.hidden;
    this.items.skc = SettingsConstants.hidden;
    this.items.gfv = SettingsConstants.hidden;
    this.items.gfw = SettingsConstants.hidden;
    this.items.gfg = SettingsConstants.hidden;
    this.items.gfr = SettingsConstants.hidden;
    this.items.gfb = SettingsConstants.hidden;
    this.items.gfy = SettingsConstants.hidden;
    this.items.skf = SettingsConstants.hidden;
    this.items.gsv = SettingsConstants.hidden;
    // For Ruby, Sapphire, Emerald and Diamond, see the "Affixes" section above.
    // For some reason, the devs put these gems in another JSON file.
    this.items.gsy = SettingsConstants.hidden;
    this.items.sku = SettingsConstants.hidden;
  }

  hideFlawless() {
    this.items.gzv = SettingsConstants.hidden;
    this.items.glw = SettingsConstants.hidden;
    this.items.glg = SettingsConstants.hidden;
    this.items.glr = SettingsConstants.hidden;
    this.items.glb = SettingsConstants.hidden;
    this.items.gly = SettingsConstants.hidden;
    this.items.skl = SettingsConstants.hidden;
  }

  hidePerfect() {
    this.items.gpv = SettingsConstants.hidden;
    this.items.gpw = SettingsConstants.hidden;
    this.items.gpg = SettingsConstants.hidden;
    this.items.gpr = SettingsConstants.hidden;
    this.items.gpb = SettingsConstants.hidden;
    this.items.gpy = SettingsConstants.hidden;
    this.items.skz = SettingsConstants.hidden;
  }

  highlightChippedFlawedRegular() {
    this.items.gcv = Helper.generateSingleHighlight(GemConstants.clrAmethyst, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Amethyst
    this.items.gcw = Helper.generateSingleHighlight(GemConstants.clrDiamond,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Diamond
    this.items.gcg = Helper.generateSingleHighlight(GemConstants.clrEmerald,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Emerald
    this.items.gcr = Helper.generateSingleHighlight(GemConstants.clrRuby,     GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Ruby
    this.items.gcb = Helper.generateSingleHighlight(GemConstants.clrSapphire, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Sapphire
    this.items.gcy = Helper.generateSingleHighlight(GemConstants.clrTopaz,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Topaz
    this.items.skc = Helper.generateSingleHighlight(GemConstants.clrSkull,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.chipped);  // Chipped Skull
    this.items.gfv = Helper.generateSingleHighlight(GemConstants.clrAmethyst, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Amethyst
    this.items.gfw = Helper.generateSingleHighlight(GemConstants.clrDiamond,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Diamond
    this.items.gfg = Helper.generateSingleHighlight(GemConstants.clrEmerald,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Emerald
    this.items.gfr = Helper.generateSingleHighlight(GemConstants.clrRuby,     GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Ruby
    this.items.gfb = Helper.generateSingleHighlight(GemConstants.clrSapphire, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Sapphire
    this.items.gfy = Helper.generateSingleHighlight(GemConstants.clrTopaz,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Topaz
    this.items.skf = Helper.generateSingleHighlight(GemConstants.clrSkull,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawed);   // Flawed Skull
    this.items.gsv = Helper.generateSingleHighlight(GemConstants.clrAmethyst, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.amethyst); // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see the "CustomAffixesBuilder" section.
    // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
    this.items.gsy = Helper.generateSingleHighlight(GemConstants.clrTopaz,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.topaz);    // Topaz
    this.items.sku = Helper.generateSingleHighlight(GemConstants.clrSkull,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.skull);    // Skull
  }

  highlightFlawless() {
    this.items.gzv = Helper.generateSingleHighlight(GemConstants.clrAmethyst, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Amethyst
    this.items.glw = Helper.generateSingleHighlight(GemConstants.clrDiamond,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Diamond
    this.items.glg = Helper.generateSingleHighlight(GemConstants.clrEmerald,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Emerald
    this.items.glr = Helper.generateSingleHighlight(GemConstants.clrRuby,     GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Ruby
    this.items.glb = Helper.generateSingleHighlight(GemConstants.clrSapphire, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Sapphire
    this.items.gly = Helper.generateSingleHighlight(GemConstants.clrTopaz,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Topaz
    this.items.skl = Helper.generateSingleHighlight(GemConstants.clrSkull,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.flawless); // Flawless Skull
  }

  highlightPerfect() {
    this.items.gpv = Helper.generateSingleHighlight(GemConstants.clrAmethyst, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Amethyst
    this.items.gpw = Helper.generateSingleHighlight(GemConstants.clrDiamond,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Diamond
    this.items.gpg = Helper.generateSingleHighlight(GemConstants.clrEmerald,  GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Emerald
    this.items.gpr = Helper.generateSingleHighlight(GemConstants.clrRuby,     GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Ruby
    this.items.gpb = Helper.generateSingleHighlight(GemConstants.clrSapphire, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Sapphire
    this.items.gpy = Helper.generateSingleHighlight(GemConstants.clrTopaz,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Topaz
    this.items.skz = Helper.generateSingleHighlight(GemConstants.clrSkull,    GemConstants.highlight, GemConstants.padding, GemConstants.clrName, GemConstants.perfect); // Perfect Skull
  }
  

  //=============//
  //   Jewelry   //
  //=============//
  customizeJewels(setting) {
    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "facet":
        this.items["Rainbow Facet"] = `${SettingsConstants.iLvlIndentFixFacets}${this.FACET_PREFIX}Rainbow Facet${this.FACET_SUFFIX}`;
        return;
      case "facet-rb":
        this.items["Rainbow Facet"] = `${SettingsConstants.iLvlIndentFixFacets}${this.FACET_ALTERNATE_PREFIX}Rainbow Facet${this.FACET_ALTERNATE_SUFFIX}`;
        return;
      case SettingsConstants.custom: // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.jew = `${ColorConstants.red}Jewel${ColorConstants.blue}`; // includes magic, rare and unique jewels
        this.items["Rainbow Facet"] = `Rainbow Facet`;
        return;
    }
  }
  
  customizeCharms(setting) {
    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.highlightUnidentifiedCharms();
      	this.highlightUniqueCharms();
        this.highlightSunderCharms();
        return;
      case "uniq":
      	this.highlightUniqueCharms();
        this.highlightSunderCharms();
        return;
      case "unid":
        this.highlightUnidentifiedCharms();
        return;
      case SettingsConstants.custom: // [CSTM-CHA]
        this.items[JewelryConstants.small]       = `Small Charm`;
        this.items[JewelryConstants.large]       = `Large Charm`;
        this.items[JewelryConstants.grand]       = `Grand Charm`;
        this.items[JewelryConstants.anni]        = `Annihilus`;
        this.items[JewelryConstants.torch]       = `Hellfire Torch`;
        this.items[JewelryConstants.gheeds]      = `Gheed's Fortune`;
        this.items[JewelryConstants.sunderMagic] = `Black Cleft`;
        this.items[JewelryConstants.sunderPhys]  = `Bone Break`;
        this.items[JewelryConstants.sunderCold]  = `Cold Rupture`;
        this.items[JewelryConstants.sunderLite]  = `Crack of the Heavens`;
        this.items[JewelryConstants.sunderFire]  = `Flame Rift`;
        this.items[JewelryConstants.sunderPsn]   = `Rotting Fissure`;
        return;
    }
  }

  highlightUnidentifiedCharms() {
    this.items[JewelryConstants.small] = `Small ${ColorConstants.red}Charm${ColorConstants.blue}`;
    this.items[JewelryConstants.large] = `Large ${ColorConstants.red}Charm${ColorConstants.blue}`;
    this.items[JewelryConstants.grand] = `Grand ${ColorConstants.red}Charm${ColorConstants.blue}`;
  }

  highlightUniqueCharms(){
    [ JewelryConstants.anni, JewelryConstants.torch, JewelryConstants.gheeds ].forEach(charm => {
      this.items[charm] = `${SettingsConstants.iLvlIndentFixCharms}${this.CHARMS_UNIQUE_PREFIX}${charm}${this.CHARMS_UNIQUE_SUFFIX}`;
    });

    // this.items["Annihilus"]       = `${SettingsConstants.iLvlIndentFixCharms}${this.CHARMS_UNIQUE_PREFIX}Annihilus${this.CHARMS_UNIQUE_SUFFIX}`;
    // this.items["Hellfire Torch"]  = `${SettingsConstants.iLvlIndentFixCharms}${this.CHARMS_UNIQUE_PREFIX}Hellfire Torch${this.CHARMS_UNIQUE_SUFFIX}`;
    // this.items["Gheed's Fortune"] = `${SettingsConstants.iLvlIndentFixCharms}${this.CHARMS_UNIQUE_PREFIX}Gheed's Fortune${this.CHARMS_UNIQUE_SUFFIX}`;
  }

  highlightSunderCharms(){
    let sunderCharms = [ 
      { name: JewelryConstants.sunderMagic, color: ColorConstants.gray }, 
      { name: JewelryConstants.sunderPhys,  color: ColorConstants.white }, 
      { name: JewelryConstants.sunderCold,  color: ColorConstants.lightBlue }, 
      { name: JewelryConstants.sunderLite,  color: ColorConstants.yellow }, 
      { name: JewelryConstants.sunderFire,  color: ColorConstants.red }, 
      { name: JewelryConstants.sunderPsn,   color: ColorConstants.green }, 
    ];
    
    if (config.IsSunderAltPattern) {
      sunderCharms.forEach(charm => {
        this.items[charm.name] = SettingsConstants.iLvlIndentFixCharms + Helper.generateDoubleHighlight(charm.color, UniqueConstants.pattern, UniqueConstants.padding, UniqueConstants.clrName, charm.name);
      });
      
      // this.items["Black Cleft"]          = this.generateSunderCharmAltHighlight(ColorConstants.gray,      "Black Cleft");
      // this.items["Bone Break"]           = this.generateSunderCharmAltHighlight(ColorConstants.white,     "Bone Break");
      // this.items["Cold Rupture"]         = this.generateSunderCharmAltHighlight(ColorConstants.lightBlue, "Cold Rupture");
      // this.items["Crack of the Heavens"] = this.generateSunderCharmAltHighlight(ColorConstants.yellow,    "Crack of the Heavens");
      // this.items["Flame Rift"]           = this.generateSunderCharmAltHighlight(ColorConstants.red,       "Flame Rift");
      // this.items["Rotting Fissure"]      = this.generateSunderCharmAltHighlight(ColorConstants.green,     "Rotting Fissure");
    }
    else {
      sunderCharms.forEach(charm => {
        this.items[charm.name] = `${SettingsConstants.iLvlIndentFixCharms}${this.CHARMS_UNIQUE_PREFIX}${charm.name}${this.CHARMS_UNIQUE_SUFFIX}`;
      });

      // this.items["Black Cleft"]          = this.generateSunderCharmHighlight("Black Cleft");
      // this.items["Bone Break"]           = this.generateSunderCharmHighlight("Bone Break");
      // this.items["Cold Rupture"]         = this.generateSunderCharmHighlight("Cold Rupture");
      // this.items["Crack of the Heavens"] = this.generateSunderCharmHighlight("Crack of the Heaven");
      // this.items["Flame Rift"]           = this.generateSunderCharmHighlight("Flame Rift");
      // this.items["Rotting Fissure"]      = this.generateSunderCharmHighlight("Rotting Fissure");
    } 
  }

  // generateSunderCharmHighlight(name) {
  //   return `${SettingsConstants.iLvlIndentFixCharms}${this.CHARMS_UNIQUE_PREFIX}${name}${this.CHARMS_UNIQUE_SUFFIX}`;
  // }

  // generateSunderCharmAltHighlight(color, name) {
  //   return SettingsConstants.iLvlIndentFixCharms + Helper.generateDoubleHighlight(color, UniqueConstants.pattern, UniqueConstants.padding, UniqueConstants.clrName, name);
  // }
  
  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightQuestItems();
        this.highlightCube();
        return;
      case "xhc": // exclude cube
        this.highlightQuestItems();
        return;
      case SettingsConstants.custom: // [CSTM-QST1]
        // Act 1
        this.items.leg = `Wirt's Leg`;           // Wirt's Leg
        this.items.hdm = `Horadric Malus`;       // Horadric Malus
        this.items.bks = `Scroll of Inifuss`;    // Scroll of Inifuss
        this.items.bkd = `Scroll of Inifuss`;    // Scroll of Inifuss (deciphered)
        // Act 2
        this.items.tr1 = `Horadric Scroll`;      // Horadric Scroll
        this.items.box = `Horadric Cube`;        // Horadric Cube
        this.items.msf = `Staff of Kings`;       // Staff of Kings
        this.items.vip = `Amulet of the Viper`;  // Amulet of the Viper
        this.items.hst = `Horadric Staff`;       // Horadric Staff
        // Act 3
        this.items.j34 = `A Jade Figurine`;      // A Jade Figurine
        this.items.g34 = `The Golden Bird`;      // The Golden Bird
        this.items.bbb = `Lam Esen's Tome`;      // Lam Esen's Tome
        this.items.g33 = `The Gidbinn`;          // The Gidbinn
        this.items.qf1 = `Khalim's Flail`;       // Khalim's Flail
        this.items.qf2 = `Khalim's Will`;        // Khalim's Will
        this.items.qey = `Khalim's Eye`;         // Khalim's Eye
        this.items.qhr = `Khalim's Heart`;       // Khalim's Heart
        this.items.qbr = `Khalim's Brain`;       // Khalim's Brain
        this.items.mss = `Mephisto's Soulstone`; // Mephisto's Soulstone
        // Act 4
        this.items.hfh = `Hell Forge Hammer`;    // Hell Forge Hammer
        // Act 5
        // See exceptions [CSTM-QST2]

        // Extra
        this.items["Staff of Kings"]      = `Staff of Kings`;      // Staff of Kings
        this.items["Amulet of the Viper"] = `Amulet of the Viper`; // Amulet of the Viper
        this.items["Horadric Staff"]      = `Horadric Staff`;      // Horadric Staff
        this.items.LamTome                = `Lam Esen's Tome`;     // Lam Esen's Tome
        this.items.KhalimFlail            = `Khalim's Flail`;      // Khalim's Flail
        this.items.SuperKhalimFlail       = `Khalim's Will`;       // Khalim's Will
        this.items["Hell Forge Hammer"]   = `Hell Forge Hammer`;   // Hell Forge Hammer
        return;
    }
  }

  highlightQuestItems() {
    // for Book of Skill and Potion of Life, see [CSTM-QST2]
    let prefix = QuestConstants.prefix;
    let suffix = QuestConstants.suffix;

    // Act 1
    this.items.leg = `${prefix}Wirt's Leg${suffix}`;           // Wirt's Leg
    this.items.hdm = `${prefix}Horadric Malus${suffix}`;       // Horadric Malus
    this.items.bks = `${prefix}Scroll of Inifuss${suffix}`;    // Scroll of Inifuss
    this.items.bkd = `${prefix}Scroll of Inifuss${suffix}`;    // Scroll of Inifuss (deciphered)
    // Act 2
    this.items.tr1 = `${prefix}Horadric Scroll${suffix}`;      // Horadric Scroll
    this.items.msf = `${prefix}Staff of Kings${suffix}`;       // Staff of Kings
    this.items.vip = `${prefix}Amulet of the Viper${suffix}`;  // Amulet of the Viper
    this.items.hst = `${prefix}Horadric Staff${suffix}`;       // Horadric Staff
    // Act 3
    this.items.j34 = `${prefix}A Jade Figurine${suffix}`;      // A Jade Figurine
    this.items.g34 = `${prefix}The Golden Bird${suffix}`;      // The Golden Bird
    this.items.bbb = `${prefix}Lam Esen's Tome${suffix}`;      // Lam Esen's Tome
    this.items.g33 = `${prefix}The Gidbinn${suffix}`;          // The Gidbinn
    this.items.qf1 = `${prefix}Khalim's Flail${suffix}`;       // Khalim's Flail
    this.items.qf2 = `${prefix}Khalim's Will${suffix}`;        // Khalim's Will
    this.items.qey = `${prefix}Khalim's Eye${suffix}`;         // Khalim's Eye
    this.items.qhr = `${prefix}Khalim's Heart${suffix}`;       // Khalim's Heart
    this.items.qbr = `${prefix}Khalim's Brain${suffix}`;       // Khalim's Brain
    this.items.mss = `${prefix}Mephisto's Soulstone${suffix}`; // Mephisto's Soulstone
    // Act 4
    this.items.hfh = `${prefix}Hell Forge Hammer${suffix}`;    // Hell Forge Hammer
    // Act 5
    // See exceptions [CSTM-QST2]
 
    // Extra
    this.items["Staff of Kings"]      = `${prefix}Staff of Kings${suffix}`;      // Staff of Kings
    this.items["Amulet of the Viper"] = `${prefix}Amulet of the Viper${suffix}`; // Amulet of the Viper
    this.items["Horadric Staff"]      = `${prefix}Horadric Staff${suffix}`;      // Horadric Staff
    this.items.LamTome                = `${prefix}Lam Esen's Tome${suffix}`;     // Lam Esen's Tome
    this.items.KhalimFlail            = `${prefix}Khalim's Flail${suffix}`;      // Khalim's Flail
    this.items.SuperKhalimFlail       = `${prefix}Khalim's Will${suffix}`;       // Khalim's Will
    this.items["Hell Forge Hammer"]   = `${prefix}Hell Forge Hammer${suffix}`;   // Hell Forge Hammer

    if (SettingsConstants.shouldFixIlvlIndent) {
      // always single digit ilvl
      let indent = SettingsConstants.iLvlIndentFixQuestSingle;
      this.items.hst                  = indent + this.items.hst;
      this.items.qf2                  = indent + this.items.qf2;
      this.items["Horadric Staff"]    = indent + this.items["Horadric Staff"];
      this.items.SuperKhalimFlail     = indent + this.items.SuperKhalimFlail;

      // double digit ilvl
      indent = SettingsConstants.iLvlIndentFixQuestDouble;
      this.items.leg                  = indent + this.items.leg;
      this.items.hdm                  = indent + this.items.hdm;
      this.items.msf                  = indent + this.items.msf;
      this.items.g33                  = indent + this.items.g33;
      this.items.qf1                  = indent + this.items.qf1;
      this.items.hfh                  = indent + this.items.hfh;
      this.items["Staff of Kings"]    = indent + this.items["Staff of Kings"];
      this.items.KhalimFlail          = indent + this.items.KhalimFlail;
      this.items["Hell Forge Hammer"] = indent + this.items["Hell Forge Hammer"];
    }
  }

  highlightCube() {
    this.items.box = `${QuestConstants.prefix}Horadric Cube${QuestConstants.suffix}`; // Horadric Cube
  }
    
  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(setting){
    switch(setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightEndgameItems();
        this.items.std = `${this.STANDARD_OF_HEROES_PREFIX}Standard of Heroes${this.STANDARD_OF_HEROES_SUFFIX}`; // Standard of Heroes
        return;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems();
        return;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems();
        this.items.std = SettingsConstants.hidden;
        return;
      case SettingsConstants.custom: // [CSTM-END]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.tes = `Twisted Essence of Suffering`;
        this.items.ceh = `Charged Essense of Hatred`;
        this.items.bet = `Burning Essence of Terror`;
        this.items.fed = `Festering Essence of Destruction`;
        this.items.toa = `Token of Absolution`;
        this.items.pk1 = `Key of Terror`;
        this.items.pk2 = `Key of Hate`;
        this.items.pk3 = `Key of Destruction`;
        this.items.dhn = `Diablo's Horn`;
        this.items.bey = `Baal's Eye`;
        this.items.mbr = `Mephisto's Brain`;
        this.items.std = `Standard of Heroes`;
        return;
    }
  }

  highlightEndgameItems() {
    this.highlightEssences(this.ESSENCE_PREFIX, this.ESSENCE_SUFFIX);
    this.highlightToken(   this.TOKEN_PREFIX,   this.TOKEN_SUFFIX);
    this.highlightKeys(    this.KEY_PREFIX,     this.KEY_SUFFIX);
    this.highlightOrgans(  this.ORGAN_PREFIX,   this.ORGAN_SUFFIX);
  }
  
  highlightEssences(prefix, suffix) {
    this.items.tes = `${prefix}Twisted Essence of Suffering${suffix}`;     // Twisted Essence of Suffering
    this.items.ceh = `${prefix}Charged Essense of Hatred${suffix}`;        // Charged Essense of Hatred
    this.items.bet = `${prefix}Burning Essence of Terror${suffix}`;        // Burning Essence of Terror
    this.items.fed = `${prefix}Festering Essence of Destruction${suffix}`; // Festering Essence of Destruction
  }
  
  highlightToken(prefix, suffix) {
    this.items.toa = `${prefix}Token of Absolution${suffix}`;              // Token of Absolution
  }
  
  highlightKeys(prefix, suffix) {
    this.items.pk1 = `${prefix}Key of Terror${suffix}`;                    // Pandemonium Key 1 Key of Terror
    this.items.pk2 = `${prefix}Key of Hate${suffix}`;                      // Pandemonium Key 2 Key of Hate
    this.items.pk3 = `${prefix}Key of Destruction${suffix}`;               // Pandemonium Key 3 Key of Destruction
  }

  highlightOrgans(prefix, suffix) {
    this.items.dhn = `${prefix}Diablo's Horn${suffix}`;                    // Diablo's Horn
    this.items.bey = `${prefix}Baal's Eye${suffix}`;                       // Baal's Eye
    this.items.mbr = `${prefix}Mephisto's Brain${suffix}`;                 // Mephisto's Brain
  }
    
  //=====================//
  //   Weapons & Armor   //
  //=====================//
  
  // These lists change entries in item-names.json, so Set and Unique names like "Griffon's Eye" are also supported. Search the file for what Key to use. [CSTM-WEP] [CSTM-ARM]
  customizeWeaponsAndArmor(shouldFilterWeapons, shouldFilterArmor) {
    const WA_CLR_NAME    = ColorConstants.purple;
    const WA_CLR_PATTERN = ColorConstants.red;
    const WA_PATTERN     = PatternConstants.p10;
    const WA_PADDING     = PaddingConstants.p5;

    if (shouldFilterWeapons) {
      // ADD YOUR CUSTOM ITEM NAMES HERE

      // examples
      // this.items["jav"] = SettingsConstants.hidden;                          // Javelin, hide
      // this.items["jav"] = `${ColorConstants.black}Javelin`;               // Javelin, color name black
      // this.items["7gw"] = `${ColorConstants.black}Unearthed Wand${ColorConstants.blue}`; // Unearthed Wand, color name red
      // this.items["7gw"] = `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(WA_CLR_PATTERN, WA_PATTERN, WA_PADDING, WA_CLR_NAME, "Unearthed Wand")}${ColorConstants.blue}`; // Unearthed Wand, highlight
    }

    if (shouldFilterArmor) {
      // ADD YOUR CUSTOM ITEM NAMES HERE

      // examples
      // this.items["skp"] = SettingsConstants.hidden;                // Skull Cap, hide
      // this.items["skp"] = `${ColorConstants.black}Skull Cap`;   // Skull Cap, color name black
      // this.items["ci3"] = `${ColorConstants.red}Diadem${ColorConstants.blue}`; // Diadem, color name red
      // this.items["ci3"] = `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(WA_CLR_PATTERN, WA_PATTERN, WA_PADDING, WA_CLR_NAME, "Diadem")}${ColorConstants.blue}`; // Diadem, highlight
    }
  }

  createBigTooltips() {

  }
};

class CustomUiBuilder extends AbstractItemNamesBuilder {
  items = [];

  prefix = QuestConstants.prefix;
  suffix = QuestConstants.suffix;

  build() {
    this.customizeQuestItems(config.Quest);
    this.applyCustomNames(FileConstants.FILE_UI_PATH, this.items);
  }

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.items.ass = `${prefix}Book of Skill${suffix}`;  // Book of Skill
        this.items.xyz = `${prefix}Potion of Life${suffix}`; // Potion of Life
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.ass = `Book of Skill`;  // Book of Skill
        this.items.xyz = `Potion of Life`; // Potion of Life
        return;
    }
  }
};

class CustomModifiersBuilder extends AbstractItemNamesBuilder {
  items = [];

  prefix = QuestConstants.prefix;
  suffix = QuestConstants.suffix;

  build() {
    this.customizeQuestItems(config.Quest);
    this.applyCustomNames(FileConstants.FILE_ITEM_MODIFIERS_PATH, this.items);
  }

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    // Section specific to Malah's Potion and Scroll of Resistance, as these items are in a different file.
    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.items.ice = `${prefix}Malah's Potion${suffix}`;       // Malah's Potion
        this.items.tr2 = `${prefix}Scroll of Resistance${suffix}`; // Scroll of Resistance
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.ice = `Malah's Potion`;       // Malah's Potion
        this.items.tr2 = `Scroll of Resistance`; // Scroll of Resistance
        return;
    }
  }
};


//===================================================//
//   Loot Filter Builders - Non-Item Name Features   //
//===================================================//

class ItemLevelBuilder {
  build() {
    const fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);
    const fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    const fileMisc = D2RMM.readTsv(FileConstants.FILE_MISC_PATH);

    fileWeapons.rows.forEach((row) => {
      if (row.type === "tpot") { // exclude throwing potions
        return;
      }
      row.ShowLevel = 1;
    });
    
    fileArmor.rows.forEach((row) => {
      row.ShowLevel = 1;
    });
    
    fileMisc.rows.forEach((row) => {
      // amulets, rings, small/large/grand charms, jewels
      let jewelry = [
        JewelryConstants.ring,
        JewelryConstants.amulet,
        JewelryConstants.small,
        JewelryConstants.large,
        JewelryConstants.grand,
        JewelryConstants.jewel,
      ];
      // todo:
      // if (jewelry.includes(row.code)) { 
      if (jewelry.indexOf(row.code) !== -1) { 
        row.ShowLevel = 1;
        return;
      }
    });

    D2RMM.writeTsv(FileConstants.FILE_WEAPONS_PATH, fileWeapons);
    D2RMM.writeTsv(FileConstants.FILE_ARMOR_PATH, fileArmor);
    D2RMM.writeTsv(FileConstants.FILE_MISC_PATH, fileMisc);
  }
}

class ItemQualityBuilder {
  txtNormal      = config.ItemQuality !== SettingsConstants.custom ? 'n' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
  txtExceptional = config.ItemQuality !== SettingsConstants.custom ? 'x' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
  txtElite       = config.ItemQuality !== SettingsConstants.custom ? 'e' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]

  build() {
    const fileWeapons = D2RMM.readTsv(FileConstants.FILE_WEAPONS_PATH);
    const fileArmor = D2RMM.readTsv(FileConstants.FILE_ARMOR_PATH);
    const fileItemNames = D2RMM.readJson(FileConstants.FILE_ITEM_NAMES_PATH);

    const fileWeaponsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode);
    const fileArmorsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);

    this.addEquipmentQuality(fileWeaponsWithQuality, fileItemNames, config.ItemQuality);
    this.addEquipmentQuality(fileArmorsWithQuality, fileItemNames, config.ItemQuality);

    D2RMM.writeJson(FileConstants.FILE_ITEM_NAMES_PATH, fileItemNames);
  }

  addEquipmentQuality(equipment, itemNames, setting) {
    equipment.forEach(item => {
      var quality = (item.code === item.ultracode ? this.txtElite : (item.code === item.ubercode ? this.txtExceptional : this.txtNormal));

      const index = itemNames.findIndex((x) => x.Key === item.code);
      if (index < 0) {
        return;
      }
      
      for (const key in itemNames[index]) {
        if (key !== "id" && key !== "Key") {
          switch (setting) {
            case "suf-par":
              itemNames[index][key] = `${itemNames[index][key]} (${quality})`;
              continue;
            case "suf-bts":
              itemNames[index][key] = `${itemNames[index][key]} [${quality}]`;
              continue;
            case "pre-par":
              itemNames[index][key] = `(${quality}) ${itemNames[index][key]}`;
              continue;
            case "pre-bts":
              itemNames[index][key] = `[${quality}] ${itemNames[index][key]}`;
              continue;
            case SettingsConstants.custom:
              itemNames[index][key] = `${itemNames[index][key]} (${quality})`; // to set custom quality indicator, see [CSTM-QLTY]
              continue;
          }
        }
      }
    })
  }
}

class LightPillarBuilder {
  build() {
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
    if ( !config.ShouldAddLightPillarRunesLow && !config.ShouldAddLightPillarRunesLowMid 
      && !config.ShouldAddLightPillarRunesMid && !config.ShouldAddLightPillarRunesHigh ) {
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
    if ( !config.ShouldAddLightPillarGemsJewels 
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

    let toPush = [];

    // quest items
    if (config.ShouldAddLightPillarQuestItems) {
      toPush = toPush.concat([
        // act 1
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "bark_scroll"],                   // Scroll of Inifuss & Malah's Potion
        [`${LightPillarConstants.PATH_ITEMS_MISC}scroll\\`,   "deciphered_bark_scroll"],        // Scroll of Inifuss (deciphered)
        // act 2
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "book_of_skill"],                 // Book of Skill
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "scroll_of_horadric_quest_info"], // Horadric Scroll
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "horadric_cube"],                 // Horadric Cube
        [`${LightPillarConstants.PATH_ITEMS_MISC}amulet\\`,   "viper_amulet"],                  // Amulet of the Viper
        // act 3
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "jade_figurine"],                 // A Jade Figurine
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "gold_bird"],                     // The Golden Bird
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "scroll_of_self_resurrect"],      // Potion of Life & Malah's Potion
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "lam_esens_tome"],                // Lam Esen's Tome
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "eye"],                           // Khalim's Eye
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "heart"],                         // Khalim's Heart
        [`${LightPillarConstants.PATH_ITEMS_MISC_BODY_PART}`, "brain"],                         // Khalim's Brain
        [`${LightPillarConstants.PATH_ITEMS_MISC_QUEST}`,     "mephisto_soul_stone"],           // Mephisto's Soulstone
        // act 4
        // none
        // act 5
        // Malah's Potion       => see Potion of Life (scroll_of_self_resurrect)
        // Scroll of Resistance => see Scroll of Inifuss (bark_scroll)
      ]);
    }

    // quest weapons
    if (config.ShouldAddLightPillarQuestWeapons) {
      toPush = toPush.concat([
        // act 1
        [`${LightPillarConstants.PATH_ITEMS_WEAPON}club\\`,   "wirts_leg"],                     // Wirt's Leg
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_HAMMER}`,  "horadric_malus"],                // Horadric Malus
        // act 2
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_STAFF}`,   "staff_of_the_kings"],            // Staff of Kings
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_STAFF}`,   "horadric_staff"],                // Horadric Staff
        // act 3
        [`${LightPillarConstants.PATH_ITEMS_WEAPON}knife\\`,  "gidbinn"],                       // The Gidbinn
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_MACE}`,    "khalim_flail"],                  // Khalim's Flail
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_MACE}`,    "super_khalim_flail"],            // Khalim's Will
        // act 4
        [`${LightPillarConstants.PATH_ITEMS_WEAPON_HAMMER}`,  "hellforge_hammer"],              // Hell Forge Hammer
        // act 5
        // none
      ]);
    }

    toPush.forEach((item) => {
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
    if ( !config.ShouldAddLightPillarStandardOfHeroes 
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

};

class DropSoundBuilder {
  build() {
    let soundsFile = D2RMM.readTsv(FileConstants.FILE_SOUNDS_PATH);

    this.modifyDropSoundForRunes(soundsFile);
    this.modifyDropSoundForQuestItems(soundsFile);
    this.modifyDropSoundForEssences(soundsFile);
    this.modifyDropSoundForTokens(soundsFile);
    this.modifyDropSoundForKeys(soundsFile);
    this.modifyDropSoundForOrgans(soundsFile);
    this.modifyDropSoundForStandardOfHeroes(soundsFile);

    D2RMM.writeTsv(FileConstants.FILE_SOUNDS_PATH, soundsFile);
  }

  modifyDropSoundForRunes(soundsFile) {
    RuneConstants.tiers.forEach((tier) => {
      if (config.ShouldDisableDropSoundForHidden && !tier.isVisible) {
        return;
      }
  
      let itemCodes = tier.runes.map((rune) => rune.number < 10 ? `r0${rune.number}` : `r${rune.number}`);
      this.modifyDropSoundForMiscItems(soundsFile, itemCodes, `rune_tier_${tier.level}`, tier.dropSound);
    });
  }
  
  modifyDropSoundForQuestItems(soundsFile) {
    let itemCodesWeapons = [
      "leg", // Wirt's Leg
      "hdm", // Horadric Malus
      "hst", // Horadric Staff
      "msf", // Staff of Kings
      "g33", // The Gidbinn
      "qf1", // Khalim's Flail
      "qf2", // Khalim's Will
      "hfh", // Hell Forge Hammer
    ];
  
    let itemCodesMisc = [
      "bks", // Scroll of Inifuss
      "bkd", // Scroll of Inifuss (deciphered)
      "tr1", // Horadric Scroll
      "ass", // Book of Skill
      // "box", // Horadric Cube // [CSTM_DSBOX]
      "vip", // Amulet of the Viper
      "j34", // A Jade Figurine
      "g34", // The Golden Bird
      "xyz", // Potion of Life
      "bbb", // Lam Esen's Tome
      "qey", // Khalim's Eye
      "qhr", // Khalim's Heart
      "qbr", // Khalim's Brain
      "mss", // Mephisto's Soulstone
      "ice", // Malah's Potion
      "tr2", // Scroll of Resistance
    ];
  
    let suffix = "quest";
    this.modifyDropSoundForMiscItems(soundsFile, itemCodesMisc, suffix, config.DropSoundQuest);
    this.modifyDropSoundForWeapons(soundsFile, itemCodesWeapons, suffix, config.DropSoundQuest);
  }
  
  modifyDropSoundForEssences(soundsFile) {
    this.modifyDropSoundForMiscItems(soundsFile, ["tes", "ceh", "bet", "fed"], "essence", config.DropSoundEssences);
  }
  
  modifyDropSoundForTokens(soundsFile) {
    this.modifyDropSoundForMiscItems(soundsFile, ["toa"], "token", config.DropSoundToken);
  }
  
  modifyDropSoundForKeys(soundsFile) {
    this.modifyDropSoundForMiscItems(soundsFile, ["pk1", "pk2", "pk3"], "key", config.DropSoundKeys);
  }
  
  modifyDropSoundForOrgans(soundsFile) {
    this.modifyDropSoundForMiscItems(soundsFile, ["eyz", "brz", "hrn"], "organ", config.DropSoundOrgans);
  }
  
  modifyDropSoundForStandardOfHeroes(soundsFile) {
    this.modifyDropSoundForMiscItems(soundsFile, ["std"], "flag", config.DropSoundStandard);
  }
  
  modifyDropSoundForMiscItems(soundsFile, itemCodes, newNameSuffix, dropSound) {
    this.modifyDropSoundForItems(FileConstants.FILE_MISC_PATH, soundsFile, itemCodes, newNameSuffix, dropSound);
  }
  
  modifyDropSoundForWeapons(soundsFile, itemCodes, newNameSuffix, dropSound) {
    this.modifyDropSoundForItems(FileConstants.FILE_WEAPONS_PATH, soundsFile, itemCodes, newNameSuffix, dropSound);
  }
  
  // master dropsound function:
  // - check if set dropSound is not default
  // - create a new SD and HD dropsound pair in sounds.txt with the right settings
  // - link the newly created dropsound to the right items
  modifyDropSoundForItems(itemsFilePath, soundsFile, itemCodes, newNameSuffix, dropSound) {
    if (dropSound === "default") {
      return;
    }
    
    let newSoundName = this.createNewDropSound(soundsFile, newNameSuffix, DropSoundConstants.SOUND_EFFECTS[dropSound]);
    this.pushNewDropSoundToItems(itemsFilePath, itemCodes, newSoundName);
  }
  
  // create SD and HD sound, redirect SD to HD
  createNewDropSound(soundsFile, soundNameSuffix, sfxFileNames) {
    let soundNameSd = `${DropSoundConstants.SOUND_PREFIX}${soundNameSuffix}`;
    let soundNameHd = `${soundNameSd}_hd`;
    
    this.pushSound(soundsFile, soundNameSd, DropSoundConstants.SOUND_ITEM_RUNE, DropSoundConstants.CHANNEL_ITEMS_SD, sfxFileNames.sd, soundNameHd);
    this.pushSound(soundsFile, soundNameHd, DropSoundConstants.SOUND_ITEM_RUNE, DropSoundConstants.CHANNEL_ITEMS_HD, sfxFileNames.hd, DropSoundConstants.SOUND_NONE);
  
    return soundNameSd;
  }
  
  // create new entry in sounds.txt
  pushSound(soundsFile, soundName, template, sfxChannel, sfxFileName, sfxRedirect) {
    let newSound = { ...(soundsFile.rows.find((sound) => sound.Sound === template)) }; // create deep copy of template
  
    newSound.Sound = soundName;
    newSound["*Index"] = soundsFile.rows.length;
    newSound.Channel = sfxChannel;
    newSound.FileName = sfxFileName;
    newSound.Redirect = sfxRedirect;
    newSound["Volume Min"] = 255;
    newSound["Volume Max"] = 255;
    newSound.Priority = 255;
    newSound["Stop Inst"] = 0;
    newSound["Defer Inst"] = 0;
    newSound.Falloff = 4;
    
    soundsFile.rows.push(newSound);
  }
  
  // give items in filePath with corresponding itemCodes the newly created dropSound in sounds.txt
  pushNewDropSoundToItems(itemsFilePath, itemCodes, dropSound) {
    let file = D2RMM.readTsv(itemsFilePath);
  
    file.rows.forEach((row) => {
      if (itemCodes.indexOf(row.code) !== -1) {
        row.dropsound = dropSound;
        return;
      }
    });
  
    D2RMM.writeTsv(itemsFilePath, file);
  }  
};

class ProfileHdModsBuilder {
  ethColors = {
    Beige:         FontColorConstants.beige,
    Black:         FontColorConstants.black,
    DarkGreen:     FontColorConstants.darkGreen,
    Green:         FontColorConstants.green,
    LightBlue:     FontColorConstants.lightBlue,
    LightGray:     FontColorConstants.lightGray,
    LightPurple:   FontColorConstants.lightPurple,
    LightRed:      FontColorConstants.lightRed,
    LightTeal:     FontColorConstants.lightTeal,
    Red:           FontColorConstants.red,
    VeryLightGray: FontColorConstants.veryLightGray,
    White:         FontColorConstants.white,
  }

  build() {
    let path = FileConstants.FILE_PROFILE_HD_PATH;
    let profileHD = D2RMM.readJson(path);

    this.applyCustomGoldColor(profileHD, config.GoldAmount);
    this.applyCustomEtherealColor(profileHD, config.EthItemsColor);
    this.applyTooltipMods(profileHD, config.Tooltip, config.TooltipOpacity, config.TooltipSize);
    
    D2RMM.writeJson(path, profileHD);
  }

  applyCustomGoldColor(profileHD, setting) {
    if (setting === SettingsConstants.disabled || setting === "wg") {
      return;
    }

    let goldColor = ColorConstants.none;
    switch (setting) {
      case "g":
      case "gw":
        goldColor = FontColorConstants.currencyGold;
        break;
      case SettingsConstants.custom:
        goldColor = FontColorConstants.lightTeal;
        break;
    }
    
    profileHD.TooltipStyle.GoldColor = goldColor;
  }

  applyCustomEtherealColor(profileHD, setting) {
    if (setting === SettingsConstants.disabled) {
      return;
    }

    profileHD.TooltipStyle.EtherealColor = (setting !== SettingsConstants.custom) ? this.ethColors[setting] : FontColorConstants.lightTeal; // [CSTM-ETH] change FontColorConstants.lightTeal into any color variable in _profilehd.json
  }

  applyTooltipMods(profileHD, setting, opacity, tooltipSize) {
    if (setting === SettingsConstants.disabled) {
      return;
    }

    let bgColor = [0, 0, 0, opacity]; // [R, G, B, opacity]
    switch (setting) {
      case SettingsConstants.all:
        profileHD.TooltipStyle.inGameBackgroundColor = bgColor;
        profileHD.TooltipFontSize = tooltipSize;
        break;
      case "opacity":
        profileHD.TooltipStyle.inGameBackgroundColor = bgColor;
        break;
      case "size":
        profileHD.TooltipFontSize = tooltipSize;
        break;
    }
  }
}


//===========================================//
//   Loot Filter Builders - Master Builder   //
//===========================================//

class LootFilterBuilder {
  build() {
    this.applyCustomAffixes();
    this.applyCustomRuneNames();
    this.applyCustomItemNames();
    this.applyCustomUiNames();
    this.applyCustomModifiers();
    this.applyItemLevel();
    this.applyItemQuality();
    this.applyLightPillars();
    this.applyDropSounds();
    this.applyProfileHdMods();
  }

  // Gold, Superior/Inferior affixes, Gems (exceptions)
  applyCustomAffixes() {
    if ( config.GoldAmount === SettingsConstants.disabled 
      && config.GoldSuffix === SettingsConstants.disabled 
      && config.Gems === SettingsConstants.disabled 
      && config.ShortSupInferiorPrefixes === SettingsConstants.disabled ) {
      return;
    }

    (new CustomAffixesBuilder()).build();
  }

  // Runes
  applyCustomRuneNames() {
    if ( config.RunesHighlighting === SettingsConstants.disabled 
      || config.RunesHighlighting === "raf" ) {
      return;
    }

    (new CustomRunesBuilder()).build();
  }

  // Most item names
  applyCustomItemNames() {
    (new CustomItemsBuilder()).build();
  }

  // Quest items (exceptions)
  applyCustomUiNames() {
    if ( config.Quest === SettingsConstants.disabled ) {
      return;
    }

    (new CustomUiBuilder()).build();
  }

  // Quest items (exceptions)
  applyCustomModifiers() {
    if ( config.Quest === SettingsConstants.disabled ) {
      return;
    }

    (new CustomModifiersBuilder()).build();
  }

  // ilvl
  applyItemLevel() {
    if ( !(config.ItemLevel === "show" || config.ItemLevel === "fix") ) {
      return;
    }

    (new ItemLevelBuilder()).build();
  }

  // quality: normal/exceptional/elite
  applyItemQuality() {
    if (config.ItemQuality === SettingsConstants.disabled) {
      return;
    }

    (new ItemQualityBuilder()).build();
  }

  // light pillars
  applyLightPillars() {
    if (!config.IsLightPillarsEnabled) {
      return;
    }

    (new LightPillarBuilder()).build();
  }

  // drop sounds
  applyDropSounds() {
    if (!config.IsDropSoundsEnabled) {
      return;
    }

    (new DropSoundBuilder()).build();
  }

  // stuff in _profilehd.json
  applyProfileHdMods() {
    (new ProfileHdModsBuilder()).build();
  }
}

(new LootFilterBuilder()).build();
