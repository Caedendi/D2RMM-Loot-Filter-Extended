import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { CharmConstants } from "../../Constants/Items/CharmConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlight } from "../../Models/Highlights/DoubleHighlight";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { EiLvlDigits } from "../../Settings/Enums/EiLvlDigits";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class CharmsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (Settings.filter.jewelry.charms.isHighlightMagicEnabled)
      this.highlightUnidentifiedCharms();

    this.applyLodUniqueCharms();
    this.applySunderCharms();

    if ( Settings.filter.jewelry.charms.highlightUnique !== SettingsConstants.disabled
      && Settings.filter.jewelry.charms.bigTooltipUnique != EBigTooltipSetting.Disabled
    ) {

    }
  }

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
    let highlight = Settings.filter.jewelry.charms.highlightUnique !== SettingsConstants.disabled ? Helper.uniqPattern : null;
    let bttSetting = Settings.filter.jewelry.charms.bigTooltipUnique;
    if (highlight == null && bttSetting == EBigTooltipSetting.Disabled)
      return;

    [
      CharmConstants.anniId, 
      CharmConstants.torchId, 
      CharmConstants.gheedsId
    ].forEach(charm => this.collection.upsert(new iLvlItemEntry(charm, EiLvlDigits.Double, null, null, highlight, bttSetting)));
  }

  protected applySunderCharms(): void {
    let hlSetting = Settings.filter.jewelry.charms.highlightUnique;
    let bttSetting = Settings.filter.jewelry.charms.bigTooltipUnique;
    if (hlSetting === SettingsConstants.disabled && bttSetting == EBigTooltipSetting.Disabled)
      return;
    
    if (hlSetting === "hl-sa")
      this.highlightSunderCharmsAlt(bttSetting);
    else 
      this.highlightSunderCharmsDefault(bttSetting);
  }

  private highlightSunderCharmsDefault(bigTooltipSetting: EBigTooltipSetting): void {
    CharmConstants.sunderCharms.forEach(sunder => this.collection.upsert(
      new iLvlItemEntry(sunder.id, EiLvlDigits.Double, null, null, Helper.uniqPattern, bigTooltipSetting)
    ));
  }

  private highlightSunderCharmsAlt(bigTooltipSetting: EBigTooltipSetting): void {
    CharmConstants.sunderCharms.forEach(sunder => this.collection.upsert(
      new iLvlItemEntry(sunder.id, EiLvlDigits.Double, null, null, new DoubleHighlight(HighlightConstants.pattern10, HighlightConstants.padding5, sunder.color), bigTooltipSetting)
    ));
  }
}
