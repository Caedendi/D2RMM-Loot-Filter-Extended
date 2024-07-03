import { CharConstants } from "../Constants/CharConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { iLvlFix } from "./iLvlFix";

/**
 * An entry for the Custom Filter List feature. [CSTM-CFL]
 */
export class ItemEntry {
  protected readonly key: string;
  protected readonly name: string;
  protected readonly ilvlFix: iLvlFix;

  constructor(key: string, name: string, ilvlFix?: iLvlFix) {
    this.key = key;
    this.name = name;
    this.ilvlFix = ilvlFix ?? iLvlFix.None;
  }

  public getKey(): string {
    return this.key;
  }

  public getName(shouldFixIndent?: boolean): string {
    return `${Helper.getiLvlIndent(this.ilvlFix)}${this.name}`;
  }
}
