import { ItemCollection } from "../../../Models/ItemCollection";

export interface IItemWriter {
  applyFilters(): void;
  addBigTooltips(): void;
  writeCustomNames(): void;
}
