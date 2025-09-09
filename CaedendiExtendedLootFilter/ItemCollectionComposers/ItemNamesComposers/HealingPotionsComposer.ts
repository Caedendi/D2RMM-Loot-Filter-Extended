import { SettingsConstants } from "../../Constants/SettingsConstants";
import { PotionEntry } from "../../Models/ItemCollectionEntries/PotionEntry";
import { EPotionType } from "../../Models/Items/EPotionType";
import { Potion } from "../../Models/Items/Potion";
import { JunkSettings } from "../../Settings/Filter/JunkSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class HealingPotionsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  private readonly hpKey  = "hp";
  private readonly mpKey  = "mp";
  private readonly hpName = "HP"
  private readonly mpName = "MP";
  private readonly rejuvSmallKey  = "rvs";
  private readonly rejuvFullKey   = "rvl";
  private readonly rejuvSmallName = "RPS";
  private readonly rejuvFullName  = "RPF";

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (JunkSettings.healingPotions) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all: // show all
        this.highlightPotionLevels(1, 5);
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hidePotionLevels(1, 3);
        this.highlightPotionLevels(4, 5);
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hidePotionLevels(1, 4);
        this.highlightPotionLevel(5);
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hidePotionLevels(1, 3);
        this.hideSmallRejuvs();
        this.highlightPotionLevels(4, 5);
        this.highlightFullRejuv();
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hidePotionLevels(1, 4);
        this.hideSmallRejuvs();
        this.highlightPotionLevel(5);
        this.highlightFullRejuv();
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hidePotionLevels(1, 5);
        this.highlightSmallRejuv();
        this.highlightFullRejuv();
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hidePotionLevels(1, 5);
        this.hideSmallRejuvs();
        this.highlightFullRejuv();
        return;
      case "hide": // hide all healing potions
        this.hidePotionLevels(1, 5);
        this.hideSmallRejuvs();
        this.hideFullRejuvs();
        return;
    }
  }

  private highlightPotionLevels(fromLevel: number, upToLevel: number): void {
    for (let i = fromLevel; i <= upToLevel; i++) {
      this.highlightPotionLevel(i);
    }
  }

  private highlightPotionLevel(level: number,): void {
    this.upsertPotion(new Potion(`${this.hpKey}${level}`, `${this.hpName}${level}`, EPotionType.HEALING));
    this.upsertPotion(new Potion(`${this.mpKey}${level}`, `${this.mpName}${level}`, EPotionType.MANA));
  }

  private highlightSmallRejuv(): void {
    this.upsertPotion(new Potion(this.rejuvSmallKey, this.rejuvSmallName, EPotionType.REJUVENATION));
  }

  private highlightFullRejuv(): void {
    this.upsertPotion(new Potion(this.rejuvFullKey, this.rejuvFullName, EPotionType.REJUVENATION));
  }

  private upsertPotion(potion: Potion): void {
    this.collection.upsert(new PotionEntry(potion));
  }

  private hidePotionLevels(fromLevel: number, toLevel: number): void {
    for (let i = fromLevel; i <= toLevel; i++) {
      this.hidePotionLevel(i);
    }
  }

  private hidePotionLevel(level: number): void {
    this.collection.upsertHidden(`${this.hpKey}${level}`);
    this.collection.upsertHidden(`${this.mpKey}${level}`);
  }

  private hideSmallRejuvs(): void {
    this.collection.upsertHidden(this.rejuvSmallKey);
  }

  private hideFullRejuvs(): void {
    this.collection.upsertHidden(this.rejuvFullKey);
  }
}
