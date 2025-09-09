import { EDoubleHighlightSize } from "../../Models/Highlights/EDoubleHighlightSize";
import { CustomSettings } from "../../Settings/CustomSettings";
import { FilterSettings } from "../../Settings/Filter/FilterSettings";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { SettingsConstants } from "../SettingsConstants";

export abstract class HighlightConstants {
  public static character: string = FilterSettings.highlightCharacter === SettingsConstants.custom 
    ? CustomSettings.filter.settings.highlightCharacter : FilterSettings.highlightCharacter;

  public static readonly padding = {
    none: CharConstants.empty,
    p1:   CharConstants.space,
    p2:   CharConstants.space.repeat(2),
    p3:   CharConstants.space.repeat(3),
    p5:   CharConstants.space.repeat(5),
  };

  public static readonly pattern = {
    none: CharConstants.empty,
    p2:    this.character.repeat(2),
    p3:    this.character.repeat(3),
    p4:    this.character.repeat(4),
    p5:    this.character.repeat(5),
    p10:   this.character.repeat(10),
    p2x10: `${this.character.repeat(10)}${this.padding.p2}${this.character.repeat(10)}`,
    p3x10: `${this.character.repeat(10)}${this.padding.p2}${this.character.repeat(10)}${this.padding.p2}${this.character.repeat(10)}`,
  };

  public static readonly uniqueNameColor = ColorConstants.gold;

  public static bttPadding = this.padding.p5;
  public static bttPickUpMsg = `${ColorConstants.purple}Pick Up`;

  public static getDoubleHighlightSettings(setting: EDoubleHighlightSize): { pattern: string, padding: string } {
    const settings: { [key in EDoubleHighlightSize]: { pattern: string, padding: string } }  = {
    [ EDoubleHighlightSize.SMALL ]:             { pattern: this.pattern.p2,    padding: this.padding.p2 },
    [ EDoubleHighlightSize.MEDIUM ]:            { pattern: this.pattern.p5,    padding: this.padding.p3 },
    [ EDoubleHighlightSize.LARGE ]:             { pattern: this.pattern.p10,   padding: this.padding.p5 },
    [ EDoubleHighlightSize.EXTRA_LARGE ]:       { pattern: this.pattern.p2x10, padding: this.padding.p5 },
    [ EDoubleHighlightSize.EXTRA_EXTRA_LARGE ]: { pattern: this.pattern.p3x10, padding: this.padding.p5 },
    };

    return settings[setting];
  }
}
