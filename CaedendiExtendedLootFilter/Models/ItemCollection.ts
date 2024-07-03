import { Helper } from "../Helper";
import { ItemEntry } from "./ItemEntry";
import { iLvlFix } from "./iLvlFix";

export class ItemCollection {
  protected id: string;
  protected entries: ItemEntry[] = [];

  constructor(id: string, entries?: ItemEntry[]) {
    this.id = id;

    if (Helper.isDefined(entries)) {
      this.entries = entries!;
    }
  }

  public static fromArray(id: string, array: [string, string, iLvlFix?][]): ItemCollection {
    return new ItemCollection(id, (array.map<ItemEntry>(x => new ItemEntry(x[0], x[1], x[2]))));
  }

  public upsert(key: string, value: string): void {
    const i = this.entries.findIndex(x => x.getKey() === key);
    if (i > -1) 
      this.entries[i] = new ItemEntry(key, value);
    else 
      this.entries.push(new ItemEntry(key, value));
  }

  public upsertArray(array: ItemEntry[]): void {
    array.forEach(entry => {
      this.upsert(entry.getKey(), entry.getName());
    });
  }

  public concat(collection: ItemCollection): ItemCollection {
    let merged = { ...this };
    merged.entries = this.entries.concat(collection.entries);

    return merged;
  }

  public getEntries(): ItemEntry[] {
    return this.entries;
  }
}
