import { D2Color } from "../Colors/D2Color";
import { DoubleHighlightPatternBase } from "./DoubleHighlightPatternBase";
import { IHighlightPattern } from "./IHighlightPattern";

export class DoubleHighlightPattern extends DoubleHighlightPatternBase implements IHighlightPattern {
  protected _pattern: string;
  protected _padding: string;
  protected _color: D2Color;

  constructor(pattern: string, padding: string, color: D2Color) {
    super();
    this._pattern = pattern;
    this._padding = padding;
    this._color = color;
  }

  protected getPrefix(): string {
    return `${this._color}${this._pattern}${this._padding}`;
  }

  protected getSuffix(): string {
    return `${this._padding}${this._color}${this._pattern}`;
  }
}
