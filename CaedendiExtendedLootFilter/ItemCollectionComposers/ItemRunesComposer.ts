import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { RuneConstants } from "../Constants/Items/RuneConstants";
import { D2Color } from "../Models/D2Color";
import { DoubleHighlightItemEntry } from "../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../Models/ItemEntry";
import { Rune } from "../Models/Rune";
import { RuneTier } from "../Models/RuneTier";
import { BigTooltipSetting, Settings } from "../Settings/Settings";
import { iLvlFix } from "../Settings/StatsAndModifiersSettings";
import { IBigTooltipItemCollectionComposer } from "./Interfaces/IBigTooltipItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

export class ItemRunesComposer extends ItemCollectionComposerBase implements IBigTooltipItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    RuneConstants.tiers.forEach((tier) => {
      let runes = tier.getRunes();

      if (tier.isHidden()) {
        this.collection.upsertMultipleHidden(runes.map<string>(rune => rune.getKey()));
        return;
      }

      runes.forEach((rune) => this.collection.upsert(this.createRuneEntry(rune, tier)));
    });
  }

  protected createRuneEntry(rune: Rune, tier: RuneTier): DoubleHighlightItemEntry {
    var highlightColor1 = tier.isHighlightedTier() ? RuneConstants.clrHighlight : ColorConstants.none;
    var highlightColor2 = highlightColor1;
    var nameColor1 = !tier.isTierWithAlternateColor() ? (tier.isTierWithHighlightedName() ? RuneConstants.clrHighlight : RuneConstants.clrName) : Settings.filter.runes.altHighlightColor;
    var nameColor2 = nameColor1;
    var numberColor = !tier.isTierWithAlternateColor() ? (tier.isTierWithHighlightedNumber() ? RuneConstants.clrHighlight : RuneConstants.clrName) : ColorConstants.none;

    let displayName = rune.getName();
    this.addRuneAffixToDisplayName(displayName);
    this.removeDuplicateColorCodes1(tier.isHighlightedTier(), nameColor1, highlightColor2, nameColor2, numberColor);
    this.addRuneNumberToDisplayName(displayName, nameColor1, numberColor, rune.getNumber());
    this.removeDuplicateColorCodes2(tier.isHighlightedTier(), highlightColor1, nameColor1); // remove last duplicate color code where possible

    let prefix = `${highlightColor1}${tier.getPattern()}${nameColor1}${tier.getPadding()}`;
    let suffix = `${tier.getPadding()}${highlightColor2}${tier.getPattern()}${nameColor2}`;

    return new DoubleHighlightItemEntry(rune.getKey(), displayName, iLvlFix.None, prefix, suffix);
  }

  private addRuneAffixToDisplayName(displayName: string): void {
    if (Settings.filter.runes.shouldHideAffix)
      return;

    displayName = `${displayName} Rune`;
  }

  private removeDuplicateColorCodes1(isHighlightedTier: boolean, nameColor1: D2Color, highlightColor2: D2Color, nameColor2: D2Color, numberColor: D2Color): void {
    if ((isHighlightedTier && nameColor2 === highlightColor2) || !isHighlightedTier) {
      nameColor2 = ColorConstants.none;
    }
    if (isHighlightedTier
      && ((Settings.filter.runes.shouldAddNumber && highlightColor2 === numberColor) 
         || (!Settings.filter.runes.shouldAddNumber && highlightColor2 === nameColor1))) {
      highlightColor2 = ColorConstants.none;
    }
  }

  private addRuneNumberToDisplayName(displayName: string, nameColor1: D2Color, numberColor: D2Color, number: number): void {
    if (!Settings.filter.runes.shouldAddNumber)
      return;

    if (numberColor === nameColor1)
      numberColor = ColorConstants.none; // remove duplicate color code

    displayName = `${displayName} ${numberColor}(${number})`;
  }

  private removeDuplicateColorCodes2(isHighlightedTier: boolean, highlightColor1: D2Color, nameColor1: D2Color): void {
    if (isHighlightedTier && highlightColor1 === nameColor1) {
      nameColor1 = ColorConstants.none;
    }
  }

  public addBigTooltips() {
    RuneConstants.tiers.forEach(tier => {
      if (tier.getBigTooltipSetting() == BigTooltipSetting.Disabled)
        return;

      tier.getRunes().forEach(rune => {
        let entry = this.collection.getEntries().find(runeEntry => runeEntry.getKey() === rune.getKey());

        // not found: rune is unchanged (not set to hidden but no highlighting set either)
        if (entry == undefined) {
          this.collection.upsert(this.createNewRuneEntryWithBigTooltip(rune, tier.getBigTooltipSetting()));
          return;
        }

        // set to hidden: do not apply big tooltip
        if (entry.isHidden())
          return;

        // found: apply big tooltip
        entry.addBigTooltip(tier.getBigTooltipSetting());
      });
    });
  }

  private createNewRuneEntryWithBigTooltip(rune: Rune, bigTooltipSetting: BigTooltipSetting): ItemEntry {
    let newEntry = new ItemEntry(rune.getKey(), `${rune.getName()} Rune`);
    newEntry.addBigTooltip(bigTooltipSetting);
    
    return newEntry;
  }
}
