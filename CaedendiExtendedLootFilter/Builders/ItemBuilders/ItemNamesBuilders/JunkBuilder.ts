import { CharConstants } from "../../../Constants/CharConstants";
import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { D2Color } from "../../../Models/D2Color";
import { SingleHighlightItemEntry } from "../../../Models/SingleHighlightItemEntry";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { ItemBuilderBase } from "../ItemBuilderBase";

export class JunkBuilder extends ItemBuilderBase implements IItemBuilder {
  protected readonly buffPotionsFilterSetting:     string = config.BuffPotions     as string;
  protected readonly throwingPotionsFilterSetting: string = config.ThrowingPotions as string;
  protected readonly ammoFilterSetting:            string = config.ArrowsBolts     as string;
  protected readonly keysFilterSetting:            string = config.Keys            as string;

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
    let buffPots: {key: string, name: string}[] = [
      { key: "yps", name: "Antidote" }, // Antidote Potion
      { key: "wms", name: "Thawing" },  // Thawing Potion
      { key: "vps", name: "Stamina" },  // Stamina Potion
    ];

    switch (this.buffPotionsFilterSetting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        let entries = SingleHighlightItemEntry.createSingleColorArray(buffPots, CharConstants.plus, ColorConstants.green, HighlightConstants.paddingNone, ColorConstants.white);
        this.collection.upsertMultiple(entries);
        return;
      case "hide": // hide all
        this.collection.upsertMultipleHidden(buffPots.map(pot => pot.key));
        return;
      case SettingsConstants.custom: // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        // this.collection.upsertOLD("yps", "Antidote Potion");
        // this.collection.upsertOLD("wms", "Thawing Potion");
        // this.collection.upsertOLD("vps", "Stamina Potion");
        return;
    }
  }

  protected applyThrowingPotions(): void {
    let clrGas = ColorConstants.darkGreen;
    let clrOil = ColorConstants.orange;
    let clrName = ColorConstants.white;
    let highlight = CharConstants.o;
    let padding = HighlightConstants.padding1;
  
    let throwingPots: {key: string, name: string, color: D2Color}[] = [
      { key: "gpl", name: "Gas 1", color: clrGas }, // Strangling Gas Potion
      { key: "gpm", name: "Gas 2", color: clrGas }, // Choking Gas Potion
      { key: "gps", name: "Gas 3", color: clrGas }, // Rancid Gas Potion
      { key: "opl", name: "Oil 1", color: clrOil }, // Fulminating Potion
      { key: "opm", name: "Oil 2", color: clrOil }, // Exploding Potion
      { key: "ops", name: "Oil 3", color: clrOil }, // Oil Potion
    ];

    switch (this.throwingPotionsFilterSetting) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        let entries = SingleHighlightItemEntry.createMultiColorArray(throwingPots, highlight, padding, clrName);
        this.collection.upsertMultiple(entries);
        return;
      case "hide": // hide all
        this.collection.upsertMultipleHidden(throwingPots.map(pot => pot.key));
        return;
      case SettingsConstants.custom: // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        // this.collection.upsertOLD("gpl", "Strangling Gas Potion");
        // this.collection.upsertOLD("gpm", "Choking Gas Potion");
        // this.collection.upsertOLD("gps", "Rancid Gas Potion");
        // this.collection.upsertOLD("opl", "Fulminating Potion");
        // this.collection.upsertOLD("opm", "Exploding Potion");
        // this.collection.upsertOLD("ops", "Oil Potion");
        return;
    }
  }

  protected applyAmmo(): void {
    let clrHighlight: D2Color = ColorConstants.gray;
    let clrName:      D2Color = ColorConstants.white;
    let highlight:    string  = CharConstants.o;
    let padding:      string  = HighlightConstants.padding1;
    let aqv:          string  = "aqv";
    let cqv:          string  = "cqv";
    let arrows = new SingleHighlightItemEntry(aqv, "Arrows", highlight, clrHighlight, padding, clrName);
    let bolts  = new SingleHighlightItemEntry(cqv, "Bolts",  highlight, clrHighlight, padding, clrName);

    switch (this.ammoFilterSetting) {
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.collection.upsertMultiple([arrows, bolts]);
        return;
      case "arw":
        this.collection.upsert(arrows);
        this.collection.upsertHidden(cqv);
        return;
      case "blt":
        this.collection.upsert(bolts);
        this.collection.upsertHidden(aqv);
        return;
      case "hide":
        this.collection.upsertMultipleHidden([aqv, cqv]);
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        // this.collection.upsertOLD(aqv, "Arrows");
        // this.collection.upsertOLD(cqv, "Bolts");
        return;
    }
  }

  protected applyKeys(): void {
    switch (this.keysFilterSetting) {
      case SettingsConstants.disabled:
        return;
      case "hide":
        this.collection.upsertHidden("key");
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        // this.collection.upsertOLD("key", "Key");
        return;
    }
  }
}
