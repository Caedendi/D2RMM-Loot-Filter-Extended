import { Settings } from "../../Settings/Settings";
import { StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";

export class QualityTag {
  protected _indicator: string;

  constructor(indicator: string) {
    this._indicator = indicator;
  }
  
  public apply(displayName: string): string {
    let tag = `${StatsAndModifiersSettings.openChar}${this._indicator}${StatsAndModifiersSettings.closeChar}`;

    return Settings.statsAndModifiers.itemQuality.placement === "prefix"
      ? `${tag} ${displayName}` 
      : `${displayName} ${tag}`;
  }
}
