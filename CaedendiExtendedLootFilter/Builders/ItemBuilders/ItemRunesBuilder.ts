import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { RuneConstants } from "../../Constants/Items/RuneConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { ItemEntry } from "../../Models/ItemEntry";
import { IItemBuilder } from "./Interfaces/IItemBuilder";
import { ItemBuilderBase } from "./ItemBuilderBase";

export class ItemRunesBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly highlightingSetting: string = config.RunesHighlighting as string;
  protected readonly shouldUseAlternateColor = config.RunesHighlightColorAlt !== SettingsConstants.disabled;
  
  protected readonly shouldHideAffix:     boolean = config.ShouldHideRuneAffix     as boolean;
  protected readonly shouldAddNumber:     boolean = config.ShouldAddRuneNumbers    as boolean;
  protected readonly shouldAddHighlights: boolean = config.ShouldAddRuneHighlights as boolean;
  
  constructor() {
    super();
  }

  public applyFilter(): void {
    RuneConstants.tiers.forEach((tier) => {
      if (!tier.isVisible) {
        this.collection.upsertMultipleHidden(tier.runes.map<string>(rune => rune.getKey()));
        return;
      }

      tier.runes.forEach((rune) => {
        // TODO: create DoubleHighlightItemEntry.fromRune();
        this.collection.upsert(new ItemEntry(rune.getKey(), (this.generateRuneName(rune.name, rune.number, tier.tier, tier.pattern, tier.padding)))); 
      });
    });
  }

  // TODO: try to refactor using DoubleHighlightItemEntry
  protected generateRuneName(name: string, number: number, tier: number, highlightPattern: string, padding: string) {
    const hasHighlighting       = this.isHighlightedTier(tier);
    const hasHighlightedNumber  = this.isTierWithHighlightedNumber(tier);
    const hasHighlightedName    = this.isTierWithHighlightedName(tier);
    const hasAlternateNameColor = this.isTierWithAlternateColor(tier);

    var highlightColor1 = hasHighlighting ? RuneConstants.clrHighlight : ColorConstants.none;
    var highlightColor2 = highlightColor1;
    var nameColor1 = !hasAlternateNameColor ? (hasHighlightedName ? RuneConstants.clrHighlight : RuneConstants.clrName) : RuneConstants.colorAlternate;
    var nameColor2 = nameColor1;
    var numberColor = !hasAlternateNameColor ? (hasHighlightedNumber ? RuneConstants.clrHighlight : RuneConstants.clrName) : ColorConstants.none;

    if (!this.shouldHideAffix) {
      name = `${name} Rune`;
    }

    // remove duplicate color codes where possible
    if ((hasHighlighting && nameColor2 === highlightColor2) || !hasHighlighting) {
      nameColor2 = ColorConstants.none;
    }
    if (hasHighlighting && ((this.shouldAddNumber && highlightColor2 === numberColor) || (!this.shouldAddNumber && highlightColor2 === nameColor1))) {
      highlightColor2 = ColorConstants.none;
    }

    // set rune number
    if (this.shouldAddNumber) {
      if (numberColor === nameColor1) {
        numberColor = ColorConstants.none;
      }
      name = `${name} ${numberColor}(${number})`;
    }

    // remove last duplicate color code where possible
    if (hasHighlighting && highlightColor1 === nameColor1) {
      nameColor1 = ColorConstants.none;
    }

    return `${highlightColor1}${highlightPattern}${nameColor1}${padding}${name}${padding}${highlightColor2}${highlightPattern}${nameColor2}`;
  }

  private isHighlightedTier(tier: number): boolean {
    return this.shouldAddHighlights && RuneConstants.tiersWithHighlights.includes(tier);
  }

  private isTierWithHighlightedNumber(tier: number): boolean {
    return this.shouldAddHighlights && RuneConstants.tiersWithHighlightedNumbers.includes(tier);
  }

  private isTierWithHighlightedName(tier: number): boolean {
    return this.shouldAddHighlights && RuneConstants.tiersWithHighlightedNames.includes(tier);;
  }

  private isTierWithAlternateColor(tier: number): boolean {
    return this.shouldUseAlternateColor && RuneConstants.tiersWithAlternateColor.includes(tier);
  }

  public addBigTooltips() {
    RuneConstants.tiers.forEach(tier => {
      // this.collection.upsertMultiple()
      // Helper.addBigTooltips(tierCollection, tier.bigTooltipSetting);
    });
  }
}
