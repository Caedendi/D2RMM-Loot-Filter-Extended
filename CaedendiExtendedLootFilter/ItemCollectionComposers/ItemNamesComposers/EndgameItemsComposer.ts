import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { IHighlightPattern } from "../../Models/ItemCollectionEntries/IHighlightPattern";
import { IItemEntry } from "../../Models/ItemCollectionEntries/IItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { BigTooltipSetting } from "../../Settings/BigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

/**
 * Endgame: Pandemonium Event Items, Essences & Tokens of Absolution
 */
export class EndgameItemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.questEndgame.endgame) {
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
        let customList: [string, string, iLvlDigits?][] = [
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

        this.collection.upsertMultiple(ItemEntry.createArray(customList));
        return;
    }
  }

  protected highlightEndgameItems(): void {
    let entries: ItemEntry[] = [];

    this.pushEntries(entries, EndgameConstants.essences, EndgameConstants.patternEss, Settings.bigTooltips.questEndgame.essences);
    this.pushEntries(entries, EndgameConstants.keys,     EndgameConstants.patternPkx, Settings.bigTooltips.questEndgame.keys);
    this.pushEntries(entries, EndgameConstants.organs,   EndgameConstants.patternOrg, Settings.bigTooltips.questEndgame.organs);
    entries.push(new ItemEntry(EndgameConstants.token, null, EndgameConstants.clrName, EndgameConstants.patternToa, Settings.bigTooltips.questEndgame.tokens));

    this.collection.upsertMultiple(entries);
  }

  protected highlightStandardOfHeroes(): void {
    this.collection.upsert(new ItemEntry(EndgameConstants.standard, null, EndgameConstants.clrName, EndgameConstants.patternStd, Settings.bigTooltips.questEndgame.standard));
  }

  protected hideStandardOfHeroes(): void {
    this.collection.upsertHidden(EndgameConstants.standard);
  }

  private pushEntries(target: IItemEntry[], keys: string[], pattern: IHighlightPattern, bigTooltipSetting: BigTooltipSetting): void {
    keys.forEach(key => target.push(new ItemEntry(key, null, EndgameConstants.clrName, pattern, bigTooltipSetting)));
  }


  
  // TODO: REMOVE

  // //
  // // SETTING as number as BigTooltipSetting ??
  // //
  // public addBigTooltips(): void {
  //   // essences
  //   if (Settings.bigTooltips.questEndgame.essences != BigTooltipSetting.Disabled)
  //     this.collection.addBigTooltipToEntries(EndgameConstants.essences.map(essence => essence.key), Settings.bigTooltips.questEndgame.essences);

  //   // token of absolution
  //   if (Settings.bigTooltips.questEndgame.tokens != BigTooltipSetting.Disabled)
  //     this.collection.addBigTooltipToEntry(EndgameConstants.token.key, Settings.bigTooltips.questEndgame.tokens);

  //   // pandemonium keys
  //   if (Settings.bigTooltips.questEndgame.keys != BigTooltipSetting.Disabled)
  //     this.collection.addBigTooltipToEntries(EndgameConstants.keys.map(key => key.key), Settings.bigTooltips.questEndgame.keys);

  //   // pandemonium organs
  //   if (Settings.bigTooltips.questEndgame.organs != BigTooltipSetting.Disabled)
  //     this.collection.addBigTooltipToEntries(EndgameConstants.organs.map(organ => organ.key), Settings.bigTooltips.questEndgame.organs);

  //   // standard of heroes
  //   if (Settings.bigTooltips.questEndgame.standard != BigTooltipSetting.Disabled)
  //     this.collection.addBigTooltipToEntry(EndgameConstants.standard.key, Settings.bigTooltips.questEndgame.standard);
  // }
}
