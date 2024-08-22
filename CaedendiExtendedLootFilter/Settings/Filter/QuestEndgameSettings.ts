import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { RawSettings } from "../RawSettings";
import { FilterSettings } from "./FilterSettings";

export abstract class QuestEndgameSettings {
  public static readonly filter = {
    shouldShowEssences: RawSettings.filter.questEndgame.filter.shouldShowEssences,
    shouldShowStandard: RawSettings.filter.questEndgame.filter.shouldShowStandard,
  };

  public static readonly highlights = {
    isCubeEnabled: RawSettings.filter.questEndgame.highlights.isCubeEnabled,
    quest:    DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.quest,    FilterSettings.defaultHighlightColor, RawSettings.filter.questEndgame.bigTooltips.questItems),
    essences: DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.essences, FilterSettings.defaultHighlightColor, RawSettings.filter.questEndgame.bigTooltips.essences),
    token:    DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.tokens,   FilterSettings.defaultHighlightColor, RawSettings.filter.questEndgame.bigTooltips.tokens),
    keys:     DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.keys,     FilterSettings.defaultHighlightColor, RawSettings.filter.questEndgame.bigTooltips.keys),
    organs:   DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.organs,   FilterSettings.defaultHighlightColor, RawSettings.filter.questEndgame.bigTooltips.organs),
    standard: DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.standard, FilterSettings.defaultHighlightColor, RawSettings.filter.questEndgame.bigTooltips.standard),
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
