import { D2Color } from "../../Models/Colors/D2Color";
import { RawSettings } from "../RawSettings";

export abstract class ShortSupInfPrefixesSettings {
  public static readonly isEnabled:          boolean = RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.isEnabled;
  public static readonly style:              string  = RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.style;
  public static readonly inferiorItemsColor: D2Color | null = D2Color.create(RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.inferiorItemsColor);
}
