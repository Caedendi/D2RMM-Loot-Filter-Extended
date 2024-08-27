import { D2Color } from "../Colors/D2Color";
import { HighlightBase } from "./HighlightBase";

/**
 * Base class for double highlights. These have a prefix and suffix highlight pattern.
 */
export abstract class DoubleHighlightBase extends HighlightBase {
  constructor(pattern: string, padding: string, color?: D2Color) {
    super(pattern, padding, color);
  }
  
  public apply(displayName: string): string {
    return `${this.getPrefix()}${displayName}${this.getSuffix()}`;
  }

  /**
   * Creates the highlight's prefix pattern.
   */
  protected abstract getPrefix(): string;

  /**
   * Creates the highlight's suffix pattern.
   */
  protected abstract getSuffix(): string;
}
