////===============================================////
////===============================================////
////                                               ////
////   Caedendi's Extended Loot Filter for D2RMM   ////
////                    v2.0.0                     ////
////                                               ////
////===============================================////
////===============================================////


//===============//
//   Constants   //
//===============//

// File paths
const FILE_EXTENSION_JSON = ".json";
const FILE_EXTENSION_TXT = ".txt";

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

// Color
const COLOR_PREFIX = "ÿc";

const WHITE = `${COLOR_PREFIX}0`;
const WHITE1 = `${COLOR_PREFIX}=`;
const GRAY = `${COLOR_PREFIX}5`;
const GRAY1 = `${COLOR_PREFIX}K`;
const GRAY2 = `${COLOR_PREFIX}I`;
const BLACK = `${COLOR_PREFIX}6`;
const BLACK1 = `${COLOR_PREFIX}M`;
const RED = `${COLOR_PREFIX}1`;
const RED1 = `${COLOR_PREFIX}U`;
const LIGHTRED = `${COLOR_PREFIX}E`;
const DARKRED = `${COLOR_PREFIX}S`;
const GREEN = `${COLOR_PREFIX}2`;
const GREEN1 = `${COLOR_PREFIX}Q`;
const GREEN2 = `${COLOR_PREFIX}C`;
const GREEN3 = `${COLOR_PREFIX}<`;
const DARKGREEN1 = `${COLOR_PREFIX}A`;
const DARKGREEN2 = `${COLOR_PREFIX}:`;
const TURQUOISE = `${COLOR_PREFIX}N`;
const BLUE = `${COLOR_PREFIX}3`;
const BLUE1 = `${COLOR_PREFIX}B`;
const LIGHTBLUE1 = `${COLOR_PREFIX}F`;
const LIGHTBLUE2 = `${COLOR_PREFIX}P`;
const SKYBLUE = `${COLOR_PREFIX}T`;
const ORANGE = `${COLOR_PREFIX}8`;
const ORANGE1 = `${COLOR_PREFIX}@`;
const ORANGE2 = `${COLOR_PREFIX}J`;
const ORANGE3 = `${COLOR_PREFIX}L`;
const TAN = `${COLOR_PREFIX}7`;
const YELLOW = `${COLOR_PREFIX}9`;
const YELLOW1 = `${COLOR_PREFIX}R`;
const GOLD = `${COLOR_PREFIX}4`;
const GOLD1 = `${COLOR_PREFIX}D`;
const LIGHTGOLD1 = `${COLOR_PREFIX}H`;
const PINK = `${COLOR_PREFIX}O`;
const LIGHTPINK = `${COLOR_PREFIX}G`;
const PURPLE = `${COLOR_PREFIX};`;


//=========================//
//   Parameters - Global   //
//=========================//

// Naming
const EMPTY_STRING = '';
const SINGLE_SPACE = ' ';

const HIDDEN = EMPTY_STRING + SINGLE_SPACE.repeat(config.HiddenItemTooltipSize);
const HIGHLIGHT = config.HighlightCharacter !== "custom" ? config.HighlightCharacter : '*'; // replace * with desired custom character [CSTM-HLC]

const NO_COLOR = EMPTY_STRING;
const NO_PATTERN = EMPTY_STRING;
const NO_PADDING = EMPTY_STRING;

const SMALL_O = 'o';
const PLUS = '+';
const MINUS = '-';
const ZERO = '0';

const PADDING_1 = SINGLE_SPACE;
const PADDING_2 = SINGLE_SPACE.repeat(2);
const PADDING_3 = SINGLE_SPACE.repeat(3);
const PADDING_5 = SINGLE_SPACE.repeat(5);

const PATTERN_2 = HIGHLIGHT.repeat(2);
const PATTERN_5 = HIGHLIGHT.repeat(5);
const PATTERN_10 = HIGHLIGHT.repeat(10);
const PATTERN_3x10 = `${HIGHLIGHT.repeat(10)}${PADDING_2}${HIGHLIGHT.repeat(10)}${PADDING_2}${HIGHLIGHT.repeat(10)}`;

const SHOULD_FIX_ILVL_INDENT = config.ItemLevel === "fix";
const ILVL_INDENT_FIX_SINGLE  = SINGLE_SPACE.repeat(4); // for single digit ilvl items
const ILVL_INDENT_FIX_DOUBLE  = SINGLE_SPACE.repeat(6); // for double digit ilvl items
const ILVL_INDENT_FIX_QUALITY = SINGLE_SPACE.repeat(6); // for double digit ilvl items when item quality is enabled

const ILVL_INDENT_FIX_FACET = SHOULD_FIX_ILVL_INDENT ? ILVL_INDENT_FIX_DOUBLE : EMPTY_STRING;
const ILVL_INDENT_FIX_CHARMS = SHOULD_FIX_ILVL_INDENT ? ILVL_INDENT_FIX_DOUBLE : EMPTY_STRING;
const ILVL_INDENT_FIX_QUEST1 = ILVL_INDENT_FIX_SINGLE; // quest items with a single digit ilvl
const ILVL_INDENT_FIX_QUEST2 = ILVL_INDENT_FIX_DOUBLE; // quest items with a double digit ilvl



//==========================================//
//   Parameters - Alternate Color Schemes   //
//==========================================//

const IS_ALTERNATE_RUNES_COLOR = ["all", "fac-run", "sun-run", "run"].includes(config.AlternateColorSchemes);
const IS_ALTERNATE_FACET_HIGHLIGHT = ["all", "fac-sun", "fac-run", "fac"].includes(config.AlternateColorSchemes);
const IS_ALTERNATE_SUNDER_HIGHLIGHT = ["all", "fac-sun", "sun-run", "sun"].includes(config.AlternateColorSchemes);


//========================//
//   Parameters - Runes   //
//========================//

// I consider the rune tiers to be:
// - low: 1-15 (El-Hel)
// - low-mid: 16-20 (Io-Lem)
// - mid: 21-15 (Pul-Gul)
// - high: 26-33 (Vex-Zod)
// I have however moved Ral (8), Hel (15) and Lem (20) a tier up because of their usefulness.

