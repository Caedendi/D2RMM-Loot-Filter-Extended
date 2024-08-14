import { EiLvlDigits } from "../../Settings/EiLvlDigits";

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
    // Act 5: see exceptions below [CSTM-QST2]
    // Extra
    "LamTome", // Lam Esen's Tome
  ];

  // [CSTM-QST2]
  public static readonly questItemExceptionsAct23: string[] = [
    // Act 5
    "ass", // Book of Skill
    "xyz", // Potion of Life
  ];

  // [CSTM-QST3] // TODO: correct search tags in codebase
  public static readonly questItemExceptionsAct5: string[] = [
    // Act 5
    "ice", // Malah's Potion
    "tr2", // Scroll of Resistance
  ];

  public static readonly cube: "box"; // Horadric Cube

  public static readonly questWeapons: { key: string, digits: EiLvlDigits }[] = [
    // Act 1
    { key: "leg", digits: EiLvlDigits.Double }, // Wirt's Leg
    { key: "hdm", digits: EiLvlDigits.Double }, // Horadric Malus
    // Act 2
    { key: "msf", digits: EiLvlDigits.Double }, // Staff of Kings
    { key: "hst", digits: EiLvlDigits.Single }, // Horadric Staff
    // Act 3
    { key: "g33", digits: EiLvlDigits.Double }, // The Gidbinn
    { key: "qf1", digits: EiLvlDigits.Double }, // Khalim's Flail
    { key: "qf2", digits: EiLvlDigits.Single }, // Khalim's Will
    // Act 4
    { key: "hfh", digits: EiLvlDigits.Double }, // Hell Forge Hammer
    // Act 5: see exceptions mentioned above [CSTM-QST2]
    // Extra
    { key: "Staff of Kings",      digits: EiLvlDigits.Double }, 
    { key: "Amulet of the Viper", digits: EiLvlDigits.Double }, 
    { key: "Horadric Staff",      digits: EiLvlDigits.Single }, 
    { key: "KhalimFlail",         digits: EiLvlDigits.Double }, // Khalim's Flail
    { key: "SuperKhalimFlail",    digits: EiLvlDigits.Single }, // Khalim's Will
    { key: "Hell Forge Hammer",   digits: EiLvlDigits.Double }, 
  ];
}
