import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSize";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { RainbowHighlight } from "../../Models/Highlights/RainbowHighlight";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { RawSettings } from "../../Settings/RawSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if ( RawSettings.filter.jewelry.facets.highlight === SettingsConstants.disabled 
      && RawSettings.filter.jewelry.facets.bigTooltip == EBigTooltipSetting.Disabled)
      return;

    this.collection.upsert(new ItemEntry(FacetConstants.facetId, null, ColorConstants.gold, this.createFacetPattern(), RawSettings.filter.jewelry.facets.bigTooltip));
  }

  protected createFacetPattern(): IHighlight | null {
    if (RawSettings.filter.jewelry.facets.highlight === "rainbow")
      return new RainbowHighlight(RawSettings.filter.jewelry.facets.bigTooltip);
    if (RawSettings.filter.jewelry.facets.highlight === "highlight")
      return new DoubleHighlight(EDoubleHighlightSetting.LARGE, ColorConstants.red);

    return null;
  }
}