const RUNES_TIER_LOW = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14]; // El, Eld, Tir, Nef, Eth, Ith, Tal, Ort, Thul, Amn, Sol, Shael, Dol
const RUNES_TIER_LOWMID = [8, 15, 16, 17, 18, 19];                   // Ral, Hel, Io, Lum, Ko, Fal
const RUNES_TIER_MID = [20, 21, 22, 23, 24, 25];                     // Lem, Pul, Um, Mal, Ist, Gul
const RUNES_TIER_HIGH = [26, 27, 28, 29, 30, 31, 32, 33];            // Vex, Ohm, Lo, Sur, Ber, Jah, Cham, Zod

const RUNES_COLOR_NAME = ORANGE
const RUNES_COLOR_NAME_ALTERNATE = PURPLE;
const RUNES_COLOR_HIGHLIGHT = RED;

// set the highlight patterns for each rune tier
const RUNES_PATTERN_LOW = NO_PATTERN;    // 
const RUNES_PATTERN_LOWMID = PATTERN_5;  // *****
const RUNES_PATTERN_MID = PATTERN_10;    // **********
const RUNES_PATTERN_HIGH = PATTERN_3x10; // ********** ********** **********

// set the amount of spaces between the rune name and the highlight patterns for each rune tier
const RUNES_PADDING_LOW = NO_PADDING;
const RUNES_PADDING_LOWMID = PADDING_3;
const RUNES_PADDING_MID = PADDING_5;
const RUNES_PADDING_HIGH = PADDING_5;

const RUNES_TIER_HIGHLIGHTED = [].concat(RUNES_TIER_LOWMID, RUNES_TIER_MID, RUNES_TIER_HIGH); // runes with a highlight pattern (***** rune *****)
const RUNES_TIER_HIGHLIGHTED_NUMBERS = [].concat(RUNES_TIER_MID, RUNES_TIER_HIGH);            // runes where the added numbers (33) are in the highlight color instead of default
const RUNES_TIER_HIGHLIGHTED_NAMES = RUNES_TIER_HIGH;                                         // runes where the rune name is in the highlight color instead of default
const RUNES_TIER_ALTERNATE_NAME_COLOR = RUNES_TIER_HIGHLIGHTED_NUMBERS;                       // runes that have a purple name when alternate color scheme is enabled


//========================//
//   Parameters - Items   //
//========================//

// uniques
const UNIQUE_COLOR_NAME = GOLD;
const UNIQUE_COLOR_HIGHLIGHT = RED;
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
const FACET_PREFIX = !IS_ALTERNATE_FACET_HIGHLIGHT ? UNIQUE_PREFIX : FACET_ALTERNATE_PREFIX;
const FACET_SUFFIX = !IS_ALTERNATE_FACET_HIGHLIGHT ? UNIQUE_SUFFIX : FACET_ALTERNATE_SUFFIX;

// charms
const CHARMS_UNIQUE_PREFIX = UNIQUE_PREFIX;
const CHARMS_UNIQUE_SUFFIX = UNIQUE_SUFFIX;

// quest
const QUEST_PREFIX = UNIQUE_PREFIX;
const QUEST_SUFFIX = UNIQUE_SUFFIX;

// endgame
const ESSENCE_PREFIX = `${RED}${PATTERN_5}${ORANGE}${PADDING_3}`;
const ESSENCE_SUFFIX = `${PADDING_3}${RED}${PATTERN_5}${ORANGE}`;
const KEY_PREFIX = `${RED}${PATTERN_10}${ORANGE}${PADDING_5}`;
const KEY_SUFFIX = `${PADDING_5}${RED}${PATTERN_10}${ORANGE}`;
const TOKEN_PREFIX = KEY_PREFIX;
const TOKEN_SUFFIX = KEY_SUFFIX;
const ORGAN_PREFIX = `${RED}${PATTERN_3x10}${ORANGE}${PADDING_5}`;
const ORGAN_SUFFIX = `${PADDING_5}${RED}${PATTERN_3x10}${ORANGE}`;
const STANDARD_OF_HEROES_PREFIX = `${RED}${PATTERN_5}${GOLD}${PADDING_3}`;
const STANDARD_OF_HEROES_SUFFIX = `${PADDING_3}${RED}${PATTERN_5}${GOLD}`;


//===============================//
//   Parameters - Item Quality   //
//===============================//

const ITEM_QUALITY_NORMAL      = config.ItemQuality !== "custom" ? 'n' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
const ITEM_QUALITY_EXCEPTIONAL = config.ItemQuality !== "custom" ? 'x' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]
const ITEM_QUALITY_ELITE       = config.ItemQuality !== "custom" ? 'e' : "custom"; // replace custom with desired custom quality indicator. [CSTM-QLTY]


//================================//
//   Parameters - Light Pillars   //
//================================//

// item paths
const LP_PATH_ITEMS                = "hd\\items\\";
const LP_PATH_ITEMS_MISC           = `${LP_PATH_ITEMS}misc\\`;
const LP_PATH_ITEMS_WEAPON         = `${LP_PATH_ITEMS}weapon\\`;
const LP_PATH_ITEMS_MISC_BODY_PART = `${LP_PATH_ITEMS_MISC}body_part\\`;
const LP_PATH_ITEMS_MISC_QUEST     = `${LP_PATH_ITEMS_MISC}quest\\`;
const LP_PATH_ITEMS_WEAPON_HAMMER  = `${LP_PATH_ITEMS_WEAPON}hammer\\`;
const LP_PATH_ITEMS_WEAPON_MACE    = `${LP_PATH_ITEMS_WEAPON}mace\\`;
const LP_PATH_ITEMS_WEAPON_STAFF   = `${LP_PATH_ITEMS_WEAPON}staff\\`;

// vfx paths
const LP_PATH_VFX_BASE = "data/hd/vfx/particles/overlays/";
const LP_PATH_HORADRIC_LIGHT = `${LP_PATH_VFX_BASE}object/horadric_light/fx_horadric_light.particles`;
const LP_PATH_PALADIN_FANATICISM = `${LP_PATH_VFX_BASE}paladin/aura_fanatic/aura_fanatic.particles`;
const LP_PATH_VALKYRIE_START = `${LP_PATH_VFX_BASE}common/valkyriestart/valkriestart_overlay.particles`;

