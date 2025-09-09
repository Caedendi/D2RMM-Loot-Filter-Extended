import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { SingleHighlight } from "../../Models/Highlights/SingleHighlight";
import { JunkItemEntry } from "../../Models/ItemCollectionEntries/JunkItemEntry";
import { PotionEntry } from "../../Models/ItemCollectionEntries/PotionEntry";
import { EPotionType } from "../../Models/Items/EPotionType";
import { Potion } from "../../Models/Items/Potion";
import { JunkSettings } from "../../Settings/Filter/JunkSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JunkComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    this.applyBuffPotions();
    this.applyThrowingPotions();
    this.applyAmmo();
    this.applyKeys();
  }

  // TODO: use translated names
  protected applyBuffPotions(): void {
    const buffPots: Potion[] = [
      new Potion("yps", "Antidote", EPotionType.BUFF), // Antidote Potion
      new Potion("wms", "Thawing",  EPotionType.BUFF), // Thawing Potion
      new Potion("vps", "Stamina",  EPotionType.BUFF), // Stamina Potion
    ];

    switch (JunkSettings.buffPotions) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        buffPots.forEach(pot => this.collection.upsert(new PotionEntry(pot)));
        return;
      case SettingsConstants.hide: // hide all
        this.collection.upsertMultipleHidden(buffPots.map(pot => pot.key));
        return;
    }
  }

  // TODO: use translated names
  protected applyThrowingPotions(): void {
    const throwPots: Potion[] = [
      new Potion("gpl", "Gas 1", EPotionType.GAS), // Strangling Gas Potion
      new Potion("gpm", "Gas 2", EPotionType.GAS), // Choking Gas Potion
      new Potion("gps", "Gas 3", EPotionType.GAS), // Rancid Gas Potion
      new Potion("opl", "Oil 1", EPotionType.OIL), // Fulminating Potion
      new Potion("opm", "Oil 2", EPotionType.OIL), // Exploding Potion
      new Potion("ops", "Oil 3", EPotionType.OIL), // Oil Potion
    ];

    switch (JunkSettings.throwingPotions) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        throwPots.forEach(pot => this.collection.upsert(new PotionEntry(pot)));
        return;
      case SettingsConstants.hide: // hide all
        this.collection.upsertMultipleHidden(throwPots.map(pot => pot.key));
        return;
    }
  }

  protected applyAmmo(): void {
    const arrowsKey: string  = "aqv";
    const boltsKey: string  = "cqv";

    switch (JunkSettings.ammo) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.highlightAmmo(arrowsKey);
        this.highlightAmmo(boltsKey);
        return;
      case "arw":
        this.highlightAmmo(arrowsKey);
        this.collection.upsertHidden(boltsKey);
        return;
      case "blt":
        this.highlightAmmo(boltsKey);
        this.collection.upsertHidden(arrowsKey);
        return;
      case SettingsConstants.hide:
        this.collection.upsertMultipleHidden([arrowsKey, boltsKey]);
        return;
    }
  }

  private highlightAmmo(key: string): void {
    this.collection.upsert(new JunkItemEntry(key, null, new SingleHighlight(CharConstants.o, ColorConstants.gray, HighlightConstants.padding.p1)));
  }

  protected applyKeys(): void {
    if (JunkSettings.keys == SettingsConstants.hide)
        this.collection.upsertHidden("key");
  }
}
