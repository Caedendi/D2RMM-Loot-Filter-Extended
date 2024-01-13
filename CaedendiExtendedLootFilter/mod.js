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

  static id = "id";
  static key = "Key";
}

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

class SettingsConstants {
  // tooltip
  static hidden             = CharConstants.empty + CharConstants.space.repeat(config.HiddenItemTooltipSize);
  
  // ilvl
  static shouldFixIlvlIndent      = config.ItemLevel === "fix" || config.ItemLevel === "fix-btt";
  static iLvlIndentFixSingle      = CharConstants.space.repeat(4); // for single digit ilvl items
  static iLvlIndentFixDouble      = CharConstants.space.repeat(6); // for double digit ilvl items
  static iLvlIndentFixQuality     = CharConstants.space.repeat(6); // for double digit ilvl items when item quality is enabled // todo: check if needed
  static iLvlIndentFixFacets      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixCharms      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixQuestSingle = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
  static iLvlIndentFixQuestDouble = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
  static shouldExcludeIlvlForBigTooltips = config.IsBigTooltipsEnabled && (config.ItemLevel === "btt" || config.ItemLevel === "fix-btt");
  
  // common config settings
  static disabled  = "none";
  static all       = "all";
  static custom    = "custom";
}

class HighlightConstants {
  static character = config.HighlightCharacter !== this.custom ? config.HighlightCharacter                              : '*'; // replace * with desired custom character [CSTM-HLCTR]
  static color     = config.HighlightColor     !== this.custom ? `${BaseColorConstants.prefix}${config.HighlightColor}` : '1'; // replace 1 with desired custom color character (see above) [CSTM-HLCLR]

  static paddingNone = CharConstants.empty;
  static padding1    = CharConstants.space;
  static padding2    = CharConstants.space.repeat(2);
  static padding3    = CharConstants.space.repeat(3);
  static padding5    = CharConstants.space.repeat(5);
  static padding10   = CharConstants.space.repeat(10);

  static patternNone = CharConstants.empty;
  static pattern2    = this.character.repeat(2);
  static pattern3    = this.character.repeat(3);
  static pattern4    = this.character.repeat(4);
  static pattern5    = this.character.repeat(5);
  static pattern10   = this.character.repeat(10);
  static pattern2x10 = `${this.pattern10}${this.padding2}${this.pattern10}`;
  static pattern3x10 = `${this.pattern10}${this.padding2}${this.pattern10}${this.padding2}${this.pattern10}`;

  static uniqueColorName = ColorConstants.gold;
  static uniqueColorHighlight = this.color;
  static uniquePattern = this.pattern10;
  static uniquePadding = this.padding5;
  static uniquePrefix = `${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}${this.uniquePadding}`;
  static uniqueSuffix = `${this.uniquePadding}${this.uniqueColorHighlight}${this.uniquePattern}${this.uniqueColorName}`;

  static questPrefix = this.uniquePrefix;
  static questSuffix = this.uniqueSuffix;

  static bttPadding = this.padding5;
  static bttPickUpMsg = `${ColorConstants.purple}Pick Up`;
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
  static clrHighlight = HighlightConstants.color;
  static colorAlternate = config.RunesHighlightColorAlt !== SettingsConstants.custom ? `${BaseColorConstants.prefix}${config.RunesHighlightColorAlt}` : ';'; // replace 1 with desired custom color character (see above) [CSTM-HLCRA]

  // set the highlight patterns for each rune tier
  static patternLow     = HighlightConstants.patternNone;   // 
  static patternLowMid  = HighlightConstants.pattern5;    // *****
  static patternMid     = HighlightConstants.pattern10;   // **********
  static patternHigh    = config.BigTooltipRunesHigh === SettingsConstants.disabled ? HighlightConstants.pattern3x10 : HighlightConstants.pattern2x10; // ********** ********** ********** or ********** ********** with big tooltips

  // set the amount of spaces between the rune name and the highlight patterns for each rune tier
  static paddingLow    = HighlightConstants.paddingNone;
  static paddingLowMid = HighlightConstants.padding3;
  static paddingMid    = HighlightConstants.padding5;
  static paddingHigh   = HighlightConstants.padding5;

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

class JewelryConstants {
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
  static padding = HighlightConstants.padding1;

  static facetAltClrName = ColorConstants.gold;
  static facetAltPattern = (config.IsBigTooltipsEnabled && (config.BigTooltipFacets === "2pu" || config.BigTooltipFacets === "4pu")) ? HighlightConstants.pattern3 : HighlightConstants.pattern5;
  static facetAltPadding1 = HighlightConstants.padding1; // padding between individual patterns
  static facetAltPadding2 = HighlightConstants.padding3; // padding between name and facetAltPrefix / facetAltSuffix
  static facetAltPrefix = `${ColorConstants.red}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.yellow}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.blue}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.green}${this.facetAltPattern}${this.facetAltClrName}${this.facetAltPadding2}`;
  static facetAltSuffix = `${this.facetAltPadding2}${ColorConstants.green}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.blue}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.yellow}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.red}${this.facetAltPattern}${this.facetAltClrName}`;
  static facetPrefix = config.IsFacetAltPattern ? this.facetAltPrefix : HighlightConstants.uniquePrefix;
  static facetSuffix = config.IsFacetAltPattern ? this.facetAltSuffix : HighlightConstants.uniqueSuffix;

  static ring = "rin";
  static amulet = "amu";
  static jewel = "jew";
  static facet = "Rainbow Facet";

  static charmSmall = "cm1";
  static charmLarge = "cm2";
  static charmGrand = "cm3";

  static anni = "Annihilus";
  static torch = "Hellfire Torch";
  static gheeds = "Gheed's Fortune";

  static sunderMagic = "Black Cleft";
  static sunderPhys  = "Bone Break";
  static sunderCold  = "Cold Rupture";
  static sunderLite  = "Crack of the Heavens";
  static sunderFire  = "Flame Rift";
  static sunderPsn   = "Rotting Fissure";

  static iLvlJewelry = [
    this.ring,
    this.amulet,
    this.jewel,
    this.charmSmall,
    this.charmLarge,
    this.charmGrand,
  ];

  static charms = [ 
    this.charmSmall,
    this.charmLarge,
    this.charmGrand,
  ];

  static uniqueLodCharms = [
    this.anni,
    this.torch,
    this.gheeds,
  ];

  static sunderCharms = [
    { name: this.sunderMagic, color: ColorConstants.gray }, 
    { name: this.sunderPhys,  color: ColorConstants.white }, 
    { name: this.sunderCold,  color: ColorConstants.lightBlue }, 
    { name: this.sunderLite,  color: ColorConstants.yellow }, 
    { name: this.sunderFire,  color: ColorConstants.red }, 
    { name: this.sunderPsn,   color: ColorConstants.green }, 
  ];

  static charmsUniquePrefix = HighlightConstants.uniquePrefix;
  static charmsUniqueSuffix = HighlightConstants.uniqueSuffix;

  static indentPickUpMsg = (config.Gems === "all" || config.Gems === "flawless" || config.Gems === "perfect") ? CharConstants.space.repeat(2) : CharConstants.empty; // indent for the pick up message if gem highlighting is enabled.
}

class EndgameConstants {
  static clrName = ColorConstants.orange;
  static clrHighlight = HighlightConstants.color;

  static prefixEss = `${this.clrHighlight}${HighlightConstants.pattern5}${this.clrName}${HighlightConstants.padding3}`;
  static prefixKey = `${this.clrHighlight}${HighlightConstants.pattern10}${this.clrName}${HighlightConstants.padding5}`;
  static prefixOrg = `${this.clrHighlight}${HighlightConstants.pattern3x10}${this.clrName}${HighlightConstants.padding5}`;
  static prefixSoh = `${this.clrHighlight}${HighlightConstants.pattern5}${HighlightConstants.uniqueColorName}${HighlightConstants.padding3}`;
  static prefixTkn = this.prefixKey;
  
