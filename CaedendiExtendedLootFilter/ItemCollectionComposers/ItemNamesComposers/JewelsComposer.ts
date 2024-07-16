import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlightItemEntry } from "../../Models/DoubleHighlightItemEntry";
import { Settings } from "../../Settings/Settings";
import { iLvlFix } from "../../Settings/StatsAndModifiersSettings";
import { IBigTooltipItemCollectionComposer } from "../Interfaces/IBigTooltipItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IBigTooltipItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (Settings.filter.jewelry.jewels == SettingsConstants.disabled)
      return;
    
    this.collection.upsert(new DoubleHighlightItemEntry(FacetConstants.facetId, FacetConstants.facetName, iLvlFix.Double, FacetConstants.prefix, FacetConstants.suffix));

    /*
    case SettingsConstants.custom: // [CSTM-JWL]
      // ADD YOUR CUSTOM ITEM NAMES HERE
      
      // TODO: refactor
      this.collection.upsert(new ItemEntry(JewelryConstants.jewelId, `${ColorConstants.red}Jewel${ColorConstants.magic}`)); // includes (unidentified) magic, rare and unique jewels
      this.collection.upsert(new ItemEntry(FacetConstants.facetId, `Rainbow Facet`)); // identified facets
      return;
    }
    */
  }

  public addBigTooltips() {
    this.collection.addBigTooltipToEntry(FacetConstants.facetId, Settings.bigTooltips.jewelry.facetsSetting);
  }
}