// vfx names
const LP_DEFINITION_COMPONENT_TRANSFORM = "TransformDefinitionComponent";
const LP_DEFINITION_COMPONENT_VFX = "VfxDefinitionComponent";
const LP_NAME_TRANSFORM1 = "component_transform1";
const LP_NAME_VFX_STOLEN = "entity_vfx_filthyStolenMod";
const LP_NAME_VFX_ROOT = "entity_root_VfxDefinition";

// vfx params
const LP_TYPE_ENTITY = "Entity";
const LP_NAME_DROPLIGHT = "droplight";
const LP_NAME_ENTITY_ROOT = "entity_root";
const LP_ID_DROPLIGHT = 9999996974;
const LP_ID_ENTITY_ROOT = 1079187010;

// vfx light pillar
const LP_LIGHT_COMPONENT = {
  particle: {
    path: LP_PATH_HORADRIC_LIGHT,
  },
  entities: [
    {
      type: LP_TYPE_ENTITY,
      name: LP_NAME_DROPLIGHT,
      id: LP_ID_DROPLIGHT,
      components: [
        {
          type: LP_DEFINITION_COMPONENT_TRANSFORM,
          name: LP_NAME_TRANSFORM1,
          position: { x: 0.0, y: 0.0, z: 0.0 },
          orientation: { x: 0.0, y: 0.0, z: 0.0, w: 1.0 },
          scale: { x: 1.0, y: 1.0, z: 1.0 },
          inheritOnlyPosition: false
        },
        {
          type: LP_DEFINITION_COMPONENT_VFX,
          name: LP_NAME_VFX_STOLEN,
          filename: LP_PATH_HORADRIC_LIGHT,
          hardKillOnDestroy: false
        }
      ]
    },
    {
      type: LP_TYPE_ENTITY,
      name: LP_NAME_ENTITY_ROOT,
      id: LP_ID_ENTITY_ROOT,
      components: [
        {
          type: LP_DEFINITION_COMPONENT_VFX,
          name: LP_NAME_VFX_ROOT,
          filename: LP_PATH_PALADIN_FANATICISM,
          hardKillOnDestroy: false
        }
      ]
    },
    {
      type: LP_TYPE_ENTITY,
      name: LP_NAME_DROPLIGHT,
      id: LP_ID_DROPLIGHT,
      components: [
        {
          type: LP_DEFINITION_COMPONENT_TRANSFORM,
          name: LP_NAME_TRANSFORM1,
          position: { x: 0.0, y: 0.0, z: 0.0 },
          orientation: { x: 0.0, y: 0.0, z: 0.0, w: 1.0 },
          scale: { x: 1.0, y: 1.0, z: 1.0 },
          inheritOnlyPosition: false
        },
        {
          type: LP_DEFINITION_COMPONENT_VFX,
          name: LP_NAME_VFX_STOLEN,
          filename: LP_PATH_VALKYRIE_START,
          hardKillOnDestroy: false
        }
      ]
    }
  ]
};


//======================//
//   Global Functions   //
//======================//

/**
 * Generate an item name with a highlight pattern on the left side: `${RED}+HP1` or `${GRAY}o Arrows`
 * @param {*} patternColor The color of the highlight pattern
 * @param {*} pattern The pattern for the highlight
 * @param {*} padding The padding between the highlights and the item name
 * @param {*} itemColor The color of the item name
 * @param {*} itemName The name of the item
 * @returns A complete item name with a colored highlight pattern on the left side
 */
function generateSingleHighlight(patternColor, pattern, padding, itemColor, itemName) {
  return `${patternColor}${pattern}${itemColor}${padding}${itemName}`;
}

/**
 * Generate an item name with a highlight pattern on both sides: `${RED}**********${GOLD}     ${NAME}     ${RED}**********${GOLD}`
 * @param {*} patternColor The color of the highlight pattern
 * @param {*} pattern The pattern for the highlight
 * @param {*} padding The padding between the highlights and the item name
 * @param {*} itemColor The color of the item name
 * @param {*} itemName The name of the item
 * @returns A complete item name with colored highlight patterns on both sides
 */
function generateDoubleHighlight(patternColor, pattern, padding, itemColor, itemName) {
  return `${patternColor}${pattern}${itemColor}${padding}${itemName}${padding}${patternColor}${pattern}${itemColor}`;
}


//============================//
//   Custom Item Name Lists   //
//============================//

const customAffixes = {
  items: {},

  customizeGold(setting) {
    switch (setting) {
      case "none": // no change
        return;
      case "gold": // Gold displays as "1234 Gold" with white numbers and gold text.
        this.items.gld = `${GOLD1}Gold`; 
        return;
      case "goldg": // Gold displays as "1234 G" with white numbers and a gold-colored G.
        this.items.gld = `${GOLD1}G`;
        return;
      case "white": // Gold displays as "1234 G" in white.
        this.items.gld = `G`;
        return;
      case "hide": // Gold displays as "1234".
        this.items.gld = HIDDEN;
        return;
      case "custom": // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gld = `Gold`;
        return;
    }
  },
  
  shortenSupInferiorPrefixes(setting) {
    var color = (setting === "color") ? GRAY : NO_COLOR;
    var superior = `${color}${PLUS}`;
    var inferior = `${color}${MINUS}`;

    switch (setting) {
      case "none":
        return;
      case "short": // Enable
      case "color":   // Enable, gray Inferior items
        this.items["Hiquality"] = superior;
        this.items["Damaged"] = inferior;
        this.items["Cracked"] = inferior;
        this.items["Low Quality"] = inferior;
        this.items["Crude"] = inferior;
        return;
      case "custom": // [CSTM-SPIF]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items["Hiquality"] = `Superior`;
        this.items["Damaged"] = `Damaged`;
        this.items["Cracked"] = `Cracked`;
        this.items["Low Quality"] = `Low Quality`;
        this.items["Crude"] = `Crude`;
        return;
    }
  },

  customizeGems(setting) {
    // For some reason, the devs put these 4 gems in the wrong JSON file
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
  },

  hideGems() {
    this.items.gsw = HIDDEN;
    this.items.gsg = HIDDEN;
    this.items.gsr = HIDDEN;
    this.items.gsb = HIDDEN;
  },
};

