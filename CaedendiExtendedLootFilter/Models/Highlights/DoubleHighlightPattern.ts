import { DoubleHighlightPatternBase } from "./DoubleHighlightPatternBase";
import { IHighlight } from "./Interfaces/IHighlight";

export class DoubleHighlightPattern extends DoubleHighlightPatternBase implements IHighlight {
  protected getPrefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  protected getSuffix(): string {
    return `${this.padding}${this.color}${this.pattern}`;
  }
}
