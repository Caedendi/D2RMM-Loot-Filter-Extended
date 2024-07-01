import { CharConstants } from "../Constants/CharConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { iLvlFix } from "./iLvlFix";

/**
 * An entry for the Custom Filter List feature. [CSTM-CFL]
 */
export class CustomFilterListEntry {
  protected readonly key: string;
  protected readonly name: string;
  protected readonly iLvlDigits: iLvlFix;

  constructor(key: string, name: string, iLvlDigits?: iLvlFix) {
    this.key = key;
    this.name = name;
    this.iLvlDigits = iLvlDigits ?? iLvlFix.None;
  }

  public getKey(): string {
    return this.key;
  }

  public getName(): string {
    return `${this.getIndent()}${this.name}`;
  }

  protected getIndent(): string {
    if (!SettingsConstants.shouldFixIlvlIndent || this.iLvlDigits === iLvlFix.None) {
      return CharConstants.empty;
    }

    if (this.iLvlDigits == iLvlFix.SingleDigit) {
      return SettingsConstants.iLvlIndentFixSingle
    }
    if (this.iLvlDigits == iLvlFix.DoubleDigits) {
      return SettingsConstants.iLvlIndentFixDouble;
    }

    throw new Error("CustomFilterListEntry.getIndent() received undefined iLvlDigits value.");
  }
}
