import { RawSettings } from "./RawSettings";

export abstract class LightPillarsSettings {
  public static readonly isEnabled: boolean = RawSettings.lightPillars.isEnabled;
  public static readonly shouldExcludeForHidden: boolean = RawSettings.lightPillars.shouldExcludeForHidden;

  public static readonly runes = {
    isLowEnabled:    RawSettings.lightPillars.runes.isLowRunesEnabled,
    isLowMidEnabled: RawSettings.lightPillars.runes.isLowMidRunesEnabled,
    isMidEnabled:    RawSettings.lightPillars.runes.isMidRunesEnabled,
    isHighEnabled:   RawSettings.lightPillars.runes.isHighRunesEnabled,
  };

  public static readonly jewelry = {
    isRingsEnabled:      RawSettings.lightPillars.jewelry.isRingsEnabled,
    isAmuletsEnabled:    RawSettings.lightPillars.jewelry.isAmuletsEnabled,
    isGemsJewelsEnabled: RawSettings.lightPillars.jewelry.isGemsJewelsEnabled,
    isCharmsEnabled:     RawSettings.lightPillars.jewelry.isCharmsEnabled,
  };
  
  public static readonly questEndgame = {
    isQuestItemsEnabled:   RawSettings.lightPillars.questEndgame.isQuestItemsEnabled,
    isQuestWeaponsEnabled: RawSettings.lightPillars.questEndgame.isQuestWeaponsEnabled,
    isEssencesEnabled:     RawSettings.lightPillars.questEndgame.isEssencesEnabled,
    isTokensEnabled:       RawSettings.lightPillars.questEndgame.isTokensEnabled,
    isKeysEnabled:         RawSettings.lightPillars.questEndgame.isKeysEnabled,
    isOrgansEnabled:       RawSettings.lightPillars.questEndgame.isOrgansEnabled,
    isStandardEnabled:     RawSettings.lightPillars.questEndgame.isStandardEnabled,
  };
}
