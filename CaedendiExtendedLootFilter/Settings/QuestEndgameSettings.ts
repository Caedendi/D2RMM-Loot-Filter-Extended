import { EndgameConstants } from "../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { D2Color } from "../Models/Colors/D2Color";
import { DoubleHighlight } from "../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../Models/Highlights/EDoubleHighlightSize";
import { EBigTooltipSetting } from "./Enums/EBigTooltipSetting";
import { Settings } from "./Settings";

export abstract class QuestEndgameSettings {
  public static highlight = {
    essences: Settings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternEss : null,
    token:    Settings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternToa : null,
    keys:     Settings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternPkx : null,
    organs:   Settings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternOrg : null,
    standard: Settings.filter.questEndgame.highlights.endgame === SettingsConstants.all      ? EndgameConstants.patternStd : null,
    quest:    Settings.filter.questEndgame.highlights.quest   !== SettingsConstants.disabled ? Helper.questPattern : null,
    cube:     Settings.filter.questEndgame.highlights.quest   === SettingsConstants.all      ? Helper.questPattern : null,
  };

  // TODO: move
  protected static getHighlight(hlSetting: EDoubleHighlightSetting, bttSetting: EBigTooltipSetting, color?: D2Color): DoubleHighlight | null {
    if (hlSetting == EDoubleHighlightSetting.DISABLED)
      return null;

    if (hlSetting == EDoubleHighlightSetting.EXTRA_EXTRA_LARGE && bttSetting != EBigTooltipSetting.Disabled)
      hlSetting = EDoubleHighlightSetting.EXTRA_LARGE;

    return new DoubleHighlight(hlSetting);
  }
}
