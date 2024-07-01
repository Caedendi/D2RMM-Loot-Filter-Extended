import { CharConstants } from "./Constants/CharConstants";
import { SettingsConstants } from "./Constants/SettingsConstants";
import { HighlightConstants } from "./Constants/Items/HighlightConstants";
import { D2Color } from "./Models/D2Color";

export class Helper {
  public static isWholeNumber(number: number): boolean {
    return number % 1 > 0;
  }
  
  // TODO: remove?
  public static isInRange(number: number, min: number, max: number) {
    return number >= min && number <= max;
  }

  public static addBigTooltips(collection: {id: string, value: string}[], setting: string, indentPickUpMsg: string = CharConstants.empty) {
    collection.forEach(entry => entry.value = Helper.generateBigTooltip(setting, entry.value, indentPickUpMsg));
  }

  public static addBigTooltipsForIds(collection: {id: string, value: string}[], ids: string[], setting: string) {
    ids.forEach(id => {
      this.addBigTooltipForId(collection, id, setting);
    })
  }
  
  public static addBigTooltipForId(collection: {id: string, value: string}[], id: string, setting: string) {
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
  public static generateSingleHighlight(patternColor: D2Color, pattern: string, padding: string, itemColor: D2Color, itemName: string) {
    return `${patternColor.getCode()}${pattern}${itemColor.getCode()}${padding}${itemName}`;
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
  public static generateDoubleHighlight(patternColor: D2Color, pattern: string, padding: string, itemColor: D2Color, itemName: string) {
    return `${patternColor.getCode()}${pattern}${itemColor.getCode()}${padding}${itemName}${padding}${patternColor.getCode()}${pattern}${itemColor.getCode()}`;
  }

  /**
   * 
   * @param {*} setting A setting as set in the Big Tooltips section of the settings menu. Determines the height of the Big Tooltip and if it contains the Pick Up message.
   * @param {*} name The item name (after other filtering and highlighting has been applied). Nothing in this line will be changed.
   * @returns A multi-line item name, which will show as a Big Tooltip when the item is on the ground.
   */
  protected static generateBigTooltip(setting: string, name: string, indentPickUpMsg: string = CharConstants.empty) {
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

    throw new Error(`Big Tooltip setting is undefined for ${name}.`);
  }
}
