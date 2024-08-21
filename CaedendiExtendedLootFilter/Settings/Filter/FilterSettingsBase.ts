import { D2Color } from "../../Models/Colors/D2Color";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSetting";
import { EBigTooltipSetting } from "../Enums/EBigTooltipSetting";

export abstract class FilterSettingsBase {


  // TODO: move
  protected static getHighlight(hlSetting: EDoubleHighlightSetting, bttSetting: EBigTooltipSetting, color?: D2Color): DoubleHighlight | null {
    if (hlSetting == EDoubleHighlightSetting.DISABLED)
      return null;

    if (hlSetting == EDoubleHighlightSetting.EXTRA_EXTRA_LARGE && bttSetting != EBigTooltipSetting.Disabled)
      hlSetting = EDoubleHighlightSetting.EXTRA_LARGE;

    return new DoubleHighlight(hlSetting);
  }
}
