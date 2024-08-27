import { D2Color } from "../../Colors/D2Color";

/**
 * A highlight character or pattern that can be applied to an ItemEntry.
 */
export interface IHighlight {
  /**
   * The color of the highlight.
   */
  color: D2Color;

  /**
   * The highlight's pattern.
   */
  pattern: string;

  /**
   * The padding between the item name and the highlight.
   */
  padding: string;

  /**
   * Applies the highlight to the provided displayName.
   * @param displayName The display name to apply to.
   * @returns The displayName with added highlight.
   */
  apply(displayName: string): string;
}
