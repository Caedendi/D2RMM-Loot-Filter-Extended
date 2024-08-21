import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class QuestEndgameSettings extends FilterSettingsBase {
  public static readonly filter = {
    shouldShowEssences: RawSettings.filter.questEndgame.filter.shouldShowEssences,
    shouldShowStandard: RawSettings.filter.questEndgame.filter.shouldShowStandard,
  };

  public static readonly highlights = {
    essences: RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternEss : null,
    token:    RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternToa : null,
    keys:     RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternPkx : null,
    organs:   RawSettings.filter.questEndgame.highlights.endgame !== SettingsConstants.disabled ? EndgameConstants.patternOrg : null,
    standard: RawSettings.filter.questEndgame.highlights.endgame === SettingsConstants.all      ? EndgameConstants.patternStd : null,
    quest:    RawSettings.filter.questEndgame.highlights.quest   !== SettingsConstants.disabled ? Helper.questPattern : null,
    cube:     RawSettings.filter.questEndgame.highlights.quest   === SettingsConstants.all      ? Helper.questPattern : null,
  };

  public static readonly bigTooltips = {
    questItems: RawSettings.filter.questEndgame.bigTooltips.questItems,
    essences:   RawSettings.filter.questEndgame.bigTooltips.essences,
    tokens:     RawSettings.filter.questEndgame.bigTooltips.tokens,
    keys:       RawSettings.filter.questEndgame.bigTooltips.keys,
    organs:     RawSettings.filter.questEndgame.bigTooltips.organs,
    standard:   RawSettings.filter.questEndgame.bigTooltips.standard,
  };
}
