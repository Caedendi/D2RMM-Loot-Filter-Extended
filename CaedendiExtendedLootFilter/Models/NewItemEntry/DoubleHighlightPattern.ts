import { CharConstants } from "../../Constants/CharConstants";
import { Settings } from "../../Settings/Settings";
import { iLvlFix, StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { D2Color } from "../D2Color";
import { IHighlightPattern } from "./IHighlightPattern";

export class DoubleHighlightPattern implements IHighlightPattern {
  protected _pattern: string;
  protected _padding: string;
  protected _color: D2Color;
  protected _iLvlFix: iLvlFix;

  constructor(pattern: string, padding: string, color: D2Color, iLvlFix: iLvlFix) {
    this._pattern = pattern;
    this._padding = padding;
    this._color = color;
    this._iLvlFix = iLvlFix;
  }

  public apply(displayName: string): string {
    return `${this.getPrefix()}${displayName}${this.getSuffix()}`;
  }

  protected getPrefix(): string {
    return `${this.getiLvlIndent()}${this._color}${this._pattern}${this._padding}`;
  }

  protected getSuffix(): string {
    return `${this._padding}${this._color}${this._pattern}`;
  }

  protected getiLvlIndent(): string {
    if (!Settings.statsAndModifiers.itemLevel.shouldFixIndentation || this._iLvlFix === iLvlFix.None)
      return CharConstants.empty;

    if (this._iLvlFix == iLvlFix.Single)
      return StatsAndModifiersSettings.iLvlIndentFixSingle;
    if (this._iLvlFix == iLvlFix.Double)
      return StatsAndModifiersSettings.iLvlIndentFixDouble;

    throw new Error("getiLvlIndent() received undefined iLvlFix value.");
  }
}
