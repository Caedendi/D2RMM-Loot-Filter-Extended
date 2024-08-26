import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/Enums/EiLvlDigits";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IQualityTag } from "../QualityTags/Interfaces/IQualityTag";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { iLvlItemEntry } from "./iLvlItemEntry";

export class EquipmentEntry extends iLvlItemEntry implements IItemEntry {
  /**
   * Quality Tag
   */
  private readonly _qualityTag: IQualityTag | null;
  protected get qualityTag(): IQualityTag | null {
    return this._qualityTag;
  }
  
  constructor(
    key: string,
    iLvlDigits: EiLvlDigits,
    quality: IQualityTag | null,
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
