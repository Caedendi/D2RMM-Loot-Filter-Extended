import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { QuestConstants } from "../../Constants/Items/QuestConstants";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { QuestEndgameSettings } from "../../Settings/Filter/QuestEndgameSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

// TODO: add inheritance for QuestEndgameItemsComposer, UiComposer and ItemModifiersComposer to remove duplicate code
// TODO: also add for GemsComposers?

/**
 * TODO: Endgame: Pandemonium Event Items, Essences & Tokens of Absolution
 */
export class QuestEndgameItemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    this.applyQuestItemsAndWeapons();
    this.applyEndgameItems();
  }

  protected applyQuestItemsAndWeapons(): void {
    this.applyCube();
    this.applyQuestItems();
    this.applyQuestWeapons();
  }

  private applyCube(): void {
    if (QuestEndgameSettings.highlights.isCubeEnabled)
      return;

    this.upsertQuestItem(QuestConstants.cube, QuestEndgameSettings.highlights.quest);
  }

  private applyQuestItems(): void {
    QuestConstants.questItems.forEach(key => this.upsertQuestItem(key, QuestEndgameSettings.highlights.quest));
  }

  private applyQuestWeapons(): void {
    QuestConstants.questWeapons.forEach(weapon => this.upsertEntry(
      new iLvlItemEntry(weapon.key, weapon.digits, null, HighlightConstants.uniqueNameColor, QuestEndgameSettings.highlights.quest, QuestEndgameSettings.bigTooltips.questItems)
    ));
  }

  protected applyEndgameItems(): void {
    this.applyEssences();
    this.applyStandardOfHeroes();

    this.upsertEndgameItem( EndgameConstants.token,  QuestEndgameSettings.highlights.token,  QuestEndgameSettings.bigTooltips.tokens);
    this.upsertEndgameItems(EndgameConstants.keys,   QuestEndgameSettings.highlights.keys,   QuestEndgameSettings.bigTooltips.keys);
    this.upsertEndgameItems(EndgameConstants.organs, QuestEndgameSettings.highlights.organs, QuestEndgameSettings.bigTooltips.organs);
  }

  private applyEssences(): void {
    if (!QuestEndgameSettings.filter.shouldShowEssences) {
      this.collection.upsertMultipleHidden(EndgameConstants.essences);
      return;
    }

    this.upsertEndgameItems(EndgameConstants.essences, QuestEndgameSettings.highlights.essences, QuestEndgameSettings.bigTooltips.essences);
  }

  private applyStandardOfHeroes(): void {
    if (!QuestEndgameSettings.filter.shouldShowStandard) {
      this.collection.upsertHidden(EndgameConstants.standard);
      return;
    }

    this.upsertEndgameItem(EndgameConstants.standard, QuestEndgameSettings.highlights.standard, QuestEndgameSettings.bigTooltips.standard);
  }

  private upsertQuestItem(key: string, highlight: IHighlight | null) {
    this.upsertEntry(new ItemEntry(key, null, HighlightConstants.uniqueNameColor, highlight, QuestEndgameSettings.bigTooltips.questItems));
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
