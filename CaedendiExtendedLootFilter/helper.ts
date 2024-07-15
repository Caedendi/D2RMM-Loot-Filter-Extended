import { CharConstants } from "./Constants/CharConstants";
import { SettingsConstants } from "./Constants/SettingsConstants";
import { iLvlFix } from "./Settings/StatsAndModifiersSettings";

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
}
