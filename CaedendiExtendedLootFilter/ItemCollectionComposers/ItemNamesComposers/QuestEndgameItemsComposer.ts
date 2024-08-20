import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { QuestConstants } from "../../Constants/Items/QuestConstants";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { QuestEndgameSettings } from "../../Settings/QuestEndgameSettings";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

// TODO: add inheritance for QuestEndgameItemsComposer, UiComposer and ItemModifiersComposer to remove duplicate code

/**
 * TODO: Endgame: Pandemonium Event Items, Essences & Tokens of Absolution
 */
export class QuestEndgameItemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    this.applyQuestItems();
    this.applyEndgameItems();
  }

  protected applyQuestItems(): void {
    this.upsertQuestItem(QuestConstants.cube, QuestEndgameSettings.highlight.cube); // cube
    QuestConstants.questItems.forEach(key => this.upsertQuestItem(key, QuestEndgameSettings.highlight.quest)); // quest items
    QuestConstants.questWeapons.forEach(weapon => this.upsertEntry( // quest weapons
      new iLvlItemEntry(weapon.key, weapon.digits, null, HighlightConstants.uniqueColorName, QuestEndgameSettings.highlight.quest, Settings.filter.questEndgame.bigTooltips.questItems)
    ));
  }

  protected applyEndgameItems(): void {
    this.applyEssences();
    this.applyStandardOfHeroes();

    this.upsertEndgameItem(EndgameConstants.token, QuestEndgameSettings.highlight.token, Settings.filter.questEndgame.bigTooltips.tokens);           // token
    this.upsertEndgameItems(EndgameConstants.keys, QuestEndgameSettings.highlight.keys, Settings.filter.questEndgame.bigTooltips.keys);       // keys
    this.upsertEndgameItems(EndgameConstants.organs, QuestEndgameSettings.highlight.organs, Settings.filter.questEndgame.bigTooltips.organs); // organs
  }

  private applyEssences(): void {
    if (!Settings.filter.questEndgame.filter.shouldShowEssences) {
      this.collection.upsertMultipleHidden(EndgameConstants.essences);
      return;
    }

    this.upsertEndgameItems(EndgameConstants.essences, QuestEndgameSettings.highlight.essences, Settings.filter.questEndgame.bigTooltips.essences);
  }

  private applyStandardOfHeroes(): void {
    if (!Settings.filter.questEndgame.filter.shouldShowStandard) {
      this.collection.upsertHidden(EndgameConstants.standard);
      return;
    }

    this.upsertEndgameItem(EndgameConstants.standard, QuestEndgameSettings.highlight.standard, Settings.filter.questEndgame.bigTooltips.standard);
  }

  private upsertQuestItem(key: string, highlight: IHighlight | null) {
    this.upsertEntry(new ItemEntry(key, null, HighlightConstants.uniqueColorName, highlight, Settings.filter.questEndgame.bigTooltips.questItems));
  }

  private upsertEndgameItem(key: string, highlight: IHighlight | null, bigTooltipSetting: EBigTooltipSetting): void {
    this.upsertEntry(new ItemEntry(key, null, EndgameConstants.clrName, highlight, bigTooltipSetting));
  }

  private upsertEndgameItems(keys: string[], highlight: IHighlight | null, bigTooltipSetting: EBigTooltipSetting) {
    keys.forEach(key => this.upsertEndgameItem(key, highlight, bigTooltipSetting));
  }

  private upsertEntry(entry: ItemEntry): void {
    this.collection.upsertIfHasHighlightOrBigTooltip(entry);
  }
}
