import { CharConstants } from "../../Constants/CharConstants";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/EiLvlDigits";
import { Settings } from "../../Settings/Settings";
import { StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { ItemEntry } from "./ItemEntry";

export class iLvlItemEntry extends ItemEntry implements IItemEntry {
  /**
   * iLvl
   */
  private _iLvl: EiLvlDigits;
  protected get iLvl(): EiLvlDigits {
    return this._iLvl;
  }
  protected set iLvl(value: EiLvlDigits) {
    this._iLvl = value;
  }
  
  constructor(
    key: string,
    iLvlDigits: EiLvlDigits,
    newName?: string | null,
    nameColor?: D2Color | null,
    pattern?: IHighlight | null,
    bigTooltip?: EBigTooltipSetting | null
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
    if (!Settings.filter.statsAndModifiers.itemLevel.shouldFixIndentation)
      return displayName;

    return `${this.getiLvlIndent()}${displayName}`;
  }
  
  protected getiLvlIndent(): string {
    switch (+this.iLvl) {
      case EiLvlDigits.None:
        return CharConstants.empty;
      case EiLvlDigits.Single:
        return StatsAndModifiersSettings.iLvlIndentFixSingle;
      case EiLvlDigits.Double:
        return StatsAndModifiersSettings.iLvlIndentFixDouble;
      default:
        throw new Error("Received undefined iLvlDigits value.");
    }
  }
}
