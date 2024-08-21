import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { RawSettings } from "../RawSettings";

export abstract class QuestEndgameSettings {
  public static readonly filter = {
    shouldShowEssences: RawSettings.filter.questEndgame.filter.shouldShowEssences,
    shouldShowStandard: RawSettings.filter.questEndgame.filter.shouldShowStandard,
  };

  // TODO: move?
  protected static readonly highlightColor: D2Color = HighlightConstants.defaultHighlightColor;

  public static readonly highlights = {
    isCubeEnabled: RawSettings.filter.questEndgame.highlights.isCubeEnabled,
    quest:    DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.quest,    this.highlightColor, RawSettings.filter.questEndgame.bigTooltips.questItems),
    essences: DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.essences, this.highlightColor, RawSettings.filter.questEndgame.bigTooltips.essences),
    token:    DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.tokens,   this.highlightColor, RawSettings.filter.questEndgame.bigTooltips.tokens),
    keys:     DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.keys,     this.highlightColor, RawSettings.filter.questEndgame.bigTooltips.keys),
    organs:   DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.organs,   this.highlightColor, RawSettings.filter.questEndgame.bigTooltips.organs),
    standard: DoubleHighlight.create(RawSettings.filter.questEndgame.highlights.standard, this.highlightColor, RawSettings.filter.questEndgame.bigTooltips.standard),
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
