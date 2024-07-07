import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlightItemEntry } from "../../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../../Models/ItemEntry";
import { iLvlFix } from "../../Models/iLvlFix";
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
        let customList: [string, string, iLvlFix?][] = [
          // ADD YOUR CUSTOM ITEM NAMES HERE

          [ "tes", `Twisted Essence of Suffering` ],
          [ "ceh", `Charged Essense of Hatred` ],
          [ "bet", `Burning Essence of Terror` ],
          [ "fed", `Festering Essence of Destruction` ],
          [ "toa", `Token of Absolution` ],
          [ "pk1", `Key of Terror` ],
          [ "pk2", `Key of Hate` ],
          [ "pk3", `Key of Destruction` ],
          [ "dhn", `Diablo's Horn` ],
          [ "bey", `Baal's Eye` ],
          [ "mbr", `Mephisto's Brain` ],
          [ "std", `Standard of Heroes` ],
        ];

        this.collection.upsertArray(ItemEntry.createArray(customList));
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
