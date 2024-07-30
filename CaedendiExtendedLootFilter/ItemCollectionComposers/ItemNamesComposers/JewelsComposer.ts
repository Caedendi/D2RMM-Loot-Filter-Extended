import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlightPattern } from "../../Models/ItemCollectionEntries/DoubleHighlightPattern";
import { IHighlightPattern } from "../../Models/ItemCollectionEntries/IHighlightPattern";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { RainbowHighlightPattern } from "../../Models/ItemCollectionEntries/RainbowHighlightPattern";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (Settings.filter.jewelry.jewels != SettingsConstants.disabled)
      this.collection.upsert(new ItemEntry(FacetConstants.facetId, null, ColorConstants.gold, this.createFacetPattern(), Settings.bigTooltips.jewelry.facetsSetting));
  }

  protected createFacetPattern(): IHighlightPattern {
    return Settings.filter.jewelry.isFacetAltPatternEnabled
      ? new RainbowHighlightPattern(Settings.bigTooltips.jewelry.facetsSetting)
      : new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5, ColorConstants.red);
  }
}
