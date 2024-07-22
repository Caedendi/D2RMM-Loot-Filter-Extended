import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { BigTooltip } from "../../Models/NewItemEntry/BigTooltip";
import { DoubleHighlightPattern } from "../../Models/NewItemEntry/DoubleHighlightPattern";
import { NewItemEntry } from "../../Models/NewItemEntry/NewItemEntry";
import { RainbowHighlightPattern } from "../../Models/NewItemEntry/RainbowHighlightPattern";
import { Settings } from "../../Settings/Settings";
import { IBigTooltipItemCollectionComposer } from "../Interfaces/IBigTooltipItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class JewelsComposer extends ItemCollectionComposerBase implements IBigTooltipItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (Settings.filter.jewelry.jewels == SettingsConstants.disabled)
      return;
    
    let pattern = Settings.filter.jewelry.isFacetAltPatternEnabled
      ? new RainbowHighlightPattern()
      : new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5, ColorConstants.red);

    this.collection.upsert(new NewItemEntry(FacetConstants.facetId, CharConstants.empty, ColorConstants.gold, pattern, new BigTooltip(Settings.bigTooltips.jewelry.facetsSetting)))
    // this.collection.upsert(new DoubleHighlightItemEntry(FacetConstants.facetId, FacetConstants.facetName, iLvlDigits.Double, FacetConstants.prefix, FacetConstants.suffix));

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
