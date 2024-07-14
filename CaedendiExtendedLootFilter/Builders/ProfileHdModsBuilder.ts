import { FontColorConstants } from "../Constants/Colors/FontColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Settings } from "../Settings/Settings";

// TODO: fix
export class ProfileHdModsBuilder {
  build() {
    let path = FileConstants.FILE_PROFILE_HD_PATH; // TODO: low vision and controller modes
    let profileHD = D2RMM.readJson(path);

    this.applyCustomGoldColor(profileHD);
    this.applyCustomEtherealColor(profileHD);
    this.applyTooltipMods(profileHD);

    D2RMM.writeJson(path, profileHD);
  }

  applyCustomGoldColor(profileHD) { // TODO: typing
    let tooltipColors: string = Settings.filter.junk.goldTooltipColors;
    if (tooltipColors === SettingsConstants.disabled || tooltipColors === "wg") {
      return;
    }

    let goldColor: FontColorConstants;
    switch (tooltipColors) {
      case "g":
      case "gw":
        goldColor = FontColorConstants.currencyGold;
        break;
    }

    profileHD.TooltipStyle.GoldColor = goldColor;
  }

  applyCustomEtherealColor(profileHD) { // TODO: typing
    profileHD.TooltipStyle.EtherealColor = Settings.statsAndModifiers.ethItemsColor; // [CSTM-ETH] change FontColorConstants.lightTeal into any color variable in _profilehd.json
  }

  applyTooltipMods(profileHD) { // TODO: typing
    if (Settings.tooltips.tooltipModsSetting === SettingsConstants.disabled) {
      return;
    }

    let bgColor = [0, 0, 0, Settings.tooltips.tooltipOpacity]; // [R, G, B, opacity]
    switch (Settings.tooltips.tooltipModsSetting) {
      case SettingsConstants.all:
        profileHD.TooltipStyle.inGameBackgroundColor = bgColor;
        profileHD.TooltipFontSize = Settings.tooltips.tooltipSize;
        break;
      case "opacity":
        profileHD.TooltipStyle.inGameBackgroundColor = bgColor;
        break;
      case "size":
        profileHD.TooltipFontSize = Settings.tooltips.tooltipSize;
        break;
    }
  }
}
