const config = {
    ItemLevel: "fix-btt",
    shouldExcludeIlvlForBigTooltips: true,
    BigTooltipFacets: "4pu",
    BigTooltipUniqueCharms: "4pu",
    BigTooltipQuestItems: "4pu",
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
  
    static id = "id";
    static key = "Key";
}
  
class CharConstants {
    static empty = '';
    static space = ' ';
    static newLine = "\n";
    static o = 'o';
    static plus = '+';
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
    static shouldFixIlvlIndent      = config.ItemLevel === "fix";
    static iLvlIndentFixSingle      = CharConstants.space.repeat(4); // for single digit ilvl items
    static iLvlIndentFixDouble      = CharConstants.space.repeat(6); // for double digit ilvl items
    static iLvlIndentFixQuality     = CharConstants.space.repeat(6); // for double digit ilvl items when item quality is enabled // todo: check if needed
    static iLvlIndentFixFacets      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
    static iLvlIndentFixCharms      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
    static iLvlIndentFixQuestSingle = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
    static iLvlIndentFixQuestDouble = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
    static shouldExcludeIlvlForBigTooltips = config.ItemLevel === "btt" || config.ItemLevel === "fix-btt";
    
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
  static bttPickUpMsg = `${CharConstants.newLine}${ColorConstants.purple}Pick Up`;
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
  
    static facetClrName = ColorConstants.gold;
    static facetPattern = HighlightConstants.pattern5;
    static facetPadding1 = HighlightConstants.padding1; // padding between individual patterns
    static facetPadding2 = HighlightConstants.padding3; // padding between name and facetPrefixAlt / facetSuffixAlt
    static facetPrefixAlt = `${ColorConstants.red}${this.facetPattern}${this.facetPadding1}${ColorConstants.yellow}${this.facetPattern}${this.facetPadding1}${ColorConstants.blue}${this.facetPattern}${this.facetPadding1}${ColorConstants.green}${this.facetPattern}${this.facetClrName}${this.facetPadding2}`;
    static facetSuffixAlt = `${this.facetPadding2}${ColorConstants.green}${this.facetPattern}${this.facetPadding1}${ColorConstants.blue}${this.facetPattern}${this.facetPadding1}${ColorConstants.yellow}${this.facetPattern}${this.facetPadding1}${ColorConstants.red}${this.facetPattern}${this.facetClrName}`;
    static facetPrefix = config.IsFacetAltPattern ? this.facetPrefixAlt : HighlightConstants.uniquePrefix;
    static facetSuffix = config.IsFacetAltPattern ? this.facetSuffixAlt : HighlightConstants.uniqueSuffix;
  
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
        if (i > -1) array[i] = { id: id, value: value };
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
        if (!(config.ItemLevel === "show" || config.ItemLevel === "btt" || config.ItemLevel === "fix" || config.ItemLevel === "fix-btt")) {
            return;
        }

        // contrary to all other builders, these 3 collections are used for items that we do _not_ want to show their iLvl
        let weaponsCol = this.getCollectionById(CollectionConstants.weapons);
        // let armorCol   = this.getCollectionById(CollectionConstants.armor);
        let miscCol = this.getCollectionById(CollectionConstants.misc);
        this.addExclusions(weaponsCol, miscCol);

        // this.enableForWeapons(weaponsCol.map(item => item.id));
        // this.enableForArmor();
        // this.enableForMiscItems(miscCol.map(item => item.id));

        let wepMapped = weaponsCol.map(item => item.id);
        let miscMapped = miscCol.map(item => item.id);

        // console.log(weaponsCol);
        // console.log("---\n");
        // console.log(wepMapped);
        // console.log("---\n");
        // console.log("---\n");
        // console.log(weaponsCol);
        // console.log("---\n");
        // console.log(miscMapped);

        // let wepManual = [ "leg", "tpot" ];
        // if (wepManual.includes("leg") || wepManual.includes("leg")) {
        //     console.log("includes");
        // }


        let fileMisc = [
            { code: JewelryConstants.ring,          type: "ring", ShowLevel: 0 },
            { code: JewelryConstants.amulet,        type: "amul", ShowLevel: 0 },
            { code: JewelryConstants.jewel,         type: "jewl", ShowLevel: 0 },
            { code: JewelryConstants.charmSmall,    type: "scha", ShowLevel: 0 },
            { code: JewelryConstants.charmLarge,    type: "mcha", ShowLevel: 0 },
            { code: JewelryConstants.charmGrand,    type: "lcha", ShowLevel: 0 },
        ];
        let result = [];
        console.log("filter\n");
        let misc = JewelryConstants.iLvlJewelry.filter(item => !miscMapped.includes(item));
        console.log(misc);
        console.log("filter\n");
        fileMisc.forEach((row) => {
            if (misc.includes(row.code)) {
                row.ShowLevel = 1;
                console.log(row);
                result.push(row);
            }
        });
        
        console.log("---\n");
        console.log(result);
    }

    addExclusions(weaponsCol, miscCol) {
        this.upsert(weaponsCol, "tpot", CharConstants.empty); // always exclude throwing potions

        if (!config.shouldExcludeIlvlForBigTooltips) {
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

            this.upsert(weaponsCol, "leg", "leggiej");
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

        fileWeapons.rows.forEach((row) => {
            // if (exclusions.includes(row.code) || exclusions.includes(row.type)) {
            if (row.type === "tpot" || row.code === "leg") {
                // if (exclusions.indexOf(row.code) !== -1) { 
                return;
            }
            row.ShowLevel = 1;
        });

        D2RMM.writeTsv(path, fileWeapons);
    }

    enableForMiscItems(exclusions) {
        const fileMisc = D2RMM.readTsv(FileConstants.FILE_MISC_PATH);

        let misc = JewelryConstants.iLvlJewelry.filter(item => !exclusions.includes(item));

        fileMisc.rows.forEach((row) => {
            if (misc.includes(row.code)) {
                row.ShowLevel = 1;
            }
        });
        
        D2RMM.writeTsv(FileConstants.FILE_MISC_PATH, fileMisc);
    }
}


var builder = new ItemLevelBuilder();
builder.build();