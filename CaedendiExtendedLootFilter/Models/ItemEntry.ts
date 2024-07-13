import { CharConstants } from "../Constants/CharConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Helper } from "../Helper";
import { BigTooltipSetting } from "./BigTooltipSetting";
import { iLvlFix } from "./iLvlFix";

export class ItemEntry {
  protected readonly key: string;
  protected name: string;
  protected isVisible: boolean = true;
  protected bigTooltipSetting: BigTooltipSetting = BigTooltipSetting.Disabled;
  protected bigTooltipPrefix:  string = CharConstants.empty;
  protected bigTooltipSuffix:  string = CharConstants.empty;
  protected bigTooltipPadding: string = HighlightConstants.bttPadding

  protected readonly newLine: string = CharConstants.newLine;

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }

  // TODO: test
  public static createHidden(key: string): ItemEntry {
    let entry = new ItemEntry(key, CharConstants.empty);
    entry.setIsVisible(false);

    return entry;
  }

  public static createArray(array: [string, string, iLvlFix?][]): ItemEntry[] {
    return array.map<ItemEntry>(x => {
      let indent = Helper.getiLvlIndent(x[2]);
      return new ItemEntry(x[0], `${indent}${x[1]}`);
    });
  }

  public generateDisplayName(): string {
    if (!this.isVisible)
      return SettingsConstants.hidden;

    if (!this.hasBigTooltip)
      return this.name;

    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    return `${this.bigTooltipSuffix}${this.bigTooltipPadding}${this.name}${this.bigTooltipPadding}${this.bigTooltipPrefix}`;
  }

  public addBigTooltip(setting: BigTooltipSetting): void {
    this.bigTooltipSetting = setting;

     switch (setting) {
      // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
      case BigTooltipSetting.Disabled:
        break;
      case BigTooltipSetting.TwoLines:
        this.bigTooltipPrefix = `${this.newLine}`;
        break;
      case BigTooltipSetting.TwoLinesPickUp:
        this.bigTooltipPrefix = this.createTwosLinePickUpBigTooltipPrefix();
        // prefix = `${this.newLine}${pickUpIndent ?? CharConstants.empty}${HighlightConstants.bttPickUpMsg}`;
        break;
      case BigTooltipSetting.ThreeLines:
        this.bigTooltipPrefix = `${this.newLine}`;
        this.bigTooltipSuffix = `${this.newLine}`;
        break;
      case BigTooltipSetting.FourLinesPickUp:
        this.bigTooltipPrefix = this.createFourLinesPickUpBigTooltipPrefix();
        // prefix = `${this.newLine}${pickUpIndent ?? CharConstants.empty}${HighlightConstants.bttPickUpMsg}${this.newLine}`;
        this.bigTooltipSuffix = `${this.newLine}`;
        break;
      case BigTooltipSetting.FiveLines:
        this.bigTooltipPrefix = `${this.newLine}${this.newLine}`;
        this.bigTooltipSuffix = `${this.newLine}${this.newLine}`;
        break;
      case BigTooltipSetting.Custom: // [CSTM-BTT]
        this.bigTooltipPrefix = `${this.newLine}`; // ADD YOUR CUSTOM BIG TOOLTIP HERE
        this.bigTooltipSuffix = `${this.newLine}`; // ADD YOUR CUSTOM BIG TOOLTIP HERE
        break;
      default:
        throw new Error("Invalid Big Tooltip setting in ItemEntry.addBigTooltip().");
    }
  }

  protected createTwosLinePickUpBigTooltipPrefix(): string {
    return `${this.newLine}${HighlightConstants.bttPickUpMsg}`;
  }

  protected createFourLinesPickUpBigTooltipPrefix(): string {
    return `${this.newLine}${HighlightConstants.bttPickUpMsg}${this.newLine}`;
  }

  public getKey(): string {
    return this.key;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setIsVisible(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  public isHidden(): boolean {
    return !this.isVisible;
  }

  public getBigTooltipSetting(): BigTooltipSetting {
    return this.bigTooltipSetting;
  }

  // TODO: remove?
  public setBigTooltipSetting(setting: BigTooltipSetting): void {
    this.bigTooltipSetting = setting;
  }

  public hasBigTooltip(): boolean {
    return this.bigTooltipSetting != BigTooltipSetting.Disabled;
  }
}
