import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { Settings } from "../../Settings/Settings";
import { iLvlDigits, StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { IItemEntry } from "./IItemEntry";
import { IHighlightPattern } from "./IHighlightPattern";
import { ItemEntry } from "./ItemEntry";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { D2Color } from "../Colors/D2Color";

export class iLvlItemEntry extends ItemEntry implements IItemEntry {
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
  
  constructor(
    key: string,
    iLvlDigits: iLvlDigits,
    newName?: string | null,
    nameColor?: D2Color,
    pattern?: IHighlightPattern | null,
    bigTooltip?: BigTooltipSetting | null
  ) {
    super(key, newName, nameColor, pattern, bigTooltip);
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
