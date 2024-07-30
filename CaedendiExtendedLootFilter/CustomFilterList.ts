import { ColorConstants } from "./Constants/Colors/ColorConstants";
import { ItemCollection } from "./Models/ItemCollectionEntries/ItemCollection";
import { ItemEntry } from "./Models/ItemCollectionEntries/ItemEntry";
import { iLvlDigits } from "./Settings/StatsAndModifiersSettings";

export abstract class CustomFilterList {
  
  // Custom Filter List for item-names.json
  public static createForItemNamesJson(): ItemCollection {
    // let griffons1 = `My custom item name in a variable`;

    let list: [string, string, iLvlDigits?][] = [
    
      //----------------------------------------------//
      // ENTER YOUR CUSTOM ITEM NAMES HERE [CSTM-CFL] //
      //----------------------------------------------//

      // This file can be used to customize the name of _any_ item defined in "item-names.json".
      //
      // Format: 
      // [ key, name ],
      //
      // - Set "key" to directly match the value of "Key" for the corresponding entry in "item-names.json". This can 
      //   either be an item code like "7wc" for Giant Thresher or a full name like "Death's Web".
      // - Name can be whatever you want. Use "quotes" for text-only or use `backtick` to incorporate variables using 
      //   `something ${variable} something`.
      //
      // See "D2RMM mod settings => Tooltips => Highlight Character" for a list of safe to use highlight characters.
      // Characters like ¤ (which were used in legacy loot filters) are not fully compatible with D2R, they increase the
      // font size of the tooltip.

/* remove this line (1/2)

      // Javelin, hidden (forced zero-space name)
      [ "jav", `` ],

      // Javelin, hidden (respecting the "Tooltip width for hidden items" setting)
      [ "jav", `${Setting.hidden}` ],

      // Diadem, red-colored name, ends with blue color code for when the item is magic and has an affix (side effect: iLvls also turn blue)
      [ "ci3", `${Color.red}Diadem${Color.blue}` ],

      // named key with manual highlighting
      [ "Griffon's Eye", `${Color.red}**********${Color.purple}     "Griffon's Eye"     ${Color.red}**********${Color.purple}`, iLvlFix.DoubleDigits ],
      
      // name with generated highlighting
      [ "Griffon's Eye", Helper.generateDoubleHighlight(Color.red, Highlighting.pattern10, Highlighting.padding5, Color.purple, "Griffon's Eye"), iLvlFix.DoubleDigits ],

      // name defined in a variable
      [ "Griffon's Eye", griffons1 ],

remove this line (2/2) */

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

      //===================//
      // Jewels [CSTM-JWL] //
      //===================//
      // [ JewelryConstants.jewelId, `${ColorConstants.red}Jewel${ColorConstants.magic}` ], // includes (unidentified) magic, rare and unique jewels
      // [ FacetConstants.facetId, `Rainbow Facet` ], // identified facets

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
      [ "leg", `Wirt's Leg` ], // Wirt's Leg
      [ "hdm", `Horadric Malus` ], // Horadric Malus
      [ "bks", `Scroll of Inifuss` ], // Scroll of Inifuss
      [ "bkd", `Scroll of Inifuss` ], // Scroll of Inifuss (deciphered)
      
      // Act 2
      [ "tr1", `Horadric Scroll` ], // Horadric Scroll
      [ "box", `Horadric Cube` ], // Horadric Cube
      [ "msf", `Staff of Kings` ], // Staff of Kings
      [ "vip", `Amulet of the Viper` ], // Amulet of the Viper
      [ "hst", `Horadric Staff` ], // Horadric Staff

      // Act 3
      [ "j34", `A Jade Figurine` ], // A Jade Figurine
      [ "g34", `The Golden Bird` ], // The Golden Bird
      [ "bbb", `Lam Esen's Tome` ], // Lam Esen's Tome
      [ "g33", `The Gidbinn` ], // The Gidbinn
      [ "qf1", `Khalim's Flail` ], // Khalim's Flail
      [ "qf2", `Khalim's Will` ], // Khalim's Will
      [ "qey", `Khalim's Eye` ], // Khalim's Eye
      [ "qhr", `Khalim's Heart` ], // Khalim's Heart
      [ "qbr", `Khalim's Brain` ], // Khalim's Brain
      [ "mss", `Mephisto's Soulstone` ], // Mephisto's Soulstone
      
      // Act 4
      [ "hfh", `Hell Forge Hammer` ], // Hell Forge Hammer
      
      // Act 5
      // See exceptions mentioned above [CSTM-QST2]
      
      // Extra
      [ "Staff of Kings",      `Staff of Kings` ], // Staff of Kings
      [ "Amulet of the Viper", `Amulet of the Viper` ], // Amulet of the Viper
      [ "Horadric Staff",      `Horadric Staff` ], // Horadric Staff
      [ "LamTome",             `Lam Esen's Tome` ], // Lam Esen's Tome
      [ "KhalimFlail",         `Khalim's Flail` ], // Khalim's Flail
      [ "SuperKhalimFlail",    `Khalim's Will` ], // Khalim's Will
      [ "Hell Forge Hammer",   `Hell Forge Hammer` ], // Hell Forge Hammer
      
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for item-runes.json
  public static createForItemRunesJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],

      /*
      [ "r01", `El (1)` ], // El
      [ "r02", `Eld (2)` ], // Eld
      [ "r03", `Tir (3)` ], // Tir
      [ "r04", `Nef (4)` ], // Nef
      [ "r05", `Eth (5)` ], // Eth
      [ "r06", `Ith (6)` ], // Ith
      [ "r07", `Tal (7)` ], // Tal
      [ "r08", `${ColorConstants.red}*****${ColorConstants.orange}  Ral (8)  ${ColorConstants.red}*****${ColorConstants.orange}` ], // Ral
      [ "r09", `Ort (9)` ], // Ort
      [ "r10", `Thul (10)` ], // Thul
      [ "r11", `Amn (11)` ], // Amn
      [ "r12", `Sol (12)` ], // Sol
      [ "r13", `Shael (13)` ], // Shael
      [ "r14", `Dol (14)` ], // Dol
      [ "r15", `${ColorConstants.red}*****${ColorConstants.orange}  Hel (15)  ${ColorConstants.red}*****${ColorConstants.orange}` ], // Hel
      [ "r16", `Io (16)` ], // Io
      [ "r17", `Lum (17)` ], // Lum
      [ "r18", `${ColorConstants.red}*****  Ko (18)  *****` ], // Ko
      [ "r19", `${ColorConstants.red}*****  Fal (19)  *****` ], // Fal
      [ "r20", `${ColorConstants.red}*****  Lem (20)  *****` ], // Lem
      [ "r21", `${ColorConstants.red}**********   Pul (21)   **********` ], // Pul
      [ "r22", `${ColorConstants.red}**********   Um (22)   **********` ], // Um
      [ "r23", `${ColorConstants.red}**********   Mal (23)   **********` ], // Mal
      [ "r24", `${ColorConstants.red}**********   Ist (24)   **********` ], // Ist
      [ "r25", `${ColorConstants.red}**********   Gul (25)   **********` ], // Gul
      [ "r26", `${ColorConstants.red}********** ********** **********     Vex (26)     ********** ********** **********` ],
      [ "r27", `${ColorConstants.red}********** ********** **********     Ohm (27)     ********** ********** **********` ],
      [ "r28", `${ColorConstants.red}********** ********** **********     Lo (28)     ********** ********** **********` ],
      [ "r29", `${ColorConstants.red}********** ********** **********     Sur (29)     ********** ********** **********` ],
      [ "r30", `${ColorConstants.red}********** ********** **********     Ber (30)     ********** ********** **********` ],
      [ "r31", `${ColorConstants.red}********** ********** **********     Jah (31)     ********** ********** **********` ],
      
      [ "r32", `${ColorConstants.red}********** ********** **********     Cham (32)     ********** ********** **********`;
      this.runes.r32 = `\n\n${clrMsg}Pick Up\n${LTT_PADDING}********** ********** **********     Cham (32)     ********** ********** **********${LTT_PADDING}\n\n`; // Cham
      this.runes.r32 = Helper.generateBigTooltip(config.BigTooltipRunesHigh, `${clrHighlight}${HighlightConstants.pattern2x10}${clrRune}${HighlightConstants.padding10}Cham (32)${HighlightConstants.padding10}${clrHighlight}${HighlightConstants.pattern2x10}${clrRune}`); // Cham



      // this.runes.r32 = Helper.generateBigTooltip(`********** ********** **********     Cham (32)     ********** ********** **********`); // Cham
      // this.runes.r33 = `********** ********** **********     Zod (33)     ********** ********** **********`;  // Zod
      // this.runes.r33 = `${RuneConstants.clrHighlight}${HighlightConstants.pattern10}${HighlightConstants.padding5}${RuneConstants.clrName}Zod (33)${HighlightConstants.padding5}${RuneConstants.clrHighlight}${HighlightConstants.pattern10}${RuneConstants.clrName}`;  // Zod
      this.runes.r33 = Helper.generateDoubleHighlight(clrHighlight, HighlightConstants.pattern10, HighlightConstants.padding5, clrRune, "Zod Rune (33)"); // Zod
      */
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for item-nameaffixes.json
  public static createForItemNameAffixesJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],

      // gold [CSTM-GLD]
      // [ "gld", `${ColorConstants.purple}Gold` ],
      
      // superior/inferior quality prefixes [CSTM-SPIF]
      // [ "Hiquality", "+" ],
      // [ "Damaged", "-" ],
      // [ "Cracked", "-" ],
      // [ "Low Quality", "-" ],
      // [ "Crude", "-" ],

      // gems [CSTM-GEM2]
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

      // [CSTM-QST2]
      // [ "ice", `Malah's Potion`],       // Malah's Potion
      // [ "tr2", `Scroll of Resistance`], // Scroll of Resistance
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for ui.json
  public static createForUiJson(): ItemCollection {
    let list: [string, string][] = [
      // [ "key", "value" ],
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }
}
