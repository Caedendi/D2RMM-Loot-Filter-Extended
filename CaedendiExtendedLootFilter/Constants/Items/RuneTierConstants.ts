import { D2Color } from "../../Models/Colors/D2Color";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { RuneTier } from "../../Models/Items/RuneTier";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { HighlightConstants } from "./HighlightConstants";
import { RuneConstants } from "./RuneConstants";

export abstract class RuneTierConstants {
  protected static isLowVisible:    boolean = Settings.filter.runes.low.isVisible;
  protected static isLowMidVisible: boolean = Settings.filter.runes.lowMid.isVisible;
  protected static isMidVisible:    boolean = Settings.filter.runes.mid.isVisible;
  protected static isHighVisible:   boolean = Settings.filter.runes.high.isVisible;

  protected static lowNameColor:    D2Color = Settings.filter.runes.low.nameColor;
  protected static lowMidNameColor: D2Color = Settings.filter.runes.low.nameColor;
  protected static midNameColor:    D2Color = Settings.filter.runes.low.nameColor;
  protected static highNameColor:   D2Color = Settings.filter.runes.low.nameColor;

  protected static lowNumberColor:    D2Color = Settings.filter.runes.low.numberColor;
  protected static lowMidNumberColor: D2Color = Settings.filter.runes.low.numberColor;
  protected static midNumberColor:    D2Color = Settings.filter.runes.low.numberColor;
  protected static highNumberColor:   D2Color = Settings.filter.runes.low.numberColor;

  protected static lowHighlight:    IHighlight | null = HighlightConstants.createHighlight(Settings.filter.runes.low.highlight, Settings.filter.runes.low.highlightColor);
  protected static lowMidHighlight: IHighlight | null = HighlightConstants.createHighlight(Settings.filter.runes.low.highlight, Settings.filter.runes.low.highlightColor);
  protected static midHighlight:    IHighlight | null = HighlightConstants.createHighlight(Settings.filter.runes.low.highlight, Settings.filter.runes.low.highlightColor);
  protected static highHighlight:   IHighlight | null = HighlightConstants.createHighlight(Settings.filter.runes.low.highlight, Settings.filter.runes.low.highlightColor);

  protected static lowBigTooltipSetting:    EBigTooltipSetting = Settings.bigTooltips.runes.lowRunesSetting;
  protected static lowMidBigTooltipSetting: EBigTooltipSetting = Settings.bigTooltips.runes.lowMidRunesSetting;
  protected static midBigTooltipSetting:    EBigTooltipSetting = Settings.bigTooltips.runes.midRunesSetting;
  protected static highBigTooltipSetting:   EBigTooltipSetting = Settings.bigTooltips.runes.highRunesSetting;

  public static tiers = [
    new RuneTier(1, RuneConstants.tiers.low,    this.isLowVisible,    this.lowHighlight,    this.lowBigTooltipSetting,    Settings.lightPillars.runes.isLowRunesEnabled,    Settings.dropSounds.runes.low),
    new RuneTier(2, RuneConstants.tiers.lowMid, this.isLowMidVisible, this.lowMidHighlight, this.lowMidBigTooltipSetting, Settings.lightPillars.runes.isLowMidRunesEnabled, Settings.dropSounds.runes.lowMid),
    new RuneTier(3, RuneConstants.tiers.mid,    this.isMidVisible,    this.midHighlight,    this.midBigTooltipSetting,    Settings.lightPillars.runes.isMidRunesEnabled,    Settings.dropSounds.runes.mid),
    new RuneTier(4, RuneConstants.tiers.high,   this.isHighVisible,   this.highHighlight,   this.highBigTooltipSetting,   Settings.lightPillars.runes.isHighRunesEnabled,   Settings.dropSounds.runes.high),
  ];
}
