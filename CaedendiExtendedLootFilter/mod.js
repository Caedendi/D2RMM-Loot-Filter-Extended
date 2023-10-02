////===============================================////
////===============================================////
////                                               ////
////   Caedendi's Extended Loot Filter for D2RMM   ////
////                    v2.2.0                     ////
////                                               ////
////===============================================////
////===============================================////


//=======================//
//   Constants - Files   //
//=======================//

// File paths
const FILE_EXTENSION_JSON = ".json";
const FILE_EXTENSION_TXT  = ".txt";

const FILE_PROFILE_HD_PATH = `global\\ui\\layouts\\_profilehd${FILE_EXTENSION_JSON}`;

const FILE_PATH_STRINGS          = "local\\lng\\strings\\";
const FILE_ITEM_MODIFIERS_PATH   = `${FILE_PATH_STRINGS}item-modifiers${FILE_EXTENSION_JSON}`;
const FILE_ITEM_NAMEAFFIXES_PATH = `${FILE_PATH_STRINGS}item-nameaffixes${FILE_EXTENSION_JSON}`;
const FILE_ITEM_NAMES_PATH       = `${FILE_PATH_STRINGS}item-names${FILE_EXTENSION_JSON}`;
const FILE_ITEM_RUNES_PATH       = `${FILE_PATH_STRINGS}item-runes${FILE_EXTENSION_JSON}`;
const FILE_UI_PATH               = `${FILE_PATH_STRINGS}ui${FILE_EXTENSION_JSON}`;

const FILE_EXCEL        = "global\\excel\\"
const FILE_WEAPONS_PATH = `${FILE_EXCEL}weapons${FILE_EXTENSION_TXT}`;
const FILE_ARMOR_PATH   = `${FILE_EXCEL}armor${FILE_EXTENSION_TXT}`;
const FILE_MISC_PATH    = `${FILE_EXCEL}misc${FILE_EXTENSION_TXT}`;
const FILE_SOUNDS_PATH  = `${FILE_EXCEL}sounds${FILE_EXTENSION_TXT}`;


//========================//
//   Constants - Colors   //
//========================//

const COLOR_PREFIX = "ÿc";

// all known colors in the game code
// note: all numbered colors that are not a v2 are the exact same color as their non-number counterpart
const CLR_WHITE             = `${COLOR_PREFIX}0`;
const CLR_WHITE_SMOKE       = `${COLOR_PREFIX}=`;
const CLR_WHITE_SMOKE2      = `${COLOR_PREFIX}E`;
const CLR_WHITE_SMOKE3      = `${COLOR_PREFIX}F`;
const CLR_WHITE_SMOKE4      = `${COLOR_PREFIX}G`;
const CLR_WHITE_SMOKE5      = `${COLOR_PREFIX}H`;
const CLR_GRAY_DIM          = `${COLOR_PREFIX}I`;
const CLR_GRAY_DIM2         = `${COLOR_PREFIX}K`;
const CLR_GRAY_DIMMER       = `${COLOR_PREFIX}5`;
const CLR_BLACK             = `${COLOR_PREFIX}6`;
const CLR_RED               = `${COLOR_PREFIX}U`;
const CLR_TOMATO            = `${COLOR_PREFIX}1`;
const CLR_CRIMSON           = `${COLOR_PREFIX}S`;
const CLR_LIME              = `${COLOR_PREFIX}2`;
const CLR_LIME2             = `${COLOR_PREFIX}Q`;
const CLR_LIME_V2           = `${COLOR_PREFIX}C`;
const CLR_LIME_GREEN        = `${COLOR_PREFIX}<`;
const CLR_GREEN             = `${COLOR_PREFIX}A`;
const CLR_GREEN2            = `${COLOR_PREFIX}:`;
const CLR_DEEP_SKY_BLUE     = `${COLOR_PREFIX}N`;
const CLR_LIGHT_SKY_BLUE    = `${COLOR_PREFIX}T`;
const CLR_MEDIUM_SLATE_BLUE = `${COLOR_PREFIX}P`;
const CLR_CORN_FLOWER_BLUE  = `${COLOR_PREFIX}3`;
const CLR_CORN_FLOWER_BLUE2 = `${COLOR_PREFIX}B`;
const CLR_YELLOW            = `${COLOR_PREFIX}9`;
const CLR_LIGHT_YELLOW      = `${COLOR_PREFIX}R`;
const CLR_ORANGE            = `${COLOR_PREFIX}8`;
const CLR_ORANGE1           = `${COLOR_PREFIX}J`;
const CLR_ORANGE2           = `${COLOR_PREFIX}L`;
const CLR_ORANGE3           = `${COLOR_PREFIX}@`;
const CLR_VIOLET            = `${COLOR_PREFIX}O`;
const CLR_DARK_VIOLET       = `${COLOR_PREFIX};`;
const CLR_TAN               = `${COLOR_PREFIX}4`;
const CLR_TAN2              = `${COLOR_PREFIX}D`;
const CLR_TAN_V2            = `${COLOR_PREFIX}7`;
const CLR_WHEAT             = `${COLOR_PREFIX}M`;

// loot filter colors
const WHITE     = CLR_WHITE;
const GRAY      = CLR_GRAY_DIMMER;
const BLACK     = CLR_BLACK;
const RED       = CLR_TOMATO;
const GREEN     = CLR_LIME;
const DARKGREEN = CLR_GREEN;
const BLUE      = CLR_CORN_FLOWER_BLUE;
const LIGHTBLUE = CLR_LIGHT_SKY_BLUE;
const YELLOW    = CLR_YELLOW;
const ORANGE    = CLR_ORANGE;
const GOLD      = CLR_TAN;
const PURPLE    = CLR_DARK_VIOLET;
const PINK      = CLR_VIOLET;


//==============================//
//   Parameters - Collections   //
//==============================//

const COL_HEALPOTS  = "healingPotions";
const COL_BUFFPOTS  = "buffPotions";
const COL_THROWPOTS = "throwingPotions";
const COL_SCROLLS   = "scrollsTomes";
const COL_AMMO      = "arrowsBolts";
const COL_KEYS      = "keys";
const COL_GEMS      = "gems";
const COL_JEWELS    = "jewels";
const COL_CHARMS    = "charms";
const COL_QUEST     = "quest";
const COL_ENDGAME   = "endgame";
const COL_WEPARM    = "weaponsArmor";
const COL_QUALITY   = "quality";
const COL_GOLD      = "gold";


//=========================//
//   Parameters - Global   //
//=========================//

// Naming
const EMPTY_STRING = '';
const SINGLE_SPACE = ' ';
const NEW_LINE = "\n";
const NONE = "none";

const HIDDEN = EMPTY_STRING + SINGLE_SPACE.repeat(config.HiddenItemTooltipSize);
const HIGHLIGHT       = config.HighlightCharacter !== "custom" ? config.HighlightCharacter                 : '*'; // replace * with desired custom character [CSTM-HLCTR]
const HIGHLIGHT_COLOR = config.HighlightColor     !== "custom" ? `${COLOR_PREFIX}${config.HighlightColor}` : '1'; // replace 1 with desired custom color character (see above) [CSTM-HLCLR]

const NO_COLOR   = EMPTY_STRING;
const NO_PATTERN = EMPTY_STRING;
const NO_PADDING = EMPTY_STRING;

const SMALL_O = 'o';
const PLUS    = '+';
const MINUS   = '-';

