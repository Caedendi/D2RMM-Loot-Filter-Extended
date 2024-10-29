import { ItemCollection } from "./Models/ItemCollectionEntries/ItemCollection";
import { ItemEntry } from "./Models/ItemCollectionEntries/ItemEntry";

/**
 * This file can be used to customize the name of _any_ item defined in:
 * - item-names.json
 * - item-runes.json
 * - item-nameaffixes.json
 * - item-modifiers.json
 * - ui.json
 * 
 * Format: 
 * [ key, name ],
 * 
 * - Set "key" to directly match the value of "Key" for the corresponding entry in the target JSON file. This can 
 *   either be an item code like "7wc" for Giant Thresher or a full name like "Death's Web".
 * - Name can be whatever you want. Use "quotes" for text-only or use `backticks` to incorporate variables like: 
 *   `something ${variable} something`.
 * 
 * See "D2RMM mod settings => Loot Filter => Settings => Highlight Character" for a list of safe to use highlight characters.
 * Characters like ¤ (which were used in legacy loot filters) are not fully compatible with D2R, they increase the
 * font size of the tooltip.
 *
 * Examples
 * - [ "jav", `` ], // Javelin, hidden (forced zero-space name)
 * - [ "jav", `${Setting.hidden}` ], // Javelin, hidden (respecting the "Tooltip width for hidden items" setting)
 * - [ "ci3", `${Color.red}Diadem${Color.blue}` ], // Diadem, red-colored name, ends with blue color code for when the item is magic and has an affix (side effect: iLvls also turn blue)
 * - [ "Griffon's Eye", `${Color.red}**********${Color.purple}     "Griffon's Eye"     ${Color.red}**********${Color.purple}` ], // named key with manual highlighting
 */
export abstract class CustomFilterList {

  //----------------------------------------------//
  // ENTER YOUR CUSTOM ITEM NAMES HERE [CSTM-CFL] //
  //----------------------------------------------//
  
