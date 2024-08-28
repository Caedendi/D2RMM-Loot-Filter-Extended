import { CharConstants } from "../../Constants/CharConstants";
import { JewelryConstants } from "../../Constants/Items/JewelryConstants";
import { EBigTooltipSetting } from "../../Settings/Enums/EBigTooltipSetting";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { SingleHighlight } from "../Highlights/SingleHighlight";
import { EGemQuality } from "../Items/EGemQuality";
import { Gem } from "../Items/Gem";
import { ItemEntry } from "./ItemEntry";

export class GemEntry extends ItemEntry {
  /**
   * gem
   */
  private readonly _gem: Gem;
  public get gem(): Gem {
    return this._gem;
  }

  constructor(gem: Gem, newName: string | null, hasHighlight: boolean, bigTooltipSetting: EBigTooltipSetting) {
    let highlight = hasHighlight ? new SingleHighlight(JewelryConstants.gemHighlight, gem.color, JewelryConstants.gemPadding) : null;
    super(gem.key, newName, JewelryConstants.gemNameColor, highlight, bigTooltipSetting);
    this._gem = gem;
  }

  public static fromArray(gems: Gem[], hasHighlight: boolean, bigTooltipSetting: EBigTooltipSetting): ItemEntry[] {
    return gems.map<GemEntry>(gem => new GemEntry(gem, null, hasHighlight, bigTooltipSetting));
  }

  protected applyNewName(localizedName: string): string {
    if (this.newName != null && this.newName !== CharConstants.empty)
      return this.newName;

    if (this.gem.quality != EGemQuality.STANDARD)
      return this.removeAffix(localizedName);

    return localizedName;
  }

  // TODO: check for case-sensitivity
  protected removeAffix(localizedName: string): string {
    if (JewelrySettings.gems.isHighlightEnabled)
      return localizedName;

    JewelryConstants.translatedGemNames.some(affix => {
      // var searchMask = "is";
      // var regEx = new RegExp(searchMask, "ig");
      // var replaceMask = "as";
      // var result = 'This iS IIS'.replace(regEx, replaceMask);


      if (!localizedName.includes(affix))
        return false;

      localizedName = localizedName.replace(affix, CharConstants.empty);
      return true;
    });
    
    return localizedName;
  }
}
