import { CharConstants } from "./CharConstants";
import { FileConstants } from "./FileConstants";

export class AbstractItemBuilder {
  collections = [];
  target = CharConstants.empty;

  constructor(target) {
    if (new.target === AbstractItemBuilder) {
      throw new TypeError("Cannot construct abstract AbstractItemBuilder instances directly.");
    }

    this.target = target;
  }

  upsert(array, id, value) {
    const i = array.findIndex(x => x.id === id);
    if (i > -1) array[i] = { id: id, value: value };
    else array.push({ id: id, value: value });
  }

  initCollection(id) {
    this.upsert(this.collections, id, []);
  }

  getCollectionById(id) {
    const i = this.collections.findIndex(x => x.id === id);
    if (i < 0)
      throw new Error(`Can't find subcollection \"${id}\" in this.collections.`);
    return this.collections[i].value;
  }

  mergeCollections() {
    return this.collections.flatMap(sub => sub.value);
  }

  /**
   * Update all entries in this.target matching the IDs in this.collections to their new values.
   */
  applyCustomNames() {
    let customNames = this.mergeCollections();
    if (customNames.length == 0) {
      throw new Error(`Could not find any subcollections.`);
    }

    let file = D2RMM.readJson(this.target); // copy existing file
    file.forEach((item) => {
      var idList = customNames.map(x => x.id);
      if (idList.includes(item[FileConstants.key])) { // todo: was item.Key, now replaced
        for (const key in item) {
          if (key !== FileConstants.id && key !== FileConstants.key) {
            item[key] = customNames.find(x => x.id == [item.Key]).value;
          }
        }
      }
    });
    D2RMM.writeJson(this.target, file); // overwrite existing file with new file
  }
}
