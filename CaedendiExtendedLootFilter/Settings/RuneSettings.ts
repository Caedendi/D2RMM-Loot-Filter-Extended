import { D2Color } from "../Models/Colors/D2Color";
import { DoubleHighlight } from "../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../Models/Highlights/EDoubleHighlightSize";
import { IHighlight } from "../Models/Highlights/Interfaces/IHighlight";
import { EBigTooltipSetting } from "./Enums/EBigTooltipSetting";
import { RawSettings } from "./RawSettings";
import { SettingsBase } from "./SettingsBase";

export abstract class RuneSettings extends SettingsBase {
  public static isLowVisible:    boolean = RawSettings.filter.runes.low.isVisible;
  public static isLowMidVisible: boolean = RawSettings.filter.runes.lowMid.isVisible;
  public static isMidVisible:    boolean = RawSettings.filter.runes.mid.isVisible;
  public static isHighVisible:   boolean = RawSettings.filter.runes.high.isVisible;

  public static lowNameColor:    D2Color = RawSettings.filter.runes.low.nameColor;
  public static lowMidNameColor: D2Color = RawSettings.filter.runes.lowMid.nameColor;
  public static midNameColor:    D2Color = RawSettings.filter.runes.mid.nameColor;
  public static highNameColor:   D2Color = RawSettings.filter.runes.high.nameColor;

  public static lowNumberColor:    D2Color = RawSettings.filter.runes.low.numberColor;
  public static lowMidNumberColor: D2Color = RawSettings.filter.runes.lowMid.numberColor;
  public static midNumberColor:    D2Color = RawSettings.filter.runes.mid.numberColor;
  public static highNumberColor:   D2Color = RawSettings.filter.runes.high.numberColor;

  public static lowHighlight:    IHighlight | null = this.createHighlight(RawSettings.filter.runes.low.highlight,    RawSettings.filter.runes.low.highlightColor);
  public static lowMidHighlight: IHighlight | null = this.createHighlight(RawSettings.filter.runes.lowMid.highlight, RawSettings.filter.runes.lowMid.highlightColor);
  public static midHighlight:    IHighlight | null = this.createHighlight(RawSettings.filter.runes.mid.highlight,    RawSettings.filter.runes.mid.highlightColor);
  public static highHighlight:   IHighlight | null = this.createHighlight(RawSettings.filter.runes.high.highlight,   RawSettings.filter.runes.high.highlightColor);

  public static lowBigTooltipSetting:    EBigTooltipSetting = RawSettings.filter.runes.low.bigTooltip;
  public static lowMidBigTooltipSetting: EBigTooltipSetting = RawSettings.filter.runes.lowMid.bigTooltip;
  public static midBigTooltipSetting:    EBigTooltipSetting = RawSettings.filter.runes.mid.bigTooltip;
  public static highBigTooltipSetting:   EBigTooltipSetting = RawSettings.filter.runes.high.bigTooltip;

  public static isLowLightPillarsEnabled:    boolean = RawSettings.lightPillars.runes.isLowRunesEnabled;
  public static isLowMidLightPillarsEnabled: boolean = RawSettings.lightPillars.runes.isLowMidRunesEnabled;
  public static isMidLightPillarsEnabled:    boolean = RawSettings.lightPillars.runes.isMidRunesEnabled;
  public static isHighLightPillarsEnabled:   boolean = RawSettings.lightPillars.runes.isHighRunesEnabled;

  public static lowDropSound:    string = RawSettings.dropSounds.runes.low;
  public static lowMidDropSound: string = RawSettings.dropSounds.runes.lowMid;
  public static midDropSound:    string = RawSettings.dropSounds.runes.mid;
  public static highDropSound:   string = RawSettings.dropSounds.runes.high;

  protected static createHighlight(setting: EDoubleHighlightSetting, color?: D2Color): DoubleHighlight | null {
    Helper.createHighlight(
    Helper.createHighlight(
    Helper.createHighlight(
    Helper.createHighlight(
  }
}
