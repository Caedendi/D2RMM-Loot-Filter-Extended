import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class HealingPotionsBuilder extends BaseBuilder implements IBuilder {
  protected readonly clrHeal = ColorConstants.red;
  protected readonly clrMana = ColorConstants.blue;
  protected readonly clrRej  = ColorConstants.purple;
  protected readonly clrName = ColorConstants.white;
  protected readonly pattern = CharConstants.plus;
  protected readonly padding = HighlightConstants.paddingNone;

  constructor() {
    super();
  }

  public build(): void {
    switch (config.HealingPotions as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightLv123Potions();
        this.highlightLv4Potions();
        this.highlightLv5Potions();
        this.highlightSmallRejuvs();
        this.highlightFullRejuvs();
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions();
        this.highlightLv5Potions();
        this.highlightSmallRejuvs();
        this.highlightFullRejuvs();
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions();
        this.highlightSmallRejuvs();
        this.highlightFullRejuvs();
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions();
        this.highlightLv5Potions();
        this.highlightFullRejuvs();
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions();
        this.highlightFullRejuvs();
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions();
        this.highlightSmallRejuvs();
        this.highlightFullRejuvs();
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions();
        this.highlightFullRejuvs();
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions();
        return;
      case SettingsConstants.custom: // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert("hp1", `${this.clrHeal}+${this.clrName}HP1`); // Minor Healing Potion
        this.collection.upsert("hp2", `${this.clrHeal}+${this.clrName}HP2`); // Light Healing Potion
        this.collection.upsert("hp3", `${this.clrHeal}+${this.clrName}HP3`); // Healing Potion
        this.collection.upsert("hp4", `${this.clrHeal}+${this.clrName}HP4`); // Greater Healing Potion
        this.collection.upsert("hp5", `${this.clrHeal}+${this.clrName}HP5`); // Super Healing Potion

        this.collection.upsert("mp1", `${this.clrMana}+${this.clrName}MP1`); // Minor Mana Potion
        this.collection.upsert("mp2", `${this.clrMana}+${this.clrName}MP2`); // Light Mana Potion
        this.collection.upsert("mp3", `${this.clrMana}+${this.clrName}MP3`); // Mana Potion
        this.collection.upsert("mp4", `${this.clrMana}+${this.clrName}MP4`); // Greater Mana Potion
        this.collection.upsert("mp5", `${this.clrMana}+${this.clrName}MP5`); // Super Mana Potion

        this.collection.upsert("rvs", `${this.clrRej}+${this.clrName}RPS`); // Rejuvenation Potion
        this.collection.upsert("rvl", `${this.clrRej}+${this.clrName}RPF`); // Full Rejuvenation Potion
        return;
    }
  }

protected hideHealingPotions(): void {
    [
      "hp1", "hp2", "hp3", "hp4", "hp5",
      "mp1", "mp2", "mp3", "mp4", "mp5",
      "rvs", "rvl",
    ].forEach(pot => {
      this.collection.upsert(pot, SettingsConstants.hidden);
    });
  }

protected highlightLv123Potions(): void {
    [
      { id: "hp1", name: "HP1", clr: this.clrHeal },
      { id: "hp2", name: "HP2", clr: this.clrHeal },
      { id: "hp3", name: "HP3", clr: this.clrHeal },
      { id: "mp1", name: "MP1", clr: this.clrMana },
      { id: "mp2", name: "MP2", clr: this.clrMana },
      { id: "mp3", name: "MP3", clr: this.clrMana },
    ].forEach(pot => {
      this.collection.upsert(pot.id, Helper.generateSingleHighlight(pot.clr, this.pattern, this.padding, this.clrName, pot.name));
    });
  }

protected highlightLv4Potions(): void {
    [
      { id: "hp4", name: "HP4", clr: this.clrHeal },
      { id: "mp4", name: "MP4", clr: this.clrMana },
    ].forEach(pot => {
      this.collection.upsert(pot.id, Helper.generateSingleHighlight(pot.clr, this.pattern, this.padding, this.clrName, pot.name));
    });
  }

protected highlightLv5Potions(): void {
    [
      { id: "hp5", name: "HP5", clr: this.clrHeal },
      { id: "mp5", name: "MP5", clr: this.clrMana },
    ].forEach(pot => {
      this.collection.upsert(pot.id, Helper.generateSingleHighlight(pot.clr, this.pattern, this.padding, this.clrName, pot.name));
    });
  }

protected highlightSmallRejuvs(): void {
    this.collection.upsert("rvs", Helper.generateSingleHighlight(this.clrRej, this.pattern, this.padding, this.clrName, "RPS"));
  }

protected highlightFullRejuvs(): void {
    this.collection.upsert("rvl", Helper.generateSingleHighlight(this.clrRej, this.pattern, this.padding, this.clrName, "RPF"));
  }
}
