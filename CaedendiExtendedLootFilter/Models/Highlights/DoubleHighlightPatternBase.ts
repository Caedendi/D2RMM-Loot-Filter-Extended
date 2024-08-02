import { D2Color } from "../Colors/D2Color";
import { HighlightBase } from "./HighlightBase";

export abstract class DoubleHighlightPatternBase extends HighlightBase {
  constructor(pattern: string, padding: string, color?: D2Color) {
    super(pattern, padding, color);
  }
  
  public apply(displayName: string): string {
    return `${this.getPrefix()}${displayName}${this.getSuffix()}`;
  }

  protected abstract getPrefix(): string;
  protected abstract getSuffix(): string;
}
