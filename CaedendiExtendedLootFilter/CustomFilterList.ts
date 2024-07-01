import { ColorConstants as Color } from "./Constants/Colors/ColorConstants";
import { HighlightConstants as Highlighting } from "./Constants/Items/HighlightConstants";
import { SettingsConstants as Setting } from "./Constants/SettingsConstants";
import { CustomFilterListEntry } from "./Models/CustomFilterListEntry";
import { iLvlFix } from "./Models/iLvlFix";

export abstract class CustomFilterList {
  public static create(): CustomFilterListEntry[] {
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
      //   - Double if it can have a double digit iLvl (10-99, like most equipment)
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
      [ "Griffon's Eye", `${Color.red}**********${Color.purple}     "Death's Web"     ${Color.red}**********${Color.purple}`, iLvlFix.DoubleDigits ],
      
      // name with generated highlighting
      [ "Griffon's Eye", Helper.generateDoubleHighlight(Color.red, Highlighting.pattern10, Highlighting.padding5, Color.purple, "Griffon's Eye"), iLvlFix.DoubleDigits ],

      // name defined in a variable
      [ "Griffon's Eye", griffons1 ],

remove this line (2/2) */
      
    ];

    return this.fromArray(list);
  }

  // TODO: test
  protected static fromArray(array: [string, string, iLvlFix?][]): CustomFilterListEntry[] {
    return array.map<CustomFilterListEntry>(x => new CustomFilterListEntry(x[0], x[1], x[2]));

    /*
    let result: CustomFilterListEntry[] = [];
    array.forEach(entry => {
      result.push(new CustomFilterListEntry(entry[0], entry[1], entry[2]));
    });

    return result;
    */
  }
}