const customRunes = {
  runes: {
    r01: "El",
    r02: "Eld",
    r03: "Tir",
    r04: "Nef",
    r05: "Eth",
    r06: "Ith",
    r07: "Tal",
    r08: "Ral",
    r09: "Ort",
    r10: "Thul",
    r11: "Amn",
    r12: "Sol",
    r13: "Shael",
    r14: "Dol",
    r15: "Hel",
    r16: "Io",
    r17: "Lum",
    r18: "Ko",
    r19: "Fal",
    r20: "Lem",
    r21: "Pul",
    r22: "Um",
    r23: "Mal",
    r24: "Ist",
    r25: "Gul",
    r26: "Vex",
    r27: "Ohm",
    r28: "Lo",
    r29: "Sur",
    r30: "Ber",
    r31: "Jah",
    r32: "Cham",
    r33: "Zod",
  },
  
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
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.runes.r01 = `${ORANGE1}El (1)`;                                                        // El
        this.runes.r02 = `${ORANGE1}Eld (2)`;                                                       // Eld
        this.runes.r03 = `${ORANGE1}Tir (3)`;                                                       // Tir
        this.runes.r04 = `${ORANGE1}Nef (4)`;                                                       // Nef
        this.runes.r05 = `${ORANGE1}Eth (5)`;                                                       // Eth
        this.runes.r06 = `${ORANGE1}Ith (6)`;                                                       // Ith
        this.runes.r07 = `${ORANGE1}Tal (7)`;                                                       // Tal
        this.runes.r08 = `${RED}**${ORANGE1}  Ral (8)  ${RED}**${ORANGE1}`;                         // Ral
        this.runes.r09 = `${ORANGE1}Ort (9)`;                                                       // Ort
        this.runes.r10 = `${ORANGE1}Thul (10)`;                                                     // Thul
        this.runes.r11 = `${ORANGE1}Amn (11)`;                                                      // Amn
        this.runes.r12 = `${ORANGE1}Sol (12)`;                                                      // Sol
        this.runes.r13 = `${ORANGE1}Shael (13)`;                                                    // Shael
        this.runes.r14 = `${ORANGE1}Dol (14)`;                                                      // Dol
        this.runes.r15 = `${RED}**${ORANGE1}  Hel (15) ${RED}**${ORANGE1}`;                         // Hel
        this.runes.r16 = `${ORANGE1}Io (16)`;                                                       // Io
        this.runes.r17 = `${ORANGE1}Lum (17)`;                                                      // Lum
        this.runes.r18 = `${RED}**${ORANGE1}  Ko (18)  ${RED}**${ORANGE1}`;                         // Ko
        this.runes.r19 = `${RED}**${ORANGE1}  Fal (19)  ${RED}**${ORANGE1}`;                        // Fal
        this.runes.r20 = `${RED}**${ORANGE1}  Lem (20)  ${RED}**${ORANGE1}`;                        // Lem
        this.runes.r21 = `${RED}*****${ORANGE1}   Pul (21)   ${RED}*****${ORANGE1}`;                // Pul
        this.runes.r22 = `${RED}*****${ORANGE1}   Um (22)   ${RED}*****${ORANGE1}`;                 // Um
        this.runes.r23 = `${RED}*****${ORANGE1}   Mal (23)   ${RED}*****${ORANGE1}`;                // Mal
        this.runes.r24 = `${RED}*****${ORANGE1}   Ist (24)   ${RED}*****${ORANGE1}`;                // Ist
        this.runes.r25 = `${RED}*****${ORANGE1}   Gul (25)   ${RED}*****${ORANGE1}`;                // Gul
        this.runes.r26 = `${RED}**********${ORANGE1}     Vex (26)     ${RED}**********${ORANGE1}`;  // Vex
        this.runes.r27 = `${RED}**********${ORANGE1}     Ohm (27)     ${RED}**********${ORANGE1}`;  // Ohm
        this.runes.r28 = `${RED}**********${ORANGE1}     Lo (28)     ${RED}**********${ORANGE1}`;   // Lo
        this.runes.r29 = `${RED}**********${ORANGE1}     Sur (29)     ${RED}**********${ORANGE1}`;  // Sur
        this.runes.r30 = `${RED}**********${ORANGE1}     Ber (30)     ${RED}**********${ORANGE1}`;  // Ber
        this.runes.r31 = `${RED}**********${ORANGE1}     Jah (31)     ${RED}**********${ORANGE1}`;  // Jah
        this.runes.r32 = `${RED}**********${ORANGE1}     Cham (32)     ${RED}**********${ORANGE1}`; // Cham
        // this.runes.r33 = `${RED}**********${ORANGE1}     Zod (33)     ${RED}**********${ORANGE1}`;  // Zod
        // this.runes.r33 = `${RED}${PATTERN_10}${PADDING_5}${ORANGE1}Zod (33)${PADDING_5}${RED}${PATTERN_10}`;  // Zod
        this.runes.r33 = generateDoubleHighlight(RED, PATTERN_10, PADDING_5, ORANGE1, "Zod Rune (33)"); // Zod
        return;
    }
  },

  generateRuneNames(setting, settingsAffix, settingsNumbers, settingsHighlighting) {
    var i = 1;
    for (const rune in this.runes) {
      this.runes[rune] = this.generateRuneName(this.runes[rune], i, setting, settingsAffix, settingsNumbers, settingsHighlighting);
      i++;
    }
  },

  generateRuneName(name, number, setting, settingsAffix, settingsNumbers, settingsHighlighting) {
    const hasAffix = settingsAffix.includes(setting);
    const hasNumber = settingsNumbers.includes(setting);
    const hasHighlighting = settingsHighlighting.includes(setting) && RUNES_TIER_HIGHLIGHTED.includes(number);
    const hasHighlightedNumber = settingsHighlighting.includes(setting) && RUNES_TIER_HIGHLIGHTED_NUMBERS.includes(number);
    const hasHighlightedName = settingsHighlighting.includes(setting) && RUNES_TIER_HIGHLIGHTED_NAMES.includes(number);
    const hasAlternateNameColor = IS_ALTERNATE_RUNES_COLOR && RUNES_TIER_ALTERNATE_NAME_COLOR.includes(number);

    var highlightColor1 = hasHighlighting ? RUNES_COLOR_HIGHLIGHT : NO_COLOR;
    var highlightColor2 = highlightColor1;
    var nameColor1 = !hasAlternateNameColor ? (hasHighlightedName ? RUNES_COLOR_HIGHLIGHT : RUNES_COLOR_NAME) : RUNES_COLOR_NAME_ALTERNATE;
    var nameColor2 = nameColor1;
    var numberColor = !hasAlternateNameColor ? (hasHighlightedNumber ? RUNES_COLOR_HIGHLIGHT : RUNES_COLOR_NAME) : NO_COLOR;
    const padding = this.determinePadding(number);
    const highlightPattern = this.determinePattern(number);

    if (hasAffix) {
      name = `${name} Rune`;
    }

    // remove duplicate color codes where necessary
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
    // remove last duplicate color code where necessary
    if (hasHighlighting && highlightColor1 === nameColor1) {
      nameColor1 = NO_COLOR;
    }

    return `${highlightColor1}${highlightPattern}${nameColor1}${padding}${name}${padding}${highlightColor2}${highlightPattern}${nameColor2}`;
  },

  determinePadding(runeNumber) {
    if (RUNES_TIER_LOW.includes(runeNumber)) {
      return RUNES_PADDING_LOW;
    }
    else if (RUNES_TIER_LOWMID.includes(runeNumber)) {
      return RUNES_PADDING_LOWMID;
    }
    else if (RUNES_TIER_MID.includes(runeNumber)) {
      return RUNES_PADDING_MID;
    }
    else if (RUNES_TIER_HIGH.includes(runeNumber)) {
      return RUNES_PADDING_HIGH;
    }

    return NO_PADDING;
  },

  determinePattern(runeNumber) {
    if (RUNES_TIER_LOW.includes(runeNumber)) {
      return RUNES_PATTERN_LOW;
    }
    else if (RUNES_TIER_LOWMID.includes(runeNumber)) {
      return RUNES_PATTERN_LOWMID;
    }
    else if (RUNES_TIER_MID.includes(runeNumber)) {
      return RUNES_PATTERN_MID;
    }
    else if (RUNES_TIER_HIGH.includes(runeNumber)) {
      return RUNES_PATTERN_HIGH;
    }

    return NO_PATTERN;
  },
};

