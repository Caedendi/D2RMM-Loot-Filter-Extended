export class ItemCollection {
  protected id: string;
  protected entries: {id: string, value: string}[] = [];

  constructor(id: string) {
    this.id = id;
  }

  public upsert(id: string, value: string): void {
    const i = this.entries.findIndex(x => x.id === id);
    if (i > -1) 
      this.entries[i] = { id: id, value: value };
    else 
      this.entries.push({ id: id, value: value });
  }
}