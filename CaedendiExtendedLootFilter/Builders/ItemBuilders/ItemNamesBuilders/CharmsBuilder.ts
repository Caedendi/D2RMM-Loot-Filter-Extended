import { ColorConstants } from "../../../Constants/Colors/ColorConstants";
import { CharmConstants } from "../../../Constants/Items/CharmConstants";
import { SettingsConstants } from "../../../Constants/SettingsConstants";
import { DoubleHighlightItemEntry } from "../../../Models/DoubleHighlightItemEntry";
import { iLvlFix } from "../../../Models/iLvlFix";
import { SunderCharm } from "../../../Models/SunderCharm";
import { ItemBuilderBase } from "./ItemBuilderBase";
import { IItemBuilder } from "../Interfaces/IItemBuilder";
import { ItemEntry } from "../../../Models/ItemEntry";

export class CharmsBuilder extends ItemBuilderBase implements IItemBuilder {
  constructor() {
    super();
  }

  public build(): void {
    switch (config.Charms as string) { // todo: validate setting as string
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
      this.collection.upsert(new DoubleHighlightItemEntry(charm, charm, iLvlFix.Double, CharmConstants.charmsUniquePrefix, CharmConstants.charmsUniqueSuffix));
    });
  }

  protected highlightSunderCharms(): void {
    if (config.IsSunderAltPattern)
      this.highlightSunderCharmsAlt(CharmConstants.sunderCharms);
    else 
      this.highlightSunderCharmsDefault(CharmConstants.sunderCharms);
  }

  private highlightSunderCharmsDefault(sunders: SunderCharm[]): void {
    sunders.forEach(sunder => this.collection.upsert(
      new DoubleHighlightItemEntry(sunder.getId(), sunder.getName(), iLvlFix.Double, CharmConstants.charmsUniquePrefix, CharmConstants.charmsUniqueSuffix)
    ));
  }

  private highlightSunderCharmsAlt(sunders: SunderCharm[]): void {
    sunders.forEach(sunder => this.collection.upsert(
      new DoubleHighlightItemEntry(sunder.getId(), sunder.getName(), iLvlFix.Double, sunder.getAltPatternPrefix(), sunder.getAltPatternSuffix())
    ));
  }
}
