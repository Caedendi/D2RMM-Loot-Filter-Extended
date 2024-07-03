import { CharConstants } from "../../Constants/CharConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { iLvlFix } from "../../Models/iLvlFix";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class QuestItemsBuilder extends BaseBuilder implements IBuilder {
  protected readonly prefix = HighlightConstants.questPrefix;
  protected readonly suffix = HighlightConstants.questSuffix;

  constructor() {
    super();
  }

  public build(): void {
    switch (config.Quest as string) {
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
        let custom: { id: string, value: string }[] = [
          // Act 1
          { id: "leg", value: `Wirt's Leg` }, // Wirt's Leg
          { id: "hdm", value: `Horadric Malus` }, // Horadric Malus
          { id: "bks", value: `Scroll of Inifuss` }, // Scroll of Inifuss
          { id: "bkd", value: `Scroll of Inifuss` }, // Scroll of Inifuss (deciphered)
          
          // Act 2
          { id: "tr1", value: `Horadric Scroll` }, // Horadric Scroll
          { id: "box", value: `Horadric Cube` }, // Horadric Cube
          { id: "msf", value: `Staff of Kings` }, // Staff of Kings
          { id: "vip", value: `Amulet of the Viper` }, // Amulet of the Viper
          { id: "hst", value: `Horadric Staff` }, // Horadric Staff

          // Act 3
          { id: "j34", value: `A Jade Figurine` }, // A Jade Figurine
          { id: "g34", value: `The Golden Bird` }, // The Golden Bird
          { id: "bbb", value: `Lam Esen's Tome` }, // Lam Esen's Tome
          { id: "g33", value: `The Gidbinn` }, // The Gidbinn
          { id: "qf1", value: `Khalim's Flail` }, // Khalim's Flail
          { id: "qf2", value: `Khalim's Will` }, // Khalim's Will
          { id: "qey", value: `Khalim's Eye` }, // Khalim's Eye
          { id: "qhr", value: `Khalim's Heart` }, // Khalim's Heart
          { id: "qbr", value: `Khalim's Brain` }, // Khalim's Brain
          { id: "mss", value: `Mephisto's Soulstone` }, // Mephisto's Soulstone
          
          // Act 4
          { id: "hfh", value: `Hell Forge Hammer` }, // Hell Forge Hammer
          
          // Act 5
          // See exceptions [CSTM-QST2]
          // Extra
          { id: "Staff of Kings",      value: `Staff of Kings` }, // Staff of Kings
          { id: "Amulet of the Viper", value: `Amulet of the Viper` }, // Amulet of the Viper
          { id: "Horadric Staff",      value: `Horadric Staff` }, // Horadric Staff
          { id: "LamTome",             value: `Lam Esen's Tome` }, // Lam Esen's Tome
          { id: "KhalimFlail",         value: `Khalim's Flail` }, // Khalim's Flail
          { id: "SuperKhalimFlail",    value: `Khalim's Will` }, // Khalim's Will
          { id: "Hell Forge Hammer",   value: `Hell Forge Hammer` }, // Hell Forge Hammer
        ];

        this.collection.upsertArray(custom);
        
        return;
    }
  }

  protected highlightQuestItems(): void {
    // for Book of Skill and Potion of Life, see [CSTM-QST2]

    let questItems = [
      // Act 1
      [ id: "leg", name: "Wirt's Leg",        iLvlIndent: iLvlFix.Double ],
      [ id: "hdm", name: "Horadric Malus",    iLvlIndent: iLvlFix.Double ],
      [ id: "bks", name: "Scroll of Inifuss", iLvlIndent: iLvlFix.None ],
      [ id: "bkd", name: "Scroll of Inifuss", iLvlIndent: iLvlFix.None ], // deciphered

      // Act 2
      { id: "tr1", name: "Horadric Scroll",     iLvlIndent: iLvlFix.None },
      { id: "msf", name: "Staff of Kings",      iLvlIndent: iLvlFix.Double },
      { id: "vip", name: "Amulet of the Viper", iLvlIndent: iLvlFix.None },
      { id: "hst", name: "Horadric Staff",      iLvlIndent: iLvlFix.Single },

      // Act 3
      { id: "j34", name: "A Jade Figurine",      iLvlIndent: iLvlFix.None },
      { id: "g34", name: "The Golden Bird",      iLvlIndent: iLvlFix.None },
      { id: "bbb", name: "Lam Esen's Tome",      iLvlIndent: iLvlFix.None },
      { id: "g33", name: "The Gidbinn",          iLvlIndent: iLvlFix.Double },
      { id: "qf1", name: "Khalim's Flail",       iLvlIndent: iLvlFix.Double },
      { id: "qf2", name: "Khalim's Will",        iLvlIndent: iLvlFix.Single },
      { id: "qey", name: "Khalim's Eye",         iLvlIndent: iLvlFix.None },
      { id: "qhr", name: "Khalim's Heart",       iLvlIndent: iLvlFix.None },
      { id: "qbr", name: "Khalim's Brain",       iLvlIndent: iLvlFix.None },
      { id: "mss", name: "Mephisto's Soulstone", iLvlIndent: iLvlFix.None },

      // Act 4
      { id: "hfh", name: "Hell Forge Hammer", iLvlIndent: iLvlFix.Double },

      // Act 5
      // See exceptions [CSTM-QST2]
      // Extra
      { id: "Staff of Kings",      name: "Staff of Kings",      iLvlIndent: iLvlFix.Double },
      { id: "Amulet of the Viper", name: "Amulet of the Viper", iLvlIndent: iLvlFix.None },
      { id: "Horadric Staff",      name: "Horadric Staff",      iLvlIndent: iLvlFix.Single },
      { id: "LamTome",             name: "Lam Esen's Tome",     iLvlIndent: iLvlFix.None },
      { id: "KhalimFlail",         name: "Khalim's Flail",      iLvlIndent: iLvlFix.Double },
      { id: "SuperKhalimFlail",    name: "Khalim's Will",       iLvlIndent: iLvlFix.Single },
      { id: "Hell Forge Hammer",   name: "Hell Forge Hammer",   iLvlIndent: iLvlFix.Double },
    ];

    this.collection.upsertArray(questItems); //

    questItems.forEach(item => {
      let indent = SettingsConstants.shouldExcludeIlvlForBigTooltips ? CharConstants.empty : Helper.getiLvlIndent(item.iLvlIndent);
      this.collection.upsert(item.id, `${indent}${this.prefix}${item.name}${this.suffix}`);
    });
  }

  protected highlightCube(): void {
    this.collection.upsert("box", `${this.prefix}Horadric Cube${this.suffix}`); // Horadric Cube
  }
}
