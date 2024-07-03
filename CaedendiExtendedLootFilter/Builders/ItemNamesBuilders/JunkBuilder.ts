import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { D2Color } from "../../Models/D2Color";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class JunkBuilder extends BaseBuilder implements IBuilder {
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
    let buffPots: {id: string, value: string}[] = [
      { id: "yps", value: "Antidote" }, // Antidote Potion
      { id: "wms", value: "Thawing" },  // Thawing Potion
      { id: "vps", value: "Stamina" },  // Stamina Potion
    ];

    switch (config.BuffPotions as string) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        buffPots.forEach(pot => {
          this.collection.upsert(pot.id, Helper.generateSingleHighlight(ColorConstants.green, CharConstants.plus, HighlightConstants.paddingNone, ColorConstants.white, pot.value));
        });
        return;
      case "hide": // hide all
        buffPots.forEach(pot => {
          this.collection.upsert(pot.id, SettingsConstants.hidden);
        });
        return;
      case SettingsConstants.custom: // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
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
    let pattern = CharConstants.o;
    let padding = HighlightConstants.padding1;
  
    let throwingPots: {id: string, name: string, clr: D2Color}[] = [
      { id: "gpl", name: "Gas 1", clr: clrGas }, // Strangling Gas Potion
      { id: "gpm", name: "Gas 2", clr: clrGas }, // Choking Gas Potion
      { id: "gps", name: "Gas 3", clr: clrGas }, // Rancid Gas Potion
      { id: "opl", name: "Oil 1", clr: clrOil }, // Fulminating Potion
      { id: "opm", name: "Oil 2", clr: clrOil }, // Exploding Potion
      { id: "ops", name: "Oil 3", clr: clrOil }, // Oil Potion
    ];

    switch (config.ThrowingPotions as string) { // todo: validate setting as string
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        throwingPots.forEach(pot => {
          this.collection.upsert(pot.id, Helper.generateSingleHighlight(pot.clr, pattern, padding, clrName, pot.name));
        });
        return;
      case "hide": // hide all
        throwingPots.forEach(pot => {
          this.collection.upsert(pot.id, SettingsConstants.hidden);
        });
        return;
      case SettingsConstants.custom: // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
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
    let pattern:      string  = CharConstants.o;
    let padding:      string  = HighlightConstants.padding1;
    let aqv:          string  = "aqv";
    let cqv:          string  = "cqv";
    let arrowsName:   string  = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Arrows");
    let boltsName:    string  = Helper.generateSingleHighlight(clrHighlight, pattern, padding, clrName, "Bolts");

    switch (config.ArrowsBolts as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.collection.upsert(aqv, arrowsName);
        this.collection.upsert(cqv, boltsName);
        return;
      case "arw":
        this.collection.upsert(aqv, arrowsName);
        this.collection.upsert(cqv, SettingsConstants.hidden);
        return;
      case "blt":
        this.collection.upsert(aqv, SettingsConstants.hidden);
        this.collection.upsert(cqv, boltsName);
        return;
      case "hide":
        this.collection.upsert(aqv, SettingsConstants.hidden); // Arrow Quiver
        this.collection.upsert(cqv, SettingsConstants.hidden); // Crossbow Bolt Quiver
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
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
        this.collection.upsert("key", SettingsConstants.hidden);
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert("key", "Key");
        return;
    }
  }
}
