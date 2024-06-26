import { CharConstants } from "./CharConstants";

export class SettingsConstants {
  // tooltip
  static hidden: string = CharConstants.empty + CharConstants.space.repeat(config.HiddenItemTooltipSize);

  // ilvl
  static shouldFixIlvlIndent: boolean = config.ItemLevel === "fix" || config.ItemLevel === "fix-btt";
  static iLvlIndentFixSingle: string = CharConstants.space.repeat(4); // for single digit ilvl items
  static iLvlIndentFixDouble: string = CharConstants.space.repeat(6); // for double digit ilvl items
  static iLvlIndentFixQuality: string = CharConstants.space.repeat(6); // for double digit ilvl items when item quality is enabled // todo: check if needed
  static iLvlIndentFixFacets: string = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixCharms: string = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  static iLvlIndentFixQuestSingle: string = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
  static iLvlIndentFixQuestDouble: string = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
  static shouldExcludeIlvlForBigTooltips: boolean = config.IsBigTooltipsEnabled && (config.ItemLevel === "btt" || config.ItemLevel === "fix-btt");

  // common config settings
  static disabled: string = "none";
  static all: string = "all";
  static custom: string = "custom";
}
