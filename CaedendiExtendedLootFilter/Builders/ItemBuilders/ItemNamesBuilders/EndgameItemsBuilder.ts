import { EndgameConstants } from "../../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../../../Models/ItemEntry";
import { iLvlFix } from "../../../Models/iLvlFix";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { Helper } from "../../../Helper";

/**
 * Endgame: Pandemonium Event, Tokens & Essences
 */
export class EndgameItemsBuilder extends ItemBuilderBase implements IItemBuilder {
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

        this.collection.upsertEntries(ItemEntry.createArray(customList));
        return;
    }
  }

  protected highlightEndgameItems(): void {
    let entries: DoubleHighlightItemEntry[] = [];

    this.pushEntries(entries, EndgameConstants.essences, EndgameConstants.prefixEss, EndgameConstants.suffixEss);
    this.pushEntries(entries, EndgameConstants.keys,     EndgameConstants.prefixPkx, EndgameConstants.suffixPkx);
    this.pushEntries(entries, EndgameConstants.organs,   EndgameConstants.prefixOrg, EndgameConstants.suffixOrg);
    entries.push(EndgameConstants.token);

    this.collection.upsertEntries(entries);
  }

  protected highlightStandardOfHeroes(): void {
    this.collection.upsertEntry(EndgameConstants.standard);
  }

  protected hideStandardOfHeroes(): void {
    this.collection.upsertHidden(EndgameConstants.standard.getKey());
  }

  private pushEntries(array: DoubleHighlightItemEntry[], toPush: ItemEntry[], prefix: string, suffix: string): void {
    toPush.forEach(entry => array.push(DoubleHighlightItemEntry.fromItemEntry(entry, iLvlFix.None, prefix, suffix)));
  }

  protected addBigTooltips(): void {
    // essences
    if (config.BigTooltipEssences.toString() !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.essences.map(ess => ess.key), settingEssences);
    }

    // tokens of absolution
    if (config.BigTooltipTokens.toString() !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipForId(endgameCol, EndgameConstants.token.id, settingToken);
    }

    // pandemonium keys
    if (config.BigTooltipKeys.toString() !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.keys.map(key => key.id), settingKeys);
    }

    // pandemonium organs
    if (config.BigTooltipOrgans.toString() !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipsForIds(endgameCol, EndgameConstants.organs.map(org => org.id), settingOrgans);
    }

    // standard of heroes
    if (config.BigTooltipStandardOfHeroes.toString( !== SettingsConstants.disabled) {
      let endgameCol = this.getCollectionById(CollectionConstants.endgame);
      Helper.addBigTooltipForId(endgameCol, EndgameConstants.standard.id, settingStandard);
    }
  }
}
