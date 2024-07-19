import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { IItemEntry } from "../IItemEntry";
import { BigTooltip } from "./BigTooltip";
import { IHighlightPattern } from "./IHighlightPattern";
import { NewItemEntry } from "./NewItemEntry";
import { QualityTag } from "./QualityTag";

export class EquipmentEntry extends NewItemEntry implements IItemEntry {
  protected _qualityTag?: QualityTag;
  
  constructor(key: string, newName?: string, pattern?: IHighlightPattern, bigTooltip?: BigTooltip, quality?: QualityTag) {
    super(key, newName, ColorConstants.none, pattern, bigTooltip);
    this._qualityTag = quality;
  }

  public generateDisplayName(translatedName: string): string {
    let displayName = this.newName === CharConstants.empty ? translatedName : this.newName;
    
    if (this._qualityTag != null)
      displayName = this._qualityTag.apply(displayName);

    return super.generateDisplayName(displayName);
  }
}