const PADDING_1 = SINGLE_SPACE;
const PADDING_2 = SINGLE_SPACE.repeat(2);
const PADDING_3 = SINGLE_SPACE.repeat(3);
const PADDING_5 = SINGLE_SPACE.repeat(5);
const PADDING_10 = SINGLE_SPACE.repeat(10);

const PATTERN_2    = HIGHLIGHT.repeat(2);
const PATTERN_5    = HIGHLIGHT.repeat(5);
const PATTERN_10   = HIGHLIGHT.repeat(10);
const PATTERN_2x10 = `${PATTERN_10}${PADDING_2}${PATTERN_10}`;
const PATTERN_3x10 = `${PATTERN_10}${PADDING_2}${PATTERN_10}${PADDING_2}${PATTERN_10}`;

const SHOULD_FIX_ILVL_INDENT = config.ItemLevel === "fix";
const ILVL_INDENT_FIX_SINGLE  = SINGLE_SPACE.repeat(4); // for single digit ilvl items
const ILVL_INDENT_FIX_DOUBLE  = SINGLE_SPACE.repeat(6); // for double digit ilvl items
const ILVL_INDENT_FIX_QUALITY = SINGLE_SPACE.repeat(6); // for double digit ilvl items when item quality is enabled
const ILVL_INDENT_FIX_FACET   = SHOULD_FIX_ILVL_INDENT ? ILVL_INDENT_FIX_DOUBLE : EMPTY_STRING;
const ILVL_INDENT_FIX_CHARMS  = SHOULD_FIX_ILVL_INDENT ? ILVL_INDENT_FIX_DOUBLE : EMPTY_STRING;
const ILVL_INDENT_FIX_QUEST1  = ILVL_INDENT_FIX_SINGLE; // quest items with a single digit ilvl
const ILVL_INDENT_FIX_QUEST2  = ILVL_INDENT_FIX_DOUBLE; // quest items with a double digit ilvl


//==========================================//
//   Parameters - Alternate Color Schemes   //
//==========================================//

const IS_ALTERNATE_COLOR_RUNES      = ["all", "fac-run", "sun-run", "run"].includes(config.AlternateColorSchemes);
const IS_ALTERNATE_HIGHLIGHT_FACET  = ["all", "fac-sun", "fac-run", "fac"].includes(config.AlternateColorSchemes);
const IS_ALTERNATE_HIGHLIGHT_SUNDER = ["all", "fac-sun", "sun-run", "sun"].includes(config.AlternateColorSchemes);


//========================//
//   Parameters - Runes   //
//========================//

// I consider the rune tiers to be:
// - low: 1-15 (El-Hel)
// - low-mid: 16-20 (Io-Lem)
// - mid: 21-15 (Pul-Gul)
// - high: 26-33 (Vex-Zod)
// I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.

const RUNE_TIER_LOW = [
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
const RUNE_TIER_LOWMID = [
  { number: 8,  name: "Ral" }, 
  { number: 15, name: "Hel" }, 
  { number: 16, name: "Io"  }, 
  { number: 17, name: "Lum" }, 
  { number: 18, name: "Ko"  }, 
  { number: 19, name: "Fal" }, 
];
const RUNE_TIER_MID = [
  { number: 20, name: "Lem" }, 
  { number: 21, name: "Pul" }, 
  { number: 22, name: "Um"  }, 
  { number: 23, name: "Mal" }, 
  { number: 24, name: "Ist" }, 
  { number: 25, name: "Gul" }, 
];
const RUNE_TIER_HIGH = [
  { number: 26, name: "Vex"  }, 
  { number: 27, name: "Ohm"  }, 
  { number: 28, name: "Lo"   }, 
  { number: 29, name: "Sur"  }, 
  { number: 30, name: "Ber"  }, 
  { number: 31, name: "Jah"  }, 
  { number: 32, name: "Cham" }, 
  { number: 33, name: "Zod"  }, 
];

const RUNES_COLOR_NAME      = ORANGE;
const RUNES_COLOR_HIGHLIGHT = HIGHLIGHT_COLOR;
const RUNES_COLOR_ALTERNATE = config.HighlightColorRunesAlternate !== "custom" ? `${COLOR_PREFIX}${config.HighlightColorRunesAlternate}` : ';'; // replace 1 with desired custom color character (see above) [CSTM-HLCRA]

// set the highlight patterns for each rune tier
const RUNES_PATTERN_LOW    = NO_PATTERN;   // 
const RUNES_PATTERN_LOWMID = PATTERN_5;    // *****
const RUNES_PATTERN_MID    = PATTERN_10;   // **********
const RUNES_PATTERN_HIGH   = PATTERN_3x10; // ********** ********** **********

// set the amount of spaces between the rune name and the highlight patterns for each rune tier
const RUNES_PADDING_LOW = NO_PADDING;
const RUNES_PADDING_LOWMID = PADDING_3;
const RUNES_PADDING_MID = PADDING_5;
const RUNES_PADDING_HIGH = PADDING_5;

const RUNE_TIERS = [
  { level: 1, runes: RUNE_TIER_LOW,    padding: RUNES_PADDING_LOW,    pattern: RUNES_PATTERN_LOW,    isVisible: config.ShouldShowRunesLow,    bigTooltipSetting: config.BigTooltipRunesLow,    hasLightPillar: config.ShouldAddLightPillarRunesLow,    dropSound: config.DropSoundRunesLow    },
  { level: 2, runes: RUNE_TIER_LOWMID, padding: RUNES_PADDING_LOWMID, pattern: RUNES_PATTERN_LOWMID, isVisible: config.ShouldShowRunesLowMid, bigTooltipSetting: config.BigTooltipRunesLowMid, hasLightPillar: config.ShouldAddLightPillarRunesLowMid, dropSound: config.DropSoundRunesLowMid },
  { level: 3, runes: RUNE_TIER_MID,    padding: RUNES_PADDING_MID,    pattern: RUNES_PATTERN_MID,    isVisible: config.ShouldShowRunesMid,    bigTooltipSetting: config.BigTooltipRunesMid,    hasLightPillar: config.ShouldAddLightPillarRunesMid,    dropSound: config.DropSoundRunesMid    },
  { level: 4, runes: RUNE_TIER_HIGH,   padding: RUNES_PADDING_HIGH,   pattern: RUNES_PATTERN_HIGH,   isVisible: config.ShouldShowRunesHigh,   bigTooltipSetting: config.BigTooltipRunesHigh,   hasLightPillar: config.ShouldAddLightPillarRunesHigh,   dropSound: config.DropSoundRunesHigh   },
];

const RUNE_TIERS_HIGHLIGHTED         = [2, 3, 4]; // rune tiers with a highlight pattern (***** rune *****)
const RUNE_TIERS_HIGHLIGHTED_NUMBERS = [3, 4];    // rune tiers where the added numbers (33) are in the highlight color instead of default
const RUNE_TIERS_HIGHLIGHTED_NAMES   = [4];       // rune tiers where the rune name is in the highlight color instead of default
const RUNE_TIERS_ALTERNATE_COLOR     = [3, 4];    // rune tiers that use the alternate color if enabled


//========================//
//   Parameters - Items   //
//========================//

// uniques
const UNIQUE_COLOR_NAME = GOLD;
const UNIQUE_COLOR_HIGHLIGHT = HIGHLIGHT_COLOR;
const UNIQUE_PATTERN = PATTERN_10;
const UNIQUE_PADDING = PADDING_5;
const UNIQUE_PREFIX = `${UNIQUE_COLOR_HIGHLIGHT}${UNIQUE_PATTERN}${UNIQUE_COLOR_NAME}${UNIQUE_PADDING}`;
const UNIQUE_SUFFIX = `${UNIQUE_PADDING}${UNIQUE_COLOR_HIGHLIGHT}${UNIQUE_PATTERN}${UNIQUE_COLOR_NAME}`;

// gems
const GEM_CHIPPED = "Chipped";
const GEM_FLAWED = "Flawed";
const GEM_FLAWLESS = "Flawless";
const GEM_PERFECT = "Perfect";
const GEM_COLOR_NAME = WHITE;
const GEM_HIGHLIGHT = SMALL_O;
const GEM_PADDING = PADDING_1;

// facets
const FACET_COLOR_NAME = GOLD;
const FACET_PATTERN = PATTERN_5;
const FACET_PADDING_1 = PADDING_1; // padding between individual patterns
const FACET_PADDING_2 = PADDING_3; // padding between name and FACET_ALTERNATE_PREFIX / FACET_ALTERNATE_SUFFIX
const FACET_ALTERNATE_PREFIX = `${RED}${FACET_PATTERN}${FACET_PADDING_1}${YELLOW}${FACET_PATTERN}${FACET_PADDING_1}${BLUE}${FACET_PATTERN}${FACET_PADDING_1}${GREEN}${FACET_PATTERN}${FACET_COLOR_NAME}${FACET_PADDING_2}`;
const FACET_ALTERNATE_SUFFIX = `${FACET_PADDING_2}${GREEN}${FACET_PATTERN}${FACET_PADDING_1}${BLUE}${FACET_PATTERN}${FACET_PADDING_1}${YELLOW}${FACET_PATTERN}${FACET_PADDING_1}${RED}${FACET_PATTERN}${FACET_COLOR_NAME}`;
const FACET_PREFIX = !IS_ALTERNATE_HIGHLIGHT_FACET ? UNIQUE_PREFIX : FACET_ALTERNATE_PREFIX;
const FACET_SUFFIX = !IS_ALTERNATE_HIGHLIGHT_FACET ? UNIQUE_SUFFIX : FACET_ALTERNATE_SUFFIX;

// charms
const CHARMS_UNIQUE_PREFIX = UNIQUE_PREFIX;
const CHARMS_UNIQUE_SUFFIX = UNIQUE_SUFFIX;

// quest
const QUEST_PREFIX = UNIQUE_PREFIX;
const QUEST_SUFFIX = UNIQUE_SUFFIX;

// endgame
const ENDGAME_COLOR_NAME = ORANGE;
const ENDGAME_COLOR_HIGHLIGHT = HIGHLIGHT_COLOR;

const ESSENCE_PREFIX = `${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_5}${ENDGAME_COLOR_NAME}${PADDING_3}`;
const ESSENCE_SUFFIX = `${PADDING_3}${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_5}${ENDGAME_COLOR_NAME}`;
const KEY_PREFIX = `${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_10}${ENDGAME_COLOR_NAME}${PADDING_5}`;
const KEY_SUFFIX = `${PADDING_5}${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_10}${ENDGAME_COLOR_NAME}`;
const TOKEN_PREFIX = KEY_PREFIX;
const TOKEN_SUFFIX = KEY_SUFFIX;
const ORGAN_PREFIX = `${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_3x10}${ENDGAME_COLOR_NAME}${PADDING_5}`;
const ORGAN_SUFFIX = `${PADDING_5}${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_3x10}${ENDGAME_COLOR_NAME}`;

const STANDARD_OF_HEROES_PREFIX = `${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_5}${UNIQUE_COLOR_NAME}${PADDING_3}`;
const STANDARD_OF_HEROES_SUFFIX = `${PADDING_3}${ENDGAME_COLOR_HIGHLIGHT}${PATTERN_5}${UNIQUE_COLOR_NAME}`;


//===============================//
//   Parameters - Item Quality   //
//===============================//

const ITEM_QUALITY_NORMAL      = config.ItemQuality !== "custom" ? 'n' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
const ITEM_QUALITY_EXCEPTIONAL = config.ItemQuality !== "custom" ? 'x' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
const ITEM_QUALITY_ELITE       = config.ItemQuality !== "custom" ? 'e' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]


