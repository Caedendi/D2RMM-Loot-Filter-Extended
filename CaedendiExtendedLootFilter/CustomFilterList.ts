import { ColorConstants } from "./Constants/Colors/ColorConstants";
import { ItemCollection } from "./Models/ItemCollection";
import { ItemEntry } from "./Models/ItemEntry";
import { iLvlFix } from "./Settings/StatsAndModifiersSettings";

export abstract class CustomFilterList {
  
  // Custom Filter List for item-names.json
  public static createForItemNamesJson(): ItemCollection {
    // let griffons1 = `My custom item name in a variable`;

    let list: [string, string, iLvlFix?][] = [
    
      //----------------------------------------------//
      // ENTER YOUR CUSTOM ITEM NAMES HERE [CSTM-CFL] //
      //----------------------------------------------//

      // This file can be used to customize the name of _any_ item defined in "item-names.json".
      //
      // Format: 
      // [ key, name ],
      // or
      // [ key, name, iLvlDigits ],
      //
      // - Set "key" to directly match the value of "Key" for the corresponding entry in "item-names.json". This can 
      //   either be an item code like "7wc" for Giant Thresher or a full name like "Death's Web".
      // - Name can be whatever you want. Use "quotes" for text-only or use `backtick` to incorporate variables using 
      //   `something ${variable} something`.
      // - iLvlFix is optional and can be used to fix the indentation for items that have both double highlighting and 
      //   an iLvl (by default these are quest weapons like Khalim's Will, facets and unique charms). 
      //   Set this to either:
      //   - None if not applicable or to disable
      //   - Single if it _always_ has a single digit iLvl (1 to 9, like Khalim's Will)
      //   - Double if it can have a double digit iLvl (10-99, like most items)
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
      
    ];

    return new ItemCollection(ItemEntry.createArray(list));
  }

  // Custom Filter List for item-runes.json
  public static createForItemRunesJson(): ItemCollection {
    
    // todo: is broken, correct
    let clrMsg = ColorConstants.purple;
    let clrRune = ColorConstants.orange;
    let clrHighlight = ColorConstants.red;
    let highlight1 = "**";
    let highlight2 = "*****";
    let highlight3 = "**********";

    let list: [string, string][] = [
      // [ "key", "value" ],
      // [ "r01", "*** My custom El Rune name ***" ],

      

        

        // TODO: fix
        /*
        this.runes.r01 = `${clrRune}El (1)`; // El
        this.runes.r02 = `${clrRune}Eld (2)`; // Eld
        this.runes.r03 = `${clrRune}Tir (3)`; // Tir
        this.runes.r04 = `${clrRune}Nef (4)`; // Nef
        this.runes.r05 = `${clrRune}Eth (5)`; // Eth
        this.runes.r06 = `${clrRune}Ith (6)`; // Ith
        this.runes.r07 = `${clrRune}Tal (7)`; // Tal
        this.runes.r08 = `${clrHighlight}${highlight1}${clrRune}  Ral (8)  ${clrHighlight}${highlight1}${clrRune}`; // Ral
        this.runes.r09 = `${clrRune}Ort (9)`; // Ort
        this.runes.r10 = `${clrRune}Thul (10)`; // Thul
        this.runes.r11 = `${clrRune}Amn (11)`; // Amn
        this.runes.r12 = `${clrRune}Sol (12)`; // Sol
        this.runes.r13 = `${clrRune}Shael (13)`; // Shael
        this.runes.r14 = `${clrRune}Dol (14)`; // Dol
        this.runes.r15 = `${clrHighlight}${highlight1}${clrRune}  Hel (15) ${clrHighlight}${highlight1}${clrRune}`; // Hel
        this.runes.r16 = `${clrRune}Io (16)`; // Io
        this.runes.r17 = `${clrRune}Lum (17)`; // Lum
        this.runes.r18 = `${clrHighlight}${highlight1}${clrRune}  Ko (18)  ${clrHighlight}${highlight1}${clrRune}`; // Ko
        this.runes.r19 = `${clrHighlight}${highlight1}${clrRune}  Fal (19)  ${clrHighlight}${highlight1}${clrRune}`; // Fal
        this.runes.r20 = `${clrHighlight}${highlight1}${clrRune}  Lem (20)  ${clrHighlight}${highlight1}${clrRune}`; // Lem
        this.runes.r21 = `${clrHighlight}${highlight2}${clrRune}   Pul (21)   ${clrHighlight}${highlight2}${clrRune}`; // Pul
        this.runes.r22 = `${clrHighlight}${highlight2}${clrRune}   Um (22)   ${clrHighlight}${highlight2}${clrRune}`; // Um
        this.runes.r23 = `${clrHighlight}${highlight2}${clrRune}   Mal (23)   ${clrHighlight}${highlight2}${clrRune}`; // Mal
        this.runes.r24 = `${clrHighlight}${highlight2}${clrRune}   Ist (24)   ${clrHighlight}${highlight2}${clrRune}`; // Ist
        this.runes.r25 = `${clrHighlight}${highlight2}${clrRune}   Gul (25)   ${clrHighlight}${highlight2}${clrRune}`; // Gul
        this.runes.r26 = `${clrHighlight}${highlight3}${clrRune}     Vex (26)     ${clrHighlight}${highlight3}${clrRune}`; // Vex
        this.runes.r27 = `${clrHighlight}${highlight3}${clrRune}     Ohm (27)     ${clrHighlight}${highlight3}${clrRune}`; // Ohm
        this.runes.r28 = `${clrHighlight}${highlight3}${clrRune}     Lo (28)     ${clrHighlight}${highlight3}${clrRune}`; // Lo
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
