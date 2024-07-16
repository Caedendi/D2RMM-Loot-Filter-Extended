import { Helper } from "../Helper";
import { BigTooltipSetting } from "../Settings/Settings";
import { ItemEntry } from "./ItemEntry";

export class ItemCollection {
  protected entries: ItemEntry[] = [];

  constructor(entries?: ItemEntry[]) {
    if (Helper.isDefined(entries)) {
      this.entries = entries!;
    }
  }

  public getEntries(): ItemEntry[] {
    return this.entries;
  }

  public getKeys(): string[] {
    return this.entries.map(entry => entry.getKey());
  }

  public getDisplayNameForKey(key: string): string {
    return this.entries.find(entry => entry.getKey() === key)?.generateDisplayName() ?? "CELF_ERROR"
  }

  public upsert(entry: ItemEntry): void {
    const i = this.findIndex(entry.getKey());
    if (i > -1) 
      this.entries[i] = entry;
    else 
      this.entries.push(entry);
  }

  public upsertMultiple(array: ItemEntry[]): void {
    array.forEach(entry => {
      this.upsert(entry);
    });
  }

  public upsertHidden(key: string): void {
    const i = this.findIndex(key);
    if (i > -1) 
      this.entries[i].setIsVisible(false);
    else 
      this.entries.push(ItemEntry.createHidden(key));
  }

  public upsertMultipleHidden(keys: string[]): void {
    keys.forEach(key => {
      this.upsertHidden(key);
    });
  }

  public upsertCollection(collection: ItemCollection): void {
    this.upsertMultiple(collection.entries);
  }

  private findIndex(key: string): number {
    return this.entries.findIndex(entry => entry.getKey() === key);
  }

  public addBigTooltipToAllEntries(setting: BigTooltipSetting) {
    this.entries.forEach(entry => entry.addBigTooltip(setting));
  }

  public addBigTooltipToEntries(keys: string[], setting: BigTooltipSetting) {
    keys.forEach(key => this.addBigTooltipToEntry(key, setting));
  }
  
  public addBigTooltipToEntry(key: string, setting: BigTooltipSetting) {
    let index = this.findIndex(key);
    if (index < 0) 
      throw new Error(`Can't find item entry with key "${key}" in ItemCollection.`);

    this.entries[index].addBigTooltip(setting);
  }
}
