import { EGemType } from "../../Models/Items/EGemType";
import { EGemQuality } from "../../Models/Items/EGemQuality";
import { Gem } from "../../Models/Items/Gem";

export abstract class GemConstants {
  public static chippedFlawedRegularGems: Gem[] = [
    new Gem("gcv", EGemType.AMETHYST, EGemQuality.CHIPPED),  // Chipped Amethyst
    new Gem("gcw", EGemType.DIAMOND,  EGemQuality.CHIPPED),  // Chipped Diamond
    new Gem("gcg", EGemType.EMERALD,  EGemQuality.CHIPPED),  // Chipped Emerald
    new Gem("gcr", EGemType.RUBY,     EGemQuality.CHIPPED),  // Chipped Ruby
    new Gem("gcb", EGemType.SAPPHIRE, EGemQuality.CHIPPED),  // Chipped Sapphire
    new Gem("gcy", EGemType.TOPAZ,    EGemQuality.CHIPPED),  // Chipped Topaz
    new Gem("skc", EGemType.SKULL,    EGemQuality.CHIPPED),  // Chipped Skull
    new Gem("gfv", EGemType.AMETHYST, EGemQuality.FLAWED),   // Flawed Amethyst
    new Gem("gfw", EGemType.DIAMOND,  EGemQuality.FLAWED),   // Flawed Diamond
    new Gem("gfg", EGemType.EMERALD,  EGemQuality.FLAWED),   // Flawed Emerald
    new Gem("gfr", EGemType.RUBY,     EGemQuality.FLAWED),   // Flawed Ruby
    new Gem("gfb", EGemType.SAPPHIRE, EGemQuality.FLAWED),   // Flawed Sapphire
    new Gem("gfy", EGemType.TOPAZ,    EGemQuality.FLAWED),   // Flawed Topaz
    new Gem("skf", EGemType.SKULL,    EGemQuality.FLAWED),   // Flawed Skull
    new Gem("gsv", EGemType.AMETHYST, EGemQuality.STANDARD), // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see "gemExceptions" below.
    new Gem("gsy", EGemType.AMETHYST, EGemQuality.STANDARD), // Topaz
    new Gem("sku", EGemType.AMETHYST, EGemQuality.STANDARD), // Skull
  ];

  public static flawlessGems: Gem[] = [
    new Gem("gzv", EGemType.AMETHYST, EGemQuality.FLAWLESS), // Flawless Amethyst
    new Gem("glw", EGemType.DIAMOND,  EGemQuality.FLAWLESS), // Flawless Diamond
    new Gem("glg", EGemType.EMERALD,  EGemQuality.FLAWLESS), // Flawless Emerald
    new Gem("glr", EGemType.RUBY,     EGemQuality.FLAWLESS), // Flawless Ruby
    new Gem("glb", EGemType.SAPPHIRE, EGemQuality.FLAWLESS), // Flawless Sapphire
    new Gem("gly", EGemType.TOPAZ,    EGemQuality.FLAWLESS), // Flawless Topaz
    new Gem("skl", EGemType.SKULL,    EGemQuality.FLAWLESS), // Flawless Skull
  ];

  public static perfectGems: Gem[] = [
    new Gem("gpv", EGemType.AMETHYST, EGemQuality.PERFECT),  // Perfect Amethyst
    new Gem("gpw", EGemType.DIAMOND,  EGemQuality.PERFECT),  // Perfect Diamond
    new Gem("gpg", EGemType.EMERALD,  EGemQuality.PERFECT),  // Perfect Emerald
    new Gem("gpr", EGemType.RUBY,     EGemQuality.PERFECT),  // Perfect Ruby
    new Gem("gpb", EGemType.SAPPHIRE, EGemQuality.PERFECT),  // Perfect Sapphire
    new Gem("gpy", EGemType.TOPAZ,    EGemQuality.PERFECT),  // Perfect Topaz
    new Gem("skz", EGemType.SKULL,    EGemQuality.PERFECT),  // Perfect Skull
  ];

  /**
   * These gem names are found in item-nameaffixes.json, probably because there's also affixes of the same name. They 
   * are however separate entries from the affixes, so no idea why the devs thought this makes sense.
   */
  public static gemExceptions: Gem[] = [
    new Gem("gsw", EGemType.DIAMOND,  EGemQuality.STANDARD), // Diamond
    new Gem("gsg", EGemType.EMERALD,  EGemQuality.STANDARD), // Emerald
    new Gem("gsr", EGemType.RUBY,     EGemQuality.STANDARD), // Ruby
    new Gem("gsb", EGemType.SAPPHIRE, EGemQuality.STANDARD), // Sapphire
  ];
}
