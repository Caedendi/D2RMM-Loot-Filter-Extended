import { CharConstants } from "../../Constants/CharConstants";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class ItemLevelSettings extends FilterSettingsBase {
  public static readonly isEnabled:               boolean = RawSettings.filter.statsAndModifiers.itemLevel.isEnabled;
  public static readonly shouldFixIndentation:    boolean = RawSettings.filter.statsAndModifiers.itemLevel.shouldFixIndentation;
  public static readonly shouldHideOnBigTooltips: boolean = RawSettings.filter.statsAndModifiers.itemLevel.shouldHideOnBigTooltips;
  
  public static iLvlIndentFixSingle: string = CharConstants.space.repeat(4); // for single digit ilvl items
  public static iLvlIndentFixDouble: string = CharConstants.space.repeat(6); // for double digit ilvl items
}
