import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { CharmConstants } from "../../Constants/Items/CharmConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { DoubleHighlightPattern } from "../../Models/ItemCollectionEntries/DoubleHighlightPattern";
import { iLvlItemEntry } from "../../Models/ItemCollectionEntries/iLvlItemEntry";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { SunderCharm } from "../../Models/Items/SunderCharm";
import { Settings } from "../../Settings/Settings";
import { iLvlDigits } from "../../Settings/StatsAndModifiersSettings";
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
      case SettingsConstants.custom: // [CSTM-CHA]
        // TODO: refactor
        
        // this.collection.upsertEntry(CharmConstants.charmSmallId, `Small Charm`);
        // this.collection.upsertEntry(CharmConstants.charmLargeId, `Large Charm`);
        // this.collection.upsertEntry(CharmConstants.charmGrandId, `Grand Charm`);
        // this.collection.upsertEntry(CharmConstants.anniId,       `Annihilus`);
        // this.collection.upsertEntry(CharmConstants.torchId,      `Hellfire Torch`);
        // this.collection.upsertEntry(CharmConstants.gheedsId,     `Gheed's Fortune`);
        // this.collection.upsertEntry(CharmConstants.sunderMagiId, `Black Cleft`);
        // this.collection.upsertEntry(CharmConstants.sunderPhysId, `Bone Break`);
        // this.collection.upsertEntry(CharmConstants.sunderColdId, `Cold Rupture`);
        // this.collection.upsertEntry(CharmConstants.sunderLiteId, `Crack of the Heavens`);
        // this.collection.upsertEntry(CharmConstants.sunderFireId, `Flame Rift`);
        // this.collection.upsertEntry(CharmConstants.sunderPoisId, `Rotting Fissure`);
        return;
    }
  }

  protected highlightUnidentifiedCharms(): void {
    let suffix = "Charm";
    [
      [ CharmConstants.charmSmallId, "Small" ],
      [ CharmConstants.charmLargeId, "Large" ],
      [ CharmConstants.charmGrandId, "Grand" ],
    ].forEach(([key, size]) => {
      this.collection.upsert(new ItemEntry(key, `${size} ${ColorConstants.red}${suffix}${ColorConstants.magic}`));
    });
  }

  protected highlightUniqueCharms(): void {
    [
      CharmConstants.anniId, 
      CharmConstants.torchId, 
      CharmConstants.gheedsId
    ].forEach(charm => {
      this.collection.upsert(new iLvlItemEntry(charm, iLvlDigits.Double, null, HighlightConstants.uniqPattern, Settings.bigTooltips.jewelry.uniqueCharmsSetting))
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
      new iLvlItemEntry(sunder.id, iLvlDigits.Double, null, HighlightConstants.uniqPattern, Settings.bigTooltips.jewelry.uniqueCharmsSetting)
    ));
  }

  private highlightSunderCharmsAlt(sunders: SunderCharm[]): void {
    sunders.forEach(sunder => this.collection.upsert(
      new iLvlItemEntry(sunder.id, iLvlDigits.Double, null, new DoubleHighlightPattern(HighlightConstants.pattern10, HighlightConstants.padding5, sunder.color))
    ));
  }
}
