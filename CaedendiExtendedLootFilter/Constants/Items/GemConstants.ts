import { Gem } from "../../Models/Gem";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

// todo: public protected
export class GemConstants {
  static amethyst = "Amethyst";
  static diamond = "Diamond";
  static emerald = "Emerald";
  static ruby = "Ruby";
  static sapphire = "Sapphire";
  static topaz = "Topaz";
  static skull = "Skull";

  static chipped = "Chipped";
  static flawed = "Flawed";
  static flawless = "Flawless";
  static perfect = "Perfect";

  static clrAmethyst = ColorConstants.purple;
  static clrDiamond = ColorConstants.white;
  static clrEmerald = ColorConstants.green;
  static clrRuby = ColorConstants.red;
  static clrSapphire = ColorConstants.blue;
  static clrTopaz = ColorConstants.yellow;
  static clrSkull = ColorConstants.gray;

  static clrName = ColorConstants.white;
  static highlight = CharConstants.o;
  static padding = HighlightConstants.padding1;

  // TODO: refactor
  static indentPickUpMsg = (config.Gems === "all" || config.Gems === "flawless" || config.Gems === "perfect") ? CharConstants.space.repeat(2) : CharConstants.empty; // indent for the pick up message if gem highlighting is enabled.

  public static chippedFlawedRegularGems: Gem[] = [
    new Gem("gcv", this.clrAmethyst, this.chipped ), // Chipped Amethyst
    new Gem("gcw", this.clrDiamond,  this.chipped ), // Chipped Diamond
    new Gem("gcg", this.clrEmerald,  this.chipped ), // Chipped Emerald
    new Gem("gcr", this.clrRuby,     this.chipped ), // Chipped Ruby
    new Gem("gcb", this.clrSapphire, this.chipped ), // Chipped Sapphire
    new Gem("gcy", this.clrTopaz,    this.chipped ), // Chipped Topaz
    new Gem("skc", this.clrSkull,    this.chipped ), // Chipped Skull
    new Gem("gfv", this.clrAmethyst, this.flawed  ), // Flawed Amethyst
    new Gem("gfw", this.clrDiamond,  this.flawed  ), // Flawed Diamond
    new Gem("gfg", this.clrEmerald,  this.flawed  ), // Flawed Emerald
    new Gem("gfr", this.clrRuby,     this.flawed  ), // Flawed Ruby
    new Gem("gfb", this.clrSapphire, this.flawed  ), // Flawed Sapphire
    new Gem("gfy", this.clrTopaz,    this.flawed  ), // Flawed Topaz
    new Gem("skf", this.clrSkull,    this.flawed  ), // Flawed Skull
    new Gem("gsv", this.clrAmethyst, this.amethyst), // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see "gemExceptions" below.
    new Gem("gsy", this.clrTopaz, this.topaz), // Topaz
    new Gem("sku", this.clrSkull, this.skull), // Skull
  ];

  public static flawlessGems: Gem[] = [
    new Gem("gzv", this.clrAmethyst, this.flawless), // Flawless Amethyst
    new Gem("glw", this.clrDiamond,  this.flawless), // Flawless Diamond
    new Gem("glg", this.clrEmerald,  this.flawless), // Flawless Emerald
    new Gem("glr", this.clrRuby,     this.flawless), // Flawless Ruby
    new Gem("glb", this.clrSapphire, this.flawless), // Flawless Sapphire
    new Gem("gly", this.clrTopaz,    this.flawless), // Flawless Topaz
    new Gem("skl", this.clrSkull,    this.flawless), // Flawless Skull
  ];

  public static perfectGems: Gem[] = [
    new Gem("gpv", this.clrAmethyst, this.perfect),  // Perfect Amethyst
    new Gem("gpw", this.clrDiamond,  this.perfect),  // Perfect Diamond
    new Gem("gpg", this.clrEmerald,  this.perfect),  // Perfect Emerald
    new Gem("gpr", this.clrRuby,     this.perfect),  // Perfect Ruby
    new Gem("gpb", this.clrSapphire, this.perfect),  // Perfect Sapphire
    new Gem("gpy", this.clrTopaz,    this.perfect),  // Perfect Topaz
    new Gem("skz", this.clrSkull,    this.perfect),  // Perfect Skull
  ];

  // Since these names are also used as affixes, the devs for some reason decided these item names could be borrowed from another JSON file.
  
  
  /**
   * These gem names also function as affixes, which is why they are located in item-nameaffixes.json instead of itemnames.json.
   * 
   * Enabling filtering for these gems could also change for example the "Ruby"-part in a "Ruby Jewel of Fervor".
   */
  public static gemExceptions: Gem[] = [
    new Gem("gsw", GemConstants.clrDiamond,  GemConstants.diamond),  // Diamond
    new Gem("gsg", GemConstants.clrEmerald,  GemConstants.emerald),  // Emerald
    new Gem("gsr", GemConstants.clrRuby,     GemConstants.ruby),     // Ruby
    new Gem("gsb", GemConstants.clrSapphire, GemConstants.sapphire), // Sapphire
  ];
}
