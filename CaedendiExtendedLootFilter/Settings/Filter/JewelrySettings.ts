import { RawSettings } from "../RawSettings";

export abstract class JewelrySettings {
  public static readonly gems = {
    isHighlightEnabled:  RawSettings.filter.jewelry.gems.isHighlightEnabled,
    filter:              RawSettings.filter.jewelry.gems.filter,
    bigTooltip:          RawSettings.filter.jewelry.gems.bigTooltip,
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