//===============================//
//   Parameters - Big Tooltips   //
//===============================//

const BTT_PADDING = PADDING_5;
const BTT_PICK_UP = `${NEW_LINE}${PURPLE}Pick Up`;


//================================//
//   Parameters - Light Pillars   //
//================================//

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


//==============================//
//   Parameters - Drop Sounds   //
//==============================//

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


//======================//
//   Global Functions   //
//======================//

function initializeCollections(x, collections) {
  for (let i = 0; i < collections.length; i++) {
    x[collections[i]] = i;
  }
}

// function initializeCollections2(x, collections) {
//   for (let i = 0; i < collections.length; i++) {
//     x[collections[i].name] = { name: i, bigTooltipSetting: "" };
//   }
// }

/**
 * Generate an item name with a highlight pattern on the left side: `${RED}+HP1` or `${GRAY}o Arrows`.
 * @param {*} patternColor The color of the highlight pattern.
 * @param {*} pattern The pattern for the highlight.
 * @param {*} padding The padding between the highlights and the item name.
 * @param {*} itemColor The color of the item name.
 * @param {*} itemName The name of the item.
 * @returns A complete item name with a colored highlight pattern on the left side.
 */
function generateSingleHighlight(patternColor, pattern, padding, itemColor, itemName) {
  return `${patternColor}${pattern}${itemColor}${padding}${itemName}`;
}

/**
 * Generate an item name with a highlight pattern on both sides: `${RED}**********${GOLD}     ${NAME}     ${RED}**********${GOLD}`.
 * @param {*} patternColor The color of the highlight pattern.
 * @param {*} pattern The pattern for the highlight.
 * @param {*} padding The padding between the highlights and the item name.
 * @param {*} itemColor The color of the item name.
 * @param {*} itemName The name of the item.
 * @returns A complete item name with colored highlight patterns on both sides.
 */
function generateDoubleHighlight(patternColor, pattern, padding, itemColor, itemName) {
  return `${patternColor}${pattern}${itemColor}${padding}${itemName}${padding}${patternColor}${pattern}${itemColor}`;
}

/**
 * 
 * @param {*} setting A setting as set in the Big Tooltips section of the settings menu. Determines the height of the Big Tooltip and if it contains the Pick Up message.
 * @param {*} name The item name (after other filtering and highlighting has been applied). Nothing in this line will be changed.
 * @returns A multi-line item name, which will show as a Big Tooltip when the item is on the ground.
 */
function generateBigTooltip(setting, name) {
  if (setting === "disable") {
    return name;
  }

  // new lines work upside-down: adding \n will add a new line on top of the current one (instead of below like you would expect)
  if (setting === "custom") { // [CSTM-BTT]
    // ADD YOUR CUSTOM BIG TOOLTIP HERE
    return NEW_LINE + `${BTT_PADDING}${name}${BTT_PADDING}` + NEW_LINE;
  }

  name = `${BTT_PADDING}${name}${BTT_PADDING}`;
  if (setting === "2") {
    return name + NEW_LINE;
  }
  if (setting === "2pu") {
    return name + BTT_PICK_UP;
  }
  if (setting === "3") {
    return NEW_LINE + name + NEW_LINE;
  }
  if (setting === "4pu") {
    return NEW_LINE + name + BTT_PICK_UP + NEW_LINE;
  }
  if (setting === "5") {
    return NEW_LINE + NEW_LINE + name + NEW_LINE + NEW_LINE;
  }

  return "undefined";
}


