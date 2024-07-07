import { SettingsConstants } from "../Constants/SettingsConstants";
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

  public upsert(key: string, value: string): void {
    const i = this.entries.findIndex(x => x.getKey() === key);
    if (i > -1) 
      this.entries[i] = new ItemEntry(key, value);
    else 
      this.entries.push(new ItemEntry(key, value));
  }

  public upsertEntry(entry: ItemEntry): void {
    this.upsert(entry.getKey(), entry.generateDisplayName());
  }

  public upsertHidden(key: string): void {
    this.upsert(key, SettingsConstants.hidden);
  }

  public upsertArray(array: ItemEntry[]): void {
    array.forEach(entry => {
      this.upsert(entry.getKey(), entry.generateDisplayName());
    });
  }

  public upsertArrayHidden(keys: string[]): void {
    keys.forEach(key => {
      this.upsert(key, SettingsConstants.hidden);
    });
  }

  public upsertCollection(collection: ItemCollection): void {
    this.upsertArray(collection.getEntries());
  }

  public getEntries(): ItemEntry[] {
    return this.entries;
  }
}
