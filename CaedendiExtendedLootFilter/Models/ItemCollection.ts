import { Helper } from "../Helper";
import { ItemEntry } from "./ItemEntry";

export class ItemCollection {
  protected id: string;
  protected entries: ItemEntry[] = [];

  constructor(id: string, entries?: ItemEntry[]) {
    this.id = id;

    if (Helper.isDefined(entries)) {
      this.entries = entries!;
    }
  }

  public getEntries(): ItemEntry[] {
    return this.entries;
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

  private findIndex(key: string): number {
    return this.entries.findIndex(entry => entry.getKey() === key);
  }
}
