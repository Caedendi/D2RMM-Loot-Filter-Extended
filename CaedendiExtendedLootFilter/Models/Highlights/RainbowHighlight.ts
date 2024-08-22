import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { BigTooltip } from "../BigTooltip";
import { DoubleHighlightBase } from "./DoubleHighlightBase";

export class RainbowHighlight extends DoubleHighlightBase {
  /**
   * paddingPatterns: padding between individual patterns
   */
  private readonly _patternsPadding = HighlightConstants.padding.p1;
  protected get patternsPadding() {
    return this._patternsPadding;
  }

  /**
   * patternColors: 
   */
  private readonly _patternColors = [ ColorConstants.red, ColorConstants.yellow, ColorConstants.blue, ColorConstants.green ];
  protected get patternColors() {
    return this._patternColors;
  }
  
  /**
   * nameColor
   */
  private readonly _nameColor = ColorConstants.gold;
  protected get nameColor() {
    return this._nameColor;
  }

  // TODO
  constructor(bigTooltipSetting?: EBigTooltipSetting) {
    let pattern = BigTooltip.hasPickUpMessage(bigTooltipSetting ?? EBigTooltipSetting.DISABLED) 
      ? HighlightConstants.pattern.p3 
      : HighlightConstants.pattern.p5;

    super(pattern, HighlightConstants.padding.p3);
  }

  protected getPrefix(): string {
    let prefix = CharConstants.empty;
    
    // all: clr/pattern/paddingPatterns
    this.patternColors.forEach((clr, i) => {
      // if last, use clrName+paddingName, else use paddingPatterns
      let next = (i == this.patternColors.length - 1) ? `${this.nameColor}${this.padding}` : this.patternsPadding;
      prefix += `${clr}${this.pattern}${next}`;
    });
      
    return prefix;
  }

  protected getSuffix(): string {
    let suffix = CharConstants.empty;
    
    // first: paddingName/clr/pattern
    // rest:  paddingPatterns/clr/pattern
    // end:   altClrName
    this.patternColors.reverse().forEach((clr, i) => {
      let next = (i == 0) ? this.padding : this.patternsPadding;
      suffix += `${next}${clr}${this.pattern}`;
    });
    
    return `${suffix}${this.nameColor}`;
  }
}
