import { CharConstants } from "../../Constants/CharConstants";
import { RuneConstants } from "../../Constants/Items/RuneConstants";
import { RuneTierConstants } from "../../Constants/Items/RuneTierConstants";
import { Settings } from "../../Settings/Settings";
import { IItemEntry } from "../IItemEntry";
import { Rune } from "../Rune";
import { BigTooltip } from "./BigTooltip";
import { IHighlightPattern } from "./IHighlightPattern";
import { NewItemEntry } from "./NewItemEntry";

// if has no affix: rune name will be hardcoded
// if has affix: use translated name and 
export class RuneItemEntry extends NewItemEntry implements IItemEntry {
  protected _rune: Rune;
  protected _tier: number;

  constructor(rune: Rune, runeTier: number, pattern?: IHighlightPattern, bigToolip?: BigTooltip) {
    let tier = RuneTierConstants.tiers.find(tier => tier.getTier() == runeTier);
    super(rune.getKey(), CharConstants.empty, RuneConstants.clrName, tier.getPattern(), tier.getBigTooltipSetting());
    this._rune = rune;
    this._tier = runeTier;
  }

  public generateDisplayName(translatedName: string): string {
    let displayName = Settings.filter.runes.shouldHideAffix ? this._rune.getName() : translatedName;

    if (Settings.filter.runes.shouldAddNumber)
      displayName = ``
    return super.generateDisplayName(displayName);
  }
}
