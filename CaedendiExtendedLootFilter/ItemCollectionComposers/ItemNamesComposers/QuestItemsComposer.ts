import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { QuestConstants } from "../../Constants/Items/QuestConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EiLvlDigits } from "../../Settings/EiLvlDigits";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class QuestItemsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly pattern = HighlightConstants.questPattern;

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.questEndgame.quest) {
      case SettingsConstants.disabled: // no change
        return;
      case SettingsConstants.all: // highlight all
        this.highlightQuestItems();
        this.highlightCube();
        return;
      case "xhc": // exclude cube
        this.highlightQuestItems();
        return;
    }
  }

  protected highlightQuestItems(): void {
    QuestConstants.questItems.forEach(key => this.collection.upsert(this.createQuestItemEntry(key)));
    QuestConstants.questWeapons.forEach(weapon => this.collection.upsert(this.createQuestWeaponEntry(weapon.key, weapon.digits)));
  }

  protected highlightCube(): void {
    this.collection.upsert(this.createQuestItemEntry("box"));
  }

  private createQuestItemEntry(key: string): ItemEntry {
    return new ItemEntry(key, null, HighlightConstants.uniqueColorName, this.pattern, Settings.bigTooltips.questEndgame.questItems);
  }

  private createQuestWeaponEntry(key: string, digits: EiLvlDigits): ItemEntry {
    return new iLvlItemEntry(key, digits, null, HighlightConstants.uniqueColorName, this.pattern, Settings.bigTooltips.questEndgame.questItems);
  }
}
