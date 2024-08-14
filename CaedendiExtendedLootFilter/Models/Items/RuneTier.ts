import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { D2Color } from "../Colors/D2Color";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { Rune } from "./Rune";

export class RuneTier {
  /**
   * tier number
   */
  private readonly _number: number;
  public get number(): number {
    return this._number;
  }

  /**
   * runes
   */
  private readonly _runes: Rune[];
  public get runes(): Rune[] {
    return this._runes;
  }

  /**
   * isVisible
   */
  private readonly _isVisible: boolean;
  public get isVisible(): boolean {
    return this._isVisible;
  }

  /**
   * name color
   */
  private readonly _nameColor: D2Color;
  public get nameColor(): D2Color {
    return this._nameColor;
  }

  /**
   * number color
   */
  private readonly _numberColor: D2Color;
  public get numberColor(): D2Color {
    return this._numberColor;
  }

  /**
   * pattern
   */
  private readonly _highlight: IHighlight | null;
  public get highlight(): IHighlight | null {
    return this._highlight;
  }

  /**
   * big tooltip setting
   */
  private readonly _bigTooltipSetting: EBigTooltipSetting;
  public get bigTooltipSetting(): EBigTooltipSetting {
    return this._bigTooltipSetting;
  }

  /**
   * has light pillar
   */
  private readonly _hasLightPillar: boolean;
  public get hasLightPillar(): boolean {
    return this._hasLightPillar;
  }

  /**
   * drop sound
   */
  private readonly _dropSound: string;
  public get dropSound(): string {
    return this._dropSound;
  }

  /**
   * isHidden
   */
  private readonly _isHidden: boolean = !this.isVisible;
  public get isHidden(): boolean {
    return this._isHidden;
  }

  constructor(
    tier: number,
    runes: Rune[],
    isVisible: boolean,
    nameColor: D2Color,
    numberColor: D2Color,
    highlight: IHighlight | null,
    bigTooltipSetting: EBigTooltipSetting,
    hasLightPillar: boolean,
    dropSound: string
  ) {
    this._number = tier;
    this._runes = runes;
    this._isVisible = isVisible;
    this._nameColor = nameColor,
    this._numberColor = numberColor;
    this._highlight = highlight;
    this._bigTooltipSetting = bigTooltipSetting;
    this._hasLightPillar = hasLightPillar;
    this._dropSound = dropSound;
  }
}
