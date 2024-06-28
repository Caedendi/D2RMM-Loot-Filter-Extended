import { CharConstants } from "../../Constants/CharConstants";
import { CollectionConstants } from "../../Constants/Items/CollectionConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { FileConstants } from "../../Constants/FileConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { IHealingPotionsBuilder } from "./Interfaces/IHealingPotionsBuilder";
import { D2Color } from "../../Models/D2Color";
import { ItemCollection } from "../../Models/ItemCollection";
import { BaseBuilder } from "./BaseBuilder";

export class HealingPotionsBuilder extends BaseBuilder implements IHealingPotionsBuilder {
  public potionCollection: ItemCollection;

  constructor() {
    super(FileConstants.FILE_ITEM_NAMES_PATH);

    // todo: 
    // - refactor and add collection so compiler builder can read it

    // [
    //   CollectionConstants.junk,
    //   CollectionConstants.jewels,
    //   CollectionConstants.charms,
    //   CollectionConstants.gems,
    //   CollectionConstants.quest,
    //   CollectionConstants.endgame,
    //   CollectionConstants.customFilterList,
    // ].forEach(id => {
    //   this.initCollection(id);
    // });
  }

  public build(): void {
    let junkCol = this.getCollectionById(CollectionConstants.junk);

    const clrHeal = ColorConstants.red;
    const clrMana = ColorConstants.blue;
    const clrRej = ColorConstants.purple;
    const clrName = ColorConstants.white;
    const pattern = CharConstants.plus;
    const padding = HighlightConstants.paddingNone;

    switch (config.HealingPotions) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightLv123Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv4Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightLv5Potions(junkCol, clrHeal, clrMana, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightSmallRejuvs(junkCol, clrRej, clrName, pattern, padding);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions(junkCol);
        this.highlightFullRejuvs(junkCol, clrRej, clrName, pattern, padding);
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions(junkCol);
        return;
      case SettingsConstants.custom: // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.upsert(junkCol, "hp1", `${clrHeal}+${clrName}HP1`); // Minor Healing Potion
        this.upsert(junkCol, "hp2", `${clrHeal}+${clrName}HP2`); // Light Healing Potion
        this.upsert(junkCol, "hp3", `${clrHeal}+${clrName}HP3`); // Healing Potion
        this.upsert(junkCol, "hp4", `${clrHeal}+${clrName}HP4`); // Greater Healing Potion
        this.upsert(junkCol, "hp5", `${clrHeal}+${clrName}HP5`); // Super Healing Potion

        this.upsert(junkCol, "mp1", `${clrMana}+${clrName}MP1`); // Minor Mana Potion
        this.upsert(junkCol, "mp2", `${clrMana}+${clrName}MP2`); // Light Mana Potion
        this.upsert(junkCol, "mp3", `${clrMana}+${clrName}MP3`); // Mana Potion
        this.upsert(junkCol, "mp4", `${clrMana}+${clrName}MP4`); // Greater Mana Potion
        this.upsert(junkCol, "mp5", `${clrMana}+${clrName}MP5`); // Super Mana Potion

        this.upsert(junkCol, "rvs", `${clrRej}+${clrName}RPS`); // Rejuvenation Potion
        this.upsert(junkCol, "rvl", `${clrRej}+${clrName}RPF`); // Full Rejuvenation Potion
        return;
    }

    // TODO: add big tooltips
  }

public hideHealingPotions(potionsCollection: ItemCollection): void {
    [
      "hp1", "hp2", "hp3", "hp4", "hp5",
      "mp1", "mp2", "mp3", "mp4", "mp5",
      "rvs", "rvl",
    ].forEach(pot => {
      this.upsert(potionsCollection, pot, SettingsConstants.hidden);
    });
  }

public highlightLv123Potions(potionsCollection: ItemCollection, clrHeal: D2Color, clrMana: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    [
      { id: "hp1", name: "HP1", clr: clrHeal },
      { id: "hp2", name: "HP2", clr: clrHeal },
      { id: "hp3", name: "HP3", clr: clrHeal },
      { id: "mp1", name: "MP1", clr: clrMana },
      { id: "mp2", name: "MP2", clr: clrMana },
      { id: "mp3", name: "MP3", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

public highlightLv4Potions(potionsCollection: ItemCollection, clrHeal: D2Color, clrMana: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    [
      { id: "hp4", name: "HP4", clr: clrHeal },
      { id: "mp4", name: "MP4", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

public highlightLv5Potions(potionsCollection: ItemCollection, clrHeal: D2Color, clrMana: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    [
      { id: "hp5", name: "HP5", clr: clrHeal },
      { id: "mp5", name: "MP5", clr: clrMana },
    ].forEach(pot => {
      this.upsert(potionsCollection, pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
    });
  }

public highlightSmallRejuvs(potionsCollection: ItemCollection, clrRej: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.upsert(potionsCollection, "rvs", Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPS"));
  }

public highlightFullRejuvs(potionsCollection: ItemCollection, clrRej: D2Color, clrName: D2Color, pattern: string, padding: string): void {
    this.upsert(potionsCollection, "rvl", Helper.generateSingleHighlight(clrRej, pattern, padding, clrName, "RPF"));
  }
}