  static suffixEss = `${HighlightConstants.padding3}${this.clrHighlight}${HighlightConstants.pattern5}${this.clrName}`;
  static suffixKey = `${HighlightConstants.padding5}${this.clrHighlight}${HighlightConstants.pattern10}${this.clrName}`;
  static suffixOrg = `${HighlightConstants.padding5}${this.clrHighlight}${HighlightConstants.pattern3x10}${this.clrName}`;
  static suffixSoh = `${HighlightConstants.padding3}${this.clrHighlight}${HighlightConstants.pattern5}${HighlightConstants.uniqueColorName}`;
  static suffixTkn = this.suffixKey;

  static essences = [
    { id: "tes", name: "Twisted Essence of Suffering",     prefix: this.prefixEss, suffix: this.suffixEss }, // Twisted Essence of Suffering
    { id: "ceh", name: "Charged Essense of Hatred",        prefix: this.prefixEss, suffix: this.suffixEss }, // Charged Essense of Hatred
    { id: "bet", name: "Burning Essence of Terror",        prefix: this.prefixEss, suffix: this.suffixEss }, // Burning Essence of Terror
    { id: "fed", name: "Festering Essence of Destruction", prefix: this.prefixEss, suffix: this.suffixEss }, // Festering Essence of Destruction
  ];
  
  static keys = [
    { id: "pk1", name: "Key of Terror",      prefix: this.prefixKey, suffix: this.suffixKey }, // Pandemonium Key 1: Key of Terror
    { id: "pk2", name: "Key of Hate",        prefix: this.prefixKey, suffix: this.suffixKey }, // Pandemonium Key 2: Key of Hate
    { id: "pk3", name: "Key of Destruction", prefix: this.prefixKey, suffix: this.suffixKey }, // Pandemonium Key 3: Key of Destruction
  ];

  static organs = [
    { id: "dhn", name: "Diablo's Horn",    prefix: this.prefixOrg, suffix: this.suffixOrg }, // Diablo's Horn
    { id: "bey", name: "Baal's Eye",       prefix: this.prefixOrg, suffix: this.suffixOrg }, // Baal's Eye
    { id: "mbr", name: "Mephisto's Brain", prefix: this.prefixOrg, suffix: this.suffixOrg }, // Mephisto's Brain
  ];

  static token =    { id: "toa", name: "Token of Absolution", prefix: this.prefixTkn, suffix: this.suffixTkn }; // Token of Absolution

  static standard = { id: "std", name: "Standard of Heroes",  prefix: this.prefixSoh, suffix: this.suffixSoh }; // Standard of Heroes
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

class CollectionConstants {
  static gold             = "Gold";
  static supInf           = "SupInferior";
  static junk             = "Junk";
  static jewels           = "Jewels";
  static charms           = "Charms";
  static gems             = "Gems";
  static quest            = "QuestItems";
  static endgame          = "EndgameItems";
  static customFilterList = "CustomFilterList";
  static weapons          = "Weapons";
  static armor            = "Armor";
  static misc             = "Misc";
}

//=============//
//   Helpers   //
//=============//

class Helper {
  static addBigTooltips(collection, setting, indentPickUpMsg = CharConstants.empty) {
    collection.forEach(entry => entry.value = this.generateBigTooltip(setting, entry.value, indentPickUpMsg));
  }

  static addBigTooltipsForIds(collection, ids, setting) {
    ids.forEach(id => {
      this.addBigTooltipForId(collection, id, setting);
    })
  }
  
  static addBigTooltipForId(collection, id, setting) {
    const i = collection.findIndex(x => x.id === id);
    if (i < 0) 
      throw new Error(`Can't find item \"${id}\" in collection.`);
    collection[i].value = this.generateBigTooltip(setting, collection[i].value);
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
  static generateBigTooltip(setting, name, indentPickUpMsg = CharConstants.empty) {
    if (setting === SettingsConstants.disabled || name === SettingsConstants.hidden) {
      return name;
    }

    // new lines work upside-down: adding \n will add a new line on top of the current one (instead of below like you would expect)
    if (setting === SettingsConstants.custom) { // [CSTM-BTT]
      // ADD YOUR CUSTOM BIG TOOLTIP HERE
      return CharConstants.newLine + `${HighlightConstants.bttPadding}${name}${HighlightConstants.bttPadding}` + CharConstants.newLine;
    }

    name = `${HighlightConstants.bttPadding}${name}${HighlightConstants.bttPadding}`;
    if (setting === "2") {
      return name + CharConstants.newLine;
    }
    if (setting === "2pu") {
      return name + CharConstants.newLine + indentPickUpMsg + HighlightConstants.bttPickUpMsg;
    }
    if (setting === "3") {
      return CharConstants.newLine + name + CharConstants.newLine;
    }
    if (setting === "4pu") {
      return CharConstants.newLine + name + CharConstants.newLine + indentPickUpMsg + HighlightConstants.bttPickUpMsg + CharConstants.newLine;
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

class AbstractItemBuilder {
  collections = [];
  target = CharConstants.empty;

  constructor(target) {
    if (new.target === AbstractItemBuilder) {
      throw new TypeError("Cannot construct abstract AbstractItemBuilder instances directly.");
    }

    this.target = target;
  }

  upsert(array, id, value) {
    const i = array.findIndex(x => x.id === id);
    if (i > -1) array[i] = { id: id, value: value};
    else array.push({ id: id, value: value });
  }

  initCollection(id) {
    this.upsert(this.collections, id, []);
  }

  getCollectionById(id) {
    const i = this.collections.findIndex(x => x.id === id);
    if (i < 0) 
      throw new Error(`Can't find subcollection \"${id}\" in this.collections.`);
    return this.collections[i].value;
  }

  mergeCollections() {
    return this.collections.flatMap(sub => sub.value);
  }
  
  /**
   * Update all entries in this.target matching the IDs in customNames to new values.
   * @param {*} customNames An array of { id: x, value: y } objects
   */
  applyCustomNames() {
    let customNames = this.mergeCollections();
    if (customNames.length == 0) {
      throw new Error(`Could not find any subcollections.`);
      return;
    }
    
    let file = D2RMM.readJson(this.target); // copy existing file
    file.forEach((item) => { // overwrite provided entries with new names
      var idList = customNames.map(x => x.id)
      if (idList.includes(item[FileConstants.key])) { // todo: was item.Key, now replaced
        for (const key in item) {
          if (key !== FileConstants.id && key !== FileConstants.key) {
            item[key] = customNames.find(x => x.id == [item.Key]).value;
          }
        }
      }
    });
    D2RMM.writeJson(this.target, file); // overwrite existing file with new file
  }
}

class ItemRunesBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_ITEM_RUNES_PATH);
    
    RuneConstants.tiers.forEach(tier => {
      this.initCollection(tier.level);
    });
  }

  build() {
    if ( config.RunesHighlighting === SettingsConstants.disabled 
      || config.RunesHighlighting === "raf") {
      return;
    }

    this.customizeRunes(config.RunesHighlighting);
    this.addBigTooltips();
    this.applyCustomNames();
  }
  
  customizeRunes(setting) {
    const hasAffix               = [                       "nrs-hls",     "nrs", "hls"].includes(setting); // settings that keep the " Rune" affix
    const hasNumber              = [SettingsConstants.all, "nrs-raf", "nrs-hls", "nrs"].includes(setting); // settings that add rune numbers
    const hasSettingHighlighting = [SettingsConstants.all, "nrs-hls", "hls-raf", "hls"].includes(setting); // settings that add highlighting

    switch (setting) {
      case SettingsConstants.disabled: // should not be reached
      case "raf":                      // Remove affix
        return;
      case SettingsConstants.all:      // Add rune numbers + highlights + remove affix
      case "nrs-raf":                  // Add rune numbers + remove affix
      case "nrs-hls":                  // Add rune numbers + highlights
      case "hls-raf":                  // Add highlights + remove affix
      case "nrs":                      // Add rune numbers
      case "hls":                      // Add highlights
        this.generateRuneNames(hasAffix, hasNumber, hasSettingHighlighting);
        return;
      case SettingsConstants.custom: // [CSTM-RUN]
        // ADD YOUR CUSTOM ITEM NAMES HERE. NOTE: THIS BYPASSES BIG TOOLTIPS SETTINGS.

        // todo: is broken, correct

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
        this.runes.r32 = Helper.generateBigTooltip(config.BigTooltipRunesHigh, `${clrHighlight}${HighlightConstants.pattern2x10}${clrRune}${HighlightConstants.padding10}Cham (32)${HighlightConstants.padding10}${clrHighlight}${HighlightConstants.pattern2x10}${clrRune}`); // Cham
        // this.runes.r32 = Helper.generateBigTooltip(`${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}`); // Cham
        // this.runes.r33 = `${clrHighlight}${highlight3}${clrRune}     Zod (33)     ${clrHighlight}${highlight3}${clrRune}`;  // Zod
        // this.runes.r33 = `${RuneConstants.clrHighlight}${HighlightConstants.pattern10}${HighlightConstants.padding5}${RuneConstants.clrName}Zod (33)${HighlightConstants.padding5}${RuneConstants.clrHighlight}${HighlightConstants.pattern10}${RuneConstants.clrName}`;  // Zod
        this.runes.r33 = Helper.generateDoubleHighlight(clrHighlight, HighlightConstants.pattern10, HighlightConstants.padding5, clrRune, "Zod Rune (33)"); // Zod
        return;
    }
  }

  generateRuneNames(hasAffix, hasNumber, hasSettingHighlighting) {
    RuneConstants.tiers.forEach((tier) => {
      let tierCollection = this.getCollectionById(tier.level);

      tier.runes.forEach((rune) => {
        let itemCode = rune.number < 10 ? `r0${rune.number}` : `r${rune.number}`;
        let runeName = !tier.isVisible ? SettingsConstants.hidden : this.generateRuneName(rune.name, rune.number, tier.level, tier.pattern, tier.padding, hasAffix, hasNumber, hasSettingHighlighting);
        this.upsert(tierCollection, itemCode, runeName); // chuck generated code/name combination into this.collections => [current tier] => [current rune]
      });
    });
  }

  generateRuneName(name, number, tier, highlightPattern, padding, hasAffix, hasNumber, hasSettingHighlighting) {
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
  }

  addBigTooltips() {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }
    
    RuneConstants.tiers.forEach(tier => {
      let tierCollection = this.getCollectionById(tier.level);
      Helper.addBigTooltips(tierCollection, tier.bigTooltipSetting);
    });
  }
};

class ItemNameAffixesBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);

