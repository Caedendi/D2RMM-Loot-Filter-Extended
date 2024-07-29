import { iLvlDigits } from "../../Settings/StatsAndModifiersSettings";

export abstract class QuestConstants {
  public static readonly questItems: string[] = [
    // Act 1
    "bks", // Scroll of Inifuss
    "bkd", // Scroll of Inifuss (deciphered)
    // Act 2
    "tr1", // Horadric Scroll
    "vip", // Amulet of the Viper
    // Act 3
    "j34", // A Jade Figurine
    "g34", // The Golden Bird
    "bbb", // Lam Esen's Tome
    "qey", // Khalim's Eye
    "qhr", // Khalim's Heart
    "qbr", // Khalim's Brain
    "mss", // Mephisto's Soulstone
    // Act 4: none
    // Act 5: see exceptions mentioned above [CSTM-QST2]
    // Extra
    "LamTome", // Lam Esen's Tome
  ];

  public static readonly questWeapons: { key: string, digits: iLvlDigits }[] = [
    // Act 1
    { key: "leg", digits: iLvlDigits.Double }, // Wirt's Leg
    { key: "hdm", digits: iLvlDigits.Double }, // Horadric Malus
    // Act 2
    { key: "msf", digits: iLvlDigits.Double }, // Staff of Kings
    { key: "hst", digits: iLvlDigits.Single }, // Horadric Staff
    // Act 3
    { key: "g33", digits: iLvlDigits.Double }, // The Gidbinn
    { key: "qf1", digits: iLvlDigits.Double }, // Khalim's Flail
    { key: "qf2", digits: iLvlDigits.Single }, // Khalim's Will
    // Act 4
    { key: "hfh", digits: iLvlDigits.Double }, // Hell Forge Hammer
    // Act 5: see exceptions mentioned above [CSTM-QST2]
    // Extra
    { key: "Staff of Kings",      digits: iLvlDigits.Double }, 
    { key: "Amulet of the Viper", digits: iLvlDigits.Double }, 
    { key: "Horadric Staff",      digits: iLvlDigits.Single }, 
    { key: "KhalimFlail",         digits: iLvlDigits.Double }, // Khalim's Flail
    { key: "SuperKhalimFlail",    digits: iLvlDigits.Single }, // Khalim's Will
    { key: "Hell Forge Hammer",   digits: iLvlDigits.Double }, 
  ];
}
