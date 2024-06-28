import { D2Color } from "../../../Models/D2Color";
import { ItemCollection } from "../../../Models/ItemCollection";
import { IBaseBuilder } from "./IBaseBuilder";

export interface IHealingPotionsBuilder extends IBaseBuilder {
  build(): void;
  hideHealingPotions(   potionsCollection: ItemCollection): void;
  highlightLv123Potions(potionsCollection: ItemCollection, clrHeal: D2Color, clrMana: D2Color, clrName: D2Color, pattern: string, padding: string): void;
  highlightLv4Potions(  potionsCollection: ItemCollection, clrHeal: D2Color, clrMana: D2Color, clrName: D2Color, pattern: string, padding: string): void;
  highlightLv5Potions(  potionsCollection: ItemCollection, clrHeal: D2Color, clrMana: D2Color, clrName: D2Color, pattern: string, padding: string): void;
  highlightSmallRejuvs( potionsCollection: ItemCollection,  clrRej: D2Color, clrName: D2Color, pattern:  string, padding: string): void;
  highlightFullRejuvs(  potionsCollection: ItemCollection,  clrRej: D2Color, clrName: D2Color, pattern:  string, padding: string): void;
}
