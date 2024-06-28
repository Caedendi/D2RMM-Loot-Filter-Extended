export interface IBaseBuilder {
  build(): void;
  upsert(array:{id:string, value:string}[], id:string, value:string): void;
  initCollection(id: string): void;
  getCollectionById(id: string): {id: string, value: string}[];
}
