import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { D2Color } from "../Colors/D2Color";
import { DoubleHighlightBase } from "./DoubleHighlightBase";
import { EDoubleHighlightSetting } from "./EDoubleHighlightSetting";
import { IHighlight } from "./Interfaces/IHighlight";

export class DoubleHighlight extends DoubleHighlightBase implements IHighlight {
  private readonly _size: EDoubleHighlightSetting;
  protected get size(): EDoubleHighlightSetting {
    return this._size;
  }

  constructor(patternSize: EDoubleHighlightSetting, color?: D2Color) {
    let settings = HighlightConstants.doubleHighlightSizes.find(size => size.setting == patternSize);
    super(settings.pattern, settings.padding, color);
    this._size = patternSize;
  }

  protected getPrefix(): string {
    return `${this.color}${this.pattern}${this.padding}`;
  }

  protected getSuffix(): string {
    return `${this.padding}${this.color}${this.pattern}`;
  }
}
