import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { iLvlDigits } from "../../Settings/StatsAndModifiersSettings";
import { DoubleHighlightPatternBase } from "./DoubleHighlightPatternBase";
import { IHighlightPattern } from "./IHighlightPattern";

export class RainbowHighlightPattern extends DoubleHighlightPatternBase implements IHighlightPattern {
  protected _prefix: string = FacetConstants.createRainbowPrefix();
  protected _suffix: string = FacetConstants.createRainbowSuffix();

  constructor(iLvlFix: iLvlDigits) {
    super(iLvlFix);
  }

  protected getPrefix(): string {
    return `${this._prefix}`;
  }

  protected getSuffix(): string {
    return `${this._suffix}`;
  }
}
