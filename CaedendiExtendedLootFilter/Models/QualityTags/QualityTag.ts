import { ItemQualitySettings } from "../../Settings/Filter/ItemQualitySettings";
import { QualityTagBase } from "./QualityTagBase";

export class SingleQualityTag extends QualityTagBase {
  public apply(displayName: string): string {
    let tag = `${ItemQualitySettings.openChar}${this._indicator}${ItemQualitySettings.closeChar}`;

    return ItemQualitySettings.placement === "prefix"
      ? `${tag} ${displayName}` 
      : `${displayName} ${tag}`;
  }
}
