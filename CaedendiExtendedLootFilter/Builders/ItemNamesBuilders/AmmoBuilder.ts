import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { D2Color } from "../../Models/D2Color";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class AmmoBuilder extends BaseBuilder implements IBuilder {
  protected readonly clrHighlight: D2Color = ColorConstants.gray;
  protected readonly clrName:      D2Color = ColorConstants.white;
  protected readonly pattern:      string  = CharConstants.o;
  protected readonly padding:      string  = HighlightConstants.padding1;
  protected readonly aqv:          string  = "aqv";
  protected readonly cqv:          string  = "cqv";
  protected readonly arrowsName:   string  = Helper.generateSingleHighlight(this.clrHighlight, this.pattern, this.padding, this.clrName, "Arrows");
  protected readonly boltsName:    string  = Helper.generateSingleHighlight(this.clrHighlight, this.pattern, this.padding, this.clrName, "Bolts");

  constructor() {
    super();
  }

  public build(): void {
    switch (config.ArrowsBolts as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.collection.upsert(this.aqv, this.arrowsName);
        this.collection.upsert(this.cqv, this.boltsName);
        return;
      case "arw":
        this.collection.upsert(this.aqv, this.arrowsName);
        this.collection.upsert(this.cqv, SettingsConstants.hidden);
        return;
      case "blt":
        this.collection.upsert(this.aqv, SettingsConstants.hidden);
        this.collection.upsert(this.cqv, this.boltsName);
        return;
      case "hide":
        this.collection.upsert(this.aqv, SettingsConstants.hidden); // Arrow Quiver
        this.collection.upsert(this.cqv, SettingsConstants.hidden); // Crossbow Bolt Quiver
        return;
      case SettingsConstants.custom: // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert(this.aqv, "Arrows");
        this.collection.upsert(this.cqv, "Bolts");
        return;
    }
  }
}
