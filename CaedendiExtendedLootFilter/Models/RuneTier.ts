import { RuneConstants } from "../Constants/Items/RuneConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { BigTooltipSetting } from "./BigTooltipSetting";
import { Rune } from "./Rune";

export class RuneTier {
  protected readonly tier: number;
  protected readonly runes: Rune[];
  protected readonly padding: string;
  protected readonly pattern: string;
  protected readonly isVisible: boolean;
  protected readonly bigTooltipSetting: BigTooltipSetting;
  protected readonly hasLightPillar: boolean;
  protected readonly dropSound: string;

  constructor(
    tier: number,
    runes: Rune[],
    padding: string,
    pattern: string,
    isVisible: boolean,
    bigTooltipSetting: BigTooltipSetting,
    hasLightPillar: boolean,
    dropSound: string
  ) {
    this.tier = tier;
    this.runes = runes;
    this.padding = padding;
    this.pattern = pattern;
    this.isVisible = isVisible;
    this.bigTooltipSetting = bigTooltipSetting;
    this.hasLightPillar = hasLightPillar;
    this.dropSound = dropSound;
  }
    
  public isHighlightedTier(): boolean {
    return SettingsConstants.runes.shouldAddHighlights && RuneConstants.tiersWithHighlights.includes(this.tier);
  }

  public isTierWithHighlightedNumber(): boolean {
    return SettingsConstants.runes.shouldAddHighlights && RuneConstants.tiersWithHighlightedNumbers.includes(this.tier);
  }

  public isTierWithHighlightedName(): boolean {
    return SettingsConstants.runes.shouldAddHighlights && RuneConstants.tiersWithHighlightedNames.includes(this.tier);;
  }

  public isTierWithAlternateColor(): boolean {
    return SettingsConstants.runes.shouldUseAlternateColor && RuneConstants.tiersWithAlternateColor.includes(this.tier);
  }

  public getTier(): number {
    return this.tier;
  }

  public getRunes(): Rune[] {
    return this.runes;
  }

  public getPadding(): string {
    return this.padding;
  }

  public getPattern(): string {
    return this.pattern;
  }

  public getIsVisible(): boolean {
    return this.isVisible;
  }

  public getBigTooltipSetting(): BigTooltipSetting {
    return this.bigTooltipSetting;
  }

  public getHasLightPillar(): boolean {
    return this.hasLightPillar;
  }

  public getDropSound(): string {
    return this.dropSound;
  }
}
