import { GemConstants } from "../../Constants/Items/GemConstants";
import { JewelryConstants } from "../../Constants/Items/JewelryConstants";
import { D2Color } from "../Colors/D2Color";
import { EGem } from "./EGem";
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
  private readonly _type: EGem;
  public get type(): EGem {
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

  constructor(key: string, type: EGem, quality: EGemQuality) {
    this._key = key;
    this._quality = quality;
    this._type = type;
  }

  public static getColor(gemType: EGem): D2Color {
    return JewelryConstants.gemColors.find(gem => gem.type == gemType).color;
  }
}
