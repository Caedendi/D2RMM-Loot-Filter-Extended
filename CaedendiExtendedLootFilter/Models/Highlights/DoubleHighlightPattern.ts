import { D2Color } from "../Colors/D2Color";
import { DoubleHighlightPatternBase } from "./DoubleHighlightPatternBase";
import { IHighlight } from "./Interfaces/IHighlight";

export class DoubleHighlightPattern extends DoubleHighlightPatternBase implements IHighlight {
  /**
   * color
   */
  public set color(value: D2Color) {
    this._color = value;
  }
  
  protected getPrefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  protected getSuffix(): string {
    return `${this.padding}${this.color}${this.pattern}`;
  }
}
