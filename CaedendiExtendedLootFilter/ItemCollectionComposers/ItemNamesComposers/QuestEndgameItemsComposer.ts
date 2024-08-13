import { EndgameConstants } from "../../Constants/Items/EndgameConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { QuestConstants } from "../../Constants/Items/QuestConstants";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/EiLvlDigits";
import { QuestEndgameSettings } from "../../Settings/QuestEndgameSettings";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

/**
 * TODO: Endgame: Pandemonium Event Items, Essences & Tokens of Absolution
 */
export class QuestEndgameItemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    this.applyQuestItems();
    this.applyCube();
    this.applyQuestWeapons();
    this.applyEssences();
    this.applyToken();
    this.applyKeys();
    this.applyOrgans();
    this.applyStandardOfHeroes();
  }

  protected applyQuestItems(): void {
    QuestConstants.questItems.forEach(key => this.upsertQuestItem(key, QuestEndgameSettings.highlight.quest));
  }

  protected applyCube(): void {
    this.upsertQuestItem(QuestConstants.cube, QuestEndgameSettings.highlight.cube);
  }

  protected applyQuestWeapons(): void {
    QuestConstants.questWeapons.forEach(weapon => this.upsertQuestWeapon(weapon.key, weapon.digits));
  }

  protected applyEssences(): void {
    if (!Settings.filter.questEndgame.filter.shouldShowEssences) {
      this.collection.upsertMultipleHidden(EndgameConstants.essences);
      return;
    }

    this.upsertMultipleEndgame(EndgameConstants.essences, QuestEndgameSettings.highlight.essences, Settings.filter.questEndgame.bigTooltips.essences);
  }

  protected applyStandardOfHeroes(): void {
    if (!Settings.filter.questEndgame.filter.shouldShowStandard) {
      this.collection.upsertHidden(EndgameConstants.standard);
      return;
    }

    this.upsertEndgame(EndgameConstants.standard, QuestEndgameSettings.highlight.standard, Settings.filter.questEndgame.bigTooltips.standard);
  }

  protected applyToken(): void {
    this.upsertEndgame(EndgameConstants.token, QuestEndgameSettings.highlight.token, Settings.filter.questEndgame.bigTooltips.tokens);
  }

  protected applyKeys(): void {
    this.upsertMultipleEndgame(EndgameConstants.keys, QuestEndgameSettings.highlight.keys, Settings.filter.questEndgame.bigTooltips.keys);
  }

  protected applyOrgans(): void {
    this.upsertMultipleEndgame(EndgameConstants.organs, QuestEndgameSettings.highlight.organs, Settings.filter.questEndgame.bigTooltips.organs);
  }

  private upsertQuestItem(key: string, highlight: IHighlight | null) {
    this.upsert(new ItemEntry(key, null, HighlightConstants.uniqueColorName, highlight, Settings.filter.questEndgame.bigTooltips.questItems));
  }

  private upsertQuestWeapon(key: string, digits: EiLvlDigits) {
    this.upsert(new iLvlItemEntry(key, digits, null, HighlightConstants.uniqueColorName, QuestEndgameSettings.highlight.quest, Settings.filter.questEndgame.bigTooltips.questItems));
  }

  private upsertEndgame(key: string, highlight: IHighlight | null, bigTooltipSetting: EBigTooltipSetting): void {
    this.upsert(new ItemEntry(key, null, EndgameConstants.clrName, highlight, bigTooltipSetting));
  }

  private upsertMultipleEndgame(keys: string[], highlight: IHighlight | null, bigTooltipSetting: EBigTooltipSetting) {
    keys.forEach(key => this.upsertEndgame(key, highlight, bigTooltipSetting));
  }

  private upsert(entry: ItemEntry): void {
    this.collection.upsertIfHasHighlightOrBigTooltip(entry);
  }
}
