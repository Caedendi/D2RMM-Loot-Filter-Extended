import { CharConstants } from "../Constants/CharConstants";
import { HighlightConstants } from "../Constants/Items/HighlightConstants";
import { BigTooltipSetting, Settings } from "../Settings/Settings";
import { iLvlFix, StatsAndModifiersSettings } from "../Settings/StatsAndModifiersSettings";

export class ItemEntry {
  protected readonly key: string;
  protected name: string;
  protected isVisible: boolean = true;
  protected bigTooltipSetting: BigTooltipSetting = BigTooltipSetting.Disabled;
  protected bigTooltipPrefix:  string = CharConstants.empty;
  protected bigTooltipSuffix:  string = CharConstants.empty;
  protected bigTooltipPadding: string = HighlightConstants.bttPadding

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }

  public static createHidden(key: string): ItemEntry {
    let entry = new ItemEntry(key, CharConstants.empty);
    entry.setIsVisible(false);

    return entry;
  }

  public static createArray(array: [string, string, iLvlFix?][]): ItemEntry[] {
    return array.map<ItemEntry>(x => {
      let indent = StatsAndModifiersSettings.getiLvlIndent(x[2]);
      return new ItemEntry(x[0], `${indent}${x[1]}`);
    });
  }

  public generateDisplayName(): string {
    if (!this.isVisible)
      return Settings.filter.settings.hidden;

    if (!this.hasBigTooltip())
      return this.name;

    // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
    return `${this.bigTooltipSuffix}${this.bigTooltipPadding}${this.name}${this.bigTooltipPadding}${this.bigTooltipPrefix}`;
  }

  // new lines work upside-down: adding \n will add a new line on top of the current one instead of below like you would expect
  public addBigTooltip(setting: BigTooltipSetting): void {
    switch (+setting) { // TODO: find better way than using + to match enum with switch case
      case BigTooltipSetting.Disabled:
        break;
      case BigTooltipSetting.TwoLines:
        this.bigTooltipPrefix = `${CharConstants.newLine}`;
        break;
      case BigTooltipSetting.TwoLinesPickUp:
        this.bigTooltipPrefix = this.createTwoLinesPickUpBigTooltipPrefix();
        // prefix = `${CharConstants.newLine}${pickUpIndent ?? CharConstants.empty}${HighlightConstants.bttPickUpMsg}`; // TODO: remove
        break;
      case BigTooltipSetting.ThreeLines:
        this.bigTooltipPrefix = `${CharConstants.newLine}`;
        this.bigTooltipSuffix = `${CharConstants.newLine}`;
        break;
      case BigTooltipSetting.FourLinesPickUp:
        this.bigTooltipPrefix = this.createFourLinesPickUpBigTooltipPrefix();
        // prefix = `${CharConstants.newLine}${pickUpIndent ?? CharConstants.empty}${HighlightConstants.bttPickUpMsg}${CharConstants.newLine}`;
        this.bigTooltipSuffix = `${CharConstants.newLine}`;
        break;
      case BigTooltipSetting.FiveLines:
        this.bigTooltipPrefix = `${CharConstants.newLine}${CharConstants.newLine}`;
        this.bigTooltipSuffix = `${CharConstants.newLine}${CharConstants.newLine}`;
        break;
      case BigTooltipSetting.Custom: // [CSTM-BTT]
        this.bigTooltipPrefix = `${CharConstants.newLine}`; // ADD YOUR CUSTOM BIG TOOLTIP HERE
        this.bigTooltipSuffix = `${CharConstants.newLine}`; // ADD YOUR CUSTOM BIG TOOLTIP HERE
        break;
      default:
        throw new Error("Invalid Big Tooltip setting in ItemEntry.addBigTooltip().");
    }
  }

  protected createTwoLinesPickUpBigTooltipPrefix(): string {
    return `${CharConstants.newLine}${HighlightConstants.bttPickUpMsg}`;
  }

  protected createFourLinesPickUpBigTooltipPrefix(): string {
    return `${CharConstants.newLine}${HighlightConstants.bttPickUpMsg}${CharConstants.newLine}`;
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

  // TODO: remove?
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
