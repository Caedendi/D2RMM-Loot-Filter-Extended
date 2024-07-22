import { CharConstants } from "../Constants/CharConstants";
import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { D2rColor } from "../Models/Colors/D2rColor";
import { BigTooltipSetting } from "./BigTooltipSetting";

export abstract class Settings {
  // Filter Section
  public static filter = {
    isEnabled: config.IsFilterEnabled as boolean,
    junk: {
      goldTooltipColors: config.GoldTooltipColors as string,
      goldSuffix:        config.GoldSuffix        as string,
      healingPotions:    config.HealingPotions    as string,
      buffPotions:       config.BuffPotions       as string,
      throwingPotions:   config.ThrowingPotions   as string,
      scrollsTomes:      config.ScrollsTomes      as string,
      arrowsBolts:       config.ArrowsBolts       as string,
      keys:              config.Keys              as string,
    },
    runes: {
      isEnabled:            config.IsEnabled               as boolean,
      shouldAddHighlights:  config.ShouldAddRuneHighlights as boolean,
      shouldAddNumber:      config.ShouldAddRuneNumbers    as boolean,
      shouldHideAffix:      config.ShouldHideRuneAffix     as boolean,
      altHighlightColor:    ColorConstants.getColorByCode(config.RunesHighlightColorAlt as string),
      shouldUseAltColor:    config.RunesHighlightColorAlt !== CharConstants.empty,
      isLowRunesVisible:    config.ShouldShowRunesLow      as boolean,
      isLowMidRunesVisible: config.ShouldShowRunesLowMid   as boolean,
      isMidRunesVisible:    config.ShouldShowRunesMid      as boolean,
      isHighRunesVisible:   config.ShouldShowRunesHigh     as boolean,
    },
    jewelry: {
      gems:   config.Gems   as string,
      jewels: config.Jewels as string,
      charms: config.Charms as string,
      isFacetAltPatternEnabled:  config.IsFacetAltPattern  as boolean,
      isSunderAltPatternEnabled: config.IsSunderAltPattern as boolean,
    },
    questEndgame: {
      quest:   config.Quest   as string,
      endgame: config.Endgame as string,
    },
    settings: {
      highlightCharacter: config.HighlightCharacter    as string,
      highlightColor:     ColorConstants.getColorByCode(config.HighlightColor as string),
      hidden:             CharConstants.space.repeat(config.HiddenItemTooltipSize as number),
    },
    isCustomFilterListEnabled: config.IsCustomFilterListEnabled as boolean,
  };
  
  // Stats & Modifiers Section
  public static statsAndModifiers = {
    itemLevel: {
      isEnabled:            config.IsShowItemLevelEnabled        as boolean,
      shouldFixIndentation: config.ShouldFixItemLevelIndentation as boolean,
    },
    itemQuality: {
      isEnabled: config.IsShowItemQualityEnabled as boolean,
      placement: config.ItemQualityPlacement     as string,
      brackets:  config.ItemQualityBrackets      as string,
      style:     config.ItemQualityStyle         as string,
    },
    shortSupInfPrefixes: {
      isEnabled:        config.IsSupInferiorPrefixesEnabled as boolean,
      style:            config.SupInfPrefixesStyle          as string,
      isGrayInfEnabled: config.IsGrayInferiorItemsEnabled   as boolean,
    },
    ethColor: {
      isEnabled: config.IsEthItemsColorEnabled     as boolean,
      color:     new D2rColor(config.EthItemsColor as string),
    }    
  };