//============================//
//   Custom Item Name Lists   //
//============================//


// abstract class
class AbstractItemNamesBuilder {
  constructor() {
    if (new.target === CustomItemNamesBuilder) {
      throw new TypeError("Cannot construct abstract CustomItemNamesBuilder instances directly");
    }
  }

  applyCustomNames(path, customNames) {
    if (customNames.length == 0) {
      return;
    }
    
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
}

// const COL_CA = [
//   { name: COL_GOLD,    bigTooltipSetting: NONE },
//   { name: COL_QUALITY, bigTooltipSetting: NONE },
//   { name: COL_GEMS,    bigTooltipSetting: config.BigTooltipGems },
// ];

// const ca = {};

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

    this.applyCustomNames(FILE_ITEM_NAMEAFFIXES_PATH, customAffixes.items.flat());

    // customAffixes.items.forEach(collection => {
    //   applyCustomNames(FILE_ITEM_NAMEAFFIXES_PATH, collection);
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
    let color = settingAmount === "wg" ? GOLD : settingAmount === "gw" ? WHITE : NO_COLOR;

    switch (settingAffix) {
      case "none": // Gold displays as "1234 Gold".
        if (color !== NO_COLOR) {
          this.items.gld = `${color}Gold`; 
        }
        return;
      case "g": // Gold displays as "1234 G".
        // this.items[ca[COL_GOLD]].gld = `${color}G`; 
        this.items.gld = `${color}G`; 
        return;
      case "hide": // Gold displays as "1234".
        this.items.gld = HIDDEN;
        return;
      case "custom": // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gld = `${PURPLE}Gold`;
        return;
    }
  }
  
  shortenSupInferiorPrefixes(setting) {
    var color = (setting === "color") ? GRAY : NO_COLOR;
    var superior = `${PLUS}`;
    var inferior = `${color}${MINUS}`;

    switch (setting) {
      case "none":
        return;
      case "short": // Enable
      case "color":   // Enable, gray Inferior items
        this.items["Hiquality"]   = superior;
        this.items["Damaged"]     = inferior;
        this.items["Cracked"]     = inferior;
        this.items["Low Quality"] = inferior;
        this.items["Crude"]       = inferior;
        return;
      case "custom": // [CSTM-SPIF]
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
      case "none":
        return;
      case "all": // show all
        // `${GREEN}o${WHITE} Emerald`;
        this.items.gsw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Diamond");  // Diamond
        this.items.gsg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Emerald");  // Emerald
        this.items.gsr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Ruby");     // Ruby
        this.items.gsb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Sapphire"); // Sapphire
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems();
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems();
        return;
      case "custom": // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gsw = `Diamond`; 
        this.items.gsg = `Emerald`; 
        this.items.gsr = `Ruby`;
        this.items.gsb = `Sapphire`;
        return;
    }
  }

  hideGems() {
    this.items.gsw = HIDDEN;
    this.items.gsg = HIDDEN;
    this.items.gsr = HIDDEN;
    this.items.gsb = HIDDEN;
  }

  // createBigTooltips() {
  //   this.items.forEach(collection => {

  //   });
  // }
};

class CustomRunesBuilder extends AbstractItemNamesBuilder {
  runes = {};

  build() {
    this.customizeRunes(config.Runes);
    // because of the four rune tiers, big tooltips are configured in the last step of generateRuneName().
    this.applyCustomNames(FILE_ITEM_RUNES_PATH, customRunes.runes);
  }
  
  customizeRunes(setting) {
    const RUNES_SETTINGS_AFFIX = ["nrs-hls", "nrs", "hls"];                // settings that keep the " Rune" affix
    const RUNES_SETTINGS_NUMBER = ["all", "nrs-raf", "nrs-hls", "nrs"];    // settings that add rune numbers
    const RUNES_SETTINGS_HIGHLIGHT = ["all", "nrs-hls", "hls-raf", "hls"]; // settings that add highlighting

    switch (setting) {
      case "none":    // should not be reached
      case "raf":     // Remove affix
        return;
      case "all":     // Add rune numbers + highlights + remove affix
      case "nrs-raf": // Add rune numbers + remove affix
      case "nrs-hls": // Add rune numbers + highlights
      case "hls-raf": // Add highlights + remove affix
      case "nrs":     // Add rune numbers
      case "hls":     // Add highlights
        this.generateRuneNames(setting, RUNES_SETTINGS_AFFIX, RUNES_SETTINGS_NUMBER, RUNES_SETTINGS_HIGHLIGHT);
        return;
      case "custom": // [CSTM-RUN]
        // ADD YOUR CUSTOM ITEM NAMES HERE. NOTE: THIS BYPASSES BIG TOOLTIPS SETTINGS.
        let clrRune = ORANGE;
        let clrMsg = PURPLE;
        let clrHighlight = RED;
        let highlight1 = "**";
        let highlight2 = "*****";
        let highlight3 = "**********";

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
        // this.runes.r32 = `\n\n${clrMsg}Pick Up\n${LTT_PADDING}${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}${LTT_PADDING}\n\n`; // Cham
        this.runes.r32 = generateBigTooltip(config.BigTooltipRunesHigh, `${clrHighlight}${PATTERN_2x10}${clrRune}${PADDING_10}Cham (32)${PADDING_10}${clrHighlight}${PATTERN_2x10}${clrRune}`); // Cham
        // this.runes.r32 = generateBigTooltip(`${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}`); // Cham
        // this.runes.r33 = `${clrHighlight}${highlight3}${clrRune}     Zod (33)     ${clrHighlight}${highlight3}${clrRune}`;  // Zod
        // this.runes.r33 = `${RUNES_COLOR_HIGHLIGHT}${PATTERN_10}${PADDING_5}${RUNES_COLOR_NAME}Zod (33)${PADDING_5}${RUNES_COLOR_HIGHLIGHT}${PATTERN_10}${RUNES_COLOR_NAME}`;  // Zod
        this.runes.r33 = generateDoubleHighlight(clrHighlight, PATTERN_10, PADDING_5, clrRune, "Zod Rune (33)"); // Zod
        return;
    }
  }

  generateRuneNames(setting, settingsAffix, settingsNumbers, settingsHighlighting) {
    RUNE_TIERS.forEach((tier) => {
      tier.runes.forEach((rune) => {
        let itemCode = rune.number < 10 ? `r0${rune.number}` : `r${rune.number}`;
        this.runes[itemCode] = !tier.isVisible ? HIDDEN : this.generateRuneName(rune.name, rune.number, tier.level, tier.pattern, tier.padding, setting, settingsAffix, settingsNumbers, settingsHighlighting, tier.bigTooltipSetting);
      });
    });
  }

