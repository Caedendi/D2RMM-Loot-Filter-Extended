import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { GemsComposerBase } from "../GemsComposerBase";

export class GemsComposer extends GemsComposerBase {
  constructor() {
    super();
  }

  public applyFilter(): void {
    switch (JewelrySettings.gems.filter) {
      case SettingsConstants.all: // show all
        this.upsertGems(GemConstants.gemExceptions);
        return;
      case "flawless": // hide chipped/flawed/regular gems
      case "perfect":  // hide chipped/flawed/regular/flawless gems
      case SettingsConstants.hide:
        this.hideGems(GemConstants.gemExceptions);
        return;
    }
  }
}
