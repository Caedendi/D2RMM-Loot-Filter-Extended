import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { QuestConstants } from "../../Constants/Items/QuestConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { Settings } from "../../Settings/Settings";
import { iLvlDigits } from "../../Settings/StatsAndModifiersSettings";
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
      case SettingsConstants.custom: // [CSTM-QST1]
        let customList: [string, string, iLvlDigits?][] = [
          // ADD YOUR CUSTOM ITEM NAMES HERE

          // See UiBuilder.ts for Book of Skill and Potion of Life, and 
          // see ItemModifiersBuilder.ts for Malah's Potion and Scroll of Resistance [CSTM-QST2]
          
          // Act 1
          [ "leg", `Wirt's Leg` ], // Wirt's Leg
          [ "hdm", `Horadric Malus` ], // Horadric Malus
          [ "bks", `Scroll of Inifuss` ], // Scroll of Inifuss
          [ "bkd", `Scroll of Inifuss` ], // Scroll of Inifuss (deciphered)
          
          // Act 2
          [ "tr1", `Horadric Scroll` ], // Horadric Scroll
          [ "box", `Horadric Cube` ], // Horadric Cube
          [ "msf", `Staff of Kings` ], // Staff of Kings
          [ "vip", `Amulet of the Viper` ], // Amulet of the Viper
          [ "hst", `Horadric Staff` ], // Horadric Staff

          // Act 3
          [ "j34", `A Jade Figurine` ], // A Jade Figurine
          [ "g34", `The Golden Bird` ], // The Golden Bird
          [ "bbb", `Lam Esen's Tome` ], // Lam Esen's Tome
          [ "g33", `The Gidbinn` ], // The Gidbinn
          [ "qf1", `Khalim's Flail` ], // Khalim's Flail
          [ "qf2", `Khalim's Will` ], // Khalim's Will
          [ "qey", `Khalim's Eye` ], // Khalim's Eye
          [ "qhr", `Khalim's Heart` ], // Khalim's Heart
          [ "qbr", `Khalim's Brain` ], // Khalim's Brain
          [ "mss", `Mephisto's Soulstone` ], // Mephisto's Soulstone
          
          // Act 4
          [ "hfh", `Hell Forge Hammer` ], // Hell Forge Hammer
          
          // Act 5
          // See exceptions mentioned above [CSTM-QST2]
          
          // Extra
          [ "Staff of Kings",      `Staff of Kings` ], // Staff of Kings
          [ "Amulet of the Viper", `Amulet of the Viper` ], // Amulet of the Viper
          [ "Horadric Staff",      `Horadric Staff` ], // Horadric Staff
          [ "LamTome",             `Lam Esen's Tome` ], // Lam Esen's Tome
          [ "KhalimFlail",         `Khalim's Flail` ], // Khalim's Flail
          [ "SuperKhalimFlail",    `Khalim's Will` ], // Khalim's Will
          [ "Hell Forge Hammer",   `Hell Forge Hammer` ], // Hell Forge Hammer
        ];

        this.collection.upsertMultiple(ItemEntry.createArray(customList));
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

  private createQuestWeaponEntry(key: string, digits: iLvlDigits): ItemEntry {
    return new iLvlItemEntry(key, digits, null, HighlightConstants.uniqueColorName, this.pattern, Settings.bigTooltips.questEndgame.questItems);
  }
}
