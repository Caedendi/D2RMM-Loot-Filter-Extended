import { IItemNamesBuilder } from "../../Writers/Interfaces/IItemNamesBuilder";

export interface ICaedendiExtendedLootFilterBuilder {
  itemNamesBuilder: IItemNamesBuilder;

  build(): void;
}
