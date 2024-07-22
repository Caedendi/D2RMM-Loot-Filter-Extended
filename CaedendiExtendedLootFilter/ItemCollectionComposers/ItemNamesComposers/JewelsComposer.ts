import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { FacetConstants } from "../../Constants/Items/FacetConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { ItemEntry } from "../../Models/_old/ItemEntry";
import { BigTooltip } from "../../Models/ItemCollectionEntries/BigTooltip";
import { DoubleHighlightPattern } from "../../Models/ItemCollectionEntries/DoubleHighlightPattern";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { RainbowHighlightPattern } from "../../Models/ItemCollectionEntries/RainbowHighlightPattern";
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

    this.collection.upsert(this.createFacetEntry());
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

  protected createFacetEntry(): ItemEntry {
    let pattern = Settings.filter.jewelry.isFacetAltPatternEnabled
      ? new RainbowHighlightPattern(Settings.bigTooltips.jewelry.facetsSetting)
      : new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5, ColorConstants.red);

    return new ItemEntry(FacetConstants.facetId, CharConstants.empty, ColorConstants.gold, pattern, new BigTooltip(Settings.bigTooltips.jewelry.facetsSetting))
  }

  public addBigTooltips() {
    this.collection.addBigTooltipToEntry(FacetConstants.facetId, Settings.bigTooltips.jewelry.facetsSetting);
  }
}
