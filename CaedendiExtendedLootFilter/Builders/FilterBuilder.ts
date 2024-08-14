import { IItemWriter } from "../ItemWriters/Interfaces/IItemWriter";
import { ItemModifiersWriter } from "../ItemWriters/ItemModifiersWriter";
import { ItemNameAffixesWriter } from "../ItemWriters/ItemNameAffixesWriter";
import { ItemNamesWriter } from "../ItemWriters/ItemNamesWriter";
import { ItemRunesWriter } from "../ItemWriters/ItemRunesWriter";
import { UiWriter } from "../ItemWriters/UiWriter";
import { IBuilder } from "./Interfaces/IBuilder";

export class FilterBuilder implements IBuilder {
  protected itemWriters: IItemWriter[] = [];

  constructor() {
    // this.itemWriters.push(new ItemNamesWriter());       // Most items
    // this.itemWriters.push(new ItemNameAffixesWriter()); // Gold, Superior/Inferior affixes, Gems (exceptions)
    this.itemWriters.push(new ItemRunesWriter());       // Runes
    // this.itemWriters.push(new UiWriter());              // Quest items (exceptions)
    // this.itemWriters.push(new ItemModifiersWriter());   // Quest items (exceptions)
  }

  public build(): void {
    this.runItemWriters();
  }

  /**
   * Runes all writers, merges their collections into one and writes these entries to the target file.
   */
  protected runItemWriters(): void {
    this.itemWriters.forEach(writer => writer.applyFilters());
    this.itemWriters.forEach(writer => writer.writeCustomNames());
  }
}
