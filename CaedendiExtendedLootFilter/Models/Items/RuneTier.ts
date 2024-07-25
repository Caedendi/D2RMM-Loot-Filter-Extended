import { RuneConstants } from "../../Constants/Items/RuneConstants";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { IHighlightPattern } from "../ItemCollectionEntries/IHighlightPattern";
import { Rune } from "./Rune";

export class RuneTier {
  /**
   * tier number
   */
  private readonly _tier: number;
  public get tier(): number {
    return this._tier;
  }
  /**
   * runes
   */
  private readonly _runes: Rune[];
  public get runes(): Rune[] {
    return this._runes;
  }
  /**
   * isVisible
   */
  private readonly _isVisible: boolean;
  public get isVisible(): boolean {
    return this._isVisible;
  }
  /**
   * pattern
   */
  private readonly _pattern?: IHighlightPattern | undefined;
  public get pattern(): IHighlightPattern | undefined {
    return this._pattern;
  }
  /**
   * big tooltip setting
   */
  private readonly _bigTooltipSetting: BigTooltipSetting;
  public get bigTooltipSetting(): BigTooltipSetting {
    return this._bigTooltipSetting;
  }
  /**
   * has light pillar
   */
  private readonly _hasLightPillar: boolean;
  public get hasLightPillar(): boolean {
    return this._hasLightPillar;
  }
  /**
   * drop sound
   */
  private readonly _dropSound: string;
  public get dropSound(): string {
    return this._dropSound;
  }

  constructor(
    tier: number,
    runes: Rune[],
    isVisible: boolean,
    pattern: IHighlightPattern | undefined,
    bigTooltipSetting: BigTooltipSetting,
    hasLightPillar: boolean,
    dropSound: string
  ) {
    this._tier = tier;
    this._runes = runes;
    this._isVisible = isVisible;
    this._pattern = pattern;
    this._bigTooltipSetting = bigTooltipSetting;
    this._hasLightPillar = hasLightPillar;
    this._dropSound = dropSound;
  }
    
  public isHighlightedTier(): boolean {
    return Settings.filter.runes.shouldAddHighlights && RuneConstants.tiersWithHighlights.includes(this.tier);
  }

  public isTierWithHighlightedNumber(): boolean {
    return Settings.filter.runes.shouldAddHighlights && RuneConstants.tiersWithHighlightedNumbers.includes(this.tier);
  }

  public isTierWithHighlightedName(): boolean {
    return Settings.filter.runes.shouldAddHighlights && RuneConstants.tiersWithHighlightedNames.includes(this.tier);;
  }

  public isTierWithAlternateColor(): boolean {
    return Settings.filter.runes.shouldUseAltColor && RuneConstants.tiersWithAlternateColor.includes(this.tier);
  }

  public isHidden(): boolean {
    return !this.isVisible;
  }
}
