import { CharConstants } from "./CharConstants";
import { ColorConstants } from "./ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export class JewelryConstants {
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

  static facetAltClrName = ColorConstants.gold;
  static facetAltPattern = (config.IsBigTooltipsEnabled && (config.BigTooltipFacets === "2pu" || config.BigTooltipFacets === "4pu")) ? HighlightConstants.pattern3 : HighlightConstants.pattern5;
  static facetAltPadding1 = HighlightConstants.padding1; // padding between individual patterns
  static facetAltPadding2 = HighlightConstants.padding3; // padding between name and facetAltPrefix / facetAltSuffix
  static facetAltPrefix = `${ColorConstants.red}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.yellow}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.blue}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.green}${this.facetAltPattern}${this.facetAltClrName}${this.facetAltPadding2}`;
  static facetAltSuffix = `${this.facetAltPadding2}${ColorConstants.green}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.blue}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.yellow}${this.facetAltPattern}${this.facetAltPadding1}${ColorConstants.red}${this.facetAltPattern}${this.facetAltClrName}`;
  static facetPrefix = config.IsFacetAltPattern ? this.facetAltPrefix : HighlightConstants.uniquePrefix;
  static facetSuffix = config.IsFacetAltPattern ? this.facetAltSuffix : HighlightConstants.uniqueSuffix;

  static ring = "rin";
  static amulet = "amu";
  static jewel = "jew";
  static facet = "Rainbow Facet";

  static charmSmall = "cm1";
  static charmLarge = "cm2";
  static charmGrand = "cm3";

  static anni = "Annihilus";
  static torch = "Hellfire Torch";
  static gheeds = "Gheed's Fortune";

  static sunderMagic = "Black Cleft";
  static sunderPhys = "Bone Break";
  static sunderCold = "Cold Rupture";
  static sunderLite = "Crack of the Heavens";
  static sunderFire = "Flame Rift";
  static sunderPsn = "Rotting Fissure";

  static iLvlJewelry = [
    this.ring,
    this.amulet,
    this.jewel,
    this.charmSmall,
    this.charmLarge,
    this.charmGrand,
  ];

  static charms = [
    this.charmSmall,
    this.charmLarge,
    this.charmGrand,
  ];

  static uniqueLodCharms = [
    this.anni,
    this.torch,
    this.gheeds,
  ];

  static sunderCharms = [
    { name: this.sunderMagic, color: ColorConstants.gray },
    { name: this.sunderPhys, color: ColorConstants.white },
    { name: this.sunderCold, color: ColorConstants.lightBlue },
    { name: this.sunderLite, color: ColorConstants.yellow },
    { name: this.sunderFire, color: ColorConstants.red },
    { name: this.sunderPsn, color: ColorConstants.green },
  ];

  static charmsUniquePrefix = HighlightConstants.uniquePrefix;
  static charmsUniqueSuffix = HighlightConstants.uniqueSuffix;

  static indentPickUpMsg = (config.Gems === "all" || config.Gems === "flawless" || config.Gems === "perfect") ? CharConstants.space.repeat(2) : CharConstants.empty; // indent for the pick up message if gem highlighting is enabled.
}
