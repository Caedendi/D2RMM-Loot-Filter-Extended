import { CharConstants } from "../../Constants/CharConstants";
import { D2Color } from "../Colors/D2Color";
import { HighlightBase } from "./HighlightBase";

/**
 * A single highlight that can be applied to an ItemEntry.
 */
export class SingleHighlight extends HighlightBase {
  /**
   * A string of spaces equalling the combined length of the pattern and padding properties.
   * 
   * Used to compensate for the width added to the single side of an item tooltip created by the highlight when applied.
   */
  public get indent(): string {
    return CharConstants.getSpaces(`${this.pattern}${this.padding}`.length);
  }

  /**
   * prefix
   */
  protected get prefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  constructor(pattern: string, color: D2Color | null = null, padding: string | null = null) {
    if (pattern === CharConstants.empty) {
      throw new Error("SingleHighlight pattern can not be empty.");
    }

    super(pattern, padding, color);
  }

  public apply(displayName: string): string {
    return `${this.prefix}${displayName}`;
  }
}
