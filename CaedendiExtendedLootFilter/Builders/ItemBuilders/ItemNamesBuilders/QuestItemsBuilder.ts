import { HighlightConstants } from "../../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { BigTooltipSetting } from "../../../Models/BigTooltipSetting";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../../../Models/ItemEntry";
import { iLvlFix } from "../../../Models/iLvlFix";
import { BigTooltipItemBuilderBase } from "../BigTooltipItemBuilderBase";
import { IBigTooltipItemBuilder } from "../Interfaces/IBigTooltipItemBuilder";

export class QuestItemsBuilder extends BigTooltipItemBuilderBase implements IBigTooltipItemBuilder {
  protected readonly filterSetting: string = config.Quest as string;
  protected readonly bigTooltipSetting: BigTooltipSetting = config.BigTooltipSetting as number as BigTooltipSetting;
  protected readonly prefix = HighlightConstants.questPrefix;
  protected readonly suffix = HighlightConstants.questSuffix;

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (this.filterSetting) {
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
        let customList: [string, string, iLvlFix?][] = [
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
    let questItems: DoubleHighlightItemEntry[] = [
      // Act 1
      new DoubleHighlightItemEntry("leg", "Wirt's Leg", iLvlFix.Double),
      new DoubleHighlightItemEntry("hdm", "Horadric Malus", iLvlFix.Double),
      new DoubleHighlightItemEntry("bks", "Scroll of Inifuss"),
      new DoubleHighlightItemEntry("bkd", "Scroll of Inifuss"), // deciphered

      // Act 2
      new DoubleHighlightItemEntry("tr1", "Horadric Scroll"),
      new DoubleHighlightItemEntry("msf", "Staff of Kings", iLvlFix.Double),
      new DoubleHighlightItemEntry("vip", "Amulet of the Viper"),
      new DoubleHighlightItemEntry("hst", "Horadric Staff", iLvlFix.Single),

      // Act 3
      new DoubleHighlightItemEntry("j34", "A Jade Figurine"),
      new DoubleHighlightItemEntry("g34", "The Golden Bird"),
      new DoubleHighlightItemEntry("bbb", "Lam Esen's Tome"),
      new DoubleHighlightItemEntry("g33", "The Gidbinn", iLvlFix.Double),
      new DoubleHighlightItemEntry("qf1", "Khalim's Flail", iLvlFix.Double),
      new DoubleHighlightItemEntry("qf2", "Khalim's Will", iLvlFix.Single),
      new DoubleHighlightItemEntry("qey", "Khalim's Eye"),
      new DoubleHighlightItemEntry("qhr", "Khalim's Heart"),
      new DoubleHighlightItemEntry("qbr", "Khalim's Brain"),
      new DoubleHighlightItemEntry("mss", "Mephisto's Soulstone"),

      // Act 4
      new DoubleHighlightItemEntry("hfh", "Hell Forge Hammer", iLvlFix.Double),

      // Act 5
      // See exceptions mentioned above [CSTM-QST2]

      // Extra
      new DoubleHighlightItemEntry("Staff of Kings",      "Staff of Kings", iLvlFix.Double),
      new DoubleHighlightItemEntry("Amulet of the Viper", "Amulet of the Viper"),
      new DoubleHighlightItemEntry("Horadric Staff",      "Horadric Staff", iLvlFix.Single),
      new DoubleHighlightItemEntry("LamTome",             "Lam Esen's Tome"),
      new DoubleHighlightItemEntry("KhalimFlail",         "Khalim's Flail", iLvlFix.Double),
      new DoubleHighlightItemEntry("SuperKhalimFlail",    "Khalim's Will", iLvlFix.Single),
      new DoubleHighlightItemEntry("Hell Forge Hammer",   "Hell Forge Hammer", iLvlFix.Double),
    ];

    questItems.forEach(item => item.setPrefixSuffix(this.prefix, this.suffix)); // TODO: remove/refactor?
    this.collection.upsertMultiple(questItems);
  }

  protected highlightCube(): void {
    this.collection.upsert(new DoubleHighlightItemEntry("box", "Horadric Cube", iLvlFix.None, this.prefix, this.suffix));
  }

  public addBigTooltips(): void {
    this.collection.addBigTooltipToAllEntries(this.bigTooltipSetting);
  }
}
