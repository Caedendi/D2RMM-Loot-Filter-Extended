import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../../Constants/Items/FacetConstants";
import { JewelryConstants } from "../../../Constants/Items/JewelryConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { iLvlFix } from "../../../Models/iLvlFix";
import { ItemEntry } from "../../../Models/ItemEntry";

export class JewelsBuilder extends ItemBuilderBase implements IItemBuilder {
  constructor() {
    super();
  }

  public build(): void {
    switch (config.Jewels as string) { // todo: validate setting as string
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
}
