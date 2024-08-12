import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlightPattern } from "../../Models/Highlights/DoubleHighlightPattern";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { RainbowHighlightPattern } from "../../Models/Highlights/RainbowHighlightPattern";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if ( Settings.filter.jewelry.facets.highlight === SettingsConstants.disabled 
      && Settings.filter.jewelry.facets.bigTooltip == EBigTooltipSetting.Disabled)
      return;

    this.collection.upsert(new ItemEntry(FacetConstants.facetId, null, ColorConstants.gold, this.createFacetPattern(), Settings.filter.jewelry.facets.bigTooltip));
  }

  protected createFacetPattern(): IHighlight | null {
    if (Settings.filter.jewelry.facets.highlight === "rainbow")
      return new RainbowHighlightPattern(Settings.filter.jewelry.facets.bigTooltip);
    if (Settings.filter.jewelry.facets.highlight === "highlight")
      return new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5, ColorConstants.red);

    return null;
  }
}
