import { D2Color } from "../Colors/D2Color";

export class SunderCharm {
  /**
   * ID
   */
  private readonly _id: string;
  public get id(): string {
    return this._id;
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
  private readonly _color: D2Color;
  public get color(): D2Color {
    return this._color;
  }

  constructor(id: string, name: string, color: D2Color) {
    this._id = id;
    this._name = name;
    this._color = color;
  }
}
