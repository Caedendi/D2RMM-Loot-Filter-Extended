import { CharConstants } from "../Constants/CharConstants";
import { Helper } from "../Helper";
import { BigTooltipSetting, Settings } from "../Settings/Settings";
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

  // TODO: remove?
  private findEntry(key: string): ItemEntry {
    return this.entries.find(entry => entry.getKey() === key);
  }

  private findEntryByIndex(index: number): ItemEntry {
    return this.entries[index];
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
    if (index < 0) { 
      // push new entry without name but with big tooltip
      let newEntry = new ItemEntry(key, CharConstants.empty);
      newEntry.addBigTooltip(setting);
      this.entries.push(newEntry);
      return;
    }

    let entry = this.findEntryByIndex(index);
    if (entry.isHidden())
      return;

    entry.addBigTooltip(setting);
    // this.entries[index].addBigTooltip(setting);
  }
}
