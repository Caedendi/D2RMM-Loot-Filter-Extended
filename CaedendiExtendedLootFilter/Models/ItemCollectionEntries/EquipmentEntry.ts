import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { iLvlDigits } from "../../Settings/StatsAndModifiersSettings";
import { D2Color } from "../Colors/D2Color";
import { IHighlightPattern } from "./IHighlightPattern";
import { IItemEntry } from "./IItemEntry";
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
    iLvlDigits: iLvlDigits,
    quality: QualityTag,
    newName?: string | null,
    nameColor?: D2Color,
    pattern?: IHighlightPattern | null,
    bigTooltip?: BigTooltipSetting | null
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
