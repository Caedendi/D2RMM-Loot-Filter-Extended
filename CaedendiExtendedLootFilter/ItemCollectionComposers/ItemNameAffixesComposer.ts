import { CharConstants } from "../Constants/CharConstants";
import { ColorConstants } from "../Constants/Colors/ColorConstants";
import { GemConstants } from "../Constants/Items/GemConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { D2Color } from "../Models/D2Color";
import { Gem } from "../Models/Gem";
import { ItemEntry } from "../Models/_old/ItemEntry";
import { SingleHighlightItemEntry } from "../Models/_old/SingleHighlightItemEntry";
import { BigTooltipSetting, Settings } from "../Settings/Settings";
import { IBigTooltipItemCollectionComposer } from "./Interfaces/IBigTooltipItemCollectionComposer";
import { ItemCollectionComposerBase } from "./ItemCollectionComposerBase";

// TODO: extract into separate composers?
export class ItemNameAffixesComposer extends ItemCollectionComposerBase implements IBigTooltipItemCollectionComposer {
  protected readonly gems: Gem[] = GemConstants.gemExceptions;

  constructor() {
    super();
  }

  public applyFilter(): void {
    this.applyGold();
    this.applyShortSupInferiorPrefixes();
    this.applyGems();
  }

  public addBigTooltips(): void {
    this.addBigTooltipsToGems();
  }

  protected applyGold(): void {
    let color = this.getGoldAffixColor();
    let gld = "gld";

    switch (Settings.filter.junk.goldSuffix) {
      case SettingsConstants.disabled: // Gold displays as "1234 Gold".
        if (color !== ColorConstants.none)
          this.collection.upsert(new ItemEntry(gld, `${color}Gold`));
        return;
      case "g": // Gold displays as "1234 G".
        this.collection.upsert(new ItemEntry(gld, `${color}G`));
        return;
      case "hide": // Gold displays as "1234".
        this.collection.upsertHidden(gld);
        return;
    }
  }

  private getGoldAffixColor(): D2Color {
    if (Settings.filter.junk.goldTooltipColors === "wg")
      return ColorConstants.gold;
    if (Settings.filter.junk.goldTooltipColors === "gw")
      return ColorConstants.white;

    return ColorConstants.none;
  }

  protected applyShortSupInferiorPrefixes(): void {
    if (!Settings.statsAndModifiers.shortSupInfPrefixes.isEnabled)
      return;

    let supKey = "Hiquality";
    let infKeys = [ "Damaged", "Cracked", "Low Quality", "Crude" ];

    let supPrefix: string = CharConstants.empty;
    let infPrefix: string = CharConstants.empty;
    switch (Settings.statsAndModifiers.shortSupInfPrefixes.style) {
      case "plusminus": // Enable
        supPrefix = `${CharConstants.plus}`;
        infPrefix = `${CharConstants.minus}`;
        break;
      case "supinf": // Enable
        supPrefix = `Sup`;
        infPrefix = `Inf`;
        break;
      case "custom": // Enable
        supPrefix = `[CSTM-SPIF]`; // [CSTM-SPIF]
        infPrefix = `[CSTM-SPIF]`; // [CSTM-SPIF]
        break;
      }

      if (Settings.statsAndModifiers.shortSupInfPrefixes.isGrayInfEnabled)
        infPrefix = `${ColorConstants.gray}${infPrefix}`;

      this.collection.upsert(new ItemEntry(supKey, supPrefix));
      infKeys.forEach(key => this.collection.upsert(new ItemEntry(key, infPrefix)));
  }

  protected applyGems(): void {
    switch (Settings.filter.jewelry.gems) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(this.gems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(this.gems);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(this.gems);
        return;
    }
  }

  protected hideGems(gems: Gem[]) {
    this.collection.upsertMultipleHidden(gems.map<string>(gem => gem.getKey()));
  }

  protected highlightGems(gems: Gem[]) {
    this.collection.upsertMultiple(SingleHighlightItemEntry.fromGems(gems));
  }

  protected addBigTooltipsToGems() {
    let setting = Settings.bigTooltips.jewelry.gemsSetting
    if (setting != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntries(this.gems.map(gem => gem.getKey()), setting);
  }
}
