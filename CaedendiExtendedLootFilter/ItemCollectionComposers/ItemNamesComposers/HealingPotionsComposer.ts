import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { SingleHighlightItemEntry } from "../../Models/_old/SingleHighlightItemEntry";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class HealingPotionsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly clrHeal = ColorConstants.red;
  protected readonly clrMana = ColorConstants.blue;
  protected readonly clrRej  = ColorConstants.purple;

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.junk.healingPotions) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightLv123Potions();
        this.highlightLv4Potions();
        this.highlightLv5Potions();
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions();
        this.highlightLv5Potions();
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions();
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv4Potions();
        this.highlightLv5Potions();
        this.highlightFullRejuv();
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.highlightLv5Potions();
        this.highlightFullRejuv();
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions();
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions();
        this.highlightFullRejuv();
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions();
        return;
      case SettingsConstants.custom: // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        // this.collection.upsertOLD("hp1", `${this.clrHeal}+${this.clrName}HP1`); // Minor Healing Potion
        // this.collection.upsertOLD("hp2", `${this.clrHeal}+${this.clrName}HP2`); // Light Healing Potion
        // this.collection.upsertOLD("hp3", `${this.clrHeal}+${this.clrName}HP3`); // Healing Potion
        // this.collection.upsertOLD("hp4", `${this.clrHeal}+${this.clrName}HP4`); // Greater Healing Potion
        // this.collection.upsertOLD("hp5", `${this.clrHeal}+${this.clrName}HP5`); // Super Healing Potion

        // this.collection.upsertOLD("mp1", `${this.clrMana}+${this.clrName}MP1`); // Minor Mana Potion
        // this.collection.upsertOLD("mp2", `${this.clrMana}+${this.clrName}MP2`); // Light Mana Potion
        // this.collection.upsertOLD("mp3", `${this.clrMana}+${this.clrName}MP3`); // Mana Potion
        // this.collection.upsertOLD("mp4", `${this.clrMana}+${this.clrName}MP4`); // Greater Mana Potion
        // this.collection.upsertOLD("mp5", `${this.clrMana}+${this.clrName}MP5`); // Super Mana Potion

        // this.collection.upsertOLD("rvs", `${this.clrRej}+${this.clrName}RPS`); // Rejuvenation Potion
        // this.collection.upsertOLD("rvl", `${this.clrRej}+${this.clrName}RPF`); // Full Rejuvenation Potion
        return;
    }
  }

  protected hideHealingPotions(): void {
    this.collection.upsertMultipleHidden([
      "hp1", "hp2", "hp3", "hp4", "hp5",
      "mp1", "mp2", "mp3", "mp4", "mp5",
      "rvs", "rvl",
    ]);
  }

  protected highlightLv123Potions(): void {
    this.upsertPotions([
      { key: "hp1", name: "HP1", color: this.clrHeal },
      { key: "hp2", name: "HP2", color: this.clrHeal },
      { key: "hp3", name: "HP3", color: this.clrHeal },
      { key: "mp1", name: "MP1", color: this.clrMana },
      { key: "mp2", name: "MP2", color: this.clrMana },
      { key: "mp3", name: "MP3", color: this.clrMana },
    ]);
  }

  protected highlightLv4Potions(): void {
    this.upsertPotions([
      { key: "hp4", name: "HP4", color: this.clrHeal },
      { key: "mp4", name: "MP4", color: this.clrMana },
    ]);
  }

  protected highlightLv5Potions(): void {
    this.upsertPotions([
      { key: "hp5", name: "HP5", color: this.clrHeal },
      { key: "mp5", name: "MP5", color: this.clrMana },
    ]);
  }

  protected highlightSmallRejuv(): void {
    this.upsertPotion("rvs", "RPS", this.clrRej);
  }

  protected highlightFullRejuv(): void {
    this.upsertPotion("rvl", "RPF", this.clrRej);
  }

  protected upsertPotions(potions: {key: string, name: string, color: D2Color}[]): void {
    potions.forEach(pot => this.upsertPotion(pot.key, pot.name, pot.color));
  }

  protected upsertPotion(key: string, name: string, color: D2Color): void {
    this.collection.upsert(new SingleHighlightItemEntry(key, name, CharConstants.plus, color, HighlightConstants.paddingNone, ColorConstants.white));
  }
}
