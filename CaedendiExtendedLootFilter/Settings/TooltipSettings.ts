import { CharConstants } from "../Constants/CharConstants";
import { Settings } from "./Settings";

export abstract class TooltipSettings {
  // determine the size of "hidden" using mod.json's "Tooltip width for hidden items"
  public static hidden: string = `${CharConstants.space.repeat(Settings.tooltips.hiddenSize)}`;
}
