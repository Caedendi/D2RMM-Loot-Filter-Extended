import { Rune } from "./Rune";

export class RuneTier {
  tier: number;
  runes: Rune[];
  padding: string;
  pattern: string;
  isVisible: boolean;
  bigTooltipSetting: string;
  hasLightPillar: boolean;
  dropSound: string;

  constructor(
    tier: number,
    runes: Rune[],
    padding: string,
    pattern: string,
    isVisible: boolean,
    bigTooltipSetting: string,
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
}