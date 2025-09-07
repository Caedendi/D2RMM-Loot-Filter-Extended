import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { D2Color } from "../Colors/D2Color";
import { DoubleHighlightBase } from "./DoubleHighlightBase";
import { EDoubleHighlightSetting } from "./EDoubleHighlightSetting";
import { IHighlight } from "./Interfaces/IHighlight";

/**
 * A double highlight that can be applied to an ItemEntry.
 */
export class DoubleHighlight extends DoubleHighlightBase implements IHighlight {
  /**
   * The size setting for the highlight.
   */
  private readonly _setting: EDoubleHighlightSetting;
  protected get setting(): EDoubleHighlightSetting {
    return this._setting;
  }

  private constructor(hlSetting: EDoubleHighlightSetting, color?: D2Color, bttSetting: EBigTooltipSetting = EBigTooltipSetting.DISABLED) {
    if (hlSetting == EDoubleHighlightSetting.DISABLED)
      throw new Error("hlSetting can not be DISABLED.");

    if (hlSetting == EDoubleHighlightSetting.EXTRA_EXTRA_LARGE && bttSetting != EBigTooltipSetting.DISABLED)
      hlSetting = EDoubleHighlightSetting.EXTRA_LARGE;

    const settings = HighlightConstants.doubleHighlightSizes.find(size => size.setting == hlSetting)!;
    super(settings.pattern, settings.padding, color);
    this._setting = hlSetting;
  }

  /**
   * Creates a DoubleHighlight the exact same way as the constructor, but returns null if hlSetting is set to DISABLED.
   * @param hlSetting The size setting for the highlight.
   * @param color The color of the highlight.
   * @param bttSetting The Big Tooltip setting for the item that uses this highlight. Used to try to prevent the item's combined display name from exceeding the maximum amount of characters.
   * @returns A DoubleHighlight with the provided parameters, or null if hlSetting is set to DISABLED.
   */
  public static create(hlSetting: EDoubleHighlightSetting, color?: D2Color, bttSetting?: EBigTooltipSetting): DoubleHighlight | null {
    if (hlSetting == EDoubleHighlightSetting.DISABLED)
      return null;

    return new DoubleHighlight(hlSetting, color, bttSetting ??= EBigTooltipSetting.DISABLED);
  }

  protected getPrefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  protected getSuffix(): string {
    return `${this.padding}${this.color}${this.pattern}`;
  }
}
