import { ModConfigSingleValue } from "../../../types";
import { CharConstants } from "../Constants/CharConstants";
import { CollectionConstants } from "../Constants/CollectionConstants";
import { ColorConstants } from "../Constants/ColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { GemConstants } from "../Constants/GemConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { Gem } from "../Models/Gem";
import { AbstractItemBuilder } from "./AbstractItemBuilder";

export class ItemNameAffixesBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_ITEM_NAMEAFFIXES_PATH);

    [
      CollectionConstants.gold,
      CollectionConstants.supInf,
      CollectionConstants.gems,
    ].forEach(id => {
      this.initCollection(id);
    });
  }

  build() {
    if (config.GoldAmount === SettingsConstants.disabled
      && config.GoldSuffix === SettingsConstants.disabled
      && config.Gems === SettingsConstants.disabled
      && config.ShortSupInferiorPrefixes === SettingsConstants.disabled) {
      return;
    }

    this.customizeGold(config.GoldAmount as string, config.GoldSuffix as string);
    this.shortenSupInferiorPrefixes(config.ShortSupInferiorPrefixes as string);
    this.customizeGems(config.Gems as string);
    this.addBigTooltips(config.BigTooltipGems as string);
    this.applyCustomNames();
  }

  customizeGold(settingAmount:ModConfigSingleValue, settingAffix:ModConfigSingleValue) {
    let goldCol = this.getCollectionById(CollectionConstants.gold);
    let color = settingAmount === "wg" ? ColorConstants.gold : settingAmount === "gw" ? ColorConstants.white : ColorConstants.none;
    let gld = "gld";

    switch (settingAffix) {
      case SettingsConstants.disabled: // Gold displays as "1234 Gold".
        if (color !== ColorConstants.none) {
          this.upsert(goldCol, gld, `${color}Gold`);
        }
        return;
      case "g": // Gold displays as "1234 G".
        this.upsert(goldCol, gld, `${color}G`);
        return;
      case "hide": // Gold displays as "1234".
        this.upsert(goldCol, gld, SettingsConstants.hidden);
        return;
      case SettingsConstants.custom: // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(goldCol, gld, `${ColorConstants.purple}Gold`);
        return;
    }
  }

  shortenSupInferiorPrefixes(setting:ModConfigSingleValue) {
    let supInfCol = this.getCollectionById(CollectionConstants.supInf);
    var color = (setting === "color") ? ColorConstants.gray : ColorConstants.none;
    var superior = `${CharConstants.plus}`;
    var inferior = `${color}${CharConstants.minus}`;

    let hiq = "Hiquality";
    let dam = "Damaged";
    let cra = "Cracked";
    let low = "Low Quality";
    let crd = "Crude";

    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case "short": // Enable
      case "color": // Enable, gray Inferior items
        this.upsert(supInfCol, hiq, superior);
        this.upsert(supInfCol, dam, inferior);
        this.upsert(supInfCol, cra, inferior);
        this.upsert(supInfCol, low, inferior);
        this.upsert(supInfCol, crd, inferior);
        return;
      case SettingsConstants.custom: // [CSTM-SPIF]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(supInfCol, hiq, `Superior`);
        this.upsert(supInfCol, dam, `Damaged`);
        this.upsert(supInfCol, cra, `Cracked`);
        this.upsert(supInfCol, low, `Low Quality`);
        this.upsert(supInfCol, crd, `Crude`);
        return;
    }
  }

  customizeGems(setting:ModConfigSingleValue) {
    let gemsCol = this.getCollectionById(CollectionConstants.gems);

    let gems = [
      new Gem("gsw", GemConstants.clrDiamond,  GemConstants.diamond),   // Diamond
      new Gem("gsg", GemConstants.clrEmerald,  GemConstants.emerald),   // Emerald
      new Gem("gsr", GemConstants.clrRuby,     GemConstants.ruby),      // Ruby
      new Gem("gsb", GemConstants.clrSapphire, GemConstants.sapphire), // Sapphire
    ];
    // These gem names also function as affixes, which is why they are located in the item-nameaffixes.json file.
    // Enabling filtering for these gems could also change for example the Ruby-part in a "Ruby Jewel of Fervor".
    switch (setting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightGems(gemsCol, gems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(gemsCol, gems);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(gemsCol, gems);
        return;
      case SettingsConstants.custom: // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(gemsCol, "gsw", `Diamond`);
        this.upsert(gemsCol, "gsg", `Emerald`);
        this.upsert(gemsCol, "gsr", `Ruby`);
        this.upsert(gemsCol, "gsb", `Sapphire`);
        return;
    }
  }

  hideGems(gemsCollection:{id:string, value:string}[], gems: Gem[]) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, SettingsConstants.hidden);
    });
  }

  highlightGems(gemsCollection: {id: string, value: string}[], gems: Gem[]) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, Helper.generateSingleHighlight(gem.color, GemConstants.highlight, GemConstants.padding, GemConstants.clrName, gem.name));
    });
  }

  addBigTooltips(settingGems: string) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    if (settingGems !== SettingsConstants.disabled) {
      let gemsCol = this.getCollectionById(CollectionConstants.gems);
      Helper.addBigTooltips(gemsCol, settingGems);
    }
  }
}
