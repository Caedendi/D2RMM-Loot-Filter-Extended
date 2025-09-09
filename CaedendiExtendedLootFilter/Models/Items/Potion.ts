import { EPotionType } from "./EPotionType";

export class Potion {
  /**
   * key
   */
  private readonly _key: string;
  public get key(): string {
    return this._key;
  }

  /**
   * name
   */
  private readonly _name: string;
  public get name(): string {
    return this._name;
  }

  /**
   * color
   */
  private readonly _type: EPotionType;
  public get type(): EPotionType {
    return this._type;
  }

  constructor(key: string, name: string, type: EPotionType) {
    this._key = key;
    this._name = name;
    this._type = type;
  }
}
