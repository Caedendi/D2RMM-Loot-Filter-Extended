import { CharConstants } from "../../../Constants/CharConstants";
import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { D2Color } from "../../../Models/D2Color";
import { SingleHighlightItemEntry } from "../../../Models/SingleHighlightItemEntry";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";

export class JunkBuilder extends ItemBuilderBase implements IItemBuilder {
  constructor() {
    super();
  }

  public build(): void {
    this.buildBuffPotions();
    this.buildThrowingPotions();
    this.buildAmmo();
    this.buildKeys();
  }

  public buildBuffPotions(): void {
    let buffPots: {key: string, name: string}[] = [
      { key: "yps", name: "Antidote" }, // Antidote Potion
      { key: "wms", name: "Thawing" },  // Thawing Potion
      { key: "vps", name: "Stamina" },  // Stamina Potion
    ];

    switch (config.BuffPotions as string) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        let entries = SingleHighlightItemEntry.createSingleColorArray(buffPots, CharConstants.plus, ColorConstants.green, HighlightConstants.paddingNone, ColorConstants.white);
        this.collection.upsertEntries(entries);
        return;
      case "hide": // hide all
        this.collection.upsertMultipleHidden(buffPots.map(pot => pot.key));
        return;
      case SettingsConstants.custom: // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        this.collection.upsert("yps", "Antidote Potion");
        this.collection.upsert("wms", "Thawing Potion");
        this.collection.upsert("vps", "Stamina Potion");
        return;
    }
  }

  public buildThrowingPotions(): void {
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

    switch (config.ThrowingPotions as string) { // todo: validate setting as string
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        let entries = SingleHighlightItemEntry.createMultiColorArray(throwingPots, highlight, padding, clrName);
        this.collection.upsertEntries(entries);
        return;
      case "hide": // hide all
        this.collection.upsertMultipleHidden(throwingPots.map(pot => pot.key));
        return;
      case SettingsConstants.custom: // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        this.collection.upsert("gpl", "Strangling Gas Potion");
        this.collection.upsert("gpm", "Choking Gas Potion");
        this.collection.upsert("gps", "Rancid Gas Potion");
        this.collection.upsert("opl", "Fulminating Potion");
        this.collection.upsert("opm", "Exploding Potion");
        this.collection.upsert("ops", "Oil Potion");
        return;
    }
  }

  public buildAmmo(): void {
    let clrHighlight: D2Color = ColorConstants.gray;
    let clrName:      D2Color = ColorConstants.white;
    let highlight:    string  = CharConstants.o;
    let padding:      string  = HighlightConstants.padding1;
    let aqv:          string  = "aqv";
    let cqv:          string  = "cqv";
    let arrows = new SingleHighlightItemEntry(aqv, "Arrows", highlight, clrHighlight, padding, clrName);
    let bolts  = new SingleHighlightItemEntry(cqv, "Bolts",  highlight, clrHighlight, padding, clrName);

    switch (config.ArrowsBolts as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.collection.upsertEntries([arrows, bolts]);
        return;
      case "arw":
        this.collection.upsertEntry(arrows);
        this.collection.upsertHidden(cqv);
        return;
      case "blt":
        this.collection.upsertEntry(bolts);
        this.collection.upsertHidden(aqv);
        return;
      case "hide":
        this.collection.upsertMultipleHidden([aqv, cqv]);
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE

        // TODO: refactor
        this.collection.upsert(aqv, "Arrows");
        this.collection.upsert(cqv, "Bolts");
        return;
    }
  }

  public buildKeys(): void {
    switch (config.Keys as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case "hide":
        this.collection.upsertHidden("key");
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert("key", "Key");
        return;
    }
  }
}