  // Custom Filter List for item-names.json
  public static createForItemNamesJson(): ItemCollection {
    let list: [string, string][] = [

      //============================//
      // Healing Potions [CSTM-HPT] //
      //============================//
      // [ "hp1", `HP1` ], // Minor Healing Potion
      // [ "hp2", `HP2` ], // Light Healing Potion
      // [ "hp3", `HP3` ], // Healing Potion
      // [ "hp4", `HP4` ], // Greater Healing Potion
      // [ "hp5", `HP5` ], // Super Healing Potion
      // [ "mp1", `MP1` ], // Minor Mana Potion
      // [ "mp2", `MP2` ], // Light Mana Potion
      // [ "mp3", `MP3` ], // Mana Potion
      // [ "mp4", `MP4` ], // Greater Mana Potion
      // [ "mp5", `MP5` ], // Super Mana Potion
      // [ "rvs", `RPS` ], // Rejuvenation Potion
      // [ "rvl", `RPF` ], // Full Rejuvenation Potion
      
      //=========================//
      // Buff Potions [CSTM-BPT] //
      //=========================//
      // [ "yps", "Antidote Potion" ],
      // [ "wms", "Thawing Potion" ],
      // [ "vps", "Stamina Potion" ],

      //=============================//
      // Throwing Potions [CSTM-TPT] //
      //=============================//
      // [ "gpl", "Strangling Gas Potion" ],
      // [ "gpm", "Choking Gas Potion" ],
      // [ "gps", "Rancid Gas Potion" ],
      // [ "opl", "Fulminating Potion" ],
      // [ "opm", "Exploding Potion" ],
      // [ "ops", "Oil Potion" ],
       
      //============================//
      // Scrolls & Tomes [CSTM-SCR] //
      //============================//
      // [ "tsc", "Scroll of Town Portal" ],
      // [ "isc", "Scroll of Identify" ],
      // [ "tbk", "Tome of Town Portal" ],
      // [ "ibk", "Tome of Identify" ],

      //================================//
      // Arrows, Bolts, Keys [CSTM-ABK] //
      //================================//
      // [ "aqv", "Arrows" ],
      // [ "cqv", "Bolts" ],
      // [ "key", "Key" ],

      //==================//
      // Gems [CSTM-GEM1] //
      //==================//
      // [ "gcv", `Chipped Amethyst` ],
      // [ "gcw", `Chipped Diamond` ],
      // [ "gcg", `Chipped Emerald` ],
      // [ "gcr", `Chipped Ruby` ],
      // [ "gcb", `Chipped Sapphire` ],
      // [ "gcy", `Chipped Topaz` ],
      // [ "skc", `Chipped Skull` ],
      // [ "gfv", `Flawed Amethyst` ],
      // [ "gfw", `Flawed Diamond` ],
      // [ "gfg", `Flawed Emerald` ],
      // [ "gfr", `Flawed Ruby` ],
      // [ "gfb", `Flawed Sapphire` ],
      // [ "gfy", `Flawed Topaz` ],
      // [ "skf", `Flawed Skull` ],
      // [ "gsv", `Amethyst` ],
      // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section below
      // For some reason, the devs put these gems in another JSON file, probably because they're also the names of some affixes.
      // [ "gsy", `Topaz` ],
      // [ "sku", `Skull` ],
      // [ "gzv", `Flawless Amethyst` ],
      // [ "glw", `Flawless Diamond` ],
      // [ "glg", `Flawless Emerald` ],
      // [ "glr", `Flawless Ruby` ],
      // [ "glb", `Flawless Sapphire` ],
      // [ "gly", `Flawless Topaz` ],
      // [ "skl", `Flawless Skull` ],
      // [ "gpv", `Perfect Amethyst` ],
      // [ "gpw", `Perfect Diamond` ],
      // [ "gpg", `Perfect Emerald` ],
      // [ "gpr", `Perfect Ruby` ],
      // [ "gpb", `Perfect Sapphire` ],
      // [ "gpy", `Perfect Topaz` ],
      // [ "skz", `Perfect Skull` ],

      //===================//
      // Jewels [CSTM-JWL] //
      //===================//
      // [ "jew", `${ColorConstants.red}Jewel${ColorConstants.magic}` ], // includes (unidentified) magic, rare and unique jewels
      // [ "Rainbow Facet", `Rainbow Facet` ], // identified facets

      //===================//
      // Charms [CSTM-CHA] //
      //===================//
      // [ CharmConstants.charmSmallId, `Small Charm` ],
      // [ CharmConstants.charmLargeId, `Large Charm` ],
      // [ CharmConstants.charmGrandId, `Grand Charm` ],
      // [ CharmConstants.anniId,       `Annihilus` ],
      // [ CharmConstants.torchId,      `Hellfire Torch` ],
      // [ CharmConstants.gheedsId,     `Gheed's Fortune` ],
      // [ CharmConstants.sunderMagiId, `Black Cleft` ],
      // [ CharmConstants.sunderPhysId, `Bone Break` ],
      // [ CharmConstants.sunderColdId, `Cold Rupture` ],
      // [ CharmConstants.sunderLiteId, `Crack of the Heavens` ],
      // [ CharmConstants.sunderFireId, `Flame Rift` ],
      // [ CharmConstants.sunderPoisId, `Rotting Fissure` ],

      //=========================//
      // Quest Items [CSTM-QST1] //
      //=========================//
      // See UiBuilder.ts for Book of Skill and Potion of Life, and 
      // see ItemModifiersBuilder.ts for Malah's Potion and Scroll of Resistance [CSTM-QST2]
      
      // Act 1
      // [ "leg", `Wirt's Leg` ], // Wirt's Leg
      // [ "hdm", `Horadric Malus` ], // Horadric Malus
      // [ "bks", `Scroll of Inifuss` ], // Scroll of Inifuss
      // [ "bkd", `Scroll of Inifuss` ], // Scroll of Inifuss (deciphered)
      
      // Act 2
      // [ "tr1", `Horadric Scroll` ], // Horadric Scroll
      // [ "box", `Horadric Cube` ], // Horadric Cube
      // [ "msf", `Staff of Kings` ], // Staff of Kings
      // [ "vip", `Amulet of the Viper` ], // Amulet of the Viper
      // [ "hst", `Horadric Staff` ], // Horadric Staff

      // Act 3
      // [ "j34", `A Jade Figurine` ], // A Jade Figurine
      // [ "g34", `The Golden Bird` ], // The Golden Bird
      // [ "bbb", `Lam Esen's Tome` ], // Lam Esen's Tome
      // [ "g33", `The Gidbinn` ], // The Gidbinn
      // [ "qf1", `Khalim's Flail` ], // Khalim's Flail
      // [ "qf2", `Khalim's Will` ], // Khalim's Will
      // [ "qey", `Khalim's Eye` ], // Khalim's Eye
      // [ "qhr", `Khalim's Heart` ], // Khalim's Heart
      // [ "qbr", `Khalim's Brain` ], // Khalim's Brain
      // [ "mss", `Mephisto's Soulstone` ], // Mephisto's Soulstone
      
      // Act 4
      // [ "hfh", `Hell Forge Hammer` ], // Hell Forge Hammer
      
      // Act 5
      // See exceptions mentioned above [CSTM-QST2]
      
      // Extra
      // [ "Staff of Kings",      `Staff of Kings` ], // Staff of Kings
      // [ "Amulet of the Viper", `Amulet of the Viper` ], // Amulet of the Viper
      // [ "Horadric Staff",      `Horadric Staff` ], // Horadric Staff
      // [ "LamTome",             `Lam Esen's Tome` ], // Lam Esen's Tome
      // [ "KhalimFlail",         `Khalim's Flail` ], // Khalim's Flail
      // [ "SuperKhalimFlail",    `Khalim's Will` ], // Khalim's Will
      // [ "Hell Forge Hammer",   `Hell Forge Hammer` ], // Hell Forge Hammer
      
      //==========================//
      // Endgame Items [CSTM-END] //
      //==========================//
      // [ "tes", `Twisted Essence of Suffering` ],
      // [ "ceh", `Charged Essense of Hatred` ],
      // [ "bet", `Burning Essence of Terror` ],
      // [ "fed", `Festering Essence of Destruction` ],
      // [ "toa", `Token of Absolution` ],
      // [ "pk1", `Key of Terror` ],
      // [ "pk2", `Key of Hate` ],
      // [ "pk3", `Key of Destruction` ],
      // [ "dhn", `Diablo's Horn` ],
      // [ "bey", `Baal's Eye` ],
      // [ "mbr", `Mephisto's Brain` ],
      // [ "std", `Standard of Heroes` ],
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for item-runes.json
  public static createForItemRunesJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],
  
      //===================//
      // Runes [CSTM-RUNE] //
      //===================//
      // [ "r01", `El (1)` ],
      // [ "r02", `Eld (2)` ],
      // [ "r03", `Tir (3)` ],
      // [ "r04", `Nef (4)` ],
      // [ "r05", `Eth (5)` ],
      // [ "r06", `Ith (6)` ],
      // [ "r07", `Tal (7)` ],
      // [ "r08", `${ColorConstants.red}*****${ColorConstants.orange}  Ral (8)  ${ColorConstants.red}*****${ColorConstants.orange}` ],
      // [ "r09", `Ort (9)` ],
      // [ "r10", `Thul (10)` ],
      // [ "r11", `Amn (11)` ],
      // [ "r12", `Sol (12)` ],
      // [ "r13", `Shael (13)` ],
      // [ "r14", `Dol (14)` ],
      // [ "r15", `${ColorConstants.red}*****${ColorConstants.orange}  Hel (15)  ${ColorConstants.red}*****${ColorConstants.orange}` ],
      // [ "r16", `Io (16)` ],
      // [ "r17", `Lum (17)` ],
      // [ "r18", `${ColorConstants.red}*****  Ko (18)  *****` ],
      // [ "r19", `${ColorConstants.red}*****  Fal (19)  *****` ],
      // [ "r20", `${ColorConstants.red}*****  Lem (20)  *****` ],
      // [ "r21", `${ColorConstants.red}**********   Pul (21)   **********` ],
      // [ "r22", `${ColorConstants.red}**********   Um (22)   **********` ],
      // [ "r23", `${ColorConstants.red}**********   Mal (23)   **********` ],
      // [ "r24", `${ColorConstants.red}**********   Ist (24)   **********` ],
      // [ "r25", `${ColorConstants.red}**********   Gul (25)   **********` ],
      // [ "r26", `${ColorConstants.red}********** ********** **********     Vex (26)     ********** ********** **********` ],
      // [ "r27", `${ColorConstants.red}********** ********** **********     Ohm (27)     ********** ********** **********` ],
      // [ "r28", `${ColorConstants.red}********** ********** **********     Lo (28)     ********** ********** **********` ],
      // [ "r29", `${ColorConstants.red}********** ********** **********     Sur (29)     ********** ********** **********` ],
      // [ "r30", `${ColorConstants.red}********** ********** **********     Ber (30)     ********** ********** **********` ],
      // [ "r31", `${ColorConstants.red}********** ********** **********     Jah (31)     ********** ********** **********` ],
      // [ "r32", `${ColorConstants.red}********** ********** **********     Cham (32)     ********** ********** **********` ],
      // [ "r33", `${ColorConstants.red}********** ********** **********     Zod (33)     ********** ********** **********` ],
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for item-nameaffixes.json
  public static createForItemNameAffixesJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],

