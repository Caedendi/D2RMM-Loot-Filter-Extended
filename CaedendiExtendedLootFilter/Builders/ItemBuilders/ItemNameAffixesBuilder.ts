import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { BigTooltipSetting } from "../../Models/BigTooltipSetting";
import { D2Color } from "../../Models/D2Color";
import { Gem } from "../../Models/Gem";
import { ItemEntry } from "../../Models/ItemEntry";
import { SingleHighlightItemEntry } from "../../Models/SingleHighlightItemEntry";
import { BigTooltipItemBuilderBase } from "./BigTooltipItemBuilderBase";
import { IItemBuilder } from "./Interfaces/IItemBuilder";

export class ItemNameAffixesBuilder extends BigTooltipItemBuilderBase implements IItemBuilder {
  protected readonly goldFilterSetting:          string = config.GoldTooltipColors        as string;
  protected readonly goldSuffixFilterSetting:    string = config.GoldSuffix               as string;
  protected readonly shortSupInfPrefixesSetting: string = config.ShortSupInferiorPrefixes as string;
  protected readonly gemsFilterSetting:          string = config.Gems                     as string;

  protected readonly bigTooltipGemsSetting: BigTooltipSetting = config.BigTooltipGems as number as BigTooltipSetting;

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

  // TODO: refactor
  protected applyGold(): void {
    let color = this.getGoldAffixColor();
    let gld = "gld";

    switch (this.goldSuffixFilterSetting) { // todo: rename
      case SettingsConstants.disabled: // Gold displays as "1234 Gold".
        if (color !== ColorConstants.none)
          this.collection.upsert(new ItemEntry(gld, `${color}Gold`));
        return;
      case "g": // Gold displays as "1234 G".
        this.collection.upsert(new ItemEntry(gld, `${color}G`));
        return;
      case "hide": // Gold displays as "1234".
        this.collection.upsert(new ItemEntry(gld, SettingsConstants.hidden));
        return;
      case SettingsConstants.custom: // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        /*
        this.upsert(goldCol, gld, `${ColorConstants.purple}Gold`);
        */
        return;
    }
  }

  private getGoldAffixColor(): D2Color {
    if (this.goldFilterSetting === "wg")
      return ColorConstants.gold;
    if (this.goldFilterSetting === "gw")
      return ColorConstants.white;

    return ColorConstants.none;
  }

  protected applyShortSupInferiorPrefixes(): void {
    var color = (this.shortSupInfPrefixesSetting === "color") ? ColorConstants.gray : ColorConstants.none;
    var superior = `${CharConstants.plus}`;
    var inferior = `${color}${CharConstants.minus}`;

    let hiq = "Hiquality";
    let dam = "Damaged";
    let cra = "Cracked";
    let low = "Low Quality";
    let crd = "Crude";

    switch (this.shortSupInfPrefixesSetting) {
      case SettingsConstants.disabled:
        return;
      case "short": // Enable
      case "color": // Enable, gray Inferior items
        this.collection.upsert(new ItemEntry(hiq, superior));
        this.collection.upsert(new ItemEntry(dam, inferior));
        this.collection.upsert(new ItemEntry(cra, inferior));
        this.collection.upsert(new ItemEntry(low, inferior));
        this.collection.upsert(new ItemEntry(crd, inferior));
        return;
      case SettingsConstants.custom: // [CSTM-SPIF]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        /*
        this.upsert(supInfCol, hiq, `Superior`);
        this.upsert(supInfCol, dam, `Damaged`);
        this.upsert(supInfCol, cra, `Cracked`);
        this.upsert(supInfCol, low, `Low Quality`);
        this.upsert(supInfCol, crd, `Crude`);
        */
        return;
    }
  }

  protected applyGems(): void {
    switch (this.gemsFilterSetting) {
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
      case SettingsConstants.custom: // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        /*
        this.upsert(gemsCol, "gsw", `Diamond`);
        this.upsert(gemsCol, "gsg", `Emerald`);
        this.upsert(gemsCol, "gsr", `Ruby`);
        this.upsert(gemsCol, "gsb", `Sapphire`);
        */
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
    if (this.bigTooltipGemsSetting != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntries(this.gems.map(gem => gem.getKey()), this.bigTooltipGemsSetting);
  }
}