const customItems = {
  items: {},

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
  },

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
  },

  highlightLv123Potions(colorHealing, colorMana, colorName, pattern, padding) {
    this.items.hp1 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP1"); // Minor Healing Potion
    this.items.hp2 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP2"); // Light Healing Potion
    this.items.hp3 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP3"); // Healing Potion
    this.items.mp1 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP1");    // Minor Mana Potion
    this.items.mp2 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP2");    // Light Mana Potion
    this.items.mp3 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP3");    // Mana Potion
  },

  highlightLv4Potions(colorHealing, colorMana, colorName, pattern, padding) {
    this.items.hp4 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP4"); // Greater Healing Potion
    this.items.mp4 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP4");    // Greater Mana Potion
  },

  highlightLv5Potions(colorHealing, colorMana, colorName, pattern, padding) {
    this.items.hp5 = generateSingleHighlight(colorHealing, pattern, padding, colorName, "HP5"); // Super Healing Potion
    this.items.mp5 = generateSingleHighlight(colorMana, pattern, padding, colorName, "MP5");    // Super Mana Potion
  },

  highlightSmallRejuvs(colorRejuv, colorName, pattern, padding) {
    this.items.rvs = generateSingleHighlight(colorRejuv, pattern, padding, colorName, "RPS");   // Rejuvenation Potion
  },

  highlightFullRejuvs(colorRejuv, colorName, pattern, padding) {
    this.items.rvl = generateSingleHighlight(colorRejuv, pattern, padding, colorName, "RPF");   // Full Rejuvenation Potion
  },

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
  },

  customizeThrowingPotions(setting) {
    const colorGas = DARKGREEN1;
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
  },

  customizeScrollsAndTomes(setting) {
    const colorScroll = GREEN;
    const colorTome = DARKGREEN1;
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
  },

  hideScrolls() {
    this.items.tsc = HIDDEN; // Scroll of Town Portal
    this.items.isc = HIDDEN; // Scroll of Identify
  },

  highlightScrolls(colorHighlight, colorName, pattern, padding) {
    this.items.tsc = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "TP"); // Scroll of Town Portal
    this.items.isc = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "ID"); // Scroll of Identify
  },

  highlightTomes(colorHighlight, colorName, pattern, padding) {
    this.items.tbk = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "TP Tome"); // Tome of Town Portal
    this.items.ibk = generateSingleHighlight(colorHighlight, pattern, padding, colorName, "ID Tome"); // Tome of Identify
  },

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
  },

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
  },
  

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
  },

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
  },

  hideFlawless() {
    this.items.gzv = HIDDEN;
    this.items.glw = HIDDEN;
    this.items.glg = HIDDEN;
    this.items.glr = HIDDEN;
    this.items.glb = HIDDEN;
    this.items.gly = HIDDEN;
    this.items.skl = HIDDEN;
  },

  hidePerfect() {
    this.items.gpv = HIDDEN;
    this.items.gpw = HIDDEN;
    this.items.gpg = HIDDEN;
    this.items.gpr = HIDDEN;
    this.items.gpb = HIDDEN;
    this.items.gpy = HIDDEN;
    this.items.skz = HIDDEN;
  },

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
  },

  highlightFlawless() {
    this.items.gzv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Amethyst
    this.items.glw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Diamond
    this.items.glg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Emerald
    this.items.glr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Ruby
    this.items.glb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Sapphire
    this.items.gly = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Topaz
    this.items.skl = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_FLAWLESS); // Flawless Skull
  },

  highlightPerfect() {
    this.items.gpv = generateSingleHighlight(PURPLE, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Amethyst
    this.items.gpw = generateSingleHighlight(WHITE,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Diamond
    this.items.gpg = generateSingleHighlight(GREEN,  GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Emerald
    this.items.gpr = generateSingleHighlight(RED,    GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Ruby
    this.items.gpb = generateSingleHighlight(BLUE,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Sapphire
    this.items.gpy = generateSingleHighlight(YELLOW, GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Topaz
    this.items.skz = generateSingleHighlight(GRAY,   GEM_HIGHLIGHT, GEM_PADDING, GEM_COLOR_NAME, GEM_PERFECT); // Perfect Skull
  },
  

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
  },
  
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
        this.items["Gheed's Fortune"]      = `Gheed's Fortune`;
        this.items["Annihilus"]            = `Annihilus`;
        this.items["Hellfire Torch"]       = `Hellfire Torch`;
        this.items["Black Cleft"]          = `Black Cleft`;
        this.items["Bone Break"]           = `Bone Break`;
        this.items["Cold Rupture"]         = `Cold Rupture`;
        this.items["Crack of the Heavens"] = `Crack of the Heavens`;
        this.items["Flame Rift"]           = `Flame Rift`;
        this.items["Rotting Fissure"]      = `Rotting Fissure`;
        return;
    }
  },

  highlightUnidentifiedCharms() {
    this.items.cm1 = `Small ${RED}Charm${BLUE}`;
    this.items.cm2 = `Large ${RED}Charm${BLUE}`;
    this.items.cm3 = `Grand ${RED}Charm${BLUE}`;
  },

  highlightUniqueCharms(){
    this.items["Gheed's Fortune"]      = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Gheed's Fortune${CHARMS_UNIQUE_SUFFIX}`;
    this.items["Annihilus"]            = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Annihilus${CHARMS_UNIQUE_SUFFIX}`;
    this.items["Hellfire Torch"]       = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Hellfire Torch${CHARMS_UNIQUE_SUFFIX}`;
  },

  highlightSunderCharms(){
    if (IS_ALTERNATE_SUNDER_HIGHLIGHT) {
      this.items["Black Cleft"]          = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(GRAY,    UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Black Cleft");
      this.items["Bone Break"]           = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(WHITE,   UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Bone Break");
      this.items["Cold Rupture"]         = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(SKYBLUE, UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Cold Rupture");
      this.items["Crack of the Heavens"] = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(YELLOW,  UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Crack of the Heavens");
      this.items["Flame Rift"]           = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(RED,     UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Flame Rift");
      this.items["Rotting Fissure"]      = ILVL_INDENT_FIX_CHARMS + generateDoubleHighlight(GREEN,   UNIQUE_PATTERN, UNIQUE_PADDING, UNIQUE_COLOR_NAME, "Rotting Fissure");
    }
    else {
      this.items["Black Cleft"]          = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Black Cleft${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Bone Break"]           = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Bone Break${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Cold Rupture"]         = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Cold Rupture${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Crack of the Heavens"] = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Crack of the Heavens${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Flame Rift"]           = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Flame Rift${CHARMS_UNIQUE_SUFFIX}`;
      this.items["Rotting Fissure"]      = `${ILVL_INDENT_FIX_CHARMS}${CHARMS_UNIQUE_PREFIX}Rotting Fissure${CHARMS_UNIQUE_SUFFIX}`;
    } 
  },
  
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
  },

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
      this.items.hst = indent + this.items.hst;
      this.items.qf2 = indent + this.items.qf2;
      this.items["Horadric Staff"] = indent + this.items["Horadric Staff"];
      this.items.SuperKhalimFlail  = indent + this.items.SuperKhalimFlail;

      // double digit ilvl
      indent = ILVL_INDENT_FIX_QUEST2;
      this.items.leg = indent + this.items.leg;
      this.items.hdm = indent + this.items.hdm;
      this.items.msf = indent + this.items.msf;
      this.items.g33 = indent + this.items.g33;
      this.items.qf1 = indent + this.items.qf1;
      this.items.hfh = indent + this.items.hfh;
      this.items["Staff of Kings"]    = indent + this.items["Staff of Kings"];
      this.items.KhalimFlail          = indent + this.items.KhalimFlail;
      this.items["Hell Forge Hammer"] = indent + this.items["Hell Forge Hammer"];
    }
  },

  highlightCube() {
    this.items.box = `${QUEST_PREFIX}Horadric Cube${QUEST_SUFFIX}`; // Horadric Cube
  },
    
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
  },

  highlightEndgameItems() {
    this.highlightEssences(ESSENCE_PREFIX, ESSENCE_SUFFIX);
    this.highlightToken(TOKEN_PREFIX, TOKEN_SUFFIX);
    this.highlightKeys(KEY_PREFIX, KEY_SUFFIX);
    this.highlightOrgans(ORGAN_PREFIX, ORGAN_SUFFIX);
  },
  
  highlightEssences(prefix, suffix) {
    this.items.tes = `${prefix}Twisted Essence of Suffering${suffix}`;     // Twisted Essence of Suffering
    this.items.ceh = `${prefix}Charged Essense of Hatred${suffix}`;        // Charged Essense of Hatred
    this.items.bet = `${prefix}Burning Essence of Terror${suffix}`;        // Burning Essence of Terror
    this.items.fed = `${prefix}Festering Essence of Destruction${suffix}`; // Festering Essence of Destruction
  },
  
  highlightToken(prefix, suffix) {
    this.items.toa = `${prefix}Token of Absolution${suffix}`;              // Token of Absolution
  },
  
  highlightKeys(prefix, suffix) {
    this.items.pk1 = `${prefix}Key of Terror${suffix}`;                    // Pandemonium Key 1 Key of Terror
    this.items.pk2 = `${prefix}Key of Hate${suffix}`;                      // Pandemonium Key 2 Key of Hate
    this.items.pk3 = `${prefix}Key of Destruction${suffix}`;               // Pandemonium Key 3 Key of Destruction
  },

  highlightOrgans(prefix, suffix) {
    this.items.dhn = `${prefix}Diablo's Horn${suffix}`;                    // Diablo's Horn
    this.items.bey = `${prefix}Baal's Eye${suffix}`;                       // Baal's Eye
    this.items.mbr = `${prefix}Mephisto's Brain${suffix}`;                 // Mephisto's Brain
  },
};

const customUi = {
  items: {},

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
  },
};

const customModifiers = {
  items: {},

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
  },
};


//========================================//
//   How to apply the magic: item names   //
//========================================//

// Gold, Superior/Inferior affixes, Gems (exceptions)
function applyCustomAffixes() {
  if (config.Gold === "none" && config.Gems === "none" && config.ShortSupInferiorPrefixes === "none") {
    return;
  }
  
  customAffixes.shortenSupInferiorPrefixes(config.ShortSupInferiorPrefixes);
  customAffixes.customizeGold(config.Gold);
  customAffixes.customizeGems(config.Gems);
  applyCustomNames(FILE_ITEM_NAMEAFFIXES_PATH, customAffixes.items);
}

// Runes
function applyCustomRuneNames() {
  if (config.Runes === "none" || config.Runes === "raf")
    return;
  
  customRunes.customizeRunes(config.Runes);
  applyCustomNames(FILE_ITEM_RUNES_PATH, customRunes.runes);
}

// Most item names
function applyCustomItemNames() {
  customItems.customizeHealingPotions(config.HealingPotions);
  customItems.customizeBuffPotions(config.BuffPotions);
  customItems.customizeThrowingPotions(config.ThrowingPotions);
  customItems.customizeScrollsAndTomes(config.ScrollsTomes);
  customItems.customizeArrowsAndBolts(config.ArrowsBolts);
  customItems.customizeKeys(config.Keys);
  customItems.customizeJewels(config.Jewels);
  customItems.customizeCharms(config.Charms);
  customItems.customizeGems(config.Gems);
  customItems.customizeQuestItems(config.Quest);
  customItems.customizeEndgameItems(config.Endgame);

  applyCustomNames(FILE_ITEM_NAMES_PATH, customItems.items);
}

// Quest items (exceptions)
function applyCustomUiNames() {
  if (config.Quest === "none")
    return;

  customUi.customizeQuestItems(config.Quest);
  applyCustomNames(FILE_UI_PATH, customUi.items);
}

function applyCustomModifiers() {
  if (config.Quest === "none")
    return;

  customModifiers.customizeQuestItems(config.Quest);
  applyCustomNames(FILE_ITEM_MODIFIERS_PATH, customModifiers.items);
}

function applyCustomNames(path, customNames) {
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


//====================================================//
//   How to apply the magic: item stats & modifiers   //
//====================================================//

// ilvl
function showItemLevel() {
  if (!(config.ItemLevel === "show" || config.ItemLevel === "fix")) {
    return;
  }

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
    if (["amu", "rin"].indexOf(row.code) !== -1) { // amulets & rings
      row.ShowLevel = 1;
      return;
    }
    if (["cm1", "cm2", "cm3"].indexOf(row.code) !== -1) { // small, large and grand charms
      row.ShowLevel = 1;
      return;
    }
    if (["jew"].indexOf(row.code) !== -1) { // jewels
      row.ShowLevel = 1;
      return;
    }
  });

  D2RMM.writeTsv(FILE_WEAPONS_PATH, fileWeapons);
  D2RMM.writeTsv(FILE_ARMOR_PATH, fileArmor);
  D2RMM.writeTsv(FILE_MISC_PATH, fileMisc);
}

// quality: normal/exceptional/elite
function showItemQuality() {
  if (config.ItemQuality === "none") {
    return;
  }

  const fileWeapons = D2RMM.readTsv(FILE_WEAPONS_PATH);
  const fileArmor = D2RMM.readTsv(FILE_ARMOR_PATH);
  const fileItemNames = D2RMM.readJson(FILE_ITEM_NAMES_PATH);

  const fileWeaponsWithQuality = fileWeapons.rows.filter(row => row.ubercode && row.ultracode);
  const fileArmorsWithQuality = fileArmor.rows.filter(row => row.ubercode && row.ultracode);

  addEquipmentQuality(fileWeaponsWithQuality, fileItemNames, config.ItemQuality);
  addEquipmentQuality(fileArmorsWithQuality, fileItemNames, config.ItemQuality);

  D2RMM.writeJson(FILE_ITEM_NAMES_PATH, fileItemNames);
}

function addEquipmentQuality(equipment, itemNames, setting) {
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


//===========================================//
//   How to apply the magic: light pillars   //
//===========================================//

function addLightPillars() {
  // runes
  if (config.ShouldAddLightPillarRunes) {
    [
      "el", "eld", "tir", "nef", "eth", "ith", "tal", "ral", "ort", "thul", "amn", 
      "sol", "shael", "dol", "hel", "io", "lum", "ko", "fal", "lem", "pul", "um", 
      "mal", "ist", "gul", "vex", "ohm", "lo", "sur", "ber", "jah", "cham", "zod",
    ].forEach((rune) => {
      pushLightPillarToPath(`${LP_PATH_ITEMS_MISC}rune\\`, `${rune}_rune`);
    });
  }
  // circlets
  if (config.ShouldAddLightPillarCirclets) {
    ["circlet", "coronet", "tiara", "diadem"].forEach((circlet) => {
      pushLightPillarToPath(`${LP_PATH_ITEMS}armor\\circlet\\`, circlet);
    });
  }
  // rings & amulets
  if (config.ShouldAddLightPillarRingsAmulets) {
    pushLightPillarToPath(`${LP_PATH_ITEMS_MISC}ring\\`, "ring");
    pushLightPillarToPath(`${LP_PATH_ITEMS_MISC}amulet\\`, "amulet");
  }
  // jewels
  if (config.ShouldAddLightPillarGemsJewels) {
    let gemQualities = ["chipped_", "flawed_", EMPTY_STRING, "flawless_", "perfect_"];
    let gemTypes = ["amethyst", "diamond", "emerald", "ruby", "saphire", "topaz", "skull"];
    gemQualities.forEach((quality) => {
      gemTypes.forEach((type) => {
        pushLightPillarToPath(`${LP_PATH_ITEMS_MISC}gem\\`, `${quality}${type}`);
      });
    });
  }
  // charms
  if (config.ShouldAddLightPillarCharms) {
    ["charm_small", "charm_medium", "charm_large"].forEach((charm) => {
      pushLightPillarToPath(`${LP_PATH_ITEMS_MISC}charm\\`, charm);
    });
    // pushLightPillarToPath(`${LP_PATH_ITEMS_MISC}torch\\`, "torch"); // enable this to turn Fallen groups into a dance party
    if (!config.ShouldAddLightPillarQuest) {
      pushLightPillarToPath(`${LP_PATH_ITEMS_MISC_QUEST}`, "mephisto_soul_stone");
    }
  }
  // quest items
  if (config.ShouldAddLightPillarQuest) {
    let questItems = [
      // act 1
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "bark_scroll"],                   // Scroll of Inifuss & Malah's Potion
      [`${LP_PATH_ITEMS_MISC}scroll\\`,   "deciphered_bark_scroll"],        // Scroll of Inifuss (deciphered)
      // act 2
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "book_of_skill"],                 // Book of Skill
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "scroll_of_horadric_quest_info"], // Horadric Scroll
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "horadric_cube"],                 // Horadric Cube
      [`${LP_PATH_ITEMS_MISC}amulet\\`,   "viper_amulet"],                  // Amulet of the Viper
      // act 3
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "jade_figurine"],                 // A Jade Figurine
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "gold_bird"],                     // The Golden Bird
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "scroll_of_self_resurrect"],      // Potion of Life & Malah's Potion
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "lam_esens_tome"],                // Lam Esen's Tome
      [`${LP_PATH_ITEMS_MISC_BODY_PART}`, "eye"],                           // Khalim's Eye
      [`${LP_PATH_ITEMS_MISC_BODY_PART}`, "heart"],                         // Khalim's Heart
      [`${LP_PATH_ITEMS_MISC_BODY_PART}`, "brain"],                         // Khalim's Brain
      [`${LP_PATH_ITEMS_MISC_QUEST}`,     "mephisto_soul_stone"],           // Mephisto's Soulstone
      // act 4
      // none
      // act 5
      // Malah's Potion       => see Potion of Life (scroll_of_self_resurrect)
      // Scroll of Resistance => see Scroll of Inifuss (bark_scroll)
    ];
    if (!config.ShouldExcludeLightPillarQuestWeapons) {
      questItems.concat([
      // act 1
      [`${LP_PATH_ITEMS_WEAPON}club\\`,   "wirts_leg"],                     // Wirt's Leg
      [`${LP_PATH_ITEMS_WEAPON_HAMMER}`,  "horadric_malus"],                // Horadric Malus
      // act 2
      [`${LP_PATH_ITEMS_WEAPON_STAFF}`,   "staff_of_the_kings"],            // Staff of Kings
      [`${LP_PATH_ITEMS_WEAPON_STAFF}`,   "horadric_staff"],                // Horadric Staff
      // act 3
      [`${LP_PATH_ITEMS_WEAPON}knife\\`,  "gidbinn"],                       // The Gidbinn
      [`${LP_PATH_ITEMS_WEAPON_MACE}`,    "khalim_flail"],                  // Khalim's Flail
      [`${LP_PATH_ITEMS_WEAPON_MACE}`,    "super_khalim_flail"],            // Khalim's Will
      // act 4
      [`${LP_PATH_ITEMS_WEAPON_HAMMER}`,  "hellforge_hammer"],              // Hell Forge Hammer
      // act 5
      // none
      ]);
    }
    questItems.forEach((item) => {
      pushLightPillarToPath(item[0], item[1]);
    });
  }
  // essences & tokens
  if (config.ShouldAddLightPillarEssences) {
    let essences = ["burning_essence_of_terror", "charged_essense_of_hatred", "festering_essence_of_destruction", "twisted_essence_of_suffering"];
    essences.forEach((essence) => {
      pushLightPillarToPath(LP_PATH_ITEMS_MISC_QUEST, essence);
    });
  }
  if (config.ShouldAddLightPillarTokens) {
    pushLightPillarToPath(LP_PATH_ITEMS_MISC_QUEST, "token_of_absolution");
  }
  // pandemonium keys
  if (config.ShouldAddLightPillarKeys) {
    let path = `${LP_PATH_ITEMS_MISC}key\\mephisto_key`;
    var file = D2RMM.readJson(`${path}${FILE_EXTENSION_JSON}`);
    pushLightPillarToFile(file);
    for (var i = 1; i <= 3; i++) {
      let index = (i == 1) ? EMPTY_STRING : `${i}`;
      D2RMM.writeJson(`${path}${index}${FILE_EXTENSION_JSON}`, file);
    }
  }
  // pandemonium event (ubers) organs
  if (config.ShouldAddLightPillarOrgans) {
    pushLightPillarToPath(LP_PATH_ITEMS_MISC_BODY_PART, "horn");
    if (!config.ShouldAddLightPillarQuest) {
      pushLightPillarToPath(LP_PATH_ITEMS_MISC_BODY_PART, "brain");
      pushLightPillarToPath(LP_PATH_ITEMS_MISC_BODY_PART, "eye");
    }
  }
  // pandemonium event (ubers) organs
  if (config.ShouldAddLightPillarStandardOfHeroes) {
    pushLightPillarToPath(LP_PATH_ITEMS_MISC_BODY_PART, "flag");
  }
}

