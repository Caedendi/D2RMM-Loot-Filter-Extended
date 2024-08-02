import { CharConstants } from "../../Constants/CharConstants";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { D2Color } from "../Colors/D2Color";
import { Rune } from "../Items/Rune";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { IItemEntry } from "./Interfaces/IItemEntry";
import { ItemEntry } from "./ItemEntry";
import { RuneConstants } from "../../Constants/Items/RuneConstants";

export class RuneItemEntry extends ItemEntry implements IItemEntry {
  private readonly _rune: Rune;
  protected get rune(): Rune {
    return this._rune;
  }
  private readonly _tierNumber: number;
  protected get tierNumber(): number {
    return this._tierNumber;
  }

  constructor(
    rune: Rune,
    tier: number,
    nameColor?: D2Color | null,
    highlight?: IHighlight | null,
    bigToolipSetting?: EBigTooltipSetting | null
  ) {
    super(rune.key, CharConstants.empty, nameColor, highlight, bigToolipSetting);
    this._rune = rune;
    this._tierNumber = tier;
  }

  // tier 1 no highlight, orange name
  // tier 2 red highlight, orange name/number
  // tier 3 red 
  // tier 4
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
