import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSetting } from "../../Models/Highlights/EDoubleHighlightSetting";
import { IHighlight } from "../../Models/Highlights/Interfaces/IHighlight";
import { RainbowHighlight } from "../../Models/Highlights/RainbowHighlight";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/Enums/EiLvlDigits";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if ( JewelrySettings.facets.highlight === SettingsConstants.disabled 
      && JewelrySettings.facets.bigTooltip == EBigTooltipSetting.DISABLED)
      return;

    this.collection.upsert(new iLvlItemEntry("Rainbow Facet", EiLvlDigits.Double, null, ColorConstants.unique, this.createFacetPattern(), JewelrySettings.facets.bigTooltip));
  }

  protected createFacetPattern(): IHighlight | null {
    if (JewelrySettings.facets.highlight === "rainbow")
      return new RainbowHighlight();
    if (JewelrySettings.facets.highlight === "highlight")
      return DoubleHighlight.create(EDoubleHighlightSetting.LARGE, ColorConstants.red);

    return null;
  }
}
