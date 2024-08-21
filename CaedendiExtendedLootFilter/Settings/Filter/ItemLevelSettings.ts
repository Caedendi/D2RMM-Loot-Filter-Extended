import { CharConstants } from "../../Constants/CharConstants";
import { RawSettings } from "../RawSettings";

export abstract class ItemLevelSettings {
  public static readonly isEnabled:               boolean = RawSettings.filter.statsAndModifiers.itemLevel.isEnabled;
  public static readonly shouldFixIndentation:    boolean = RawSettings.filter.statsAndModifiers.itemLevel.shouldFixIndentation;
  public static readonly shouldHideOnBigTooltips: boolean = RawSettings.filter.statsAndModifiers.itemLevel.shouldHideOnBigTooltips;
  
  public static singleDigitIndent: string = CharConstants.space.repeat(4); // for single digit ilvl items
  public static doubleDigitIndent: string = CharConstants.space.repeat(6); // for double digit ilvl items
}
