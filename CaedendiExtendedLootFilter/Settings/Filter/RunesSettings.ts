import { D2Color } from "../../Models/Colors/D2Color";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSetting";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { EBigTooltipSetting } from "../Enums/EBigTooltipSetting";
import { RawSettings } from "../RawSettings";
import { FilterSettingsBase } from "./FilterSettingsBase";

export abstract class RunesSettings extends FilterSettingsBase {
  public static readonly isEnabled:       boolean = RawSettings.filter.runes.isEnabled;
  public static readonly shouldHideAffix: boolean = RawSettings.filter.runes.shouldHideAffix;
  public static readonly shouldAddNumber: boolean = RawSettings.filter.runes.shouldAddNumber;

  public static readonly low = {
    isVisible:      RawSettings.filter.runes.low.isVisible,
    highlight:      this.createHighlight(RawSettings.filter.runes.low.highlight, RawSettings.filter.runes.low.highlightColor),
    highlightColor: RawSettings.filter.runes.low.highlightColor,
    nameColor:      RawSettings.filter.runes.low.nameColor,
    numberColor:    RawSettings.filter.runes.low.numberColor,
    bigTooltip:     RawSettings.filter.runes.low.bigTooltip,
  };

  public static readonly lowMid: RuneTierSetting = {
    isVisible:      RawSettings.filter.runes.lowMid.isVisible,
    highlight:      this.createHighlight(RawSettings.filter.runes.lowMid.highlight, RawSettings.filter.runes.lowMid.highlightColor),
    highlightColor: RawSettings.filter.runes.lowMid.highlightColor,
    nameColor:      RawSettings.filter.runes.lowMid.nameColor,
    numberColor:    RawSettings.filter.runes.lowMid.numberColor,
    bigTooltip:     RawSettings.filter.runes.lowMid.bigTooltip,
  };

  public static readonly mid = {
    isVisible:      RawSettings.filter.runes.mid.isVisible,
    highlight:      this.createHighlight(RawSettings.filter.runes.mid.highlight, RawSettings.filter.runes.mid.highlightColor),
    highlightColor: RawSettings.filter.runes.mid.highlightColor,
    nameColor:      RawSettings.filter.runes.mid.nameColor,
    numberColor:    RawSettings.filter.runes.mid.numberColor,
    bigTooltip:     RawSettings.filter.runes.mid.bigTooltip,
  };

  public static readonly high = {
    isVisible:      RawSettings.filter.runes.high.isVisible,
    highlight:      this.createHighlight(RawSettings.filter.runes.high.highlight, RawSettings.filter.runes.high.highlightColor),
    highlightColor: RawSettings.filter.runes.high.highlightColor,
    nameColor:      RawSettings.filter.runes.high.nameColor,
    numberColor:    RawSettings.filter.runes.high.numberColor,
    bigTooltip:     RawSettings.filter.runes.high.bigTooltip,
  };

  protected static createHighlight(setting: EDoubleHighlightSetting, color?: D2Color): DoubleHighlight | null {
    Helper.createHighlight(
    Helper.createHighlight(
    Helper.createHighlight(
    Helper.createHighlight(
  }
}

class RuneTierSetting {
  public isVisible:      boolean;
  public highlight:      IHighlight | null;
  public highlightColor: D2Color;
  public nameColor:      D2Color;
  public numberColor:    D2Color;
  public bigTooltip:     EBigTooltipSetting;
}
