import { GemConstants } from "../../Constants/Items/GemConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { JewelrySettings } from "../../Settings/Filter/JewelrySettings";
import { GemsComposerBase } from "../GemsComposerBase";

export class GemsComposer extends GemsComposerBase {
  constructor() {
    super();
  }

  // TODO: fix shortened displaynames when highlighted not displaying correctly
  // TODO: add option for regular gem name:
  // - regular
  // - common
  // - standard
  // - gem name (Ruby)
  // - custom
  public applyFilter(): void {
    switch (JewelrySettings.gems.filter) {
      case SettingsConstants.all: // show all
        this.upsertGems(GemConstants.chippedFlawedRegularGems);
        this.upsertGems(GemConstants.flawlessGems);
        this.upsertGems(GemConstants.perfectGems);
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.upsertGems(GemConstants.flawlessGems);
        this.upsertGems(GemConstants.perfectGems);
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.hideGems(GemConstants.flawlessGems);
        this.upsertGems(GemConstants.perfectGems);
        return;
      case SettingsConstants.hide: // hide chipped/flawed/regular/flawless/perfect gems
        this.hideGems(GemConstants.chippedFlawedRegularGems);
        this.hideGems(GemConstants.flawlessGems);
        this.hideGems(GemConstants.perfectGems);
        return;
    }
  }
}
