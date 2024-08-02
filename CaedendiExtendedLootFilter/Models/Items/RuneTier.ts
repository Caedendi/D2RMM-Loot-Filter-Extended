import { RuneConstants } from "../../Constants/Items/RuneConstants";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { Rune } from "./Rune";

export class RuneTier {
  /**
   * tier number
   */
  private readonly _number: number;
  public get number(): number {
    return this._number;
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
  private readonly _pattern: IHighlight | null;
  public get pattern(): IHighlight | null {
    return this._pattern;
  }

  /**
   * big tooltip setting
   */
  private readonly _bigTooltipSetting: EBigTooltipSetting;
  public get bigTooltipSetting(): EBigTooltipSetting {
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

  /**
   * isHidden
   */
  private readonly _isHidden: boolean = !this.isVisible;
  public get isHidden(): boolean {
    return this._isHidden;
  }

  constructor(
    tier: number,
    runes: Rune[],
    isVisible: boolean,
    pattern: IHighlight | null,
    bigTooltipSetting: EBigTooltipSetting,
    hasLightPillar: boolean,
    dropSound: string
  ) {
    this._number = tier;
    this._runes = runes;
    this._isVisible = isVisible;
    this._pattern = pattern;
    this._bigTooltipSetting = bigTooltipSetting;
    this._hasLightPillar = hasLightPillar;
    this._dropSound = dropSound;
  }
    
  public static isTierWithHighlights(number: number): boolean {
    return Settings.filter.runes.shouldAddHighlights && RuneConstants.tiersWithHighlights.includes(number);
  }

  public static isTierWithHighlightedNumber(number: number): boolean {
    return Settings.filter.runes.shouldAddHighlights && RuneConstants.tiersWithHighlightedNumbers.includes(number);
  }

  public static isTierWithHighlightedName(number: number): boolean {
    return Settings.filter.runes.shouldAddHighlights && RuneConstants.tiersWithHighlightedNames.includes(number);;
  }

  public static isTierWithAlternateColor(number: number): boolean {
    return Settings.filter.runes.shouldUseAltColor && RuneConstants.tiersWithAlternateColor.includes(number);
  }
}
