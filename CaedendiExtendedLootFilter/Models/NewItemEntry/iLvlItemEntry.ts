import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { Settings } from "../../Settings/Settings";
import { iLvlDigits, StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { IItemEntry } from "../IItemEntry";
import { BigTooltip } from "./BigTooltip";
import { IHighlightPattern } from "./IHighlightPattern";
import { NewItemEntry } from "./NewItemEntry";

export class iLvlItemEntry extends NewItemEntry implements IItemEntry {
  /**
   * iLvl
   */
  private _iLvl: iLvlDigits;
  protected get iLvl(): iLvlDigits {
    return this._iLvl;
  }
  protected set iLvl(value: iLvlDigits) {
    this._iLvl = value;
  }
  
  constructor(key: string, iLvlDigits: iLvlDigits, newName?: string, pattern?: IHighlightPattern, bigTooltip?: BigTooltip) {
    super(key, newName, ColorConstants.none, pattern, bigTooltip);
    this._iLvl = iLvlDigits;
  }

  public generateDisplayName(translatedName: string): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    let displayName = this.applyNewName(translatedName);
    displayName = this.applyHighlightPattern(displayName);
    displayName = this.applyIlvlIndent(displayName);
    displayName = this.applyBigTooltip(displayName);

    return displayName;
  }

  protected applyIlvlIndent(displayName: string): string {
    if (!Settings.statsAndModifiers.itemLevel.shouldFixIndentation)
      return displayName;

    return `${this.getiLvlIndent()}${displayName}`;
  }
  
  protected getiLvlIndent(): string {
    switch (+this.iLvl) {
      case iLvlDigits.None:
        return CharConstants.empty;
      case iLvlDigits.Single:
        return StatsAndModifiersSettings.iLvlIndentFixSingle;
      case iLvlDigits.Double:
        return StatsAndModifiersSettings.iLvlIndentFixDouble;
      default:
        throw new Error("Received undefined iLvlDigits value.");
    }
  }
}
