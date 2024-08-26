import { ED2ColorCode } from "../Models/Colors/ED2ColorCode";
import { ED2rColor } from "../Models/Colors/ED2rColor";
import { EDoubleHighlightSetting } from "../Models/Highlights/EDoubleHighlightSetting";
import { EQualityTagPosition } from "../Models/QualityTags/EQualityTagPosition";
import { EBigTooltipSetting } from "./Enums/EBigTooltipSetting";

// TODO: add this text somewhere
// Selecting an option with \"Pick Up\" will add that message in purple above the item name. If you prefer to have a big transparent box, enable highlighting and set the highlight character to [space].
export abstract class RawSettings {
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
      isEnabled:         config.IsRunesSectionEnabled as boolean,
      shouldHideAffix:   config.ShouldHideRuneAffix   as boolean,
      shouldAddNumber:   config.ShouldAddRuneNumbers  as boolean,
      low: {
         isVisible:      config.ShouldShowRunesLow     as boolean,
         highlight:      config.RunesLowHighlight      as number as EDoubleHighlightSetting,
         highlightColor: config.RunesLowColorHighlight as string as ED2ColorCode,
         nameColor:      config.RunesLowColorName      as string as ED2ColorCode,
         numberColor:    config.RunesLowColorNumber    as string as ED2ColorCode,
         bigTooltip:     config.RunesLowBigTooltip     as number as EBigTooltipSetting,
      },
      lowMid: {
         isVisible:      config.ShouldShowRunesLowMid     as boolean,
         highlight:      config.RunesLowMidHighlight      as number as EDoubleHighlightSetting,
         highlightColor: config.RunesLowMidColorHighlight as string as ED2ColorCode,
         nameColor:      config.RunesLowMidColorName      as string as ED2ColorCode,
         numberColor:    config.RunesLowMidColorNumber    as string as ED2ColorCode,
         bigTooltip:     config.RunesLowMidBigTooltip     as number as EBigTooltipSetting,
      },
      mid: {
         isVisible:      config.ShouldShowRunesMid     as boolean,
         highlight:      config.RunesMidHighlight      as number as EDoubleHighlightSetting,
         highlightColor: config.RunesMidColorHighlight as string as ED2ColorCode,
         nameColor:      config.RunesMidColorName      as string as ED2ColorCode,
         numberColor:    config.RunesMidColorNumber    as string as ED2ColorCode,
         bigTooltip:     config.RunesMidBigTooltip     as number as EBigTooltipSetting,
      },
      high: {
         isVisible:      config.ShouldShowRunesHigh     as boolean,
         highlight:      config.RunesHighHighlight      as number as EDoubleHighlightSetting,
         highlightColor: config.RunesHighColorHighlight as string as ED2ColorCode,
         nameColor:      config.RunesHighColorName      as string as ED2ColorCode,
         numberColor:    config.RunesHighColorNumber    as string as ED2ColorCode,
         bigTooltip:     config.RunesHighBigTooltip     as number as EBigTooltipSetting,
      },
    },
    // Jewelry
    jewelry: {
      gems: {
        isHighlightEnabled: config.JewelryGemsHighlight   as boolean,
        filter:             config.JewelryGemsFilter      as string,
        bigTooltip:         config.JewelryGemsBigTooltips as number as EBigTooltipSetting,
      },
      facets: {
        highlight:  config.FacetsHighlights as string,
        bigTooltip: config.FacetsBigTooltips as number as EBigTooltipSetting,
      },
      charms: {
        isHighlightMagicEnabled: config.JewelryCharmsMagicHighlight    as string,
        highlightUnique:         config.JewelryCharmsUniqueHighlight   as string,
        bigTooltipUnique:        config.JewelryCharmsUniqueBigTooltips as number as EBigTooltipSetting,
      },
    },
    // Quest & Endgame
    questEndgame: {
      filter: {
        shouldShowEssences: config.IsEssencesVisible         as boolean,
        shouldShowStandard: config.IsStandardOfHeroesVisible as boolean,
      },
      highlights: {
        isCubeEnabled: !(config.IsCubeHighlightExcluded as boolean),
        quest:    config.QuestEndgameHighlightsQuest    as number as EDoubleHighlightSetting,
        essences: config.QuestEndgameHighlightsEssences as number as EDoubleHighlightSetting,
        tokens:   config.QuestEndgameHighlightsTokens   as number as EDoubleHighlightSetting,
        keys:     config.QuestEndgameHighlightsKeys     as number as EDoubleHighlightSetting,
        organs:   config.QuestEndgameHighlightsOrgans   as number as EDoubleHighlightSetting,
        standard: config.QuestEndgameHighlightsStandard as number as EDoubleHighlightSetting,
      },
      bigTooltips: {
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
        isEnabled:               config.IsShowItemLevelEnabled        as boolean,
        shouldFixIndentation:    config.ShouldFixItemLevelIndentation as boolean,
        shouldHideOnBigTooltips: config.IsHideIlvlOnBttEnabled as boolean,
      },
      itemQuality: {
        isEnabled: config.IsShowItemQualityEnabled as boolean,
        position:  config.ItemQualityPosition      as number as EQualityTagPosition,
        single: {
          style:    config.ItemQualitySingleStyle    as string,
          brackets: config.ItemQualitySingleBrackets as string,
          padding:  config.ItemQualitySinglePadding  as number,
        },
        double: {
          style:   config.ItemQualityDoubleStyle    as string,
          padding: config.ItemQualityDoublePadding  as number,
        },
      },
      shortSupInfPrefixes: {
        isEnabled:          config.IsSupInferiorPrefixesEnabled as boolean,
        style:              config.SupInfPrefixesStyle          as string,
        inferiorItemsColor: config.InferiorItemsColor as string as ED2ColorCode,
      },
      ethColor: {
        isEnabled: config.IsEthItemsColorEnabled as boolean,
        color:     config.EthItemsColor as string as ED2rColor,
      }    
    },
    // Filter Settings
    settings: {
      highlightCharacter:    config.HighlightCharacter as string,
      defaultHighlightColor: config.DefaultHighlightColor as string as ED2ColorCode,
      hidden:                config.HiddenItemTooltipSize as number,
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
