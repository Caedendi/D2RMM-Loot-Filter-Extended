import { CharConstants } from "../../Constants/CharConstants";
import { D2Color } from "../D2Color";
import { IHighlightPattern } from "./IHighlightPattern";

export class SingleHighlight implements IHighlightPattern {
  protected _pattern: string;
  protected _color: D2Color;
  protected _padding?: string;

  constructor(pattern: string, color: D2Color, padding?: string) {
    this._pattern = pattern;
    this._color = color;
    this._padding = padding;
  }

  public apply(displayName: string): string {
    return `${this.getPrefix()}${displayName}`;
  }

  public getIndent(): string {
    let highlightLength = `${this._pattern}${this._padding}`.length;
    return CharConstants.getSpaces(highlightLength);
  }

  protected getPrefix(): string {
    return `${this._color}${this._pattern}${this._padding ?? CharConstants.empty}`;
  }
}