  generateRuneName(name, number, tier, highlightPattern, padding, setting, settingsAffix, settingsNumbers, settingsHighlighting, settingBigTooltip) {
    const hasAffix = settingsAffix.includes(setting);
    const hasNumber = settingsNumbers.includes(setting);

    const hasHighlighting       = settingsHighlighting.includes(setting) && RUNE_TIERS_HIGHLIGHTED.includes(tier);
    const hasHighlightedNumber  = settingsHighlighting.includes(setting) && RUNE_TIERS_HIGHLIGHTED_NUMBERS.includes(tier);
    const hasHighlightedName    = settingsHighlighting.includes(setting) && RUNE_TIERS_HIGHLIGHTED_NAMES.includes(tier);
    const hasAlternateNameColor = IS_ALTERNATE_COLOR_RUNES && RUNE_TIERS_ALTERNATE_COLOR.includes(tier);

    var highlightColor1 = hasHighlighting ? RUNES_COLOR_HIGHLIGHT : NO_COLOR;
    var highlightColor2 = highlightColor1;
    var nameColor1 = !hasAlternateNameColor ? (hasHighlightedName ? RUNES_COLOR_HIGHLIGHT : RUNES_COLOR_NAME) : RUNES_COLOR_ALTERNATE;
    var nameColor2 = nameColor1;
    var numberColor = !hasAlternateNameColor ? (hasHighlightedNumber ? RUNES_COLOR_HIGHLIGHT : RUNES_COLOR_NAME) : NO_COLOR;

    if (hasAffix) {
      name = `${name} Rune`;
    }

    // remove duplicate color codes where possible
    if ((hasHighlighting && nameColor2 === highlightColor2) || !hasHighlighting) {
      nameColor2 = NO_COLOR;
    }
    if (hasHighlighting && ((hasNumber && highlightColor2 === numberColor) || (!hasNumber && highlightColor2 === nameColor1))) {
      highlightColor2 = NO_COLOR;
    }
    // set rune number
    if (hasNumber) {
      if (numberColor === nameColor1) {
        numberColor = NO_COLOR;
      }
      name = `${name} ${numberColor}(${number})`;
    }
    // remove last duplicate color code where possible
    if (hasHighlighting && highlightColor1 === nameColor1) {
      nameColor1 = NO_COLOR;
    }

    let runeName = `${highlightColor1}${highlightPattern}${nameColor1}${padding}${name}${padding}${highlightColor2}${highlightPattern}${nameColor2}`;

    return settingBigTooltip !== "disable" ? generateBigTooltip(settingBigTooltip, runeName) : runeName;
  }
};

class CustomItemsBuilder extends AbstractItemNamesBuilder {
  items = {};

  build() {
    // customItems.init();
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

    customItems.createBigTooltips();

    this.applyCustomNames(FILE_ITEM_NAMES_PATH, customItems.items.flat());
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
    const colorHealing = RED;
    const colorMana = BLUE;
    const colorRejuv = PURPLE;
    const colorName = WHITE;
    const pattern = PLUS;
    const padding = NO_PADDING;

    // apply above custom names, unless set to "none" or "custom"
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        this.highlightLv123Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightLv4Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightSmallRejuvs(colorRejuv, colorName, pattern, padding);
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightSmallRejuvs(colorRejuv, colorName, pattern, padding);
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightSmallRejuvs(colorRejuv, colorName, pattern, padding);
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding);
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions();
        this.highlightSmallRejuvs(colorRejuv, colorName, pattern, padding);
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions();
        this.highlightFullRejuvs(colorRejuv, colorName, pattern, padding);
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions();
        return;
      case "custom": // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.hp1 = `${RED}+${WHITE}HP1`;    // Minor Healing Potion
        this.items.hp2 = `${RED}+${WHITE}HP2`;    // Light Healing Potion
        this.items.hp3 = `${RED}+${WHITE}HP3`;    // Healing Potion
        this.items.hp4 = `${RED}+${WHITE}HP4`;    // Greater Healing Potion
        this.items.hp5 = `${RED}+${WHITE}HP5`;    // Super Healing Potion
        
        this.items.mp1 = `${BLUE}+${WHITE}MP1`;   // Minor Mana Potion
        this.items.mp2 = `${BLUE}+${WHITE}MP2`;   // Light Mana Potion
        this.items.mp3 = `${BLUE}+${WHITE}MP3`;   // Mana Potion
        this.items.mp4 = `${BLUE}+${WHITE}MP4`;   // Greater Mana Potion
        this.items.mp5 = `${BLUE}+${WHITE}MP5`;   // Super Mana Potion
        