function pushLightPillarToPath(path, item) {
  let filePath = `${path}${item}${FILE_EXTENSION_JSON}`;
  let file = D2RMM.readJson(filePath);
  pushLightPillarToFile(file);
  D2RMM.writeJson(filePath, file);
}

function pushLightPillarToFile(file) {
  file.dependencies.particles.push(LP_LIGHT_COMPONENT.particle);
  file.entities = file.entities.concat(LP_LIGHT_COMPONENT.entities);
}


//==========================================//
//   How to apply the magic: tooltip mods   //
//==========================================//
function applyTooltipMods() {
  if (config.Tooltip === "none")
    return

  let profileHD = D2RMM.readJson(FILE_PROFILE_HD_PATH);

  switch (config.Tooltip) {
    case "all":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      profileHD.TooltipFontSize = config.TooltipSize;
      return;
    case "opacity":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      return;
    case "size":
      profileHD.TooltipFontSize = config.TooltipSize;
      return;
  }
  
  D2RMM.writeJson(FILE_PROFILE_HD_PATH, profileHD);
  D2RMM.copyFile("hd", "hd", true);
  // This simply copies the rune.json files instead of modifying each one with code which 
  // I am too dumb to understand how to do. It gets the job done, it may cause issues if 
  // you have other mods that modify the runes.json files.
}


//========================//
//   Applying the magic   //
//========================//

function applyLootFilter() {
  applyCustomAffixes();
  applyCustomRuneNames();
  applyCustomItemNames();
  applyCustomUiNames();
  applyCustomModifiers();
  showItemLevel();
  showItemQuality();
  addLightPillars();
  applyTooltipMods();
}

applyLootFilter();
