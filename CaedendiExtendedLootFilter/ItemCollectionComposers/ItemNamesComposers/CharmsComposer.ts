import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { CharmConstants } from "../../Constants/Items/CharmConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlightPattern } from "../../Models/Highlights/DoubleHighlightPattern";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { SunderCharm } from "../../Models/Items/SunderCharm";
import { EiLvlDigits } from "../../Settings/EiLvlDigits";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class CharmsComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (Settings.filter.jewelry.charms) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case SettingsConstants.all:
        this.highlightUnidentifiedCharms();
        this.highlightUniqueCharms();
        this.highlightSunderCharms();
        return;
      case "uniq":
        this.highlightUniqueCharms();
        this.highlightSunderCharms();
        return;
      case "unid":
        this.highlightUnidentifiedCharms();
        return;
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

  protected highlightUniqueCharms(): void {
    [
      CharmConstants.anniId, 
      CharmConstants.torchId, 
      CharmConstants.gheedsId
    ].forEach(charm => {
      this.collection.upsert(new iLvlItemEntry(charm, EiLvlDigits.Double, null, null, HighlightConstants.uniqPattern, Settings.bigTooltips.jewelry.uniqueCharmsSetting))
    });
  }

  protected highlightSunderCharms(): void {
    if (Settings.filter.jewelry.isSunderAltPatternEnabled)
      this.highlightSunderCharmsAlt(CharmConstants.sunderCharms);
    else 
      this.highlightSunderCharmsDefault(CharmConstants.sunderCharms);
  }

  private highlightSunderCharmsDefault(sunders: SunderCharm[]): void {
    sunders.forEach(sunder => this.collection.upsert(
      new iLvlItemEntry(sunder.id, EiLvlDigits.Double, null, null, HighlightConstants.uniqPattern, Settings.bigTooltips.jewelry.uniqueCharmsSetting)
    ));
  }

  private highlightSunderCharmsAlt(sunders: SunderCharm[]): void {
    sunders.forEach(sunder => this.collection.upsert(
      new iLvlItemEntry(sunder.id, EiLvlDigits.Double, null, null, new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5, sunder.color))
    ));
  }
}
