import { Helper } from "../Helper";
import { BigTooltipSetting } from "../Settings/BigTooltipsSettings";
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
    this.entries.forEach(entry => entry.addBigTooltip(setting)); // entry.setName(Helper.generateBigTooltip(setting, entry.getName(), indentPickUpMsg)));
  }

  public addBigTooltipToEntries(keys: string[], setting: BigTooltipSetting) {
    keys.forEach(key => this.addBigTooltipToEntry(key, setting));
  }
  
  public addBigTooltipToEntry(key: string, setting: BigTooltipSetting) {
    let index = this.findIndex(key);
    if (index < 0) 
      throw new Error(`Can't find item entry with key "${key}" in collection "${this.id}".`);

    this.entries[index].addBigTooltip(setting);

    // const i = collection.getEntries().findIndex(x => x.getKey() === key);
    // if (i < 0) 
    //   throw new Error(`Can't find item \"${key}\" in collection.`);
    // collection[i].value = this.generateBigTooltip(setting, collection[i].value);
  }
}
