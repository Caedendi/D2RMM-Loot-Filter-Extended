import { RawSettings } from "../RawSettings";

export abstract class JewelrySettings {
  public static readonly gems = {
    isHighlightEnabled:  RawSettings.filter.jewelry.gems.isHighlightEnabled,
    filter:              RawSettings.filter.jewelry.gems.filter,
    bigTooltip:          RawSettings.filter.jewelry.gems.bigTooltip,

    // isEnabled:       RawSettings.filter.jewelry.gems.isEnabled,
    // shouldHideAffix: RawSettings.filter.jewelry.gems.shouldHideAffix,
    // chipped: {
    //   highlight:  RawSettings.filter.jewelry.gems.chipped.highlight,
    //   bigTooltip: RawSettings.filter.jewelry.gems.chipped.bigTooltip,
    // },
    // flawed: {
    //   highlight:  RawSettings.filter.jewelry.gems.flawed.highlight,
    //   bigTooltip: RawSettings.filter.jewelry.gems.flawed.bigTooltip,
    // },
    // standard: {
    //   highlight:  RawSettings.filter.jewelry.gems.standard.highlight,
    //   bigTooltip: RawSettings.filter.jewelry.gems.standard.bigTooltip,
    // },
    // flawless: {
    //   highlight:  RawSettings.filter.jewelry.gems.flawless.highlight,
    //   bigTooltip: RawSettings.filter.jewelry.gems.flawless.bigTooltip,
    // },
    // perfect: {
    //   highlight:  RawSettings.filter.jewelry.gems.perfect.highlight,
    //   bigTooltip: RawSettings.filter.jewelry.gems.perfect.bigTooltip,
    // },
  };

  public static readonly facets = {
    highlight:  RawSettings.filter.jewelry.facets.highlight,
    bigTooltip: RawSettings.filter.jewelry.facets.bigTooltip,
  };

  public static readonly charms = {
    isHighlightMagicEnabled: RawSettings.filter.jewelry.charms.isHighlightMagicEnabled,
    highlightUnique:         RawSettings.filter.jewelry.charms.highlightUnique,
    bigTooltipUnique:        RawSettings.filter.jewelry.charms.bigTooltipUnique,
  };
}