    [
      CollectionConstants.gold,
      CollectionConstants.supInf,
      CollectionConstants.gems,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if ( config.GoldAmount               === SettingsConstants.disabled 
      && config.GoldSuffix               === SettingsConstants.disabled 
      && config.Gems                     === SettingsConstants.disabled 
      && config.ShortSupInferiorPrefixes === SettingsConstants.disabled) {
      return;
    }

    this.customizeGold(config.GoldAmount, config.GoldSuffix);
    this.shortenSupInferiorPrefixes(config.ShortSupInferiorPrefixes);
    this.customizeGems(config.Gems);
    this.addBigTooltips(config.BigTooltipGems);
    this.applyCustomNames();
  }

  customizeGold(settingAmount, settingAffix) {
    let goldCol = this.getCollectionById(CollectionConstants.gold);
    let color = settingAmount === "wg" ? ColorConstants.gold : settingAmount === "gw" ? ColorConstants.white : ColorConstants.none;
    let gld = "gld";

    switch (settingAffix) {
      case SettingsConstants.disabled: // Gold displays as "1234 Gold".
        if (color !== ColorConstants.none) {
          this.upsert(goldCol, gld, `${color}Gold`); 
        }
        return;
      case "g": // Gold displays as "1234 G".
        this.upsert(goldCol, gld, `${color}G`);
        return;
      case "hide": // Gold displays as "1234".
        this.upsert(goldCol, gld, SettingsConstants.hidden);
        return;
      case SettingsConstants.custom: // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(goldCol, gld, `${ColorConstants.purple}Gold`);
        return;
    }
  }
  
  shortenSupInferiorPrefixes(setting) {
    let supInfCol = this.getCollectionById(CollectionConstants.supInf);
    var color = (setting === "color") ? ColorConstants.gray : ColorConstants.none;
    var superior = `${CharConstants.plus}`;
    var inferior = `${color}${CharConstants.minus}`;

    let hiq = "Hiquality";
    let dam = "Damaged";
    let cra = "Cracked";
    let low = "Low Quality";
    let crd = "Crude";

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "short": // Enable
      case "color":   // Enable, gray Inferior items
        this.upsert(supInfCol, hiq, superior);
        this.upsert(supInfCol, dam, inferior);
        this.upsert(supInfCol, cra, inferior);
        this.upsert(supInfCol, low, inferior);
        this.upsert(supInfCol, crd, inferior);
        return;
      case SettingsConstants.custom: // [CSTM-SPIF]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(supInfCol, hiq, `Superior`);
        this.upsert(supInfCol, dam, `Damaged`);
        this.upsert(supInfCol, cra, `Cracked`);
        this.upsert(supInfCol, low, `Low Quality`);
        this.upsert(supInfCol, crd, `Crude`);
        return;
    }
  }

  customizeGems(setting) {
    let gemsCol = this.getCollectionById(CollectionConstants.gems);

    let gems = [
      { id: "gsw", color: JewelryConstants.clrDiamond,  name: JewelryConstants.diamond  }, // Diamond
      { id: "gsg", color: JewelryConstants.clrEmerald,  name: JewelryConstants.emerald  }, // Emerald
      { id: "gsr", color: JewelryConstants.clrRuby,     name: JewelryConstants.ruby     }, // Ruby
      { id: "gsb", color: JewelryConstants.clrSapphire, name: JewelryConstants.sapphire }, // Sapphire
    ];
    // These gem names also function as affixes, which is why they are located in the item-nameaffixes.json file.
    // Enabling filtering for these gems could also change for example the Ruby-part in a "Ruby Jewel of Fervor".

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(gemsCol, gems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(gemsCol, gems);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(gemsCol, gems);
        return;
      case SettingsConstants.custom: // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(gemsCol, gsw, `Diamond`);
        this.upsert(gemsCol, gsg, `Emerald`);
        this.upsert(gemsCol, gsr, `Ruby`);
        this.upsert(gemsCol, gsb, `Sapphire`);
        return;
    }
  }

  hideGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, SettingsConstants.hidden);
    });
  }

  highlightGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, Helper.generateSingleHighlight(gem.color, JewelryConstants.highlight, JewelryConstants.padding, JewelryConstants.clrName, gem.name));
    });
  }

  addBigTooltips(settingGems) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }
    
    if (settingGems !== SettingsConstants.disabled) {
      let gemsCol = this.getCollectionById(CollectionConstants.gems);
      Helper.addBigTooltips(gemsCol, settingGems);
    }
  }
};

class ItemNamesBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);

    [
      CollectionConstants.junk,
      CollectionConstants.jewels,
      CollectionConstants.charms,
      CollectionConstants.gems,
      CollectionConstants.quest,
      CollectionConstants.endgame,
      CollectionConstants.customFilterList,
    ].forEach(id => {
      this.initCollection(id);
    });
  }
  
  build() {
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
    this.customizeCustomFilterList(config.shouldUseCustomFilterList);

    this.addBigTooltips(config.BigTooltipGems, config.BigTooltipFacets, config.BigTooltipUniqueCharms, config.BigTooltipQuestItems, 
      config.BigTooltipEssences, config.BigTooltipTokens, config.BigTooltipKeys, config.BigTooltipOrgans, config.BigTooltipStandardOfHeroes);

    this.applyCustomNames();
  }
  

  //==========//
  //   Junk   //
  //==========//
  customizeHealingPotions(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrHeal = ColorConstants.red;
    const clrMana = ColorConstants.blue;
    const clrRej = ColorConstants.purple;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.plus;
    const padding = HighlightConstants.paddingNone;

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightLv123Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv4Potions(  junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(  junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs( junkCol, clrRej,  clrName, pattern, padding);
        this.highlightFullRejuvs(  junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions(  junkCol);
        this.highlightLv4Potions( junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions( junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej,  clrName, pattern, padding);
        this.highlightFullRejuvs( junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions(  junkCol);
        this.highlightLv5Potions( junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej,  clrName, pattern, padding);
        this.highlightFullRejuvs( junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions( junkCol);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions( junkCol);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions(  junkCol);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs( junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions( junkCol);
        this.highlightFullRejuvs(junkCol, clrRej,  clrName, pattern, padding);
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions(junkCol);
        return;
      case SettingsConstants.custom: // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "hp1", `${clrHeal}+${clrName}HP1`); // Minor Healing Potion
        this.upsert(junkCol, "hp2", `${clrHeal}+${clrName}HP2`); // Light Healing Potion
        this.upsert(junkCol, "hp3", `${clrHeal}+${clrName}HP3`); // Healing Potion
        this.upsert(junkCol, "hp4", `${clrHeal}+${clrName}HP4`); // Greater Healing Potion
        this.upsert(junkCol, "hp5", `${clrHeal}+${clrName}HP5`); // Super Healing Potion
        
        this.upsert(junkCol, "mp1", `${clrMana}+${clrName}MP1`); // Minor Mana Potion
        this.upsert(junkCol, "mp2", `${clrMana}+${clrName}MP2`); // Light Mana Potion
        this.upsert(junkCol, "mp3", `${clrMana}+${clrName}MP3`); // Mana Potion
        this.upsert(junkCol, "mp4", `${clrMana}+${clrName}MP4`); // Greater Mana Potion
        this.upsert(junkCol, "mp5", `${clrMana}+${clrName}MP5`); // Super Mana Potion
        
        this.upsert(junkCol, "rvs", `${clrRej}+${clrName}RPS`);  // Rejuvenation Potion
        this.upsert(junkCol, "rvl", `${clrRej}+${clrName}RPF`);  // Full Rejuvenation Potion
        return;
    }
  }

  hideHealingPotions(potionsCollection) {
    [
      "hp1", "hp2", "hp3", "hp4", "hp5",
      "mp1", "mp2", "mp3", "mp4", "mp5",
      "rvs", "rvl",
    ].forEach(pot => {
      this.upsert(potionsCollection, pot, SettingsConstants.hidden);
    });
  }

  highlightLv123Potions(potionsCollection, clrHeal, clrMana, clrName, pattern, padding) {
    [
      { id: "hp1", name: "HP1", clr: clrHeal },
      { id: "hp2", name: "HP2", clr: clrHeal },
      { id: "hp3", name: "HP3", clr: clrHeal },
      { id: "mp1", name: "MP1", clr: clrMana },
      { id: "mp2", name: "MP2", clr: clrMana },
      { id: "mp3", name: "MP3", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

  highlightLv4Potions(potionsCollection, clrHeal, clrMana, clrName, pattern, padding) {
    [
      { id: "hp4", name: "HP4", clr: clrHeal },
      { id: "mp4", name: "MP4", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

  highlightLv5Potions(potionsCollection, clrHeal, clrMana, clrName, pattern, padding) {
    [
      { id: "hp5", name: "HP5", clr: clrHeal },
      { id: "mp5", name: "MP5", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

  highlightSmallRejuvs(potionsCollection, clrRej, clrName, pattern, padding) {
    this.upsert(potionsCollection, "rvs", Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPS"));
  }

  highlightFullRejuvs(potionsCollection, clrRej, clrName, pattern, padding) {
    this.upsert(potionsCollection, "rvl", Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPF"));
  }

  customizeBuffPotions(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    let pots = [
      { id: "yps", name: "Antidote" }, // Antidote Potion
      { id: "wms", name: "Thawing"  }, // Thawing Potion
      { id: "vps", name: "Stamina"  }, // Stamina Potion
    ];

    const clrHighlight = ColorConstants.green;
    const clrName      = ColorConstants.white;
    const pattern      = CharConstants.plus;
    const padding      = HighlightConstants.paddingNone;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, pot.name));
        });
        return;
      case "hide": // hide all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, SettingsConstants.hidden);
        });
        return;
      case SettingsConstants.custom: // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "yps", "Antidote Potion");
        this.upsert(junkCol, "wms", "Thawing Potion");
        this.upsert(junkCol, "vps", "Stamina Potion");
        return;
    }
  }

  customizeThrowingPotions(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrGas = ColorConstants.darkGreen;
    const clrOil = ColorConstants.orange;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.o;
    const padding = HighlightConstants.padding1;

    let pots = [
      { id: "gpl", name: "Gas 1", clr: clrGas }, // Strangling Gas Potion
      { id: "gpm", name: "Gas 2", clr: clrGas }, // Choking Gas Potion
      { id: "gps", name: "Gas 3", clr: clrGas }, // Rancid Gas Potion
      { id: "opl", name: "Oil 1", clr: clrOil }, // Fulminating Potion
      { id: "opm", name: "Oil 2", clr: clrOil }, // Exploding Potion
      { id: "ops", name: "Oil 3", clr: clrOil }, // Oil Potion
    ];

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
        });
        return;
      case "hide": // hide all
        pots.forEach(pot => {
          this.upsert(junkCol, pot.id, SettingsConstants.hidden);
        });
        return;
      case SettingsConstants.custom: // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "gpl", "Strangling Gas Potion");
        this.upsert(junkCol, "gpm", "Choking Gas Potion");
        this.upsert(junkCol, "gps", "Rancid Gas Potion");
        this.upsert(junkCol, "opl", "Fulminating Potion");
        this.upsert(junkCol, "opm", "Exploding Potion");
        this.upsert(junkCol, "ops", "Oil Potion");
        return;
    }
  }

  customizeScrollsAndTomes(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrScroll = ColorConstants.green;
    const clrTome   = ColorConstants.darkGreen;
    const clrName   = ColorConstants.white;
    const pattern   = CharConstants.plus;
    const padding   = HighlightConstants.paddingNone;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.highlightScrolls(junkCol, clrScroll, clrName, pattern, padding);
        this.highlightTomes(  junkCol, clrTome,   clrName, pattern, padding);
        return;
      case "hide": // hide scrolls, show books
        this.highlightTomes(junkCol, clrTome, clrName, pattern, padding);
        this.hideScrolls(junkCol);
        return;
      case SettingsConstants.custom: // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "tsc", "Scroll of Town Portal");
        this.upsert(junkCol, "isc", "Scroll of Identify");
        this.upsert(junkCol, "tbk", "Tome of Town Portal");
        this.upsert(junkCol, "ibk", "Tome of Identify");
        return;
    }
  }

  hideScrolls(paperCollection) {
    this.upsert(paperCollection, "tsc", SettingsConstants.hidden); // Scroll of Town Portal
    this.upsert(paperCollection, "isc", SettingsConstants.hidden); // Scroll of Identify
  }

  highlightScrolls(paperCollection, clrHighlight, clrName, pattern, padding) {
    this.upsert(paperCollection, "tsc", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP")); // Scroll of Town Portal
    this.upsert(paperCollection, "isc", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID")); // Scroll of Identify
  }

  highlightTomes(paperCollection, clrHighlight, clrName, pattern, padding) {
    this.upsert(paperCollection, "tbk", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "TP Tome")); // Tome of Town Portal
    this.upsert(paperCollection, "ibk", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "ID Tome")); // Tome of Identify
  }

  customizeArrowsAndBolts(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrHighlight = ColorConstants.gray;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.o;
    const padding = HighlightConstants.padding1;

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.upsert(junkCol, "aqv", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Arrows"));
        this.upsert(junkCol, "cqv", Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Bolts"));
        return;
      case "hide":
        this.upsert(junkCol, "aqv", SettingsConstants.hidden); // Arrow Quiver
        this.upsert(junkCol, "cqv", SettingsConstants.hidden); // Crossbow Bolt Quiver
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "aqv", "Arrows");
        this.upsert(junkCol, "cqv", "Bolts");
        return;
    }
  }

  customizeKeys(setting) {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "hide":
        this.upsert(junkCol, "key", SettingsConstants.hidden);
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "key", "Key");
        return;
    }
  }
  

  //==========//
  //   Gems   //
  //==========//
  customizeGems(setting) {
    let gemsCol = this.getCollectionById(CollectionConstants.gems);

    let chippedFlawedRegular = [
      { id: "gcv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.chipped  }, // Chipped Amethyst
      { id: "gcw", color: JewelryConstants.clrDiamond,  name: JewelryConstants.chipped  }, // Chipped Diamond
      { id: "gcg", color: JewelryConstants.clrEmerald,  name: JewelryConstants.chipped  }, // Chipped Emerald
      { id: "gcr", color: JewelryConstants.clrRuby,     name: JewelryConstants.chipped  }, // Chipped Ruby
      { id: "gcb", color: JewelryConstants.clrSapphire, name: JewelryConstants.chipped  }, // Chipped Sapphire
      { id: "gcy", color: JewelryConstants.clrTopaz,    name: JewelryConstants.chipped  }, // Chipped Topaz
      { id: "skc", color: JewelryConstants.clrSkull,    name: JewelryConstants.chipped  }, // Chipped Skull
      { id: "gfv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.flawed   }, // Flawed Amethyst
      { id: "gfw", color: JewelryConstants.clrDiamond,  name: JewelryConstants.flawed   }, // Flawed Diamond
      { id: "gfg", color: JewelryConstants.clrEmerald,  name: JewelryConstants.flawed   }, // Flawed Emerald
      { id: "gfr", color: JewelryConstants.clrRuby,     name: JewelryConstants.flawed   }, // Flawed Ruby
      { id: "gfb", color: JewelryConstants.clrSapphire, name: JewelryConstants.flawed   }, // Flawed Sapphire
      { id: "gfy", color: JewelryConstants.clrTopaz,    name: JewelryConstants.flawed   }, // Flawed Topaz
      { id: "skf", color: JewelryConstants.clrSkull,    name: JewelryConstants.flawed   }, // Flawed Skull
      { id: "gsv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.amethyst }, // Amethyst
      // For Ruby, Sapphire, Emerald and Diamond, see the "ItemNameAffixesBuilder" section.
      // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
      { id: "gsy", color: JewelryConstants.clrTopaz,    name: JewelryConstants.topaz    }, // Topaz
      { id: "sku", color: JewelryConstants.clrSkull,    name: JewelryConstants.skull    }, // Skull
    ];
    let flawless = [
      { id: "gzv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.flawless }, // Flawless Amethyst
      { id: "glw", color: JewelryConstants.clrDiamond,  name: JewelryConstants.flawless }, // Flawless Diamond
      { id: "glg", color: JewelryConstants.clrEmerald,  name: JewelryConstants.flawless }, // Flawless Emerald
      { id: "glr", color: JewelryConstants.clrRuby,     name: JewelryConstants.flawless }, // Flawless Ruby
      { id: "glb", color: JewelryConstants.clrSapphire, name: JewelryConstants.flawless }, // Flawless Sapphire
      { id: "gly", color: JewelryConstants.clrTopaz,    name: JewelryConstants.flawless }, // Flawless Topaz
      { id: "skl", color: JewelryConstants.clrSkull,    name: JewelryConstants.flawless }, // Flawless Skull
    ];
    let perfect = [
      { id: "gpv", color: JewelryConstants.clrAmethyst, name: JewelryConstants.perfect }, // Perfect Amethyst
      { id: "gpw", color: JewelryConstants.clrDiamond,  name: JewelryConstants.perfect }, // Perfect Diamond
      { id: "gpg", color: JewelryConstants.clrEmerald,  name: JewelryConstants.perfect }, // Perfect Emerald
      { id: "gpr", color: JewelryConstants.clrRuby,     name: JewelryConstants.perfect }, // Perfect Ruby
      { id: "gpb", color: JewelryConstants.clrSapphire, name: JewelryConstants.perfect }, // Perfect Sapphire
      { id: "gpy", color: JewelryConstants.clrTopaz,    name: JewelryConstants.perfect }, // Perfect Topaz
      { id: "skz", color: JewelryConstants.clrSkull,    name: JewelryConstants.perfect }, // Perfect Skull
    ];

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(gemsCol, chippedFlawedRegular);
        this.highlightGems(gemsCol, flawless);
        this.highlightGems(gemsCol, perfect);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(     gemsCol, chippedFlawedRegular);
        this.highlightGems(gemsCol, flawless);
        this.highlightGems(gemsCol, perfect);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(     gemsCol, chippedFlawedRegular);
        this.hideGems(     gemsCol, flawless);
        this.highlightGems(gemsCol, perfect);
        return;
      case "hide": // hide chipped/flawed/regular/flawless gems
        this.hideGems(gemsCol, chippedFlawedRegular);
        this.hideGems(gemsCol, flawless);
        this.hideGems(gemsCol, perfect);
        return;
      case SettingsConstants.custom: // [CSTM-GEM1]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        // chipped
        this.upsert(gemsCollection, "gcv", `Chipped Amethyst`);
        this.upsert(gemsCollection, "gcw", `Chipped Diamond`);
        this.upsert(gemsCollection, "gcg", `Chipped Emerald`);
        this.upsert(gemsCollection, "gcr", `Chipped Ruby`);
        this.upsert(gemsCollection, "gcb", `Chipped Sapphire`);
        this.upsert(gemsCollection, "gcy", `Chipped Topaz`);
        this.upsert(gemsCollection, "skc", `Chipped Skull`);
        // flawed
        this.upsert(gemsCollection, "gfv", `Flawed Amethyst`);
        this.upsert(gemsCollection, "gfw", `Flawed Diamond`);
        this.upsert(gemsCollection, "gfg", `Flawed Emerald`);
        this.upsert(gemsCollection, "gfr", `Flawed Ruby`);
        this.upsert(gemsCollection, "gfb", `Flawed Sapphire`);
        this.upsert(gemsCollection, "gfy", `Flawed Topaz`);
        this.upsert(gemsCollection, "skf", `Flawed Skull`);
        // regular
        this.upsert(gemsCollection, "gsv", `Amethyst`);
        // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section above.
        // For some reason, the devs put these gems in another JSON file because they're also the names of some affixes.
        this.upsert(gemsCollection, "gsy", `Topaz`);
        this.upsert(gemsCollection, "sku", `Skull`);
        // flawless
        this.upsert(gemsCollection, "gzv", `Flawless Amethyst`);
        this.upsert(gemsCollection, "glw", `Flawless Diamond`);
        this.upsert(gemsCollection, "glg", `Flawless Emerald`);
        this.upsert(gemsCollection, "glr", `Flawless Ruby`);
        this.upsert(gemsCollection, "glb", `Flawless Sapphire`);
        this.upsert(gemsCollection, "gly", `Flawless Topaz`);
        this.upsert(gemsCollection, "skl", `Flawless Skull`);
        //perfect
        this.upsert(gemsCollection, "gpv", `Perfect Amethyst`);
        this.upsert(gemsCollection, "gpw", `Perfect Diamond`);
        this.upsert(gemsCollection, "gpg", `Perfect Emerald`);
        this.upsert(gemsCollection, "gpr", `Perfect Ruby`);
        this.upsert(gemsCollection, "gpb", `Perfect Sapphire`);
        this.upsert(gemsCollection, "gpy", `Perfect Topaz`);
        this.upsert(gemsCollection, "skz", `Perfect Skull`);
        return;
    }
  }

  hideGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, SettingsConstants.hidden);
    });
  }

  highlightGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, Helper.generateSingleHighlight(gem.color, JewelryConstants.highlight, JewelryConstants.padding, JewelryConstants.clrName, gem.name));
    });
  }
  

  //=============//
  //   Jewelry   //
  //=============//
  customizeJewels(setting) {
    let jewelsCol = this.getCollectionById(CollectionConstants.jewels);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "facet":
      case "facet-rb":
        this.upsert(jewelsCol, JewelryConstants.facet, `${SettingsConstants.iLvlIndentFixFacets}${JewelryConstants.facetPrefix}${JewelryConstants.facet}${JewelryConstants.facetSuffix}`);
        return;
      case SettingsConstants.custom: // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(jewelsCol, JewelryConstants.jewel, `${ColorConstants.red}Jewel${ColorConstants.blue}`); // includes (unidentified) magic, rare and unique jewels
        this.upsert(jewelsCol, JewelryConstants.facet, `Rainbow Facet`); // identified facets
        return;
    }
  }
  
  customizeCharms(setting) {
    let charmsCol = this.getCollectionById(CollectionConstants.charms);

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.highlightUnidentifiedCharms(charmsCol);
      	this.highlightUniqueCharms(charmsCol);
        this.highlightSunderCharms(charmsCol);
        return;
      case "uniq":
      	this.highlightUniqueCharms(charmsCol);
        this.highlightSunderCharms(charmsCol);
        return;
      case "unid":
        this.highlightUnidentifiedCharms(charmsCol);
        return;
      case SettingsConstants.custom: // [CSTM-CHA]
        this.upsert(charmsCol, JewelryConstants.charmSmall,  `Small Charm`         );
        this.upsert(charmsCol, JewelryConstants.charmLarge,  `Large Charm`         );
        this.upsert(charmsCol, JewelryConstants.charmGrand,  `Grand Charm`         );
        this.upsert(charmsCol, JewelryConstants.anni,        `Annihilus`           );
        this.upsert(charmsCol, JewelryConstants.torch,       `Hellfire Torch`      );
        this.upsert(charmsCol, JewelryConstants.gheeds,      `Gheed's Fortune`     );
        this.upsert(charmsCol, JewelryConstants.sunderMagic, `Black Cleft`         );
        this.upsert(charmsCol, JewelryConstants.sunderPhys,  `Bone Break`          );
        this.upsert(charmsCol, JewelryConstants.sunderCold,  `Cold Rupture`        );
        this.upsert(charmsCol, JewelryConstants.sunderLite,  `Crack of the Heavens`);
        this.upsert(charmsCol, JewelryConstants.sunderFire,  `Flame Rift`          );
        this.upsert(charmsCol, JewelryConstants.sunderPsn,   `Rotting Fissure`     );
        return;
    }
  }

  highlightUnidentifiedCharms(charmsCollection) {
    let suffix = "Charm";
    this.upsert(charmsCollection, JewelryConstants.charmSmall, `Small ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.upsert(charmsCollection, JewelryConstants.charmLarge, `Large ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.upsert(charmsCollection, JewelryConstants.charmGrand, `Grand ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
  }

  highlightUniqueCharms(charmsCollection){
    [ JewelryConstants.anni, JewelryConstants.torch, JewelryConstants.gheeds ].forEach(charm => {
      this.upsert(charmsCollection, charm, `${SettingsConstants.iLvlIndentFixCharms}${JewelryConstants.charmsUniquePrefix}${charm}${JewelryConstants.charmsUniqueSuffix}`);
    });
  }

  highlightSunderCharms(charmsCollection){    
    if (config.IsSunderAltPattern) {
      JewelryConstants.sunderCharms.forEach(charm => {
        this.upsert(charmsCollection, charm.name, SettingsConstants.iLvlIndentFixCharms + Helper.generateDoubleHighlight(charm.color, HighlightConstants.uniquePattern, HighlightConstants.uniquePadding , HighlightConstants.uniqueColorName, charm.name));
      });
    }
    else {
      JewelryConstants.sunderCharms.forEach(charm => {
        this.upsert(charmsCollection, charm.name, `${SettingsConstants.iLvlIndentFixCharms}${JewelryConstants.charmsUniquePrefix}${charm.name}${JewelryConstants.charmsUniqueSuffix}`);
      });
    } 
  }

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    let questCol = this.getCollectionById(CollectionConstants.quest);

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightQuestItems(questCol, prefix, suffix);
        this.highlightCube(      questCol, prefix, suffix);
        return;
      case "xhc": // exclude cube
        this.highlightQuestItems(questCol, prefix, suffix);
        return;
      case SettingsConstants.custom: // [CSTM-QST1]
        // todo: refactor

        // Act 1
        this.upsert(questCol, "leg", `Wirt's Leg`          ); // Wirt's Leg
        this.upsert(questCol, "hdm", `Horadric Malus`      ); // Horadric Malus
        this.upsert(questCol, "bks", `Scroll of Inifuss`   ); // Scroll of Inifuss
        this.upsert(questCol, "bkd", `Scroll of Inifuss`   ); // Scroll of Inifuss (deciphered)
        // Act 2
        this.upsert(questCol, "tr1", `Horadric Scroll`     ); // Horadric Scroll
        this.upsert(questCol, "box", `Horadric Cube`       ); // Horadric Cube
        this.upsert(questCol, "msf", `Staff of Kings`      ); // Staff of Kings
        this.upsert(questCol, "vip", `Amulet of the Viper` ); // Amulet of the Viper
        this.upsert(questCol, "hst", `Horadric Staff`      ); // Horadric Staff
        // Act 3
        this.upsert(questCol, "j34", `A Jade Figurine`     ); // A Jade Figurine
        this.upsert(questCol, "g34", `The Golden Bird`     ); // The Golden Bird
        this.upsert(questCol, "bbb", `Lam Esen's Tome`     ); // Lam Esen's Tome
        this.upsert(questCol, "g33", `The Gidbinn`         ); // The Gidbinn
        this.upsert(questCol, "qf1", `Khalim's Flail`      ); // Khalim's Flail
        this.upsert(questCol, "qf2", `Khalim's Will`       ); // Khalim's Will
        this.upsert(questCol, "qey", `Khalim's Eye`        ); // Khalim's Eye
        this.upsert(questCol, "qhr", `Khalim's Heart`      ); // Khalim's Heart
        this.upsert(questCol, "qbr", `Khalim's Brain`      ); // Khalim's Brain
        this.upsert(questCol, "mss", `Mephisto's Soulstone`); // Mephisto's Soulstone
        // Act 4
        this.upsert(questCol, "hfh", `Hell Forge Hammer`   ); // Hell Forge Hammer
        // Act 5
        // See exceptions [CSTM-QST2]

        // Extra
        this.upsert(questCol, "Staff of Kings",      `Staff of Kings`     ); // Staff of Kings
        this.upsert(questCol, "Amulet of the Viper", `Amulet of the Viper`); // Amulet of the Viper
        this.upsert(questCol, "Horadric Staff",      `Horadric Staff`     ); // Horadric Staff
        this.upsert(questCol, "LamTome",             `Lam Esen's Tome`    ); // Lam Esen's Tome
        this.upsert(questCol, "KhalimFlail",         `Khalim's Flail`     ); // Khalim's Flail
        this.upsert(questCol, "SuperKhalimFlail",    `Khalim's Will`      ); // Khalim's Will
        this.upsert(questCol, "Hell Forge Hammer",   `Hell Forge Hammer`  ); // Hell Forge Hammer
        return;
    }
  }

  highlightQuestItems(questCollection, prefix, suffix) {
    // for Book of Skill and Potion of Life, see [CSTM-QST2]
    let indentNone   = CharConstants.empty;
    let indentSingle = SettingsConstants.iLvlIndentFixQuestSingle;
    let indentDouble = SettingsConstants.iLvlIndentFixQuestDouble;

    let questItems = [
      // Act 1
      { id: "leg", name: "Wirt's Leg",           iLvlIndent: indentDouble },
      { id: "hdm", name: "Horadric Malus",       iLvlIndent: indentDouble },
      { id: "bks", name: "Scroll of Inifuss",    iLvlIndent: indentNone   },
      { id: "bkd", name: "Scroll of Inifuss",    iLvlIndent: indentNone   },

      // Act 2
      { id: "tr1", name: "Horadric Scroll",      iLvlIndent: indentNone   },
      { id: "msf", name: "Staff of Kings",       iLvlIndent: indentDouble },
      { id: "vip", name: "Amulet of the Viper",  iLvlIndent: indentNone   },
      { id: "hst", name: "Horadric Staff",       iLvlIndent: indentSingle },

      // Act 3
      { id: "j34", name: "A Jade Figurine",      iLvlIndent: indentNone   },
      { id: "g34", name: "The Golden Bird",      iLvlIndent: indentNone   },
      { id: "bbb", name: "Lam Esen's Tome",      iLvlIndent: indentNone   },
      { id: "g33", name: "The Gidbinn",          iLvlIndent: indentDouble },
      { id: "qf1", name: "Khalim's Flail",       iLvlIndent: indentDouble },
      { id: "qf2", name: "Khalim's Will",        iLvlIndent: indentSingle },
      { id: "qey", name: "Khalim's Eye",         iLvlIndent: indentNone   },
      { id: "qhr", name: "Khalim's Heart",       iLvlIndent: indentNone   },
      { id: "qbr", name: "Khalim's Brain",       iLvlIndent: indentNone   },
      { id: "mss", name: "Mephisto's Soulstone", iLvlIndent: indentNone   },

      // Act 4
      { id: "hfh", name: "Hell Forge Hammer",    iLvlIndent: indentDouble },

      // Act 5
      // See exceptions [CSTM-QST2]

      // Extra
      { id: "Staff of Kings",      name: "Staff of Kings",      iLvlIndent: indentDouble },
      { id: "Amulet of the Viper", name: "Amulet of the Viper", iLvlIndent: indentNone   },
      { id: "Horadric Staff",      name: "Horadric Staff",      iLvlIndent: indentSingle },
      { id: "LamTome",             name: "Lam Esen's Tome",     iLvlIndent: indentNone   },
      { id: "KhalimFlail",         name: "Khalim's Flail",      iLvlIndent: indentDouble },
      { id: "SuperKhalimFlail",    name: "Khalim's Will",       iLvlIndent: indentSingle },
      { id: "Hell Forge Hammer",   name: "Hell Forge Hammer",   iLvlIndent: indentDouble },
    ];

    questItems.forEach(item => {
      let indent = SettingsConstants.shouldExcludeIlvlForBigTooltips ? CharConstants.empty : item.iLvlIndent;
      this.upsert(questCollection, item.id, `${indent}${prefix}${item.name}${suffix}`);
    });
  }

  highlightCube(questCollection, prefix, suffix) {
    this.upsert(questCollection, "box", `${prefix}Horadric Cube${suffix}`); // Horadric Cube
  }
    
  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(setting){
    let endgameCol = this.getCollectionById(CollectionConstants.endgame);

    switch(setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightEndgameItems(endgameCol);
        this.highlightStandardOfHeroes(endgameCol);
        return;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems(endgameCol);
        return;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems(endgameCol);
        this.hideStandardOfHeroes(endgameCol);
        return;
      case SettingsConstants.custom: // [CSTM-END]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(endgameCol, "tes", `Twisted Essence of Suffering`);
        this.upsert(endgameCol, "ceh", `Charged Essense of Hatred`);
        this.upsert(endgameCol, "bet", `Burning Essence of Terror`);
        this.upsert(endgameCol, "fed", `Festering Essence of Destruction`);
        this.upsert(endgameCol, "toa", `Token of Absolution`);
        this.upsert(endgameCol, "pk1", `Key of Terror`);
        this.upsert(endgameCol, "pk2", `Key of Hate`);
        this.upsert(endgameCol, "pk3", `Key of Destruction`);
        this.upsert(endgameCol, "dhn", `Diablo's Horn`);
        this.upsert(endgameCol, "bey", `Baal's Eye`);
        this.upsert(endgameCol, "mbr", `Mephisto's Brain`);
        this.upsert(endgameCol, "std", `Standard of Heroes`);
        return;
    }
  }

  highlightEndgameItems(endgameCollection) {
    let endgameItems = [].concat(EndgameConstants.essences, EndgameConstants.keys, EndgameConstants.organs);
    endgameItems.push(EndgameConstants.token);

    endgameItems.forEach(item => {
      this.upsert(endgameCollection, item.id, `${item.prefix}${item.name}${item.suffix}`);
    });
  }

  highlightStandardOfHeroes(endgameCollection) {
    this.upsert(endgameCollection, EndgameConstants.standard.id, `${EndgameConstants.standard.prefix}${EndgameConstants.standard.name}${EndgameConstants.standard.suffix}`);
  }

  hideStandardOfHeroes() {
    this.upsert(endgameCollection, EndgameConstants.standard.id, SettingsConstants.hidden);
  }


  //========================//
  //   Custom Filter List   //
  //========================//
  customizeCustomFilterList(shouldUseCustomFilterList) {
    let cflCol = this.getCollectionById(CollectionConstants.customFilterList);
    // This list changes entries in item-names.json, so it supports all base items (amulet, berserker axe), sets (Tal Rasha's Guardianship, Angelic Halo) and uniques (Griffon's Eye, The Stone of Jordan). 
    // Search the file for what key to use.

    const PFL_CLR_NAME    = ColorConstants.purple;
    const PFL_CLR_PATTERN = ColorConstants.red;
    const PFL_PATTERN     = HighlightConstants.pattern10;
    const PFL_PADDING     = HighlightConstants.padding5;

    if (shouldUseCustomFilterList) { // [CSTM-CFL]
      // ADD YOUR CUSTOM ITEM NAMES HERE
      
      // examples

      // this.upsert(cflCol,           "jav", "");                                                          // Javelin, hide
      // this.upsert(cflCol,           "jav", SettingsConstants.hidden);                                    // Javelin, hide
      // this.upsert(cflCol,           "jav", `${ColorConstants.black}Javelin`);                            // Javelin, color name black
      // this.upsert(cflCol,           "7gw", `${ColorConstants.red}Unearthed Wand${ColorConstants.blue}`); // Unearthed Wand, color name red
      // this.upsert(cflCol,           "7gw", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Unearthed Wand")}${ColorConstants.blue}`); // Unearthed Wand, highlight
      // this.upsert(cflCol,   "Death's Web", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Death's Web"                         )}`); // Unearthed Wand, highlight

      // this.upsert(cflCol,           "skp", "");                                                  // Skull Cap, hide
      // this.upsert(cflCol,           "skp", SettingsConstants.hidden);                            // Skull Cap, hide
      // this.upsert(cflCol,           "skp", `${ColorConstants.black}Skull Cap`);                  // Skull Cap, color name black
      // this.upsert(cflCol,           "ci3", `${ColorConstants.red}Diadem${ColorConstants.blue}`); // Diadem, color name red
      // this.upsert(cflCol,           "ci3", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Diadem")}${ColorConstants.blue}`); // Diadem, highlight
      // this.upsert(cflCol, "Griffon's Eye", `${SettingsConstants.iLvlIndentFixDouble}${Helper.generateDoubleHighlight(PFL_CLR_PATTERN, PFL_PATTERN, PFL_PADDING, PFL_CLR_NAME, "Griffon's Eye"               )}`); // Griffon's Eye, highlight
    }
  }


  //==================//
  //   Big Tooltips   //
  //==================//

  addBigTooltips(settingGems, settingFacets, settingUniqueCharms, settingQuest, settingEssences, settingToken, settingKeys, settingOrgans, settingStandard) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    // gems
    if (settingGems !== SettingsConstants.disabled) {
      let gemsCol = this.getCollectionById(CollectionConstants.gems);
      Helper.addBigTooltips(gemsCol, settingGems, JewelryConstants.indentPickUpMsg);
    }

    // facets
    if (settingFacets !== SettingsConstants.disabled) {
      let jewelsCol = this.getCollectionById(CollectionConstants.jewels);
      Helper.addBigTooltipForId(jewelsCol, JewelryConstants.facet, settingFacets);
    }

    // unique charms
    if (settingUniqueCharms !== SettingsConstants.disabled) {
      let charmsCol = this.getCollectionById(CollectionConstants.charms);
      let uniqueCharms = []
        .concat(JewelryConstants.uniqueLodCharms)
        .concat(JewelryConstants.sunderCharms.map(sunder => sunder.name));
      Helper.addBigTooltipsForIds(charmsCol, uniqueCharms, settingUniqueCharms);
    }

    // quest items
    if (settingQuest !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, settingQuest);
    }

    // essences
    if (settingEssences !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.essences.map(ess => ess.id), settingEssences);
    }

    // tokens of absolution
    if (settingToken !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipForId(endgameCol, EndgameConstants.token.id, settingToken);
    }

    // pandemonium keys
    if (settingKeys !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.keys.map(key => key.id), settingKeys);
    }

    // pandemonium organs
    if (settingOrgans !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.organs.map(org => org.id), settingOrgans);
    }

    // standard of heroes
    if (settingStandard !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipForId(endgameCol, EndgameConstants.standard.id, settingStandard);
    }
  }
};

class UiBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_UI_PATH);

    [
      CollectionConstants.quest,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if (config.Quest === SettingsConstants.disabled) {
      return;
    }

    this.customizeQuestItems(config.Quest);
    this.addBigTooltips(config.BigTooltipQuestItems);
    this.applyCustomNames();
  }

  //=================//
  //   Quest Items   //
  //=================//
  // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
  customizeQuestItems(setting) {
    let questCol = this.getCollectionById(CollectionConstants.quest);

    let ass = "ass";
    let xyz = "xyz";

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;
    
    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.upsert(questCol, ass, `${prefix}Book of Skill${suffix}`);  // Book of Skill
        this.upsert(questCol, xyz, `${prefix}Potion of Life${suffix}`); // Potion of Life
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(questCol, ass, `Book of Skill`);  // Book of Skill
        this.upsert(questCol, xyz, `Potion of Life`); // Potion of Life
        return;
    }
  }

  addBigTooltips(settingQuest) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    if (settingQuest !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, settingQuest);
    }
  }
};

class ItemModifiersBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_UI_PATH);
    
    [
      CollectionConstants.quest,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if (config.Quest === SettingsConstants.disabled) {
      return;
    }

    this.customizeQuestItems(config.Quest);
    this.addBigTooltips(config.BigTooltipQuestItems);
    this.applyCustomNames(FileConstants.FILE_ITEM_MODIFIERS_PATH, this.items);
  }

  //=================//
  //   Quest Items   //
  //=================//
  // Section specific to Malah's Potion and Scroll of Resistance, as these items are in a different file.
  customizeQuestItems(setting) {
    let questCol = this.getCollectionById(CollectionConstants.quest);

    let ice = "ice";
    let tr2 = "tr2";

    let prefix = HighlightConstants.questPrefix;
    let suffix = HighlightConstants.questSuffix;

    switch (setting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
      case "xhc": // exclude horadric cube
        this.upsert(questCol, ice, `${prefix}Malah's Potion${suffix}`);       // Malah's Potion
        this.upsert(questCol, tr2, `${prefix}Scroll of Resistance${suffix}`); // Scroll of Resistance
        return;
      case SettingsConstants.custom: // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(questCol, ice, `Malah's Potion`);       // Malah's Potion
        this.upsert(questCol, tr2, `Scroll of Resistance`); // Scroll of Resistance
        return;
    }
  }

  addBigTooltips(settingQuest) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    // todo
    if (settingQuest !== SettingsConstants.disabled) {
      let questCol = this.getCollectionById(CollectionConstants.quest);
      Helper.addBigTooltips(questCol, settingQuest);
    }
  }
};


