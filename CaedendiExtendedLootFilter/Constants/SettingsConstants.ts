import { CharConstants } from "./CharConstants";

export abstract class SettingsConstants {
  protected static itemLevelSetting: string = config.ItemLevel.toString();
  protected static isBigTooltipsSettingEnabled: boolean = config.IsBigTooltipsEnabled as boolean;

  // tooltip
  public static hidden: string = CharConstants.empty + CharConstants.space.repeat(config.HiddenItemTooltipSize as number);

  // ilvl
  public static shouldFixIlvlIndent: boolean = this.itemLevelSetting === "fix" || this.itemLevelSetting === "fix-btt";
  public static iLvlIndentFixSingle: string = CharConstants.space.repeat(4); // for single digit ilvl items
  public static iLvlIndentFixDouble: string = CharConstants.space.repeat(6); // for double digit ilvl items
  public static iLvlIndentFixQuality: string = CharConstants.space.repeat(6); // for double digit ilvl items when item quality is enabled // todo: check if needed
  public static iLvlIndentFixFacets: string = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  public static iLvlIndentFixCharms: string = this.shouldFixIlvlIndent ? this.iLvlIndentFixDouble : CharConstants.empty;
  public static iLvlIndentFixQuestSingle: string = this.iLvlIndentFixSingle; // quest items with a single digit ilvl
  public static iLvlIndentFixQuestDouble: string = this.iLvlIndentFixDouble; // quest items with a double digit ilvl
  public static shouldExcludeIlvlForBigTooltips: boolean = this.isBigTooltipsSettingEnabled && (this.itemLevelSetting === "btt" || this.itemLevelSetting === "fix-btt");

  // common config settings
  public static disabled: string = "none";
  public static all:      string = "all";
  public static custom:   string = "custom";
}
