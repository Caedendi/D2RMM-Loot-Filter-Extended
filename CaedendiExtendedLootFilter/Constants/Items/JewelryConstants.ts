import { CharmConstants } from "./CharmConstants";

export abstract class JewelryConstants {
  public static ringId = "rin";
  public static amuletId = "amu";
  public static jewelId = "jew";

  public static iLvlJewelry: string[] = [
    JewelryConstants.ringId,
    JewelryConstants.amuletId,
    JewelryConstants.jewelId,
    CharmConstants.charmSmallId,
    CharmConstants.charmLargeId,
    CharmConstants.charmGrandId,
  ];
}
