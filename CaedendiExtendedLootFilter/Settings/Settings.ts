import { CharConstants } from "../Constants/CharConstants";
import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { D2Color } from "../Models/Colors/D2Color";
import { D2rColor } from "../Models/Colors/D2rColor";
import { EBigTooltipSetting } from "./EBigTooltipSetting";

export abstract class Settings {
  // Filter Section
  public static filter = {
    isEnabled: config.IsFilterEnabled as boolean,
    // Junk
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
    // Runes
    runes: {
      isEnabled:            config.IsRunesSectionEnabled   as boolean,
      shouldHideAffix:      config.ShouldHideRuneAffix     as boolean,
      shouldAddNumber:      config.ShouldAddRuneNumbers    as boolean,
      low: {
         isVisible:      config.ShouldShowRunesLow as boolean,
         highlight:      config.RunesLowHighlight  as string,
         highlightColor: new D2Color(config.RunesLowColorHighlight as string),
         nameColor:      new D2Color(config.RunesLowColorName      as string),
         numberColor:    new D2Color(config.RunesLowColorNumber    as string),
      },
      lowMid: {
         isVisible:      config.ShouldShowRunesLowMid as boolean,
         highlight:      config.RunesLowMidHighlight  as string,
         highlightColor: new D2Color(config.RunesLowMidColorHighlight as string),
         nameColor:      new D2Color(config.RunesLowMidColorName      as string),
         numberColor:    new D2Color(config.RunesLowMidColorNumber    as string),
      },
      mid: {
         isVisible:      config.ShouldShowRunesMid as boolean,
         highlight:      config.RunesMidHighlight  as string,
         highlightColor: new D2Color(config.RunesMidColorHighlight as string),
         nameColor:      new D2Color(config.RunesMidColorName      as string),
         numberColor:    new D2Color(config.RunesMidColorNumber    as string),
      },
      high: {
         isVisible:      config.ShouldShowRunesHigh as boolean,
         highlight:      config.RunesHighHighlight  as string,
         highlightColor: new D2Color(config.RunesHighColorHighlight as string),
         nameColor:      new D2Color(config.RunesHighColorName      as string),
         numberColor:    new D2Color(config.RunesHighColorNumber    as string),
      },
    },
    // Jewelry
    jewelry: {
      gems:   config.Gems   as string,
      jewels: config.Jewels as string,
      charms: config.Charms as string,
      isFacetAltPatternEnabled:  config.IsFacetAltPattern  as boolean,
      isSunderAltPatternEnabled: config.IsSunderAltPattern as boolean,
    },
    // Quest & Endgame
    questEndgame: {
      quest:   config.Quest   as string,
      endgame: config.Endgame as string,
    },
    // Big Tooltips
    bigTooltips: {
      isEnabled:      config.IsBigTooltipsEnabled   as boolean,
      shouldHideIlvl: config.IsHideIlvlOnBttEnabled as boolean,
      runes: {
        lowRunesSetting:    config.BigTooltipRunesLow    as number as EBigTooltipSetting,
        lowMidRunesSetting: config.BigTooltipRunesLowMid as number as EBigTooltipSetting,
        midRunesSetting:    config.BigTooltipRunesMid    as number as EBigTooltipSetting,
        highRunesSetting:   config.BigTooltipRunesHigh   as number as EBigTooltipSetting,
      },
      jewelry: {
        gemsSetting:         config.BigTooltipGems         as number as EBigTooltipSetting,
        facetsSetting:       config.BigTooltipFacets       as number as EBigTooltipSetting,
        uniqueCharmsSetting: config.BigTooltipUniqueCharms as number as EBigTooltipSetting,
      },
      questEndgame: {
        questItems: config.BigTooltipQuestItems as number as EBigTooltipSetting,
        essences:   config.BigTooltipEssences   as number as EBigTooltipSetting,
        tokens:     config.BigTooltipTokens     as number as EBigTooltipSetting,
        keys:       config.BigTooltipKeys       as number as EBigTooltipSetting,
        organs:     config.BigTooltipOrgans     as number as EBigTooltipSetting,
        standard:   config.BigTooltipStandard   as number as EBigTooltipSetting,
      },
    },
    // Stats & Modifiers
    statsAndModifiers: {
      itemLevel: {
        isEnabled:            config.IsShowItemLevelEnabled        as boolean,
        shouldFixIndentation: config.ShouldFixItemLevelIndentation as boolean,
      },
      itemQuality: {
        isEnabled:   config.IsShowItemQualityEnabled as boolean,
        placement:   config.ItemQualityPlacement     as string,
        brackets:    config.ItemQualityBrackets      as string,
        styleSingle: config.ItemQualityStyleSingle   as string,
        styleDouble: config.ItemQualityStyleDouble   as string,
      },
      shortSupInfPrefixes: {
        isEnabled:          config.IsSupInferiorPrefixesEnabled   as boolean,
        style:              config.SupInfPrefixesStyle            as string,
        inferiorItemsColor: new D2Color(config.InferiorItemsColor as string),
      },
      ethColor: {
        isEnabled: config.IsEthItemsColorEnabled     as boolean,
        color:     new D2rColor(config.EthItemsColor as string),
      }    
    },
    // Filter Settings
    settings: {
      highlightCharacter: config.HighlightCharacter    as string,
      highlightColor:     ColorConstants.getColorByCode(config.HighlightColor as string),
      hidden:             CharConstants.space.repeat(config.HiddenItemTooltipSize as number),
    },
    // Custom Filter List
    isCustomFilterListEnabled: config.IsCustomFilterListEnabled as boolean,
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