import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { FilterSettings } from "../../Settings/Filter/FilterSettings";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "./Interfaces/IHighlight";

/**
 * The abstract base class for highlights.
 */
export abstract class HighlightBase implements IHighlight {
  /**
   * color
   */
  protected _color: D2Color;
  public get color(): D2Color {
    return this._color;
  }

  /**
   * pattern
   */
  private _pattern: string;
  public get pattern(): string {
    return this._pattern;
  }

  /**
   * padding
   */
  private _padding: string;
  public get padding(): string {
    return this._padding;
  }

  constructor(pattern: string, padding: string | null = null, color: D2Color | null = null) {
    this._color = color ??= FilterSettings.defaultHighlightColor;
    this._pattern = pattern;
    this._padding = padding ??= HighlightConstants.padding.none;
  }

  public abstract apply(displayName: string): string;
}
