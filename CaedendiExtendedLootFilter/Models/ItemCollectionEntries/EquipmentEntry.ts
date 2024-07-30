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
    newName?: string | null,
    nameColor?: D2Color,
    quality?: QualityTag | null,
    pattern?: IHighlightPattern | null,
    bigTooltip?: BigTooltipSetting | null
  ) {
    super(key, iLvlDigits, newName, nameColor, pattern, bigTooltip);
    this._qualityTag = quality ??= null;
  }

  // TODO: if quality indent tag is unnecessary, convert to simply only change this.applyNewName(translatedName);
  // public generateDisplayName(translatedName: string): string {
  //   if (!this.isVisible)
  //     return Settings.filter.settings.hidden;

  //   let displayName = this.applyNewName(translatedName);
  //   displayName = this.applyQualityTag(translatedName);
  //   displayName = this.applyHighlightPattern(displayName);
  //   displayName = this.applyQualityIndent(displayName);
  //   displayName = this.applyIlvlIndent(displayName);
  //   displayName = this.applyBigTooltip(displayName);

  //   return displayName;
  // }

  protected applyNewName(translatedName: string): string {
    let displayName = super.applyNewName(translatedName);
    return this.applyQualityTag(displayName);
  }

  protected applyQualityTag(displayName: string): string {
    if (this._qualityTag == null)
      return displayName;
      
    return this._qualityTag.apply(displayName);
  }

  // protected applyQualityIndent(displayName: string): string {
  //   if (this._qualityTag == null)
  //     return displayName;

  //   // TODO: implement

  //   return displayName;
  // }
}
