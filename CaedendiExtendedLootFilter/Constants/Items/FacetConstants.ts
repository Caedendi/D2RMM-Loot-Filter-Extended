import { Settings } from "../../Settings/Settings";
import { HighlightConstants } from "./HighlightConstants";

export abstract class FacetConstants {
  public static facetId = "Rainbow Facet";
  // public static facetName = this.facetId; // TODO: remove?
  
  public static prefix = Settings.filter.jewelry.isFacetAltPatternEnabled ? this.createRainbowPrefix() : HighlightConstants.uniquePrefix; // TODO
  public static suffix = Settings.filter.jewelry.isFacetAltPatternEnabled ? this.createRainbowSuffix() : HighlightConstants.uniqueSuffix; // TODO
}
