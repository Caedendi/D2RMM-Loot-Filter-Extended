import { D2Color } from "../../Models/Colors/D2Color";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSetting";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { EBigTooltipSetting } from "../Enums/EBigTooltipSetting";
import { RawSettings } from "../RawSettings";

class RuneTierSetting {
  public readonly isVisible: boolean;
  public readonly highlight: IHighlight | null;
  public readonly nameColor: D2Color;
  public readonly numberColor: D2Color;
  public readonly bigTooltip: EBigTooltipSetting;

  constructor(
    isVisible: boolean,
    hlSetting: EDoubleHighlightSetting,
    hlColor: D2Color,
    nameColor: D2Color,
    numberColor: D2Color,
    bttSetting: EBigTooltipSetting
  ) {
    this.isVisible = isVisible;
    this.highlight = hlSetting == EDoubleHighlightSetting.DISABLED ? null : new DoubleHighlight(hlSetting, hlColor, bttSetting);
    this.nameColor = nameColor;
    this.numberColor = numberColor;
    this.bigTooltip = bttSetting;
  }
}

// TODO: fix default highlight color
export abstract class RunesSettings {
  public static readonly isEnabled:       boolean = RawSettings.filter.runes.isEnabled;
  public static readonly shouldHideAffix: boolean = RawSettings.filter.runes.shouldHideAffix;
  public static readonly shouldAddNumber: boolean = RawSettings.filter.runes.shouldAddNumber;

  public static readonly low: RuneTierSetting = new RuneTierSetting(
    RawSettings.filter.runes.low.isVisible,
    RawSettings.filter.runes.low.highlight,
    RawSettings.filter.runes.low.highlightColor,
    RawSettings.filter.runes.low.nameColor,
    RawSettings.filter.runes.low.numberColor,
    RawSettings.filter.runes.low.bigTooltip,
  );

  public static readonly lowMid: RuneTierSetting = new RuneTierSetting(
    RawSettings.filter.runes.lowMid.isVisible,
    RawSettings.filter.runes.lowMid.highlight,
    RawSettings.filter.runes.lowMid.highlightColor,
    RawSettings.filter.runes.lowMid.nameColor,
    RawSettings.filter.runes.lowMid.numberColor,
    RawSettings.filter.runes.lowMid.bigTooltip,
  );

  public static readonly mid: RuneTierSetting = new RuneTierSetting(
    RawSettings.filter.runes.mid.isVisible,
    RawSettings.filter.runes.mid.highlight,
    RawSettings.filter.runes.mid.highlightColor,
    RawSettings.filter.runes.mid.nameColor,
    RawSettings.filter.runes.mid.numberColor,
    RawSettings.filter.runes.mid.bigTooltip,
  );

  public static readonly high: RuneTierSetting = new RuneTierSetting(
    RawSettings.filter.runes.high.isVisible,
    RawSettings.filter.runes.high.highlight,
    RawSettings.filter.runes.high.highlightColor,
    RawSettings.filter.runes.high.nameColor,
    RawSettings.filter.runes.high.numberColor,
    RawSettings.filter.runes.high.bigTooltip,
  );
}
