import { Settings } from "./Settings";

export abstract class BigTooltipsSettings {
  
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
