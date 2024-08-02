import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/EiLvlDigits";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { iLvlItemEntry } from "./iLvlItemEntry";
import { QualityTag } from "./QualityTag";

export class EquipmentEntry extends iLvlItemEntry implements IItemEntry {
  /**
   * Quality Tag
   */
  private _qualityTag: QualityTag | null;
  protected get qualityTag(): QualityTag | null {
    return this._qualityTag;
  }
  protected set qualityTag(value: QualityTag) {
    this._qualityTag = value;
  }
  
  constructor(
    key: string,
    iLvlDigits: EiLvlDigits,
    quality: QualityTag,
    newName?: string | null,
    nameColor?: D2Color,
    pattern?: IHighlight | null,
    bigTooltip?: EBigTooltipSetting | null
  ) {
    super(key, iLvlDigits, newName, nameColor, pattern, bigTooltip);
    this._qualityTag = quality;
  }

  protected applyNewName(translatedName: string): string {
    let displayName = super.applyNewName(translatedName);
    return this.applyQualityTag(displayName);
  }

  protected applyQualityTag(displayName: string): string {
    if (this._qualityTag == null)
      return displayName;
      
    return this._qualityTag.apply(displayName);
  }
}