//===================================================//
//   Loot Filter Builders - Non-Item Name Features   //
//===================================================//

class ItemLevelBuilder extends AbstractItemBuilder {
  constructor() {
    super(CharConstants.empty);

    [
      CollectionConstants.weapons,
      // CollectionConstants.armor,
      CollectionConstants.misc,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if ( !(config.ItemLevel === "show" || config.ItemLevel === "btt" || config.ItemLevel === "fix"  || config.ItemLevel === "fix-btt") ) {
      return;
    }

    // contrary to all other builders, these 3 collections are used for items that we do _not_ want to show their iLvl
    let weaponsCol = this.getCollectionById(CollectionConstants.weapons);
    // let armorCol   = this.getCollectionById(CollectionConstants.armor);
    let miscCol    = this.getCollectionById(CollectionConstants.misc);
    this.addExclusions(weaponsCol, miscCol);

    this.enableForWeapons(weaponsCol.map(item => item.id));
    this.enableForArmor();
    this.enableForMiscItems(miscCol.map(item => item.id));
  }

  addExclusions(weaponsCol, miscCol) {
    this.upsert(weaponsCol, "tpot", CharConstants.empty); // always exclude throwing potions

    if (!config.IsBigTooltipsEnabled || !SettingsConstants.shouldExcludeIlvlForBigTooltips) {
      return;
    }

    if (config.BigTooltipFacets !== SettingsConstants.disabled) {
      this.upsert(miscCol, JewelryConstants.jewel, CharConstants.empty);
    }

    if (config.BigTooltipUniqueCharms !== SettingsConstants.disabled) {
      JewelryConstants.charms.forEach(charm => {
        this.upsert(miscCol, charm, CharConstants.empty);
      });
    }
    
    if (config.BigTooltipQuestItems !== SettingsConstants.disabled) {
      // this.upsert(miscCol, "vip", CharConstants.empty); // amulet of the viper // todo: check if this has ilvl and correct here + in quest item naming
      [
        "leg", // Wirt's Leg
        "hdm", // Horadric Malus
        "msf", // Staff of Kings
        "hst", // Horadric Staff
        "g33", // The Gidbinn
        "qf1", // Khalim's Flail
        "qf2", // Khalim's Will
        "hfh", // Hell Forge Hammer
      ].forEach(questWeapon => {
        this.upsert(weaponsCol, questWeapon, CharConstants.empty);
      });
    }
  }

  enableForWeapons(exclusions) {
    this.enableForWeaponsArmor(FileConstants.FILE_WEAPONS_PATH, exclusions);
  }

  enableForArmor() {
    this.enableForWeaponsArmor(FileConstants.FILE_ARMOR_PATH, []);
  }

  enableForWeaponsArmor(path, exclusions) {
    const fileWeapons = D2RMM.readTsv(path);
    
    // in these files, all entries need ShowLevel to be set to 1, except those in the exclusions list.
    fileWeapons.rows.forEach((row) => {
      if (exclusions.includes(row.code) || exclusions.includes(row.type)) {
        return;
      }
      row.ShowLevel = 1;
    });

    D2RMM.writeTsv(path, fileWeapons);
  }

  enableForMiscItems(exclusions) {
    const fileMisc = D2RMM.readTsv(FileConstants.FILE_MISC_PATH);
    
    // in this file, we only want the entries matching JewelryConstants.iLvlJewelry to have their ShowLevel be set 1.
    // matching JewelryConstants.iLvlJewelry against the exclusions list makes the target list even smaller.
    let misc = JewelryConstants.iLvlJewelry.filter(item => !exclusions.includes(item));
    fileMisc.rows.forEach((row) => {
      if (misc.includes(row.code)) { 
        row.ShowLevel = 1;
      }
    });

    D2RMM.writeTsv(FileConstants.FILE_MISC_PATH, fileMisc);
  }
}

class ItemQualityBuilder {
  // todo: refactor if possible
  build() {
    if (config.ItemQuality === SettingsConstants.disabled) {
      return;
    }

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
    let txtNormal      = config.ItemQuality !== SettingsConstants.custom ? 'n' : SettingsConstants.custom; // replace custom with desired custom quality indicator. [CSTM-QLTY]
    let txtExceptional = config.ItemQuality !== SettingsConstants.custom ? 'x' : SettingsConstants.custom; // replace custom with desired custom quality indicator. [CSTM-QLTY]
    let txtElite       = config.ItemQuality !== SettingsConstants.custom ? 'e' : SettingsConstants.custom; // replace custom with desired custom quality indicator. [CSTM-QLTY]
    
    equipment.forEach(item => {
      var quality = (item.code === item.ultracode ? txtElite : (item.code === item.ubercode ? txtExceptional : txtNormal));

      const index = itemNames.findIndex((x) => x.Key === item.code);
      if (index < 0) {
        return;
      }
      
      for (const key in itemNames[index]) {
        if (key !== FileConstants.id && key !== FileConstants.key) {
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

    let questItems = [];

    // quest items
    if (config.ShouldAddLightPillarQuestItems) {
      questItems = questItems.concat([
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
      questItems = questItems.concat([
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
    if (!config.IsDropSoundsEnabled) {
      return;
    }

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
  
    newSound["Sound"] = soundName;
    newSound["*Index"] = soundsFile.rows.length;
    newSound["Channel"] = sfxChannel;
    newSound["FileName"] = sfxFileName;
    newSound["Redirect"] = sfxRedirect;
    newSound["Volume Min"] = 255;
    newSound["Volume Max"] = 255;
    newSound["Priority"] = 255;
    newSound["Stop Inst"] = 0;
    newSound["Defer Inst"] = 0;
    newSound["Falloff"] = 4;
    
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

class CaedendiExtendedLootFilterBuilder {
  build() {
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

let lootFilter = new CaedendiExtendedLootFilterBuilder();
lootFilter.build();
