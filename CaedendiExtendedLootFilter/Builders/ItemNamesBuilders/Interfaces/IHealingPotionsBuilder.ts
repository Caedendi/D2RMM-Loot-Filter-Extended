import { IItemBuilder } from "../../Interfaces/IItemBuilder";

export interface IHealingPotionsBuilder extends IItemBuilder {
  build(): void;
  hideHealingPotions(potionsCollection: { id: string, value: string }[]): void;
  highlightLv123Potions(potionsCollection: { id: string, value: string }[], clrHeal: string, clrMana: string, clrName: string, pattern: string, padding: string): void;
  highlightLv4Potions(potionsCollection, clrHeal: string, clrMana: string, clrName: string, pattern: string, padding: string): void;
  highlightLv5Potions(potionsCollection, clrHeal: string, clrMana: string, clrName: string, pattern: string, padding: string): void;
  highlightSmallRejuvs(potionsCollection, clrRej: string, clrName: string, pattern: string, padding: string): void;
  highlightFullRejuvs(potionsCollection, clrRej: string, clrName: string, pattern: string, padding: string): void;
}
