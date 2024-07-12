import { ItemCollection } from "./Models/ItemCollection";
import { ItemEntry } from "./Models/ItemEntry";
import { iLvlFix } from "./Models/iLvlFix";

export abstract class CustomFilterList {
  protected static readonly collectionId: string = CustomFilterList.name;

  // todo: rename for ItemNamesBuilder
  public static create(): ItemCollection {
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

    return new ItemCollection(this.collectionId, ItemEntry.createArray(list));
  }

  // TODO: add for RuneBuilder
  // TODO: add for ItemNameAffixesBuilder
  // TODO: add for UiBuilder
  // TODO: add for ItemModifiersBuilder
  // TODO: rest
}
