import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { CharmConstants } from "../../Constants/Items/CharmConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { EDoubleHighlightSize } from "../../Models/Highlights/EDoubleHighlightSize";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/Enums/EiLvlDigits";
import { FilterSettings } from "../../Settings/Filter/FilterSettings";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class CharmsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  protected readonly nameColor = ColorConstants.unique;

  constructor() {
    super();
  }

  public applyFilter(): void {
    if (JewelrySettings.charms.isHighlightMagicEnabled)
      this.highlightUnidentifiedCharms();

    this.applyLodUniqueCharms();
    this.applySunderCharms();

    if ( JewelrySettings.charms.highlightUnique !== SettingsConstants.disabled
      && JewelrySettings.charms.bigTooltipUnique != EBigTooltipSetting.DISABLED
    ) {
      // TODO: finish
    }
  }

  // TODO: v4.0.1 make compatible with translations
  protected highlightUnidentifiedCharms(): void {
    [
      [ CharmConstants.charmSmallId, "Small" ],
      [ CharmConstants.charmLargeId, "Large" ],
      [ CharmConstants.charmGrandId, "Grand" ],
    ].forEach(([key, size]) => {
      this.collection.upsert(new ItemEntry(key, `${size} ${ColorConstants.red}${"Charm"}${ColorConstants.magic}`));
    });
  }

  protected applyLodUniqueCharms(): void {
    const bttSetting = JewelrySettings.charms.bigTooltipUnique;
    const highlight = JewelrySettings.charms.highlightUnique !== SettingsConstants.disabled 
      ? new DoubleHighlight(EDoubleHighlightSize.LARGE, FilterSettings.defaultHighlightColor, bttSetting) 
      : null;
    if (highlight == null && bttSetting == EBigTooltipSetting.DISABLED)
      return;

    [
      CharmConstants.anniId, 
      CharmConstants.torchId, 
      CharmConstants.gheedsId
    ].forEach(charm => this.collection.upsert(new iLvlItemEntry(charm, EiLvlDigits.Double, null, this.nameColor, highlight, bttSetting)));
  }

  protected applySunderCharms(): void {
    const hlSetting = JewelrySettings.charms.highlightUnique;
    const bttSetting = JewelrySettings.charms.bigTooltipUnique;
    if (hlSetting === SettingsConstants.disabled && bttSetting == EBigTooltipSetting.DISABLED)
      return;
    
    // TODO: v4.0.1 magic string
    if (hlSetting === "hl-sa")
      this.highlightSunderCharmsAlt(bttSetting);
    else 
      this.highlightSunderCharmsDefault(bttSetting);
  }

  private highlightSunderCharmsDefault(bigTooltipSetting: EBigTooltipSetting): void {
    const highlight = new DoubleHighlight(EDoubleHighlightSize.LARGE, FilterSettings.defaultHighlightColor, JewelrySettings.charms.bigTooltipUnique);

    CharmConstants.sunderCharms.forEach(sunder => this.collection.upsert(
      new iLvlItemEntry(sunder.id, EiLvlDigits.Double, null, this.nameColor, highlight, bigTooltipSetting)
    ));
  }

  private highlightSunderCharmsAlt(bigTooltipSetting: EBigTooltipSetting): void {
    CharmConstants.sunderCharms.forEach(sunder => {
      const highlight = new DoubleHighlight(EDoubleHighlightSize.LARGE, sunder.color, bigTooltipSetting);
      this.collection.upsert(new iLvlItemEntry(sunder.id, EiLvlDigits.Double, null, this.nameColor, highlight, bigTooltipSetting));
    });
  }
}