  // Big Tooltips Section
  public static bigTooltips = {
    isEnabled:      config.IsBigTooltipsEnabled   as boolean,
    shouldHideIlvl: config.IsHideIlvlOnBttEnabled as boolean,
    runes: {
      lowRunesSetting:    config.BigTooltipRunesLow    as number as BigTooltipSetting,
      lowMidRunesSetting: config.BigTooltipRunesLowMid as number as BigTooltipSetting,
      midRunesSetting:    config.BigTooltipRunesMid    as number as BigTooltipSetting,
      highRunesSetting:   config.BigTooltipRunesHigh   as number as BigTooltipSetting,
    },
    jewelry: {
      gemsSetting:         config.BigTooltipGems         as number as BigTooltipSetting,
      facetsSetting:       config.BigTooltipFacets       as number as BigTooltipSetting,
      uniqueCharmsSetting: config.BigTooltipUniqueCharms as number as BigTooltipSetting,
    },
    questEndgame: {
      questItems: config.BigTooltipQuestItems as number as BigTooltipSetting,
      essences:   config.BigTooltipEssences   as number as BigTooltipSetting,
      tokens:     config.BigTooltipTokens     as number as BigTooltipSetting,
      keys:       config.BigTooltipKeys       as number as BigTooltipSetting,
      organs:     config.BigTooltipOrgans     as number as BigTooltipSetting,
      standard:   config.BigTooltipStandard   as number as BigTooltipSetting,
    },
  };

  // Light Pillars Section
  public static lightPillars = {
    isEnabled:              config.IsLightPillarsEnabled         as boolean,
    shouldExcludeForHidden: config.ShouldExcludeHiddenItemsForLp as boolean,
    runes: {
      isLowRunesEnabled:    config.ShouldAddLightPillarRunesLow    as boolean,
      isLowMidRunesEnabled: config.ShouldAddLightPillarRunesLowMid as boolean,
      isMidRunesEnabled:    config.ShouldAddLightPillarRunesMid    as boolean,
      isHighRunesEnabled:   config.ShouldAddLightPillarRunesHigh   as boolean,
    },
    jewelry: {
      isRingsEnabled:      config.ShouldAddLightPillarRings      as boolean,
      isAmuletsEnabled:    config.ShouldAddLightPillarAmulets    as boolean,
      isGemsJewelsEnabled: config.ShouldAddLightPillarGemsJewels as boolean,
      isCharmsEnabled:     config.ShouldAddLightPillarCharms     as boolean,
    },
    questEndgame: {
      isQuestItemsEnabled:   config.ShouldAddLightPillarQuestItems   as boolean,
      isQuestWeaponsEnabled: config.ShouldAddLightPillarQuestWeapons as boolean,
      isEssencesEnabled:     config.ShouldAddLightPillarEssences     as boolean,
      isTokensEnabled:       config.ShouldAddLightPillarTokens       as boolean,
      isKeysEnabled:         config.ShouldAddLightPillarKeys         as boolean,
      isOrgansEnabled:       config.ShouldAddLightPillarOrgans       as boolean,
      isStandardEnabled:     config.ShouldAddLightPillarStandard     as boolean,
    },
  };

  // Drop Sounds Section
  public static dropSounds = {
    isEnabled:              config.IsDropSoundsEnabled           as boolean,
    shouldExcludeForHidden: config.ShouldExcludeHiddenItemsForDs as boolean,
    runes: {
      low:    config.DropSoundRunesLow    as string,
      lowMid: config.DropSoundRunesLowMid as string,
      mid:    config.DropSoundRunesMid    as string,
      high:   config.DropSoundRunesHigh   as string,
    },
    questEndgame: {
      questItems: config.DropSoundQuest    as string,
      essences:   config.DropSoundEssences as string,
      tokens:     config.DropSoundToken    as string,
      keys:       config.DropSoundKeys     as string,
      organs:     config.DropSoundOrgans   as string,
      standard:   config.DropSoundStandard as string,
    },
  };

  // Tooltip Mods Section
  public static tooltips = {
    isTooltipModsEnabled: config.IsTooltipModsEnabled as boolean,
    tooltipOpacity:       config.TooltipOpacity       as number,
    tooltipSize:          config.TooltipSize          as number,
  };
}
