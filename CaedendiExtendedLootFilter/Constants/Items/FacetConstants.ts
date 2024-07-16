import { BigTooltipSetting, Settings } from "../../Settings/Settings";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export abstract class FacetConstants {
  public static facetId = "Rainbow Facet";
  public static facetName = this.facetId;
  
  protected static altClrName  = ColorConstants.gold;
  protected static altPattern  = this.hasPickUpMessage() ? HighlightConstants.pattern3 : HighlightConstants.pattern5;
  protected static altPadding1 = HighlightConstants.padding1; // padding between individual patterns
  protected static altPadding2 = HighlightConstants.padding3; // padding between name and facetAltPrefix / facetAltSuffix
  protected static altPatternColors = [
    ColorConstants.red,
    ColorConstants.yellow,
    ColorConstants.blue,
    ColorConstants.green,
  ];
  
  public static prefix = Settings.filter.jewelry.isFacetAltPatternEnabled ? this.createAltPrefix() : HighlightConstants.uniquePrefix;
  public static suffix = Settings.filter.jewelry.isFacetAltPatternEnabled ? this.createAltSuffix() : HighlightConstants.uniqueSuffix;
  
  protected static hasPickUpMessage(): boolean {
    if (!Settings.bigTooltips.isEnabled)
      return false;

    return Settings.bigTooltips.jewelry.facetsSetting == BigTooltipSetting.TwoLinesPickUp 
        || Settings.bigTooltips.jewelry.facetsSetting == BigTooltipSetting.FourLinesPickUp;
  }
  
  // protected static altPrefix = `${ColorConstants.red}${this.altPattern}${this.altPadding1}${ColorConstants.yellow}${this.altPattern}${this.altPadding1}${ColorConstants.blue}${this.altPattern}${this.altPadding1}${ColorConstants.green}${this.altPattern}${this.altClrName}${this.altPadding2}`;
  protected static createAltPrefix(): string {
    let altPrefix = "";
    
    // all: clr/pattern/padding1
    this.altPatternColors.forEach((clr, i) => {
      let padding = (i == this.altPatternColors.length - 1) ? `${this.altClrName}${this.altPadding2}` : this.altPadding1; // if last, use clrName+padding2, else use padding1
      altPrefix += `${clr}${this.altPattern}${padding}`;
    });
    
    return altPrefix;
  }
  
  // protected static altSuffix = `${this.altPadding2}${ColorConstants.green}${this.altPattern}${this.altPadding1}${ColorConstants.blue}${this.altPattern}${this.altPadding1}${ColorConstants.yellow}${this.altPattern}${this.altPadding1}${ColorConstants.red}${this.altPattern}${this.altClrName}`;
  protected static createAltSuffix(): string {
    let altSuffix = "";

    // first: padding2/clr/pattern
    // rest:  padding1/clr/pattern
    // end:   altClrName
    this.altPatternColors.reverse().forEach((clr, i) => {
      let padding = (i == 0) ? this.altPadding2 : this.altPadding1;
      altSuffix += `${padding}${clr}${this.altPattern}`;
    });

    return `${altSuffix}${this.altClrName}`;
  }
}
