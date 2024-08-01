import { CharConstants } from "../../Constants/CharConstants";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { D2Color } from "../Colors/D2Color";
import { Rune } from "../Items/Rune";
import { IHighlightPattern } from "./IHighlightPattern";
import { IItemEntry } from "./IItemEntry";
import { ItemEntry } from "./ItemEntry";

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
    pattern?: IHighlightPattern | null,
    bigToolipSetting?: BigTooltipSetting | null
  ) {
    super(rune.key, CharConstants.empty, nameColor, pattern, bigToolipSetting);
    this._rune = rune;
    this._tierNumber = tier;
  }

  public generateDisplayName(translatedName: string): string {
    let displayName = Settings.filter.runes.shouldHideAffix ? this.rune.name : translatedName;

    if (Settings.filter.runes.shouldAddNumber)
      displayName = ``
    return super.generateDisplayName(displayName);
  }

  protected removeDuplicateColorCodes(name: string): string {
    // TODO: 
    // "ÿc" // TODO: make constant?
    return ``;
  }

  // TODO: create function that removes the translated "Rune" affix from all translations so the original translated name can be used
  protected removeRuneAffix(): void {

  }
}
