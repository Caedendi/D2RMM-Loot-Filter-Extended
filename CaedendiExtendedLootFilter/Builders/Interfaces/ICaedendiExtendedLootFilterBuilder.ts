import { IWriter } from "../../Writers/Interfaces/IWriter"

export interface ICaedendiExtendedLootFilter {
  itemNamesWriter: IWriter;

  build(): void;
}
