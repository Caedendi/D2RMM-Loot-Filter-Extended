import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { D2Color } from "../../Models/D2Color";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class BuffPotionsBuilder extends BaseBuilder implements IBuilder {
  protected readonly clrHighlight: D2Color = ColorConstants.green;
  protected readonly clrName: D2Color = ColorConstants.white;
  protected readonly pattern: string = CharConstants.plus;
  protected readonly padding: string = HighlightConstants.paddingNone;

  protected readonly pots: {id: string, value: string}[] = [
    { id: "yps", value: "Antidote" }, // Antidote Potion
    { id: "wms", value: "Thawing" },  // Thawing Potion
    { id: "vps", value: "Stamina" },  // Stamina Potion
  ];

  public build(): void {
    switch (config.BuffPotions as string) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // show all
        this.pots.forEach(pot => {
          this.collection.upsert(pot.id, Helper.generateSingleHighlight(this.clrHighlight, this.pattern, this.padding, this.clrName, pot.value));
        });
        return;
      case "hide": // hide all
        this.pots.forEach(pot => {
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
}
