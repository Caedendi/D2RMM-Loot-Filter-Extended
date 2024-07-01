import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { CharmConstants } from "../../Constants/Items/CharmConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { Helper } from "../../Helper";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class CharmsBuilder extends BaseBuilder implements IBuilder {
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
        this.collection.upsert(CharmConstants.charmSmallId, `Small Charm`);
        this.collection.upsert(CharmConstants.charmLargeId, `Large Charm`);
        this.collection.upsert(CharmConstants.charmGrandId, `Grand Charm`);
        this.collection.upsert(CharmConstants.anniId,       `Annihilus`);
        this.collection.upsert(CharmConstants.torchId,      `Hellfire Torch`);
        this.collection.upsert(CharmConstants.gheedsId,     `Gheed's Fortune`);
        this.collection.upsert(CharmConstants.sunderMagiId, `Black Cleft`);
        this.collection.upsert(CharmConstants.sunderPhysId, `Bone Break`);
        this.collection.upsert(CharmConstants.sunderColdId, `Cold Rupture`);
        this.collection.upsert(CharmConstants.sunderLiteId, `Crack of the Heavens`);
        this.collection.upsert(CharmConstants.sunderFireId, `Flame Rift`);
        this.collection.upsert(CharmConstants.sunderPoisId, `Rotting Fissure`);
        return;
    }
  }

  protected highlightUnidentifiedCharms(): void {
    let suffix = "Charm";
    this.collection.upsert(CharmConstants.charmSmallId, `Small ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.collection.upsert(CharmConstants.charmLargeId, `Large ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
    this.collection.upsert(CharmConstants.charmGrandId, `Grand ${ColorConstants.red}${suffix}${ColorConstants.blue}`);
  }

  protected highlightUniqueCharms(): void {
    [CharmConstants.anniId, CharmConstants.torchId, CharmConstants.gheedsId].forEach(charm => {
      this.collection.upsert(charm, `${SettingsConstants.iLvlIndentFixCharms}${CharmConstants.charmsUniquePrefix}${charm}${CharmConstants.charmsUniqueSuffix}`);
    });
  }

  protected highlightSunderCharms(): void {
    if (config.IsSunderAltPattern) {
      CharmConstants.sunderCharms.forEach(sunder => {
        let sunderAltPatternName = Helper.generateDoubleHighlight(sunder.getColor(), HighlightConstants.uniquePattern, HighlightConstants.uniquePadding, HighlightConstants.uniqueColorName, sunder.getName());
        this.collection.upsert(sunder.getId(), `${SettingsConstants.iLvlIndentFixCharms}${sunderAltPatternName}`);
      });
    }
    else {
      CharmConstants.sunderCharms.forEach(sunder => {
        let sunderName = `${SettingsConstants.iLvlIndentFixCharms}${CharmConstants.charmsUniquePrefix}${sunder.getName()}${CharmConstants.charmsUniqueSuffix}`;
        this.collection.upsert(sunder.getId(), sunderName);
      });
    }
  }

}
