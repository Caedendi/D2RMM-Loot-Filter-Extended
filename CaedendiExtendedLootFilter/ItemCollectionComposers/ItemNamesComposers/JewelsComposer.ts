import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSetting";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { RainbowHighlight } from "../../Models/Highlights/RainbowHighlight";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if ( JewelrySettings.facets.highlight === SettingsConstants.disabled 
      && JewelrySettings.facets.bigTooltip == EBigTooltipSetting.Disabled)
      return;

    this.collection.upsert(new ItemEntry("Rainbow Facet", null, ColorConstants.gold, this.createFacetPattern(), JewelrySettings.facets.bigTooltip));
  }

  protected createFacetPattern(): IHighlight | null {
    if (JewelrySettings.facets.highlight === "rainbow")
      return new RainbowHighlight(JewelrySettings.facets.bigTooltip);
    if (JewelrySettings.facets.highlight === "highlight")
      return new DoubleHighlight(EDoubleHighlightSetting.LARGE, ColorConstants.red);

    return null;
  }
}
