import { EGem } from "../../Models/Items/EGem";
import { EGemQuality } from "../../Models/Items/EGemQuality";
import { Gem } from "../../Models/Items/Gem";

export abstract class GemConstants {
  public static chippedFlawedRegularGems: Gem[] = [
    new Gem("gcv", EGem.AMETHYST, EGemQuality.CHIPPED),  // Chipped Amethyst
    new Gem("gcw", EGem.DIAMOND,  EGemQuality.CHIPPED),  // Chipped Diamond
    new Gem("gcg", EGem.EMERALD,  EGemQuality.CHIPPED),  // Chipped Emerald
    new Gem("gcr", EGem.RUBY,     EGemQuality.CHIPPED),  // Chipped Ruby
    new Gem("gcb", EGem.SAPPHIRE, EGemQuality.CHIPPED),  // Chipped Sapphire
    new Gem("gcy", EGem.TOPAZ,    EGemQuality.CHIPPED),  // Chipped Topaz
    new Gem("skc", EGem.SKULL,    EGemQuality.CHIPPED),  // Chipped Skull
    new Gem("gfv", EGem.AMETHYST, EGemQuality.FLAWED),   // Flawed Amethyst
    new Gem("gfw", EGem.DIAMOND,  EGemQuality.FLAWED),   // Flawed Diamond
    new Gem("gfg", EGem.EMERALD,  EGemQuality.FLAWED),   // Flawed Emerald
    new Gem("gfr", EGem.RUBY,     EGemQuality.FLAWED),   // Flawed Ruby
    new Gem("gfb", EGem.SAPPHIRE, EGemQuality.FLAWED),   // Flawed Sapphire
    new Gem("gfy", EGem.TOPAZ,    EGemQuality.FLAWED),   // Flawed Topaz
    new Gem("skf", EGem.SKULL,    EGemQuality.FLAWED),   // Flawed Skull
    new Gem("gsv", EGem.AMETHYST, EGemQuality.STANDARD), // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see "gemExceptions" below.
    new Gem("gsy", EGem.AMETHYST, EGemQuality.STANDARD), // Topaz
    new Gem("sku", EGem.AMETHYST, EGemQuality.STANDARD), // Skull
  ];

  public static flawlessGems: Gem[] = [
    new Gem("gzv", EGem.AMETHYST, EGemQuality.FLAWLESS), // Flawless Amethyst
    new Gem("glw", EGem.DIAMOND,  EGemQuality.FLAWLESS), // Flawless Diamond
    new Gem("glg", EGem.EMERALD,  EGemQuality.FLAWLESS), // Flawless Emerald
    new Gem("glr", EGem.RUBY,     EGemQuality.FLAWLESS), // Flawless Ruby
    new Gem("glb", EGem.SAPPHIRE, EGemQuality.FLAWLESS), // Flawless Sapphire
    new Gem("gly", EGem.TOPAZ,    EGemQuality.FLAWLESS), // Flawless Topaz
    new Gem("skl", EGem.SKULL,    EGemQuality.FLAWLESS), // Flawless Skull
  ];

  public static perfectGems: Gem[] = [
    new Gem("gpv", EGem.AMETHYST, EGemQuality.PERFECT),  // Perfect Amethyst
    new Gem("gpw", EGem.DIAMOND,  EGemQuality.PERFECT),  // Perfect Diamond
    new Gem("gpg", EGem.EMERALD,  EGemQuality.PERFECT),  // Perfect Emerald
    new Gem("gpr", EGem.RUBY,     EGemQuality.PERFECT),  // Perfect Ruby
    new Gem("gpb", EGem.SAPPHIRE, EGemQuality.PERFECT),  // Perfect Sapphire
    new Gem("gpy", EGem.TOPAZ,    EGemQuality.PERFECT),  // Perfect Topaz
    new Gem("skz", EGem.SKULL,    EGemQuality.PERFECT),  // Perfect Skull
  ];

  /**
   * These gem names are found in item-nameaffixes.json, probably because there's also affixes of the same name. They 
   * are however separate entries from the affixes, so no idea why the devs thought this makes sense.
   */
  public static gemExceptions: Gem[] = [
    new Gem("gsw", EGem.DIAMOND,  EGemQuality.STANDARD), // Diamond
    new Gem("gsg", EGem.EMERALD,  EGemQuality.STANDARD), // Emerald
    new Gem("gsr", EGem.RUBY,     EGemQuality.STANDARD), // Ruby
    new Gem("gsb", EGem.SAPPHIRE, EGemQuality.STANDARD), // Sapphire
  ];
}
