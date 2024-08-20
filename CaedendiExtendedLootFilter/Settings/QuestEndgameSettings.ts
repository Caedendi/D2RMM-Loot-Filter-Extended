import { Helper } from "../../../_helper";
import { EndgameConstants } from "../Constants/Items/EndgameConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
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
}
