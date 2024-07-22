import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { BigTooltipSetting, Settings } from "../../Settings/Settings";
import { DoubleHighlightPatternBase } from "./DoubleHighlightPatternBase";
import { IHighlightPattern } from "./IHighlightPattern";

export class RainbowHighlightPattern extends DoubleHighlightPatternBase implements IHighlightPattern {
  protected altClrName  = ColorConstants.gold;
  protected padding1 = HighlightConstants.padding1; // padding between individual patterns
  protected padding2 = HighlightConstants.padding3; // padding between name and facetAltPrefix / facetAltSuffix
  protected pattern: string;
  protected patternColors = [
    ColorConstants.red,
    ColorConstants.yellow,
    ColorConstants.blue,
    ColorConstants.green,
  ];

  // TODO
  constructor(hasPickUpMessage: boolean) {
    super();
    this.pattern = this.hasPickUpMessage() ? HighlightConstants.pattern3 : HighlightConstants.pattern5;
  }

  // protected static altPrefix = `${ColorConstants.red}${this.altPattern}${this.altPadding1}${ColorConstants.yellow}${this.altPattern}${this.altPadding1}${ColorConstants.blue}${this.altPattern}${this.altPadding1}${ColorConstants.green}${this.altPattern}${this.altClrName}${this.altPadding2}`;
  protected getPrefix(): string {
    let prefix = CharConstants.empty;
    
    // all: clr/pattern/padding1
    this.patternColors.forEach((clr, i) => {
      // if last, use clrName+padding2, else use padding1
      let next = (i == this.patternColors.length - 1) ? `${this.altClrName}${this.padding2}` : this.padding1;
      prefix += `${clr}${this.pattern}${next}`;
    });
      
    return prefix;
  }

  // protected static altSuffix = `${this.altPadding2}${ColorConstants.green}${this.altPattern}${this.altPadding1}${ColorConstants.blue}${this.altPattern}${this.altPadding1}${ColorConstants.yellow}${this.altPattern}${this.altPadding1}${ColorConstants.red}${this.altPattern}${this.altClrName}`;
  protected getSuffix(): string {
    let sufix = CharConstants.empty;
    
    // first: padding2/clr/pattern
    // rest:  padding1/clr/pattern
    // end:   altClrName
    this.patternColors.reverse().forEach((clr, i) => {
      let next = (i == 0) ? this.padding2 : this.padding1;
      sufix += `${next}${clr}${this.pattern}`;
    });
    
    return `${sufix}${this.altClrName}`;
  }
}
