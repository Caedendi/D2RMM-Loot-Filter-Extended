import { Settings } from "./Settings";

export abstract class BigTooltipsSettings {
  // TODO: fix ilvl for items when BTT is enabled
  public static isIlvlEnabled: boolean = !Settings.bigTooltips.isEnabled || !(Settings.statsAndModifiers.itemLevelSetting === "btt" || Settings.statsAndModifiers.itemLevelSetting === "fix-btt");
}

export enum BigTooltipSetting {
  Disabled = 0,
  TwoLines = 1,
  TwoLinesPickUp = 2,
  ThreeLines = 3,
  FourLinesPickUp = 4,
  FiveLines = 5,
  Custom = 6,
}
