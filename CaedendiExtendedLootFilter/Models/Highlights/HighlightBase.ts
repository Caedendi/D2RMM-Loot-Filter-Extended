import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "./Interfaces/IHighlight";

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

  constructor(pattern: string, padding: string, color?: D2Color) {
    this._pattern = pattern;
    this._padding = padding;
    this._color = color ??= HighlightConstants.defaultHighlightColor;
  }

  public abstract apply(displayName: string): string;
}
