import { EndgameConstants } from "../../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../../../Models/ItemEntry";
import { BigTooltipSetting } from "../../../Settings/BigTooltipsSettings";
import { Settings } from "../../../Settings/Settings";
import { iLvlFix } from "../../../Settings/StatsAndModifiersSettings";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { ItemBuilderBase } from "../ItemBuilderBase";

/**
 * Endgame: Pandemonium Event Items, Essences & Tokens of Absolution
 */
export class EndgameItemsBuilder extends ItemBuilderBase implements IItemBuilder {
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

        this.collection.upsertMultiple(ItemEntry.createArray(customList));
        return;
    }
  }

  protected highlightEndgameItems(): void {
    let entries: DoubleHighlightItemEntry[] = [];

    this.pushEntries(entries, EndgameConstants.essences, EndgameConstants.prefixEss, EndgameConstants.suffixEss);
    this.pushEntries(entries, EndgameConstants.keys,     EndgameConstants.prefixPkx, EndgameConstants.suffixPkx);
    this.pushEntries(entries, EndgameConstants.organs,   EndgameConstants.prefixOrg, EndgameConstants.suffixOrg);
    entries.push(EndgameConstants.token);

    this.collection.upsertMultiple(entries);
  }

  protected highlightStandardOfHeroes(): void {
    this.collection.upsert(EndgameConstants.standard);
  }

  protected hideStandardOfHeroes(): void {
    this.collection.upsertHidden(EndgameConstants.standard.getKey());
  }

  private pushEntries(target: DoubleHighlightItemEntry[], entries: ItemEntry[], prefix: string, suffix: string): void {
    entries.forEach(entry => target.push(DoubleHighlightItemEntry.fromItemEntry(entry, iLvlFix.None, prefix, suffix)));
  }

  //
  // SETTING as number as BigTooltipSetting ??
  //
  public addBigTooltips(): void {
    // essences
    if (Settings.bigTooltips.questEndgame.essences != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntries(EndgameConstants.essences.map(essence => essence.getKey()), Settings.bigTooltips.questEndgame.essences);

    // token of absolution
    if (Settings.bigTooltips.questEndgame.tokens != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntry(EndgameConstants.token.getKey(), Settings.bigTooltips.questEndgame.tokens);

    // pandemonium keys
    if (Settings.bigTooltips.questEndgame.keys != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntries(EndgameConstants.keys.map(key => key.getKey()), Settings.bigTooltips.questEndgame.keys);

    // pandemonium organs
    if (Settings.bigTooltips.questEndgame.organs != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntries(EndgameConstants.organs.map(organ => organ.getKey()), Settings.bigTooltips.questEndgame.organs);

    // standard of heroes
    if (Settings.bigTooltips.questEndgame.standard != BigTooltipSetting.Disabled)
      this.collection.addBigTooltipToEntry(EndgameConstants.standard.getKey(), Settings.bigTooltips.questEndgame.standard);
  }
}
