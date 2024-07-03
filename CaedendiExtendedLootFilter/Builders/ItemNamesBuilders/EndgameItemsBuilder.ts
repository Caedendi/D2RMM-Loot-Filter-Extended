import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

/**
 * Endgame: Pandemonium Event, Tokens & Essences
 */
export class EndgameItemsBuilder extends BaseBuilder implements IBuilder {
  constructor() {
    super();
  }

  public build(): void {
    switch (config.Endgame as string) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightEndgameItems();
        this.highlightStandardOfHeroes();
        return;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems();
        return;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems();
        this.hideStandardOfHeroes();
        return;
      case SettingsConstants.custom: // [CSTM-END]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert("tes", `Twisted Essence of Suffering`);
        this.collection.upsert("ceh", `Charged Essense of Hatred`);
        this.collection.upsert("bet", `Burning Essence of Terror`);
        this.collection.upsert("fed", `Festering Essence of Destruction`);
        this.collection.upsert("toa", `Token of Absolution`);
        this.collection.upsert("pk1", `Key of Terror`);
        this.collection.upsert("pk2", `Key of Hate`);
        this.collection.upsert("pk3", `Key of Destruction`);
        this.collection.upsert("dhn", `Diablo's Horn`);
        this.collection.upsert("bey", `Baal's Eye`);
        this.collection.upsert("mbr", `Mephisto's Brain`);
        this.collection.upsert("std", `Standard of Heroes`);
        return;
    }
  }

  protected highlightEndgameItems(): void {
    let endgameItems = [].concat(EndgameConstants.essences, EndgameConstants.keys, EndgameConstants.organs);
    endgameItems.push(EndgameConstants.token);

    endgameItems.forEach(item => {
      this.collection.upsert(item.id, `${item.prefix}${item.name}${item.suffix}`);
    });
  }

  protected highlightStandardOfHeroes(): void {
    this.collection.upsert(EndgameConstants.standard.id, `${EndgameConstants.standard.prefix}${EndgameConstants.standard.name}${EndgameConstants.standard.suffix}`);
  }

  protected hideStandardOfHeroes(): void {
    this.collection.upsert(EndgameConstants.standard.id, SettingsConstants.hidden);
  }
}
