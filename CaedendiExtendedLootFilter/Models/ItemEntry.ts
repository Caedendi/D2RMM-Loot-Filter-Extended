import { Helper } from "../Helper";
import { iLvlFix } from "./iLvlFix";

/**
 * An entry for the Custom Filter List feature. [CSTM-CFL]
 */
export class ItemEntry {
  protected readonly key: string;
  protected name: string;

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }

  public generateDisplayName(): string {
    return this.name;
  }

  public static createArray(array: [string, string, iLvlFix?][]): ItemEntry[] {
    return array.map<ItemEntry>(x => {
      let indent = Helper.getiLvlIndent(x[2]);
      return new ItemEntry(x[0], `${indent}${x[1]}`);
    });
  }

  public getKey(): string {
    return this.key;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
