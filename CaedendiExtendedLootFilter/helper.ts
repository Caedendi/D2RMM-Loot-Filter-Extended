import { CharConstants } from "./Constants/CharConstants";
import { SettingsConstants } from "./Constants/SettingsConstants";
import { iLvlFix } from "./Models/iLvlFix";
import { ItemCollection } from "./Models/ItemCollection";

export class Helper {
  protected static newLine: string = CharConstants.newLine;

  public static isDefined(param: any): boolean {
    return (param != null && param != undefined);
  }

  // TODO: remove

  // /**
  //  * Generate an item name with a highlight pattern on the left side: `${ColorConstants.red}+HP1` or `${ColorConstants.gray}o Arrows`.
  //  * @param {*} patternColor The color of the highlight pattern.
  //  * @param {*} pattern The pattern for the highlight.
  //  * @param {*} padding The padding between the highlights and the item name.
  //  * @param {*} itemColor The color of the item name.
  //  * @param {*} itemName The name of the item.
  //  * @returns A complete item name with a colored highlight pattern on the left side.
  //  */
  // public static generateSingleHighlight(patternColor: D2Color, pattern: string, padding: string, itemColor: D2Color, itemName: string) {
  //   return `${patternColor.toString()}${pattern}${itemColor.toString()}${padding}${itemName}`;
  // }

  // /**
  //  * Generate an item name with a highlight pattern on both sides: `${ColorConstants.red}**********${ColorConstants.gold}     ${NAME}     ${ColorConstants.red}**********${ColorConstants.gold}`.
  //  * @param {*} patternColor The color of the highlight pattern.
  //  * @param {*} pattern The pattern for the highlight.
  //  * @param {*} padding The padding between the highlights and the item name.
  //  * @param {*} itemColor The color of the item name.
  //  * @param {*} itemName The name of the item.
  //  * @returns A complete item name with colored highlight patterns on both sides.
  //  */
  // public static generateDoubleHighlight(patternColor: D2Color, pattern: string, padding: string, itemColor: D2Color, itemName: string) {
  //   return `${patternColor.toString()}${pattern}${itemColor.toString()}${padding}${itemName}${padding}${patternColor.toString()}${pattern}${itemColor.toString()}`;
  // }

  public static getiLvlIndent(fix?: iLvlFix): string {
    if (!this.isDefined(fix) || !SettingsConstants.shouldFixIlvlIndent || fix === iLvlFix.None) {
      return CharConstants.empty;
    }

    if (fix == iLvlFix.Single) {
      return SettingsConstants.iLvlIndentFixSingle;
    }
    if (fix == iLvlFix.Double) {
      return SettingsConstants.iLvlIndentFixDouble;
    }

    throw new Error("Helper.getiLvlIndent() received undefined iLvlFix value.");
  }

  /**
   * TODO: remove
   * DEPRECATED: use ItemCollection.addBigTooltipToAllEntries()
   */
  public static addBigTooltips(collection: ItemCollection, setting: string, indentPickUpMsg: string = CharConstants.empty) {
    throw new Error("Helper.addBigTooltips() is deprecated, use ItemCollection.addBigTooltipToAll() instead.");
    
    // collection.getEntries().forEach(entry => entry.setName(Helper.generateBigTooltip(setting, entry.getName(), indentPickUpMsg)));
  }

  /**
   * TODO: remove
   * DEPRECATED: use ItemCollection.addBigTooltipToEntries()
   */
  public static addBigTooltipsForIds(collection: ItemCollection, ids: string[], setting: string) {
    throw new Error("Helper.addBigTooltipsForIds() is deprecated, use ItemCollection.addBigTooltipToEntries() instead.");

    // ids.forEach(id => {
    //   this.addBigTooltipForId(collection, id, setting);
    // })
  }
  
  /**
   * TODO: remove
   * DEPRECATED: use ItemCollection.addBigTooltipToEntry()
   */
  public static addBigTooltipForId(collection: ItemCollection, key: string, setting: string) {
    throw new Error("Helper.addBigTooltipForId() is deprecated, use ItemCollection.addBigTooltipToEntry() instead.");

    // const i = collection.getEntries().findIndex(x => x.getKey() === key);
    // if (i < 0) 
    //   throw new Error(`Can't find item \"${key}\" in collection.`);
    // collection[i].value = this.generateBigTooltip(setting, collection[i].value);
  }


  // /**
  //  * 
  //  * @param {*} setting A setting as set in the Big Tooltips section of the settings menu. Determines the height of the Big Tooltip and if it contains the Pick Up message.
  //  * @param {*} name The item name (after other filtering and highlighting has been applied). Nothing in this line will be changed.
  //  * @returns A multi-line item name, which will show as a Big Tooltip when the item is on the ground.
  //  */
  // protected static generateBigTooltip(setting: string, name: string, indentPickUpMsg: string = CharConstants.empty) {
  //   if (setting === SettingsConstants.disabled || name === SettingsConstants.hidden) {
  //     return name;
  //   }

  //   // new lines work upside-down: adding \n will add a new line on top of the current one (instead of below like you would expect)
  //   if (setting === SettingsConstants.custom) { // [CSTM-BTT]
  //     // ADD YOUR CUSTOM BIG TOOLTIP HERE
  //     return this.newLine + `${HighlightConstants.bttPadding}${name}${HighlightConstants.bttPadding}` + this.newLine;
  //   }

  //   name = `${HighlightConstants.bttPadding}${name}${HighlightConstants.bttPadding}`;
  //   if (setting === "2") {
  //     return name + this.newLine;
  //   }
  //   if (setting === "2pu") {
  //     return name + this.newLine + indentPickUpMsg + HighlightConstants.bttPickUpMsg;
  //   }
  //   if (setting === "3") {
  //     return this.newLine + name + this.newLine;
  //   }
  //   if (setting === "4pu") {
  //     return this.newLine + name + this.newLine + indentPickUpMsg + HighlightConstants.bttPickUpMsg + this.newLine;
  //   }
  //   if (setting === "5") {
  //     return this.newLine + this.newLine + name + this.newLine + this.newLine;
  //   }

  //   throw new Error(`Big Tooltip setting is undefined for ${name}.`);
  // }
}
