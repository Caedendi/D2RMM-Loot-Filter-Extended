import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../../Constants/Items/FacetConstants";
import { JewelryConstants } from "../../../Constants/Items/JewelryConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";

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
        this.collection.upsert(FacetConstants.facetId, `${SettingsConstants.iLvlIndentFixFacets}${FacetConstants.prefix}${FacetConstants.facetName}${FacetConstants.suffix}`);
        return;
      case SettingsConstants.custom: // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert(JewelryConstants.jewelId, `${ColorConstants.red}Jewel${ColorConstants.magic}`); // includes (unidentified) magic, rare and unique jewels
        this.collection.upsert(FacetConstants.facetId, `Rainbow Facet`); // identified facets
        return;
    }
  }
}
