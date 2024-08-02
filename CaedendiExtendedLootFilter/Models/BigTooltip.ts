import { CharConstants } from "../../Constants/CharConstants";
import { HighlightConstants } from "../../Constants/Items/HighlightConstants";
import { EBigTooltipSetting } from "../../Settings/EBigTooltipSetting";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { SingleHighlight } from "../Highlights/SingleHighlight";

export class BigTooltip {
  protected _setting: EBigTooltipSetting = EBigTooltipSetting.Disabled;
  protected _prefix: string = CharConstants.empty;
  protected _suffix: string = CharConstants.empty;
  protected _pumIndent: string = CharConstants.empty;
  protected _padding: string = HighlightConstants.bttPadding

  constructor(setting: EBigTooltipSetting) {
    this._setting = setting;
  }

  public apply(displayName: string, highlightPattern: IHighlight | null): string {
    this.setPickUpMessageIndent(highlightPattern);
    this.setAffixes();
    return `${this.getPrefix()}${displayName}${this.getSuffix()}`;
  }

  protected setPickUpMessageIndent(highlightPattern: IHighlight | null): void {
    if (highlightPattern != null && this.isSingleHighlightPattern(highlightPattern))
      this._pumIndent = highlightPattern.getIndent();
  }

  // TODO: test if this only works on SingleHighlights vs DoubleHighlights
  protected isSingleHighlightPattern(pattern: IHighlight): pattern is SingleHighlight {
    return (pattern as SingleHighlight).getIndent !== undefined;
  }

  protected setAffixes(): void {
    // // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    switch (+this._setting) { // TODO: find better way than using + to match enum with switch case
      case EBigTooltipSetting.Disabled:
        break;
      case EBigTooltipSetting.TwoLines:
        this._prefix = CharConstants.newLine;
        break;
      case EBigTooltipSetting.TwoLinesPickUp:
        this._prefix = `${CharConstants.newLine}${this.getPickUpMessage()}`; // TODO: add color after?
        break;
      case EBigTooltipSetting.ThreeLines:
        this._prefix = CharConstants.newLine;
        this._suffix = CharConstants.newLine;
        break;
      case EBigTooltipSetting.FourLinesPickUp:
        this._prefix = `${CharConstants.newLine}${this.getPickUpMessage()}${CharConstants.newLine}`;
        this._suffix = CharConstants.newLine;
        break;
      case EBigTooltipSetting.FiveLines:
        this._prefix = CharConstants.newLine2;
        this._suffix = CharConstants.newLine2;
        break;
      case EBigTooltipSetting.Custom: // [CSTM-BTT]
        this._prefix = CharConstants.newLine; // ADD YOUR CUSTOM BIG TOOLTIP STYLE HERE
        this._suffix = CharConstants.newLine; // ADD YOUR CUSTOM BIG TOOLTIP STYLE HERE
        break;
      default:
        throw new Error("Invalid BigTooltipSetting.");
    }
  }

  protected getPickUpMessage(): string {
    return `${this._pumIndent}${HighlightConstants.bttPickUpMsg}`;
  }

  protected getPrefix(): string {
    return `${this._prefix}${this._padding}`;
  }

  protected getSuffix(): string {
    return `${this._padding}${this._suffix}`;
  }

  public static hasPickUpMessage(setting?: EBigTooltipSetting): boolean {
    return setting == EBigTooltipSetting.TwoLinesPickUp 
        || setting == EBigTooltipSetting.FourLinesPickUp;
  }
}
