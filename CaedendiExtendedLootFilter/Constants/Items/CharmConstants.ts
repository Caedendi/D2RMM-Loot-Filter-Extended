import { SunderCharm } from "../../Models/SunderCharm";
import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export abstract class CharmConstants {
  static charmSmallId = "cm1";
  static charmLargeId = "cm2";
  static charmGrandId = "cm3";

  static anniId   = "Annihilus";
  static torchId  = "Hellfire Torch";
  static gheedsId = "Gheed's Fortune";

  static sunderMagiId = "Black Cleft";
  static sunderPhysId = "Bone Break";
  static sunderColdId = "Cold Rupture";
  static sunderLiteId = "Crack of the Heavens";
  static sunderFireId = "Flame Rift";
  static sunderPoisId = "Rotting Fissure";

  static anniName   = this.anniId;
  static torchName  = this.torchId;
  static gheedsName = this.gheedsId;

  static sunderMagiName = this.sunderMagiId;
  static sunderPhysName = this.sunderPhysId;
  static sunderColdName = this.sunderColdId;
  static sunderLiteName = this.sunderLiteId;
  static sunderFireName = this.sunderFireId;
  static sunderPoisName = this.sunderPoisId;

  static charmIds = [
    this.charmSmallId,
    this.charmLargeId,
    this.charmGrandId,
  ];

  static uniqueLodCharmIds = [
    this.anniId,
    this.torchId,
    this.gheedsId,
  ];

  static sunderCharms = [
    new SunderCharm(this.sunderMagiId, this.sunderMagiName, ColorConstants.gray     ),
    new SunderCharm(this.sunderPhysId, this.sunderPhysName, ColorConstants.white    ),
    new SunderCharm(this.sunderColdId, this.sunderColdName, ColorConstants.lightBlue),
    new SunderCharm(this.sunderLiteId, this.sunderLiteName, ColorConstants.yellow   ),
    new SunderCharm(this.sunderFireId, this.sunderFireName, ColorConstants.red      ),
    new SunderCharm(this.sunderPoisId, this.sunderPoisName, ColorConstants.green    ),
  ];

  static charmsUniquePrefix = HighlightConstants.uniquePrefix;
  static charmsUniqueSuffix = HighlightConstants.uniqueSuffix;
}
