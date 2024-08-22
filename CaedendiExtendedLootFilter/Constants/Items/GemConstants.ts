import { Gem } from "../../Models/Items/Gem";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { SettingsConstants } from "../SettingsConstants";
import { HighlightConstants } from "./HighlightConstants";

export abstract class GemConstants {
  // TODO: public/protected properties
  // TODO: translated gem quality names
  static amethyst = "Amethyst";
  static diamond  = "Diamond";
  static emerald  = "Emerald";
  static ruby     = "Ruby";
  static sapphire = "Sapphire";
  static topaz    = "Topaz";
  static skull    = "Skull";

  static chipped  = "Chipped";
  static flawed   = "Flawed";
  static flawless = "Flawless";
  static perfect  = "Perfect";

  static amethystColor = ColorConstants.purple;
  static diamondColor  = ColorConstants.white;
  static emeraldColor  = ColorConstants.green;
  static rubyColor     = ColorConstants.red;
  static sapphireColor = ColorConstants.blue;
  static topazColor    = ColorConstants.yellow;
  static skullColor    = ColorConstants.gray;

  static clrName = ColorConstants.white;
  static highlight = CharConstants.o;
  static padding = HighlightConstants.padding.p1;

  // indent for the pick up message if gem highlighting is enabled.
  public static getPickUpMessageIndent(): string {
    let setting = JewelrySettings.gems.filter;
    if (setting === SettingsConstants.all || setting === "flawless" || setting === "perfect")
      return CharConstants.getSpaces(2);

    return CharConstants.empty;
  }

  // TODO:
  // - use translated names for chipped/flawed/flawless/perfect
  // - use selectable name for [translated]/common/regular/whatever gems
  public static chippedFlawedRegularGems: Gem[] = [
    new Gem("gcv", this.amethystColor, this.chipped ), // Chipped Amethyst
    new Gem("gcw", this.diamondColor,  this.chipped ), // Chipped Diamond
    new Gem("gcg", this.emeraldColor,  this.chipped ), // Chipped Emerald
    new Gem("gcr", this.rubyColor,     this.chipped ), // Chipped Ruby
    new Gem("gcb", this.sapphireColor, this.chipped ), // Chipped Sapphire
    new Gem("gcy", this.topazColor,    this.chipped ), // Chipped Topaz
    new Gem("skc", this.skullColor,    this.chipped ), // Chipped Skull
    new Gem("gfv", this.amethystColor, this.flawed  ), // Flawed Amethyst
    new Gem("gfw", this.diamondColor,  this.flawed  ), // Flawed Diamond
    new Gem("gfg", this.emeraldColor,  this.flawed  ), // Flawed Emerald
    new Gem("gfr", this.rubyColor,     this.flawed  ), // Flawed Ruby
    new Gem("gfb", this.sapphireColor, this.flawed  ), // Flawed Sapphire
    new Gem("gfy", this.topazColor,    this.flawed  ), // Flawed Topaz
    new Gem("skf", this.skullColor,    this.flawed  ), // Flawed Skull
    new Gem("gsv", this.amethystColor, this.amethyst), // Amethyst
    // For Ruby, Sapphire, Emerald and Diamond, see "gemExceptions" below.
    new Gem("gsy", this.topazColor,    this.topaz), // Topaz
    new Gem("sku", this.skullColor,    this.skull), // Skull
  ];

  public static flawlessGems: Gem[] = [
    new Gem("gzv", this.amethystColor, this.flawless), // Flawless Amethyst
    new Gem("glw", this.diamondColor,  this.flawless), // Flawless Diamond
    new Gem("glg", this.emeraldColor,  this.flawless), // Flawless Emerald
    new Gem("glr", this.rubyColor,     this.flawless), // Flawless Ruby
    new Gem("glb", this.sapphireColor, this.flawless), // Flawless Sapphire
    new Gem("gly", this.topazColor,    this.flawless), // Flawless Topaz
    new Gem("skl", this.skullColor,    this.flawless), // Flawless Skull
  ];

  public static perfectGems: Gem[] = [
    new Gem("gpv", this.amethystColor, this.perfect),  // Perfect Amethyst
    new Gem("gpw", this.diamondColor,  this.perfect),  // Perfect Diamond
    new Gem("gpg", this.emeraldColor,  this.perfect),  // Perfect Emerald
    new Gem("gpr", this.rubyColor,     this.perfect),  // Perfect Ruby
    new Gem("gpb", this.sapphireColor, this.perfect),  // Perfect Sapphire
    new Gem("gpy", this.topazColor,    this.perfect),  // Perfect Topaz
    new Gem("skz", this.skullColor,    this.perfect),  // Perfect Skull
  ];

  /**
   * These gem names are found in item-nameaffixes.json, probably because there's also affixes of the same name. They 
   * are however separate entries from the affixes, so no idea why the devs thought this makes sense.
   */
  public static gemExceptions: Gem[] = [
    new Gem("gsw", GemConstants.diamondColor,  GemConstants.diamond),  // Diamond
    new Gem("gsg", GemConstants.emeraldColor,  GemConstants.emerald),  // Emerald
    new Gem("gsr", GemConstants.rubyColor,     GemConstants.ruby),     // Ruby
    new Gem("gsb", GemConstants.sapphireColor, GemConstants.sapphire), // Sapphire
  ];
}
