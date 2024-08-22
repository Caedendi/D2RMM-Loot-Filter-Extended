import { CharConstants } from "../../Constants/CharConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { RawSettings } from "../RawSettings";

export class FilterSettings {
  public static readonly isEnabled:                 boolean = RawSettings.filter.isEnabled;
  public static readonly isCustomFilterListEnabled: boolean = RawSettings.filter.isCustomFilterListEnabled;

  public static readonly defaultHighlightColor: D2Color = D2Color.create(RawSettings.filter.settings.defaultHighlightColor)!;
  public static readonly highlightCharacter: string = RawSettings.filter.settings.highlightCharacter;
  public static readonly hidden:             string = CharConstants.space.repeat(RawSettings.filter.settings.hidden);
}
