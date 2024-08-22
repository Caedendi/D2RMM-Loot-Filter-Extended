import { CharConstants } from "../Constants/CharConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { EBigTooltipSetting } from "../Settings/Enums/EBigTooltipSetting";
import { IHighlight } from "./Highlights/Interfaces/IHighlight";
import { SingleHighlight } from "./Highlights/SingleHighlight";

export class BigTooltip {
  protected _setting: EBigTooltipSetting = EBigTooltipSetting.DISABLED;
  protected _prefix: string = CharConstants.empty;
  protected _suffix: string = CharConstants.empty;
  protected _pumIndent: string = CharConstants.empty;
  protected _padding: string = HighlightConstants.bttPadding

  private readonly _pickUpMessage: string = `${this._pumIndent}${HighlightConstants.bttPickUpMsg}`;
  protected get pickUpMessage(): string {
    return this._pickUpMessage;
  }

  constructor(setting: EBigTooltipSetting) {
    this._setting = setting;
  }

  public apply(displayName: string, highlightPattern: IHighlight | null): string {
    this.setPickUpMessageIndent(highlightPattern);
    this.setAffixes();
    
    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    return `${this._suffix}${this._padding}${displayName}${this._padding}${this._prefix}`;
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
    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    switch (+this._setting) { // TODO: find better way than using + to match enum with switch case
      case EBigTooltipSetting.DISABLED:
        break;
      case EBigTooltipSetting.TWO_LINES:
        this._prefix = CharConstants.newLine;
        break;
      case EBigTooltipSetting.TWO_LINES_PICK_UP:
        this._prefix = `${CharConstants.newLine}${this.pickUpMessage}`; // TODO: add color after?
        break;
      case EBigTooltipSetting.THREE_LINES:
        this._prefix = CharConstants.newLine;
        this._suffix = CharConstants.newLine;
        break;
      case EBigTooltipSetting.FOUR_LINES_PICK_UP:
        this._prefix = `${CharConstants.newLine}${this.pickUpMessage}${CharConstants.newLine}`;
        this._suffix = CharConstants.newLine;
        break;
      case EBigTooltipSetting.FIVE_LINES:
        this._prefix = CharConstants.newLine2;
        this._suffix = CharConstants.newLine2;
        break;
      case EBigTooltipSetting.CUSTOM: // [CSTM-BTT]
        this._prefix = CharConstants.empty; // ADD YOUR CUSTOM BIG TOOLTIP STYLE HERE
        this._suffix = CharConstants.empty; // ADD YOUR CUSTOM BIG TOOLTIP STYLE HERE
        break;
      default:
        throw new Error("Invalid BigTooltipSetting.");
    }
  }

  public static hasPickUpMessage(setting?: EBigTooltipSetting): boolean {
    return setting == EBigTooltipSetting.TWO_LINES_PICK_UP 
        || setting == EBigTooltipSetting.FOUR_LINES_PICK_UP;
  }
}
