import { Settings } from "../../Settings/Settings";
import { StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { QualityTagBase } from "./QualityTagBase";

export class SingleQualityTag extends QualityTagBase {
  public apply(displayName: string): string {
    let tag = `${StatsAndModifiersSettings.openChar}${this._indicator}${StatsAndModifiersSettings.closeChar}`;

    return Settings.filter.statsAndModifiers.itemQuality.placement === "prefix"
      ? `${tag} ${displayName}` 
      : `${displayName} ${tag}`;
  }
}
