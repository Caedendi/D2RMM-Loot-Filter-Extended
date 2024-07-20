import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { Settings } from "../../Settings/Settings";
import { iLvlDigits } from "../../Settings/StatsAndModifiersSettings";
import { IItemEntry } from "../IItemEntry";
import { BigTooltip } from "./BigTooltip";
import { IHighlightPattern } from "./IHighlightPattern";
import { NewItemEntry } from "./NewItemEntry";
import { QualityTag } from "./QualityTag";

export class iLvlItemEntry extends NewItemEntry implements IItemEntry {
  /**
   * iLvl
   */
  private _iLvl?: iLvlDigits;
  public get iLvl(): iLvlDigits {
    return this._iLvl;
  }
  public set iLvl(value: iLvlDigits) {
    this._iLvl = value;
  }
  
  constructor(key: string, iLvlDigits: iLvlDigits, newName?: string, pattern?: IHighlightPattern, bigTooltip?: BigTooltip, quality?: QualityTag) {
    super(key, newName, ColorConstants.none, pattern, bigTooltip);
    this._iLvl = iLvlDigits;
  }

  // TODO
  public generateDisplayName(translatedName: string): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    let displayName = this.setNewOrTranslatedName(translatedName);
    displayName = this.applyHighlightPattern(displayName);

    // set ilvl indent
    // set item quality indent

    displayName = this.applyBigTooltip(displayName);

    return displayName;
  }

  protected applyIlvlIndent(displayName: string): string {
    if (!Settings.statsAndModifiers.itemLevel.shouldFixIndentation)
      return;
    

    // if highlight pattern is double pattern => fix indent
    //   displayName = `${StatsAndModifiersSettings.getiLvlIndent(this._iLvl)}${displayName}`;

    return displayName;
  }
}
