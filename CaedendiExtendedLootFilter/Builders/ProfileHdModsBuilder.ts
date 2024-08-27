import { FontColorConstants } from "../Constants/Colors/FontColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { EtherealColorSettings } from "../Settings/Filter/EtherealColorSettings";
import { JunkSettings } from "../Settings/Filter/JunkSettings";
import { TooltipModsSettings } from "../Settings/TooltipModsSettings";
import { IBuilder } from "./Interfaces/IBuilder";

// TODO: function param typing
export class ProfileHdModsBuilder implements IBuilder {
  public build() {
    if ( (JunkSettings.goldTooltipColors === SettingsConstants.disabled || JunkSettings.goldTooltipColors === "wg")
      && !EtherealColorSettings.isEnabled
      && !TooltipModsSettings.isEnabled)
      return;

    // TODO: add support for low vision and controller modes
    let path = FileConstants.FILE_PROFILE_HD_PATH;
    let profileHD = D2RMM.readJson(path);

    this.applyCustomGoldColor(profileHD);
    this.applyCustomEtherealColor(profileHD);
    this.applyTooltipMods(profileHD);

    D2RMM.writeJson(path, profileHD);
  }

  protected applyCustomGoldColor(profileHD) {
    if (JunkSettings.goldTooltipColors === SettingsConstants.disabled || JunkSettings.goldTooltipColors === "wg")
      return;

    profileHD.TooltipStyle.GoldColor = FontColorConstants.currencyGold.toString();
  }

  protected applyCustomEtherealColor(profileHD) {
    if (!EtherealColorSettings.isEnabled)
      return;

    profileHD.TooltipStyle.EtherealColor = EtherealColorSettings.color.toString();
  }

  protected applyTooltipMods(profileHD) {
    if (!TooltipModsSettings.isEnabled)
      return;

    profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, TooltipModsSettings.opacity]; // [R, G, B, opacity];
    profileHD.TooltipFontSize = TooltipModsSettings.size;
  }
}
