import { EndgameConstants } from "../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { RawSettings } from "./RawSettings";
import { SettingsBase } from "./SettingsBase";

export abstract class QuestEndgameSettings extends SettingsBase {
  public static highlight = {
    essences: RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternEss : null,
    token:    RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternToa : null,
    keys:     RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternPkx : null,
    organs:   RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternOrg : null,
    standard: RawSettings.filter.questEndgame.highlights.endgame === SettingsConstants.all      ? EndgameConstants.patternStd : null,
    quest:    RawSettings.filter.questEndgame.highlights.quest   !== SettingsConstants.disabled ? Helper.questPattern : null,
    cube:     RawSettings.filter.questEndgame.highlights.quest   === SettingsConstants.all      ? Helper.questPattern : null,
  };
}
