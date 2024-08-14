import { CharConstants } from "../../Constants/CharConstants";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { D2Color } from "../Colors/D2Color";
import { Rune } from "../Items/Rune";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { ItemEntry } from "./ItemEntry";
import { RuneConstants } from "../../Constants/Items/RuneConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";

export class RuneItemEntry extends ItemEntry implements IItemEntry {
  /**
   * rune
   */
  private readonly _rune: Rune;
  protected get rune(): Rune {
    return this._rune;
  }

  // /**
  //  * tier number
  //  */
  // private readonly _tierNumber: number;
  // protected get tierNumber(): number {
  //   return this._tierNumber;
  // }

  /**
   * number color
   */
  private readonly _numberColor: D2Color;
  protected get numberColor(): D2Color {
    return this._numberColor;
  }

  constructor(
    rune: Rune,
    // tier: number,
    nameColor?: D2Color | null,
    numberColor?: D2Color | null,
    highlight?: IHighlight | null,
    bigToolipSetting?: EBigTooltipSetting | null
  ) {
    super(rune.key, CharConstants.empty, nameColor, highlight, bigToolipSetting);
    this._rune = rune;
    // this._tierNumber = tier;
    this._numberColor = numberColor ??= ColorConstants.none;
  }

  // tier 1 no highlight, orange name
  // tier 2 red highlight, orange name/number
  // tier 3 red highlight/number, orange name
  // tier 4 all red
  public generateDisplayName(localizedName: string): string {
    let displayName = this.removeRuneAffix(localizedName);
    displayName = this.addRuneNumber(displayName);
    displayName = this.applyHighlightPattern(displayName);
    displayName = this.applyBigTooltip(displayName);
    displayName = this.removeRedundantColorCodes(displayName);

    return displayName;
  }

  protected removeRuneAffix(localizedName: string): string {
    if (!Settings.filter.runes.shouldHideAffix)
      return localizedName;

    RuneConstants.translatedAffixes.some(affix => {
      if (!localizedName.includes(affix))
        return false;

      localizedName.replace(affix, CharConstants.empty);
      return true;
    });

    return localizedName;
  }

  protected addRuneNumber(displayName: string): string {
    if (!Settings.filter.runes.shouldAddNumber)
      return displayName;

    return `${displayName} (${this.rune.number})`;
  }
}