      //=================//
      // Gold [CSTM-GLD] //
      //=================//
      // [ "gld", `${ColorConstants.purple}Gold` ],
      
      //================================================//
      // Superior/Inferior Quality Prefixes [CSTM-SPIF] //
      //================================================//
      // [ "Hiquality", "+" ],
      // [ "Damaged", "-" ],
      // [ "Cracked", "-" ],
      // [ "Low Quality", "-" ],
      // [ "Crude", "-" ],

      //==================//
      // Gems [CSTM-GEM2] //
      //==================//
      // [ "gsw", `Diamond` ],
      // [ "gsg", `Emerald` ],
      // [ "gsr", `Ruby` ],
      // [ "gsb", `Sapphire` ],
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for item-modifiers.json
  public static createForItemModifiersJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],

      //======================================//
      // Quest Items (exceptions) [CSTM-QST3] //
      //======================================//
      // [ "ice", `Malah's Potion`],       // Malah's Potion
      // [ "tr2", `Scroll of Resistance`], // Scroll of Resistance
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for ui.json
  public static createForUiJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],

      //======================================//
      // Quest Items (exceptions) [CSTM-QST2] //
      //======================================//
      // [ "ass", `Book of Skill` ],  // Book of Skill
      // [ "xyz", `Potion of Life` ], // Potion of Life
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }
}
