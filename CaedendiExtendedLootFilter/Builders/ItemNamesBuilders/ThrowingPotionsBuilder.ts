import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { D2Color } from "../../Models/D2Color";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class ThrowingPotionsBuilder extends BaseBuilder implements IBuilder {
  protected readonly clrGas = ColorConstants.darkGreen;
  protected readonly clrOil = ColorConstants.orange;
  protected readonly clrName = ColorConstants.white;
  protected readonly pattern = CharConstants.o;
  protected readonly padding = HighlightConstants.padding1;
  
  protected readonly pots: {id: string, name: string, clr: D2Color}[] = [
    { id: "gpl", name: "Gas 1", clr: this.clrGas }, // Strangling Gas Potion
    { id: "gpm", name: "Gas 2", clr: this.clrGas }, // Choking Gas Potion
    { id: "gps", name: "Gas 3", clr: this.clrGas }, // Rancid Gas Potion
    { id: "opl", name: "Oil 1", clr: this.clrOil }, // Fulminating Potion
    { id: "opm", name: "Oil 2", clr: this.clrOil }, // Exploding Potion
    { id: "ops", name: "Oil 3", clr: this.clrOil }, // Oil Potion
  ];

  constructor() {
    super();
  }

  public build(): void {
    switch (config.ThrowingPotions as string) { // todo: validate setting as string
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.pots.forEach(pot => {
          this.collection.upsert(pot.id, Helper.generateSingleHighlight(pot.clr, this.pattern, this.padding, this.clrName, pot.name));
        });
        return;
      case "hide": // hide all
        this.pots.forEach(pot => {
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
}
