import { IItemWriter } from "../ItemWriters/Interfaces/IItemWriter";
import { ItemModifiersWriter } from "../ItemWriters/ItemModifiersWriter";
import { ItemNameAffixesWriter } from "../ItemWriters/ItemNameAffixesWriter";
import { ItemNamesWriter } from "../ItemWriters/ItemNamesWriter";
import { ItemRunesWriter } from "../ItemWriters/ItemRunesWriter";
import { UiWriter } from "../ItemWriters/UiWriter";
import { Settings } from "../Settings/Settings";
import { IBuilder } from "./Interfaces/IBuilder";

export class FilterBuilder implements IBuilder {
  protected itemWriters: IItemWriter[] = [];

  constructor() {
    this.itemWriters.push(new ItemNamesWriter());       // Most items
    this.itemWriters.push(new ItemNameAffixesWriter()); // Gold, Superior/Inferior affixes, Gems (exceptions)
    this.itemWriters.push(new ItemRunesWriter());       // Runes
    this.itemWriters.push(new UiWriter());              // Quest items (exceptions)
    this.itemWriters.push(new ItemModifiersWriter());   // Quest items (exceptions)
  }

  public build(): void {
    this.runItemWriters();
  }

  /**
   * Builds all builders, merges their collections into one and writes these entries to the target file.
   */
  protected runItemWriters(): void {
    // TODO: does this conflict?
    // TODO: think of entries that keep their vanilla translated names
    // TODO: global settings here conflict with Item Quality and Short Sup-/Inferior Prefixes
    if (Settings.filter.isEnabled)
      this.itemWriters.forEach(writer => writer.applyFilters());
    if (Settings.bigTooltips.isEnabled)
      this.itemWriters.forEach(writer => writer.addBigTooltips());
    this.itemWriters.forEach(writer => writer.writeCustomNames());
  }
}
