import { CharConstants } from "../../Constants/CharConstants";
import { RuneConstants } from "../../Constants/Items/RuneConstants";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { RunesSettings } from "../../Settings/Filter/RunesSettings";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { Rune } from "../Items/Rune";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { ItemEntry } from "./ItemEntry";

export class RuneEntry extends ItemEntry implements IItemEntry {
  /**
   * rune
   */
  private readonly _rune: Rune;
  protected get rune(): Rune {
    return this._rune;
  }

  /**
   * number color
   */
  private readonly _numberColor: D2Color | null;
  protected get numberColor(): D2Color | null {
    return this._numberColor;
  }

  constructor(
    rune: Rune,
    nameColor: D2Color | null,
    numberColor: D2Color | null,
    highlight: IHighlight | null,
    bigToolipSetting: EBigTooltipSetting
  ) {
    super(rune.key, CharConstants.empty, nameColor, highlight, bigToolipSetting);
    this._rune = rune;
    this._numberColor = numberColor;
  }

  // tier 1 no highlight, orange name
  // tier 2 red highlight, orange name/number
  // tier 3 red highlight/number, orange name
  // tier 4 all red
  public generateDisplayName(localizedName: string): string {
    let displayName = this.removeAffix(localizedName);
    displayName = this.applyNameColor(displayName);
    displayName = this.addRuneNumber(displayName);
    displayName = this.applyHighlightPattern(displayName); // TODO: create EDoubleHighlightPattern with values none/small/large/xl/rainbow
    displayName = this.applyBigTooltip(displayName);
    displayName = this.removeRedundantColorCodes(displayName);

    return displayName;
  }

  protected removeAffix(localizedName: string): string {
    if (!RunesSettings.shouldHideAffix)
      return localizedName;

    RuneConstants.translatedAffixes.some(affix => {
      if (!localizedName.includes(affix))
        return false;

      localizedName = localizedName.replace(affix, CharConstants.empty);
      return true;
    });
    
    return localizedName;
  }

  protected addRuneNumber(displayName: string): string {
    if (!RunesSettings.shouldAddNumber)
      return displayName;

    return `${displayName} ${this.numberColor ?? CharConstants.empty}(${this.rune.number})`;
  }
}