        this.items.rvs = `${PURPLE}+${WHITE}RPS`; // Rejuvenation Potion
        this.items.rvl = `${PURPLE}+${WHITE}RPF`; // Full Rejuvenation Potion
        return;
    }
  }

  hideHealingPotions() {
    this.items.hp1 = HIDDEN; // Minor Healing Potion
    this.items.hp2 = HIDDEN; // Light Healing Potion
    this.items.hp3 = HIDDEN; // Healing Potion
    this.items.hp4 = HIDDEN; // Greater Healing Potion
    this.items.hp5 = HIDDEN; // Super Healing Potion
    
    this.items.mp1 = HIDDEN; // Minor Mana Potion
    this.items.mp2 = HIDDEN; // Light Mana Potion
    this.items.mp3 = HIDDEN; // Mana Potion
    this.items.mp4 = HIDDEN; // Greater Mana Potion
    this.items.mp5 = HIDDEN; // Super Mana Potion
    
    this.items.rvs = HIDDEN; // Rejuvenation Potion
    this.items.rvl = HIDDEN; // Full Rejuvenation Potion
  }

  highlightLv123Potions(colorHealing, colorMana, colorName, pattern, padding) {
    this.items.hp1 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP1"); // Minor Healing Potion
    this.items.hp2 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP2"); // Light Healing Potion
    this.items.hp3 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP3"); // Healing Potion
    this.items.mp1 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP1");    // Minor Mana Potion
    this.items.mp2 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP2");    // Light Mana Potion
    this.items.mp3 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP3");    // Mana Potion
  }

  highlightLv4Potions(colorHealing, colorMana, colorName, pattern, padding) {
    this.items.hp4 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP4"); // Greater Healing Potion
    this.items.mp4 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP4");    // Greater Mana Potion
  }

  highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding) {
    this.items.hp5 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP5"); // Super Healing Potion
    this.items.mp5 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP5");    // Super Mana Potion
  }

  highlightSmallRejuvs(colorRejuv, colorName, pattern, padding) {
    this.items.rvs = generateSingleHighlight(colorRejuv, pattern, padding, colorName, "RPS");   // Rejuvenation Potion
  }

  highlightFullRejuvs(colorRejuv, colorName, pattern, padding) {
    this.items.rvl = generateSingleHighlight(colorRejuv, pattern, padding, colorName, "RPF");   // Full Rejuvenation Potion
  }

  customizeBuffPotions(setting) {
    const colorHighlight = GREEN;
    const colorName = WHITE;
    const pattern = PLUS;
    const padding = NO_PADDING;

    switch (setting) {
      case "none": // no change
        return;
      case "all": // show all
        this.items.yps = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "Antidote"); // Antidote Potion
        this.items.wms = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "Thawing");  // Thawing Potion
        this.items.vps = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "Stamina");  // Stamina Potion
        return;
      case "hide": // hide all
        this.items.yps = HIDDEN;
        this.items.wms = HIDDEN;
        this.items.vps = HIDDEN;
        return;
      case "custom": // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.yps = "Antidote Potion";
        this.items.wms = "Thawing Potion";
        this.items.vps = "Stamina Potion";
        return;
    }
  }

  customizeThrowingPotions(setting) {
    const colorGas = DARKGREEN;
    const colorOil = ORANGE;
    const colorName = WHITE;
    const pattern = SMALL_O;
    const padding = PADDING_1;

    switch (setting) {
      case "none": // no change
        return;
      case "all": // show all
        this.items.gpl = generateSingleHighlight(colorGas, pattern, padding, colorName, "Gas 1"); // Strangling Gas Potion
        this.items.gpm = generateSingleHighlight(colorGas, pattern, padding, colorName, "Gas 2"); // Choking Gas Potion
        this.items.gps = generateSingleHighlight(colorGas, pattern, padding, colorName, "Gas 3"); // Rancid Gas Potion
        this.items.opl = generateSingleHighlight(colorOil, pattern, padding, colorName, "Oil 1"); // Fulminating Potion
        this.items.opm = generateSingleHighlight(colorOil, pattern, padding, colorName, "Oil 2"); // Exploding Potion
        this.items.ops = generateSingleHighlight(colorOil, pattern, padding, colorName, "Oil 3"); // Oil Potion
        return;
      case "hide": // hide all
        this.items.gpl = HIDDEN;
        this.items.gpm = HIDDEN;
        this.items.gps = HIDDEN;
        this.items.opl = HIDDEN;
        this.items.opm = HIDDEN;
        this.items.ops = HIDDEN;
        return;
      case "custom": // [CSTM-TPT]
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
    const colorScroll = GREEN;
    const colorTome = DARKGREEN;
    const colorName = WHITE;
    const pattern = PLUS;
    const padding = NO_PADDING;

    switch (setting) {
      case "none": // no change
        return;
      case "all": // show all
        this.highlightScrolls(colorScroll, colorName, pattern, padding);
        this.highlightTomes(colorTome, colorName, pattern, padding);
        return;
      case "hide": // hide scrolls, show books
        this.highlightTomes(colorTome, colorName, pattern, padding);
        this.hideScrolls();
        return;
      case "custom": // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.tsc = "Scroll of Town Portal";
        this.items.isc = "Scroll of Identify";
        this.items.tbk = "Tome of Town Portal";
        this.items.ibk = "Tome of Identify";
        return;
    }
  }

  hideScrolls() {
    this.items.tsc = HIDDEN; // Scroll of Town Portal
    this.items.isc = HIDDEN; // Scroll of Identify
  }

  highlightScrolls(colorHighlight, colorName, pattern, padding) {
    this.items.tsc = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "TP"); // Scroll of Town Portal
    this.items.isc = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "ID"); // Scroll of Identify
  }

  highlightTomes(colorHighlight, colorName, pattern, padding) {
    this.items.tbk = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "TP Tome"); // Tome of Town Portal
    this.items.ibk = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "ID Tome"); // Tome of Identify
  }

  customizeArrowsAndBolts(setting) {
    const colorHighlight = GRAY;
    const colorName = WHITE;
    const pattern = SMALL_O;
    const padding = PADDING_1;

    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.aqv = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "Arrows");
        this.items.cqv = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "Bolts");
        return;
      case "hide":
        this.items.aqv = HIDDEN; // Arrow Quiver
        this.items.cqv = HIDDEN; // Crossbow Bolt Quiver
        return;
      case "custom": // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.aqv = "Arrows";
        this.items.cqv = "Bolts";
        return;
    }
  }

  customizeKeys(setting) {
    switch (setting) {
      case "none":
        return;
      case "hide":
        this.items.key = HIDDEN;
        return;
      case "custom": // [CSTM-KEY]
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
      case "none":
        return;
      case "all": // show all
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
      case "custom": // [CSTM-GEM1]
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
    this.items.gcv = HIDDEN;
    this.items.gcw = HIDDEN;
    this.items.gcg = HIDDEN;
    this.items.gcr = HIDDEN;
    this.items.gcb = HIDDEN;
    this.items.gcy = HIDDEN;
    this.items.skc = HIDDEN;
    this.items.gfv = HIDDEN;
    this.items.gfw = HIDDEN;
    this.items.gfg = HIDDEN;
    this.items.gfr = HIDDEN;
    this.items.gfb = HIDDEN;
    this.items.gfy = HIDDEN;
    this.items.skf = HIDDEN;
    this.items.gsv = HIDDEN;
    // For Ruby, Sapphire, Emerald and Diamond, see the "Affixes" section above.
    // For some reason, the devs put these gems in another JSON file.
    this.items.gsy = HIDDEN;
    this.items.sku = HIDDEN;
  }

  hideFlawless() {
    this.items.gzv = HIDDEN;
    this.items.glw = HIDDEN;
    this.items.glg = HIDDEN;
    this.items.glr = HIDDEN;
    this.items.glb = HIDDEN;
    this.items.gly = HIDDEN;
    this.items.skl = HIDDEN;
  }

  hidePerfect() {
    this.items.gpv = HIDDEN;
    this.items.gpw = HIDDEN;
    this.items.gpg = HIDDEN;
    this.items.gpr = HIDDEN;
    this.items.gpb = HIDDEN;
    this.items.gpy = HIDDEN;
    this.items.skz = HIDDEN;
  }

  highlightChippedFlawedRegular() {
    this.items.gcv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Amethyst
    this.items.gcw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Diamond
    this.items.gcg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Emerald
    this.items.gcr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Ruby
    this.items.gcb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Sapphire
    this.items.gcy = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Topaz
    this.items.skc = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_CHIPPED); // Chipped Skull
    this.items.gfv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Amethyst
    this.items.gfw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Diamond
    this.items.gfg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Emerald
    this.items.gfr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Ruby
    this.items.gfb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Sapphire
    this.items.gfy = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Topaz
    this.items.skf = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWED); // Flawed Skull
    this.items.gsv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Amethyst"); // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see the "Affixes" section above.
    // For some reason, the devs put these gems in another JSON file.
    this.items.gsy = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Topaz");    // Topaz
    this.items.sku = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, "Skull");    // Skull
  }

  highlightFlawless() {
    this.items.gzv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Amethyst
    this.items.glw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Diamond
    this.items.glg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Emerald
    this.items.glr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Ruby
    this.items.glb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Sapphire
    this.items.gly = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Topaz
    this.items.skl = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Skull
  }

  highlightPerfect() {
    this.items.gpv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Amethyst
    this.items.gpw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Diamond
    this.items.gpg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Emerald
    this.items.gpr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Ruby
    this.items.gpb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Sapphire
    this.items.gpy = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Topaz
    this.items.skz = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Skull
  }
  

  //=============//
  //   Jewelry   //
  //=============//
  customizeJewels(setting) {
    switch (setting) {
      case "none":
        return;
      case "facet":
        this.items["Rainbow Facet"] = `${ILVL_INDENT_FIX_FACET}${FACET_PREFIX}Rainbow Facet${FACET_SUFFIX}`;
        return;
      case "custom": // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.jew = `Jewel`; // includes magic, rare and unique jewels
        this.items["Rainbow Facet"] = `Rainbow Facet`;
        return;
    }
  }
  
  customizeCharms(setting) {
    switch (setting) {
      case "none":
        return;
      case "all":
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
      case "custom": // [CSTM-CHA]
        this.items.cm1                     = `Small Charm`;
        this.items.cm2                     = `Large Charm`;
        this.items.cm3                     = `Grand Charm`;
        this.items["Annihilus"]            = `Annihilus`;
        this.items["Hellfire Torch"]       = `Hellfire Torch`;
        this.items["Gheed's Fortune"]      = `Gheed's Fortune`;
        this.items["Black Cleft"]          = `Black Cleft`;
        this.items["Bone Break"]           = `Bone Break`;
        this.items["Cold Rupture"]         = `Cold Rupture`;
        this.items["Crack of the Heavens"] = `Crack of the Heavens`;
        this.items["Flame Rift"]           = `Flame Rift`;
        this.items["Rotting Fissure"]      = `Rotting Fissure`;
        return;
    }
  }

  highlightUnidentifiedCharms() {
    this.items.cm1 = `Small ${RED}Charm${BLUE}`;
    this.items.cm2 = `Large ${RED}Charm${BLUE}`;
    this.items.cm3 = `Grand ${RED}Charm${BLUE}`;
  }

  highlightUniqueCharms(){
    this.items["Annihilus"]       = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Annihilus${CHARMS_UNIQUE_SUFFIX}`;
    this.items["Hellfire Torch"]  = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Hellfire Torch${CHARMS_UNIQUE_SUFFIX}`;
    this.items["Gheed's Fortune"] = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Gheed's Fortune${CHARMS_UNIQUE_SUFFIX}`;
  }

  highlightSunderCharms(){
    if (IS_ALTERNATE_HIGHLIGHT_SUNDER) {
      this.items["Black Cleft"]          = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(GRAY,         UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Black Cleft");
      this.items["Bone Break"]           = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(WHITE,        UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Bone Break");
      this.items["Cold Rupture"]         = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(LIGHTBLUE, UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Cold Rupture");
      this.items["Crack of the Heavens"] = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(YELLOW,       UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Crack of the Heavens");
      this.items["Flame Rift"]           = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(RED,          UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Flame Rift");
      this.items["Rotting Fissure"]      = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(GREEN,        UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Rotting Fissure");
    }
    else {
      this.items["Black Cleft"]          = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Black Cleft${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Bone Break"]           = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Bone Break${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Cold Rupture"]         = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Cold Rupture${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Crack of the Heavens"] = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Crack of the Heavens${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Flame Rift"]           = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Flame Rift${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Rotting Fissure"]      = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Rotting Fissure${CHARMS_UNIQUE_SUFFIX}`;
    } 
  }
  
  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    switch (setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        this.highlightQuestItems();
        this.highlightCube();
        return;
      case "xhc": // exclude cube
        this.highlightQuestItems();
        return;
      case "custom": // [CSTM-QST1]
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
    let prefix = QUEST_PREFIX;
    let suffix = QUEST_SUFFIX;

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

    if (SHOULD_FIX_ILVL_INDENT) {
      // single digit ilvl
      let indent = ILVL_INDENT_FIX_QUEST1;
      this.items.hst                  = indent + this.items.hst;
      this.items.qf2                  = indent + this.items.qf2;
      this.items["Horadric Staff"]    = indent + this.items["Horadric Staff"];
      this.items.SuperKhalimFlail     = indent + this.items.SuperKhalimFlail;

      // double digit ilvl
      indent = ILVL_INDENT_FIX_QUEST2;
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
    this.items.box = `${QUEST_PREFIX}Horadric Cube${QUEST_SUFFIX}`; // Horadric Cube
  }
    
  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(setting){
    switch(setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        this.highlightEndgameItems();
        this.items.std = `${STANDARD_OF_HEROES_PREFIX}Standard of Heroes${STANDARD_OF_HEROES_SUFFIX}`; // Standard of Heroes
        return;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems();
        return;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems();
        this.items.std = HIDDEN;
        return;
      case "custom": // [CSTM-END]
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
    this.highlightEssences(ESSENCE_PREFIX, ESSENCE_SUFFIX);
    this.highlightToken(TOKEN_PREFIX, TOKEN_SUFFIX);
    this.highlightKeys(KEY_PREFIX, KEY_SUFFIX);
    this.highlightOrgans(ORGAN_PREFIX, ORGAN_SUFFIX);
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
  
  customizeWeaponsAndArmor(shouldFilterWeapons, shouldFilterArmor) {
    // const WA_CLR_PATTERN = RED;
    // const WA_PATTERN     = PATTERN_10;
    // const WA_PADDING     = PADDING_5;
    // const WA_CLR_NAME    = PURPLE;

    if (shouldFilterWeapons) { // This list changes entries in item-names.json, so Set and Unique names like "Death's Web" are also supported. Search the file for what Key to use. [CSTM-WEP]
      // ADD YOUR CUSTOM ITEM NAMES HERE

      // examples
      // this.items["jav"] = HIDDEN;                          // Javelin, hide
      // this.items["jav"] = `${BLACK}Javelin`;               // Javelin, color name black
      // this.items["7gw"] = `${BLACK}Unearthed Wand${BLUE}`; // Unearthed Wand, color name red
      // this.items["7gw"] = `${ILVL_INDENT_FIX_DOUBLE}${generateDoubleHighlight(WA_CLR_PATTERN, WA_PATTERN, WA_PADDING, WA_CLR_NAME, "Unearthed Wand")}${BLUE}`; // Unearthed Wand, highlight
    }

    if (shouldFilterArmor) { // This list changes entries in item-names.json, so Set and Unique names like "Griffon's Eye" are also supported. Search the file for what Key to use. [CSTM-ARM]
      // ADD YOUR CUSTOM ITEM NAMES HERE

      // examples
      // this.items["skp"] = HIDDEN;                // Skull Cap, hide
      // this.items["skp"] = `${BLACK}Skull Cap`;   // Skull Cap, color name black
      // this.items["ci3"] = `${RED}Diadem${BLUE}`; // Diadem, color name red
      // this.items["ci3"] = `${ILVL_INDENT_FIX_DOUBLE}${generateDoubleHighlight(WA_CLR_PATTERN, WA_PATTERN, WA_PADDING, WA_CLR_NAME, "Diadem")}${BLUE}`; // Diadem, highlight
    }
  }

  createBigTooltips() {

  }
};

class CustomUiBuilder extends AbstractItemNamesBuilder {
  items = {};

  build() {
    this.customizeQuestItems(config.Quest);
    this.applyCustomNames(FILE_UI_PATH, customUi.items);
  }

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
    switch (setting) {
      case "none": // no change
        return;
      case "all": // highlight all
      case "xhc": // exclude horadric cube
        this.items.ass = `${QUEST_PREFIX}Book of Skill${QUEST_SUFFIX}`;  // Book of Skill
        this.items.xyz = `${QUEST_PREFIX}Potion of Life${QUEST_SUFFIX}`; // Potion of Life
        return;
      case "custom": // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.ass = `Book of Skill`;  // Book of Skill
        this.items.xyz = `Potion of Life`; // Potion of Life
        return;
    }
  }
};

class CustomModifiersBuilder extends AbstractItemNamesBuilder {
  items = {};

  build() {
    this.customizeQuestItems(config.Quest);
    this.applyCustomNames(FILE_ITEM_MODIFIERS_PATH, customModifiers.items);
  }

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    // Section specific to Malah's Potion and Scroll of Resistance, as these items are in a different file.
    switch (setting) {
      case "none": // no change
        return;
      case "all": // highlight all
      case "xhc": // exclude horadric cube
        this.items.ice = `${QUEST_PREFIX}Malah's Potion${QUEST_SUFFIX}`;       // Malah's Potion
        this.items.tr2 = `${QUEST_PREFIX}Scroll of Resistance${QUEST_SUFFIX}`; // Scroll of Resistance
        return;
      case "custom": // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.ice = `Malah's Potion`;       // Malah's Potion
        this.items.tr2 = `Scroll of Resistance`; // Scroll of Resistance
        return;
    }
  }
};

class ItemLevelBuilder {
  build() {
    const fileWeapons = D2RMM.readTsv(FILE_WEAPONS_PATH);
    const fileArmor = D2RMM.readTsv(FILE_ARMOR_PATH);
    const fileMisc = D2RMM.readTsv(FILE_MISC_PATH);

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
      if (["amu", "rin", "cm1", "cm2", "cm3", "jew"].indexOf(row.code) !== -1) { 
        row.ShowLevel = 1;
        return;
      }
    });

    D2RMM.writeTsv(FILE_WEAPONS_PATH, fileWeapons);
    D2RMM.writeTsv(FILE_ARMOR_PATH, fileArmor);
    D2RMM.writeTsv(FILE_MISC_PATH, fileMisc);
  }
}

class ItemQualityBuilder {
  build() {
    const fileWeapons = D2RMM.readTsv(FILE_WEAPONS_PATH);
    const fileArmor = D2RMM.readTsv(FILE_ARMOR_PATH);
    const fileItemNames = D2RMM.readJson(FILE_ITEM_NAMES_PATH);

    const fileWeaponsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode);
    const fileArmorsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);

    this.addEquipmentQuality(fileWeaponsWithQuality, fileItemNames, config.ItemQuality);
    this.addEquipmentQuality(fileArmorsWithQuality, fileItemNames, config.ItemQuality);

    D2RMM.writeJson(FILE_ITEM_NAMES_PATH, fileItemNames);
  }

  
  addEquipmentQuality(equipment, itemNames, setting) {
    equipment.forEach(item => {
      var quality = (item.code === item.ultracode ? ITEM_QUALITY_ELITE : (item.code === item.ubercode ? ITEM_QUALITY_EXCEPTIONAL : ITEM_QUALITY_NORMAL));

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
            case "custom":
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

    RUNE_TIERS.forEach((tier) => {
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

    return gemQualities.concat([EMPTY_STRING, "flawed_", "chipped_"]);
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
    var file = D2RMM.readJson(`${path}${FILE_EXTENSION_JSON}`);
    this.pushLightPillarToFile(file);
    for (var i = 1; i <= 3; i++) {
      let index = (i == 1) ? EMPTY_STRING : `${i}`;
      D2RMM.writeJson(`${path}${index}${FILE_EXTENSION_JSON}`, file);
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
    let filePath = `${path}${item}${FILE_EXTENSION_JSON}`;
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
    let soundsFile = D2RMM.readTsv(FILE_SOUNDS_PATH);

    this.modifyDropSoundForRunes(soundsFile);
    this.modifyDropSoundForQuestItems(soundsFile);
    this.modifyDropSoundForEssences(soundsFile);
    this.modifyDropSoundForTokens(soundsFile);
    this.modifyDropSoundForKeys(soundsFile);
    this.modifyDropSoundForOrgans(soundsFile);
    this.modifyDropSoundForStandardOfHeroes(soundsFile);

    D2RMM.writeTsv(FILE_SOUNDS_PATH, soundsFile);
  }

  modifyDropSoundForRunes(soundsFile) {
    RUNE_TIERS.forEach((tier) => {
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
      // "box", // Horadric Cube [CSTM_DSBOX]
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
    this.modifyDropSoundForItems(FILE_MISC_PATH, soundsFile, itemCodes, newNameSuffix, dropSound);
  }
  
  modifyDropSoundForWeapons(soundsFile, itemCodes, newNameSuffix, dropSound) {
    this.modifyDropSoundForItems(FILE_WEAPONS_PATH, soundsFile, itemCodes, newNameSuffix, dropSound);
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
    let newSound = { ...(soundsFile.rows.find((sound) => sound.Sound === template)) }; // create deep copy
  
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
  colors = { // _profilehd.json colors
    Beige:         '$FontColorBeige',
    Black:         '$FontColorBlack',
    DarkGreen:     '$FontColorDarkGreen',
    Green:         '$FontColorGreen',
    LightBlue:     '$FontColorLightBlue',
    LightGray:     '$FontColorLightGray',
    LightPurple:   '$FontColorLightPurple',
    LightRed:      '$FontColorLightRed',
    LightTeal:     '$FontColorLightTeal',
    Red:           '$FontColorRed',
    VeryLightGray: '$FontColorVeryLightGray',
    White:         '$FontColorWhite',
  }

  build() {
    let profileHD = D2RMM.readJson(FILE_PROFILE_HD_PATH);

    this.applyCustomGoldColor(profileHD, config.GoldAmount);
    this.applyCustomEtherealColor(profileHD, config.EthItemsColor);
    this.applyTooltipMods(profileHD, config.Tooltip, config.TooltipOpacity, config.TooltipSize);
    
    D2RMM.writeJson(FILE_PROFILE_HD_PATH, profileHD);
  }

  applyCustomGoldColor(profileHD, setting) {
    if (setting === "none" || setting === "wg") {
      return;
    }

    let goldColor = NO_COLOR;
    switch (setting) {
      case "none":
      case "wg":
        return;
      case "g":
      case "gw":
        goldColor = "$FontColorCurrencyGold";
        break;
      case "custom":
        goldColor = "$FontColorLightTeal";
        break;
    }
    
    profileHD.TooltipStyle.GoldColor = goldColor;
  }

  applyCustomEtherealColor(profileHD, setting) {
    if (setting === "none") {
      return;
    }

    profileHD.TooltipStyle.EtherealColor = (setting !== "custom") ? this.colors[setting] : "$FontColorLightTeal"; // [CSTM-ETH] change $FontColorLightTeal into any color variable in _profilehd.json
  }

  applyTooltipMods(profileHD, setting, opacity, tooltipSize) {
    if (setting === "none") {
      return;
    }

    let bgColor = [0, 0, 0, opacity]; // [R, G, B, opacity]
    switch (setting) {
      case "all":
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
    if (config.GoldAmount === "none" && config.GoldSuffix === "none" && config.Gems === "none" && config.ShortSupInferiorPrefixes === "none") {
      return;
    }

    let builder = new CustomAffixesBuilder();
    builder.build();
  }

  // Runes
  applyCustomRuneNames() {
    if (config.Runes === "none" || config.Runes === "raf") {
      return;
    }

    let builder = new CustomRunesBuilder();
    builder.build();
  }

  // Most item names
  applyCustomItemNames() {
    let builder = new CustomItemsBuilder();
    builder.build();
  }

  // Quest items (exceptions)
  applyCustomUiNames() {
    if (config.Quest === "none") {
      return;
    }

    let builder = new CustomUiBuilder();
    builder.build();
  }

  // Quest items (exceptions)
  applyCustomModifiers() {
    if (config.Quest === "none") {
      return;
    }

    let builder = new CustomModifiersBuilder();
    builder.build();
  }


  //====================================================//
  //   How to apply the magic: item stats & modifiers   //
  //====================================================//

  // ilvl
  applyItemLevel() {
    if (!(config.ItemLevel === "show" || config.ItemLevel === "fix")) {
      return;
    }

    let builder = ItemLevelBuilder();
    builder.build();
  }

  // quality: normal/exceptional/elite
  applyItemQuality() {
    if (config.ItemQuality === "none") {
      return;
    }

    let builder = new ItemQualityBuilder();
    builder.build();
  }


  applyLightPillars() {
    if (!config.IsLightPillarsEnabled) {
      return;
    }

    let builder = new LightPillarBuilder();
    builder.build();
  }

  applyDropSounds() {
    if (!config.IsDropSoundsEnabled) {
      return;
    }

    let builder = new DropSoundBuilder();
    builder.build();
  }

  //_profilehd.json mods
  applyProfileHdMods() {
    let builder = new ProfileHdModsBuilder();
    builder.build();
  }
}

let lootFilterBuilder = new LootFilterBuilder();
lootFilterBuilder.build();
