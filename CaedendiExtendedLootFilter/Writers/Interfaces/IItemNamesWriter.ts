import { IBaseWriter } from "./IBaseWriter";

export interface ItemNamesWriter extends IBaseWriter {
  build(): void;
}
