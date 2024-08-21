import { ItemQualitySettings } from "../../Settings/Filter/ItemQualitySettings";
import { QualityTagBase } from "./QualityTagBase";

export class DoubleQualityTag extends QualityTagBase {
  public apply(displayName: string): string {
    // todo
    let tag = `${ItemQualitySettings.openChar}${this._indicator}${ItemQualitySettings.closeChar}`;

    return `${tag}${displayName}${tag}`;
  }
}
