import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { BigTooltip } from "./BigTooltip";
import { DoubleHighlightPatternBase } from "./DoubleHighlightPatternBase";
import { IHighlightPattern } from "./IHighlightPattern";

export class RainbowHighlightPattern extends DoubleHighlightPatternBase implements IHighlightPattern {
  protected altClrName  = ColorConstants.gold;
  protected paddingPatterns = HighlightConstants.padding1; // padding between individual patterns
  protected paddingName = HighlightConstants.padding3; // padding between name and patterns
  protected pattern: string;
  protected patternColors = [
    ColorConstants.red,
    ColorConstants.yellow,
    ColorConstants.blue,
    ColorConstants.green,
  ];

  // TODO
  constructor(bigTooltipSetting?: BigTooltipSetting) {
    super();
    this.pattern = BigTooltip.hasPickUpMessage(bigTooltipSetting ?? BigTooltipSetting.Disabled) ? HighlightConstants.pattern3 : HighlightConstants.pattern5;
  }

  protected getPrefix(): string {
    let prefix = CharConstants.empty;
    
    // all: clr/pattern/paddingPatterns
    this.patternColors.forEach((clr, i) => {
      // if last, use clrName+paddingName, else use paddingPatterns
      let next = (i == this.patternColors.length - 1) ? `${this.altClrName}${this.paddingName}` : this.paddingPatterns;
      prefix += `${clr}${this.pattern}${next}`;
    });
      
    return prefix;
  }

  protected getSuffix(): string {
    let sufix = CharConstants.empty;
    
    // first: paddingName/clr/pattern
    // rest:  paddingPatterns/clr/pattern
    // end:   altClrName
    this.patternColors.reverse().forEach((clr, i) => {
      let next = (i == 0) ? this.paddingName : this.paddingPatterns;
      sufix += `${next}${clr}${this.pattern}`;
    });
    
    return `${sufix}${this.altClrName}`;
  }
}
