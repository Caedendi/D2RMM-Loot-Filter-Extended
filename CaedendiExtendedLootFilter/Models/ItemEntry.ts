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
  protected bigTooltipPrefix: string = CharConstants.empty;
  protected bigTooltipSuffix: string = CharConstants.empty;

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
    return `${this.bigTooltipSuffix}${HighlightConstants.bttPadding}${this.name}${HighlightConstants.bttPadding}${this.bigTooltipPrefix}`;
  }

  // protected addBigTooltip(setting: BigTooltipSetting, pickUpIndent?: string): { prefix: string, suffix: string } {
  public addBigTooltip(setting: BigTooltipSetting, pickUpIndent?: string): void {
    if (setting == BigTooltipSetting.Disabled)
      return;

    this.bigTooltipSetting = setting;

    let prefix = CharConstants.empty;
    let suffix = CharConstants.empty;

    // switch (this.bigTooltipSetting) {
    switch (setting) {
      // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
      case BigTooltipSetting.TwoLines:
        prefix = `${this.newLine}`;
        break;
      case BigTooltipSetting.TwoLinesPickUp:
        prefix = `${this.newLine}${pickUpIndent ?? CharConstants.empty}${HighlightConstants.bttPickUpMsg}`;
        break;
      case BigTooltipSetting.ThreeLines:
        prefix = `${this.newLine}`;
        suffix = `${this.newLine}`;
        break;
      case BigTooltipSetting.FourLinesPickUp:
        prefix = `${this.newLine}${pickUpIndent ?? CharConstants.empty}${HighlightConstants.bttPickUpMsg}${this.newLine}`;
        suffix = `${this.newLine}`;
        break;
      case BigTooltipSetting.FiveLines:
        prefix = `${this.newLine}${this.newLine}`;
        suffix = `${this.newLine}${this.newLine}`;
        break;
      case BigTooltipSetting.Custom: // [CSTM-BTT]
        prefix = `${this.newLine}`; // ADD YOUR CUSTOM BIG TOOLTIP HERE
        suffix = `${this.newLine}`; // ADD YOUR CUSTOM BIG TOOLTIP HERE
        break;
      default:
        throw new Error("Invalid Big Tooltip setting in ItemEntry.addBigTooltip().");
    }

    this.bigTooltipPrefix = prefix;
    this.bigTooltipSuffix = suffix;
    // return { prefix, suffix };
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

  public getIsVisible(): boolean {
    return this.isVisible;
  }

  public setIsVisible(isVisible: boolean): void {
    this.isVisible = isVisible;
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
