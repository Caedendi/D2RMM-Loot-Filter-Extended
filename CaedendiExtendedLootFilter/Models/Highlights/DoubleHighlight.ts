import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { D2Color } from "../Colors/D2Color";
import { DoubleHighlightBase } from "./DoubleHighlightBase";
import { EDoubleHighlightSetting } from "./EDoubleHighlightSetting";
import { IHighlight } from "./Interfaces/IHighlight";

export class DoubleHighlight extends DoubleHighlightBase implements IHighlight {
  private readonly _setting: EDoubleHighlightSetting;
  protected get setting(): EDoubleHighlightSetting {
    return this._setting;
  }

  constructor(hlSetting: EDoubleHighlightSetting, color?: D2Color, bttSetting: EBigTooltipSetting = EBigTooltipSetting.Disabled) {
    if (hlSetting == EDoubleHighlightSetting.DISABLED)
      throw new Error("hlSetting can not be DISABLED.");

    if (hlSetting == EDoubleHighlightSetting.EXTRA_EXTRA_LARGE && bttSetting != EBigTooltipSetting.Disabled)
      hlSetting = EDoubleHighlightSetting.EXTRA_LARGE;

    let settings = HighlightConstants.doubleHighlightSizes.find(size => size.setting == hlSetting);
    super(settings.pattern, settings.padding, color);
    this._setting = hlSetting;
  }

  public static create(hlSetting: EDoubleHighlightSetting, color?: D2Color, bttSetting?: EBigTooltipSetting): DoubleHighlight | null {
    if (hlSetting == EDoubleHighlightSetting.DISABLED)
      return null;

    return new DoubleHighlight(hlSetting, color, bttSetting ??= EBigTooltipSetting.Disabled);
  }

  protected getPrefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  protected getSuffix(): string {
    return `${this.padding}${this.color}${this.pattern}`;
  }
}
