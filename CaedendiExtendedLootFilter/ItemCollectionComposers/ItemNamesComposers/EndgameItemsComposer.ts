import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { IItemEntry } from "../../Models/ItemCollectionEntries/Interfaces/IItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
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
    switch (Settings.filter.questEndgame.highlights.endgame) {
      case SettingsConstants.disabled:
        break;
      case SettingsConstants.all: // highlight all
        this.highlightEndgameItems();
        this.highlightStandardOfHeroes();
        break;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems();
        break;
    }

    if (Settings.filter.questEndgame.shouldHideStandard)
      this.hideStandardOfHeroes();
  }

  protected highlightEndgameItems(): void {
    let entries: ItemEntry[] = [];

    this.pushEntries(entries, EndgameConstants.essences, EndgameConstants.patternEss, Settings.filter.questEndgame.bigTooltips.essences);
    this.pushEntries(entries, EndgameConstants.keys,     EndgameConstants.patternPkx, Settings.filter.questEndgame.bigTooltips.keys);
    this.pushEntries(entries, EndgameConstants.organs,   EndgameConstants.patternOrg, Settings.filter.questEndgame.bigTooltips.organs);
    entries.push(new ItemEntry(EndgameConstants.token, null, EndgameConstants.clrName, EndgameConstants.patternToa, Settings.filter.questEndgame.bigTooltips.tokens));

    this.collection.upsertMultiple(entries);
  }

  protected highlightStandardOfHeroes(): void {
    this.collection.upsert(new ItemEntry(EndgameConstants.standard, null, EndgameConstants.clrName, EndgameConstants.patternStd, Settings.filter.questEndgame.bigTooltips.standard));
  }

  protected hideStandardOfHeroes(): void {
    this.collection.upsertHidden(EndgameConstants.standard);
  }

  private pushEntries(target: IItemEntry[], keys: string[], pattern: IHighlight, bigTooltipSetting: EBigTooltipSetting): void {
    keys.forEach(key => target.push(new ItemEntry(key, null, EndgameConstants.clrName, pattern, bigTooltipSetting)));
  }
}
