export interface IBaseWriter {
  mergeCollections(): {id: string, value: string}[];
  applyCustomNames(): void;
}