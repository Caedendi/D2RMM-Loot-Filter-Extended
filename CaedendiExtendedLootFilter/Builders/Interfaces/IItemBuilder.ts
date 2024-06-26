export interface IItemBuilder {
  build(): void;
  upsert(array:{id:string, value:string}[], id:string, value:string): void;
  initCollection(id: string): void;
  getCollectionById(id: string): {id: string, value: string}[];
  mergeCollections(): {id: string, value: string}[];
  applyCustomNames(): void;
}
