import { CharConstants } from "../Constants/CharConstants";
import { Settings } from "./Settings";

// TODO
export abstract class StatsAndModifiersSettings {
  // ilvl
  // TODO: set protected where appliccable
  public static shouldFixIlvlIndent: boolean = Settings.statsAndModifiers.itemLevelSetting === "fix" || Settings.statsAndModifiers.itemLevelSetting === "fix-btt";
  public static iLvlIndentFixSingle: string = CharConstants.space.repeat(4); // for single digit ilvl items
  public static iLvlIndentFixDouble: string = CharConstants.space.repeat(6); // for double digit ilvl items
  public static iLvlIndentFixQuality: string = this.iLvlIndentFixDouble; // for double digit ilvl items when item quality is enabled // TODO: check if needed
  public static iLvlIndentFixFacets: string = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  public static iLvlIndentFixCharms: string = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  public static iLvlIndentFixQuestSingle: string = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
  public static iLvlIndentFixQuestDouble: string = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
}

/**
 * Represents the amount of digits the iLvl has when shown in the item name.
 * 
 * Use None if the item has no iLvl, Single if it _always_ has a single digit iLvl (1 to 9, like Khalim's Will) and Double if it can have a two digits iLvl (10-99, like most items).
 */
export enum iLvlFix {
  None = 0,
  Single = 1,
  Double = 2,
}
