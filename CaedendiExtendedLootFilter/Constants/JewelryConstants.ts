import { SunderCharm } from "../Models/SunderCharm";
import { CharConstants } from "./CharConstants";
import { ColorConstants } from "./ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export class JewelryConstants {
  static ringId = "rin";
  static amuletId = "amu";
  static jewelId = "jew";

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

  static iLvlJewelry = [
    this.ringId,
    this.amuletId,
    this.jewelId,
    this.charmSmallId,
    this.charmLargeId,
    this.charmGrandId,
  ];

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

  static indentPickUpMsg = (config.Gems === "all" || config.Gems === "flawless" || config.Gems === "perfect") ? CharConstants.space.repeat(2) : CharConstants.empty; // indent for the pick up message if gem highlighting is enabled.
}
