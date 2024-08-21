import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { SingleHighlight } from "../../Models/Highlights/SingleHighlight";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { JunkSettings } from "../../Settings/Filter/JunkSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JunkComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly nameColor: D2Color = ColorConstants.white;

  constructor() {
    super();
  }

  public applyFilter(): void {
    this.applyBuffPotions();
    this.applyThrowingPotions();
    this.applyAmmo();
    this.applyKeys();
  }

  protected applyBuffPotions(): void {
    let buffPots: { key: string, name: string }[] = [
      { key: "yps", name: "Antidote" }, // Antidote Potion
      { key: "wms", name: "Thawing" },  // Thawing Potion
      { key: "vps", name: "Stamina" },  // Stamina Potion
    ];

    switch (JunkSettings.buffPotions) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        buffPots.forEach(pot => this.collection.upsert(new ItemEntry(pot.key, pot.name, this.nameColor, new SingleHighlight(CharConstants.plus, ColorConstants.green))));
        return;
      case SettingsConstants.hide: // hide all
        this.collection.upsertMultipleHidden(buffPots.map(pot => pot.key));
        return;
    }
  }

  protected applyThrowingPotions(): void {
    let highlightGas = new SingleHighlight(CharConstants.o, ColorConstants.darkGreen, HighlightConstants.padding1);
    let highlightOil = new SingleHighlight(CharConstants.o, ColorConstants.orange, HighlightConstants.padding1);
  
    let throwingPots: { key: string, name: string, highlight: IHighlight }[] = [
      { key: "gpl", name: "Gas 1", highlight: highlightGas }, // Strangling Gas Potion
      { key: "gpm", name: "Gas 2", highlight: highlightGas }, // Choking Gas Potion
      { key: "gps", name: "Gas 3", highlight: highlightGas }, // Rancid Gas Potion
      { key: "opl", name: "Oil 1", highlight: highlightOil }, // Fulminating Potion
      { key: "opm", name: "Oil 2", highlight: highlightOil }, // Exploding Potion
      { key: "ops", name: "Oil 3", highlight: highlightOil }, // Oil Potion
    ];

    switch (JunkSettings.throwingPotions) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        throwingPots.forEach(pot => this.collection.upsert(new ItemEntry(pot.key, pot.name, this.nameColor, pot.highlight)));
        return;
      case SettingsConstants.hide: // hide all
        this.collection.upsertMultipleHidden(throwingPots.map(pot => pot.key));
        return;
    }
  }

  protected applyAmmo(): void {
    let aqv: string  = "aqv";
    let cqv: string  = "cqv";

    switch (JunkSettings.arrowsBolts) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.highlightAmmo(aqv);
        this.highlightAmmo(cqv);
        return;
      case "arw":
        this.highlightAmmo(aqv);
        this.collection.upsertHidden(cqv);
        return;
      case "blt":
        this.highlightAmmo(cqv);
        this.collection.upsertHidden(aqv);
        return;
      case SettingsConstants.hide:
        this.collection.upsertMultipleHidden([aqv, cqv]);
        return;
    }
  }

  private highlightAmmo(key: string): void {
    this.collection.upsert(new ItemEntry(key, null, this.nameColor, new SingleHighlight(CharConstants.o, ColorConstants.gray, HighlightConstants.padding1)));
  }

  // TODO: add option for highlight?
  protected applyKeys(): void {
    if (JunkSettings.keys == SettingsConstants.hide)
        this.collection.upsertHidden("key");
  }
}
