import { JewelryConstants } from "../../Constants/Items/JewelryConstants";
import { D2Color } from "../Colors/D2Color";
import { EGemType } from "./EGemType";
import { EGemQuality } from "./EGemQuality";

export class Gem {
  /**
   * key
   */
  private readonly _key: string;
  public get key(): string {
    return this._key;
  }

  /**
   * type
   */
  private readonly _type: EGemType;
  public get type(): EGemType {
    return this._type;
  }

  /**
   * quality
   */
  private readonly _quality: EGemQuality;
  public get quality(): EGemQuality {
    return this._quality;
  }

  /**
   * color
   */
  public get color(): D2Color {
    return Gem.getColor(this._type);
  }

  constructor(key: string, type: EGemType, quality: EGemQuality) {
    this._key = key;
    this._type = type;
    this._quality = quality;
  }

  public static getColor(gemType: EGemType): D2Color {
    const gemColor = JewelryConstants.gemColors.find(gem => gem.type == gemType)?.color;
    if (gemColor == undefined) {
      throw new Error(`Could not find gem color by gem type ${gemType}.`);
    }

    return gemColor;
  }
}
