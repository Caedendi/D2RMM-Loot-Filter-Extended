import { StatsAndModifiersSettings } from "../../Settings/StatsAndModifiersSettings";
import { QualityTagBase } from "./QualityTagBase";

export class DoubleQualityTag extends QualityTagBase {
  public apply(displayName: string): string {
    // todo
    let tag = `${StatsAndModifiersSettings.openChar}${this._indicator}${StatsAndModifiersSettings.closeChar}`;

    return `${tag}${displayName}${tag}`;
  }
}
