import { CharConstants } from "./CharConstants.ts";

export class SettingsConstants {
  // tooltip
  static hidden             = CharConstants.empty + CharConstants.space.repeat(config.HiddenItemTooltipSize);
  
  // ilvl
  static shouldFixIlvlIndent      = config.ItemLevel === "fix" || config.ItemLevel === "fix-btt";
  static iLvlIndentFixSingle      = CharConstants.space.repeat(4); // for single digit ilvl items
  static iLvlIndentFixDouble      = CharConstants.space.repeat(6); // for double digit ilvl items
  static iLvlIndentFixQuality     = CharConstants.space.repeat(6); // for double digit ilvl items when item quality is enabled // todo: check if needed
  static iLvlIndentFixFacets      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixCharms      = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixQuestSingle = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
  static iLvlIndentFixQuestDouble = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
  static shouldExcludeIlvlForBigTooltips = config.IsBigTooltipsEnabled && (config.ItemLevel === "btt" || config.ItemLevel === "fix-btt");
  
  // common config settings
  static disabled  = "none";
  static all       = "all";
  static custom    = "custom";
}
