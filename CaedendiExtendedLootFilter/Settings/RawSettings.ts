import { CharConstants } from "../Constants/CharConstants";
import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { D2Color } from "../Models/Colors/D2Color";
import { D2rColor } from "../Models/Colors/D2rColor";
import { EDoubleHighlightSetting } from "../Models/Highlights/EDoubleHighlightSize";
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
         isVisible:      config.ShouldShowRunesLow as boolean,
         highlight:      config.RunesLowHighlight  as number as EDoubleHighlightSetting,
         highlightColor: new D2Color(config.RunesLowColorHighlight as string),
         nameColor:      new D2Color(config.RunesLowColorName      as string),
         numberColor:    new D2Color(config.RunesLowColorNumber    as string),
         bigTooltip:     config.RunesLowBigTooltip    as number as EBigTooltipSetting,
      },
      lowMid: {
         isVisible:      config.ShouldShowRunesLowMid as boolean,
         highlight:      config.RunesLowMidHighlight  as number as EDoubleHighlightSetting,
         highlightColor: new D2Color(config.RunesLowMidColorHighlight as string),
         nameColor:      new D2Color(config.RunesLowMidColorName      as string),
         numberColor:    new D2Color(config.RunesLowMidColorNumber    as string),
         bigTooltip:     config.RunesLowMidBigTooltip as number as EBigTooltipSetting,
      },
      mid: {
         isVisible:      config.ShouldShowRunesMid as boolean,
         highlight:      config.RunesMidHighlight  as number as EDoubleHighlightSetting,
         highlightColor: new D2Color(config.RunesMidColorHighlight as string),
         nameColor:      new D2Color(config.RunesMidColorName      as string),
         numberColor:    new D2Color(config.RunesMidColorNumber    as string),
         bigTooltip:     config.RunesMidBigTooltip    as number as EBigTooltipSetting,
      },
      high: {
         isVisible:      config.ShouldShowRunesHigh as boolean,
         highlight:      config.RunesHighHighlight  as number as EDoubleHighlightSetting,
         highlightColor: new D2Color(config.RunesHighColorHighlight as string),
         nameColor:      new D2Color(config.RunesHighColorName      as string),
         numberColor:    new D2Color(config.RunesHighColorNumber    as string),
         bigTooltip:     config.RunesHighBigTooltip   as number as EBigTooltipSetting,
      },
    },
    // Jewelry
    jewelry: {
      gems: {
        isHighlightEnabled:  config.JewelryGemsHighlight   as boolean,
        filter:              config.JewelryGemsFilter      as string,
        bigTooltip:          config.JewelryGemsBigTooltips as number as EBigTooltipSetting,
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
        quest:   config.Quest   as string,
        endgame: config.Endgame as string,
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
      highlightCharacter:    config.HighlightCharacter as string,
      defaultHighlightColor: ColorConstants.getColorByCode(config.DefaultHighlightColor as string),
      hidden:                CharConstants.space.repeat(config.HiddenItemTooltipSize as number),
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
