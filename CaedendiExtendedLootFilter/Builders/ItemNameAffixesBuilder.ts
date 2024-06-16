import { CharConstants } from "../Constants/CharConstants.ts";
import { CollectionConstants } from "../Constants/CollectionConstants.ts";
import { ColorConstants } from "../Constants/ColorConstants.ts";
import { FileConstants } from "../Constants/FileConstants.ts";
import { JewelryConstants } from "../Constants/JewelryConstants.ts";
import { SettingsConstants } from "../Constants/SettingsConstants.ts";
import { Helper } from "../helper.ts";
import { AbstractItemBuilder } from "./AbstractItemBuilder.ts";

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

    this.customizeGold(config.GoldAmount, config.GoldSuffix);
    this.shortenSupInferiorPrefixes(config.ShortSupInferiorPrefixes);
    this.customizeGems(config.Gems);
    this.addBigTooltips(config.BigTooltipGems);
    this.applyCustomNames();
  }

  customizeGold(settingAmount, settingAffix) {
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

  shortenSupInferiorPrefixes(setting) {
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

  customizeGems(setting) {
    let gemsCol = this.getCollectionById(CollectionConstants.gems);

    let gems = [
      { id: "gsw", color: JewelryConstants.clrDiamond, name: JewelryConstants.diamond }, // Diamond
      { id: "gsg", color: JewelryConstants.clrEmerald, name: JewelryConstants.emerald }, // Emerald
      { id: "gsr", color: JewelryConstants.clrRuby, name: JewelryConstants.ruby }, // Ruby
      { id: "gsb", color: JewelryConstants.clrSapphire, name: JewelryConstants.sapphire }, // Sapphire
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
        this.upsert(gemsCol, gsw, `Diamond`);
        this.upsert(gemsCol, gsg, `Emerald`);
        this.upsert(gemsCol, gsr, `Ruby`);
        this.upsert(gemsCol, gsb, `Sapphire`);
        return;
    }
  }

  hideGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, SettingsConstants.hidden);
    });
  }

  highlightGems(gemsCollection, gems) {
    gems.forEach(gem => {
      this.upsert(gemsCollection, gem.id, Helper.generateSingleHighlight(gem.color, JewelryConstants.highlight, JewelryConstants.padding, JewelryConstants.clrName, gem.name));
    });
  }

  addBigTooltips(settingGems) {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    if (settingGems !== SettingsConstants.disabled) {
      let gemsCol = this.getCollectionById(CollectionConstants.gems);
      Helper.addBigTooltips(gemsCol, settingGems);
    }
  }
}
