import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../../Constants/Items/FacetConstants";
import { JewelryConstants } from "../../../Constants/Items/JewelryConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { BigTooltipSetting } from "../../../Models/BigTooltipSetting";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { iLvlFix } from "../../../Models/iLvlFix";
import { ItemEntry } from "../../../Models/ItemEntry";
import { BigTooltipItemBuilderBase } from "../BigTooltipItemBuilderBase";
import { IBigTooltipItemBuilder } from "../Interfaces/IBigTooltipItemBuilder";

export class JewelsBuilder extends BigTooltipItemBuilderBase implements IBigTooltipItemBuilder {
  protected readonly filterSetting: string = config.Jewels as string;
  protected readonly bigTooltipSetting: BigTooltipSetting = config.BigTooltipFacets as number as BigTooltipSetting;

  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (this.filterSetting) { // todo: validate setting as string
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

  public addBigTooltipsToGems() {
    this.collection.addBigTooltipToEntry(FacetConstants.facetId, this.bigTooltipSetting);
  }
}
