import { IItemNamesBuilder } from "../ItemNamesBuilders/Interfaces/IItemNamesBuilder";

export interface ICaedendiExtendedLootFilterBuilder {
  itemNamesBuilder: IItemNamesBuilder;

  build(): void;
}
