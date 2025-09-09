import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { EDoubleHighlightSetting } from "../../Settings/Enums/EDoubleHighlightSetting";
import { D2Color } from "../Colors/D2Color";
import { DoubleHighlightBase } from "./DoubleHighlightBase";
import { EDoubleHighlightSize } from "./EDoubleHighlightSize";
import { IHighlight } from "./Interfaces/IHighlight";

/**
 * A double highlight that can be applied to an ItemEntry.
 */
export class DoubleHighlight extends DoubleHighlightBase implements IHighlight {
  /**
   * The size setting for the highlight.
   */
  public readonly _setting: EDoubleHighlightSize;
  protected get setting(): EDoubleHighlightSize {
    return this._setting;
  }

  public constructor(size: EDoubleHighlightSize, color?: D2Color, bttSetting: EBigTooltipSetting = EBigTooltipSetting.DISABLED) {
    if (size == EDoubleHighlightSize.EXTRA_EXTRA_LARGE && bttSetting != EBigTooltipSetting.DISABLED)
      size = EDoubleHighlightSize.EXTRA_LARGE;

    const { pattern, padding } = HighlightConstants.getDoubleHighlightSettings(size);
    super(pattern, padding, color);
    this._setting = size;
  }

  public static createOrNull(setting: EDoubleHighlightSetting, color?: D2Color, bttSetting: EBigTooltipSetting = EBigTooltipSetting.DISABLED): DoubleHighlight | null {
    const size = EDoubleHighlightSize.fromSetting(setting);
    return size === null ? null : new DoubleHighlight(size, color, bttSetting);
  }

  protected getPrefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  protected getSuffix(): string {
    return `${this.padding}${this.color}${this.pattern}`;
  }
}
