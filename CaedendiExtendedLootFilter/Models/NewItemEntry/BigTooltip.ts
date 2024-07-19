import { CharConstants } from "../../Constants/CharConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { BigTooltipSetting } from "../../Settings/Settings";

export class BigTooltip {
  protected setting: BigTooltipSetting = BigTooltipSetting.Disabled;
  protected prefix: string = CharConstants.empty;
  protected suffix: string = CharConstants.empty;
  protected bigTooltipPadding: string = HighlightConstants.bttPadding
}
