import { D2Color } from "../Models/Colors/D2Color";
import { DoubleHighlight } from "../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../Models/Highlights/EDoubleHighlightSize";
import { IHighlight } from "../Models/Highlights/Interfaces/IHighlight";
import { EBigTooltipSetting } from "./Enums/EBigTooltipSetting";
import { Settings } from "./Settings";

export abstract class RuneSettings {
  public static isLowVisible:    boolean = Settings.filter.runes.low.isVisible;
  public static isLowMidVisible: boolean = Settings.filter.runes.lowMid.isVisible;
  public static isMidVisible:    boolean = Settings.filter.runes.mid.isVisible;
  public static isHighVisible:   boolean = Settings.filter.runes.high.isVisible;

  public static lowNameColor:    D2Color = Settings.filter.runes.low.nameColor;
  public static lowMidNameColor: D2Color = Settings.filter.runes.lowMid.nameColor;
  public static midNameColor:    D2Color = Settings.filter.runes.mid.nameColor;
  public static highNameColor:   D2Color = Settings.filter.runes.high.nameColor;

  public static lowNumberColor:    D2Color = Settings.filter.runes.low.numberColor;
  public static lowMidNumberColor: D2Color = Settings.filter.runes.lowMid.numberColor;
  public static midNumberColor:    D2Color = Settings.filter.runes.mid.numberColor;
  public static highNumberColor:   D2Color = Settings.filter.runes.high.numberColor;

  public static lowHighlight:    IHighlight | null = this.createHighlight(Settings.filter.runes.low.highlight,    Settings.filter.runes.low.highlightColor);
  public static lowMidHighlight: IHighlight | null = this.createHighlight(Settings.filter.runes.lowMid.highlight, Settings.filter.runes.lowMid.highlightColor);
  public static midHighlight:    IHighlight | null = this.createHighlight(Settings.filter.runes.mid.highlight,    Settings.filter.runes.mid.highlightColor);
  public static highHighlight:   IHighlight | null = this.createHighlight(Settings.filter.runes.high.highlight,   Settings.filter.runes.high.highlightColor);

  public static lowBigTooltipSetting:    EBigTooltipSetting = Settings.filter.runes.low.bigTooltip;
  public static lowMidBigTooltipSetting: EBigTooltipSetting = Settings.filter.runes.lowMid.bigTooltip;
  public static midBigTooltipSetting:    EBigTooltipSetting = Settings.filter.runes.mid.bigTooltip;
  public static highBigTooltipSetting:   EBigTooltipSetting = Settings.filter.runes.high.bigTooltip;

  public static isLowLightPillarsEnabled:    boolean = Settings.lightPillars.runes.isLowRunesEnabled;
  public static isLowMidLightPillarsEnabled: boolean = Settings.lightPillars.runes.isLowMidRunesEnabled;
  public static isMidLightPillarsEnabled:    boolean = Settings.lightPillars.runes.isMidRunesEnabled;
  public static isHighLightPillarsEnabled:   boolean = Settings.lightPillars.runes.isHighRunesEnabled;

  public static lowDropSound:    string = Settings.dropSounds.runes.low;
  public static lowMidDropSound: string = Settings.dropSounds.runes.lowMid;
  public static midDropSound:    string = Settings.dropSounds.runes.mid;
  public static highDropSound:   string = Settings.dropSounds.runes.high;

  protected static createHighlight(setting: EDoubleHighlightSetting, color?: D2Color): DoubleHighlight | null {
    Helper.createHighlight(
    Helper.createHighlight(
    Helper.createHighlight(
    Helper.createHighlight(
  }
}
