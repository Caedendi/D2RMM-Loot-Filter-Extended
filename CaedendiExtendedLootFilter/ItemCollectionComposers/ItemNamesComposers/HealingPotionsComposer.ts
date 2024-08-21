import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { SingleHighlight } from "../../Models/Highlights/SingleHighlight";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { JunkSettings } from "../../Settings/Filter/JunkSettings";
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
    switch (JunkSettings.healingPotions) {
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

  protected upsertPotions(potions: { key: string, name: string, color: D2Color }[]): void { // TODO: create model?
    potions.forEach(pot => this.upsertPotion(pot.key, pot.name, pot.color));
  }

  protected upsertPotion(key: string, name: string, color: D2Color): void {
    this.collection.upsert(new ItemEntry(key, name, ColorConstants.white, new SingleHighlight(CharConstants.plus, color, HighlightConstants.padding.none)));
  }
}
