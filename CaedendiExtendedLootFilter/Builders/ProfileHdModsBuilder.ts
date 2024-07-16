import { FontColorConstants } from "../Constants/Colors/FontColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Settings } from "../Settings/Settings";

export class ProfileHdModsBuilder {
  public build() {
    let path = FileConstants.FILE_PROFILE_HD_PATH; // TODO: low vision and controller modes
    let profileHD = D2RMM.readJson(path);

    this.applyCustomGoldColor(profileHD);
    this.applyCustomEtherealColor(profileHD);
    this.applyTooltipMods(profileHD);

    D2RMM.writeJson(path, profileHD);
  }

  protected applyCustomGoldColor(profileHD) { // TODO: typing
    if (Settings.filter.junk.goldTooltipColors === SettingsConstants.disabled || Settings.filter.junk.goldTooltipColors === "wg")
      return;

    profileHD.TooltipStyle.GoldColor = FontColorConstants.currencyGold.toString();
  }

  protected applyCustomEtherealColor(profileHD) { // TODO: typing
    if (!Settings.statsAndModifiers.ethColor.isEnabled)
      return;

    profileHD.TooltipStyle.EtherealColor = Settings.statsAndModifiers.ethColor.color.toString(); // [CSTM-ETH]
  }

  protected applyTooltipMods(profileHD) { // TODO: typing
    if (!Settings.tooltips.isTooltipModsEnabled)
      return;

    profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, Settings.tooltips.tooltipOpacity]; // [R, G, B, opacity];
    profileHD.TooltipFontSize = Settings.tooltips.tooltipSize;
  }
}
