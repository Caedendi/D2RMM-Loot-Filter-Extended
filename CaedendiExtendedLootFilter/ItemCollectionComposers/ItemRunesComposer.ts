import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { RuneConstants } from "../Constants/Items/RuneConstants";
import { D2Color } from "../Models/Colors/D2Color";
import { IHighlight } from "../Models/Highlights/Interfaces/IHighlight";
import { RuneItemEntry } from "../Models/ItemCollectionEntries/RuneItemEntry";
import { Rune } from "../Models/Items/Rune";
import { RuneTier } from "../Models/Items/RuneTier";
import { EiLvlDigits } from "../Settings/EiLvlDigits";
import { RuneSettings } from "../Settings/RuneSettings";
import { Settings } from "../Settings/Settings";
import { IItemCollectionComposer } from "./Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

export class ItemRunesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  public readonly tiers = [
    new RuneTier(1, RuneConstants.tiers.low,    RuneSettings.isLowVisible,    RuneSettings.lowNameColor,    RuneSettings.lowNumberColor,    RuneSettings.lowHighlight,    RuneSettings.lowBigTooltipSetting,    RuneSettings.isLowLightPillarsEnabled,    RuneSettings.lowDropSound),
    new RuneTier(2, RuneConstants.tiers.lowMid, RuneSettings.isLowMidVisible, RuneSettings.lowMidNameColor, RuneSettings.lowMidNumberColor, RuneSettings.lowMidHighlight, RuneSettings.lowMidBigTooltipSetting, RuneSettings.isLowMidLightPillarsEnabled, RuneSettings.lowMidDropSound),
    new RuneTier(3, RuneConstants.tiers.mid,    RuneSettings.isMidVisible,    RuneSettings.midNameColor,    RuneSettings.midNumberColor,    RuneSettings.midHighlight,    RuneSettings.midBigTooltipSetting,    RuneSettings.isMidLightPillarsEnabled,    RuneSettings.midDropSound),
    new RuneTier(4, RuneConstants.tiers.high,   RuneSettings.isHighVisible,   RuneSettings.highNameColor,   RuneSettings.highNumberColor,   RuneSettings.highHighlight,   RuneSettings.highBigTooltipSetting,   RuneSettings.isHighLightPillarsEnabled,   RuneSettings.highDropSound),
  ];

  constructor() {
    super();
  }

  public applyFilter(): void {
    this.tiers.forEach((tier) => {
      if (tier.isHidden) {
        this.collection.upsertMultipleHidden(tier.runes.map<string>(rune => rune.key));
        return;
      }

      tier.runes.forEach(rune => this.collection.upsert(new RuneItemEntry(rune, tier.nameColor, tier.numberColor, tier.highlight, tier.bigTooltipSetting)));
    });
  }

  // protected createRuneEntry(rune: Rune, tier: RuneTier, nameColor: D2Color, pattern: IHighlight): RuneItemEntry {

  //   var highlightColor1 = RuneTier.isTierWithHighlights(tier.number) ? RuneConstants.highlightColor : ColorConstants.none;
  //   var highlightColor2 = highlightColor1;
  //   var nameColor1 = !RuneTier.isTierWithAlternateColor(tier.number) ? (RuneTier.isTierWithHighlightedName(tier.number) ? RuneConstants.highlightColor : RuneConstants.defaultNameColor) : Settings.filter.runes.altHighlightColor;
  //   var nameColor2 = nameColor1;
  //   var numberColor = !RuneTier.isTierWithAlternateColor(tier.number) ? (RuneTier.isTierWithHighlightedNumber(tier.number) ? RuneConstants.highlightColor : RuneConstants.defaultNameColor) : ColorConstants.none;

  //   let displayName = rune.name;
  //   this.removeDuplicateColorCodes1(RuneTier.isTierWithHighlights(tier.number), nameColor1, highlightColor2, nameColor2, numberColor);
  //   this.addRuneNumberToDisplayName(displayName, nameColor1, numberColor, rune.number);
  //   this.removeDuplicateColorCodes2(RuneTier.isTierWithHighlights(tier.number), highlightColor1, nameColor1); // remove last duplicate color code where possible

  //   let prefix = `${highlightColor1}${tier.getPattern()}${nameColor1}${tier.getPadding()}`;
  //   let suffix = `${tier.getPadding()}${highlightColor2}${tier.getPattern()}${nameColor2}`;
  //   return new DoubleHighlightItemEntry(rune.key, displayName, EiLvlDigits.None, prefix, suffix);


    
  //   return new RuneItemEntry(rune, tier.number, nameColor, pattern, tier.bigTooltipSetting);
  // }

  // private removeDuplicateColorCodes1(isHighlightedTier: boolean, nameColor1: D2Color, highlightColor2: D2Color, nameColor2: D2Color, numberColor: D2Color): void {
  //   if ((isHighlightedTier && nameColor2 === highlightColor2) || !isHighlightedTier) {
  //     nameColor2 = ColorConstants.none;
  //   }
  //   if (isHighlightedTier
  //     && ((Settings.filter.runes.shouldAddNumber && highlightColor2 === numberColor) 
  //        || (!Settings.filter.runes.shouldAddNumber && highlightColor2 === nameColor1))) {
  //     highlightColor2 = ColorConstants.none;
  //   }
  // }

  // private addRuneNumberToDisplayName(displayName: string, nameColor1: D2Color, numberColor: D2Color, number: number): void {
  //   if (!Settings.filter.runes.shouldAddNumber)
  //     return;

  //   if (numberColor === nameColor1)
  //     numberColor = ColorConstants.none; // remove duplicate color code

  //   displayName = `${displayName} ${numberColor}(${number})`;
  // }

  // private removeDuplicateColorCodes2(isHighlightedTier: boolean, highlightColor1: D2Color, nameColor1: D2Color): void {
  //   if (isHighlightedTier && highlightColor1 === nameColor1) {
  //     nameColor1 = ColorConstants.none;
  //   }
  // }
}
