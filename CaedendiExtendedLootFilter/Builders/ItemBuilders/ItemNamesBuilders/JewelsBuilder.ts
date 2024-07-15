import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../../Constants/Items/FacetConstants";
import { JewelryConstants } from "../../../Constants/Items/JewelryConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { ItemEntry } from "../../../Models/ItemEntry";
import { Settings } from "../../../Settings/Settings";
import { iLvlFix } from "../../../Settings/StatsAndModifiersSettings";
import { BigTooltipItemBuilderBase } from "../BigTooltipItemBuilderBase";
import { IBigTooltipItemBuilder } from "../Interfaces/IBigTooltipItemBuilder";

export class JewelsBuilder extends BigTooltipItemBuilderBase implements IBigTooltipItemBuilder {
  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.jewelry.jewels) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case "facet":
      case "facet-rb":
        this.collection.upsert(new DoubleHighlightItemEntry(FacetConstants.facetId, FacetConstants.facetName, iLvlFix.Double, FacetConstants.prefix, FacetConstants.suffix));
        // this.collection.upsertOLD(FacetConstants.facetId, `${SettingsConstants.iLvlIndentFixFacets}${FacetConstants.prefix}${FacetConstants.facetName}${FacetConstants.suffix}`);
        return;
      case SettingsConstants.custom: // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        
        // TODO: refactor
        this.collection.upsert(new ItemEntry(JewelryConstants.jewelId, `${ColorConstants.red}Jewel${ColorConstants.magic}`)); // includes (unidentified) magic, rare and unique jewels
        this.collection.upsert(new ItemEntry(FacetConstants.facetId, `Rainbow Facet`)); // identified facets
        return;
    }
  }

  public addBigTooltips() {
    this.collection.addBigTooltipToEntry(FacetConstants.facetId, Settings.bigTooltips.jewelry.facetsSetting);
  }
}
