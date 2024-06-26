import { JSONData } from "../../../types";
import { ColorConstants } from "../Constants/ColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { FontColorConstants } from "../Constants/FontColorConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";


export class ProfileHdModsBuilder {
  ethColors = {
    Beige: FontColorConstants.beige,
    Black: FontColorConstants.black,
    DarkGreen: FontColorConstants.darkGreen,
    Green: FontColorConstants.green,
    LightBlue: FontColorConstants.lightBlue,
    LightGray: FontColorConstants.lightGray,
    LightPurple: FontColorConstants.lightPurple,
    LightRed: FontColorConstants.lightRed,
    LightTeal: FontColorConstants.lightTeal,
    Red: FontColorConstants.red,
    VeryLightGray: FontColorConstants.veryLightGray,
    White: FontColorConstants.white,
  };

  build() {
    let path = FileConstants.FILE_PROFILE_HD_PATH; // TODO: low vision and controller modes
    let profileHD = D2RMM.readJson(path);

    this.applyCustomGoldColor(profileHD, config.GoldAmount as string);
    this.applyCustomEtherealColor(profileHD, config.EthItemsColor as string);
    this.applyTooltipMods(profileHD, config.Tooltip as string, config.TooltipOpacity as number, config.TooltipSize as number);

    D2RMM.writeJson(path, profileHD);
  }

  applyCustomGoldColor(profileHD:JSONData, setting:string) {
    if (setting === SettingsConstants.disabled || setting === "wg") {
      return;
    }

    let goldColor = ColorConstants.none;
    switch (setting) {
      case "g":
      case "gw":
        goldColor = FontColorConstants.currencyGold;
        break;
      case SettingsConstants.custom:
        goldColor = FontColorConstants.lightTeal;
        break;
    }

    profileHD.TooltipStyle.GoldColor = goldColor;
  }

  applyCustomEtherealColor(profileHD:JSONData, setting:string) {
    if (setting === SettingsConstants.disabled) {
      return;
    }

    profileHD.TooltipStyle.EtherealColor = (setting !== SettingsConstants.custom) ? this.ethColors[setting] : FontColorConstants.lightTeal; // [CSTM-ETH] change FontColorConstants.lightTeal into any color variable in _profilehd.json
  }

  applyTooltipMods(profileHD:JSONData, setting:string, opacity:number, tooltipSize:number) {
    if (setting === SettingsConstants.disabled) {
      return;
    }

    let bgColor = [0, 0, 0, opacity]; // [R, G, B, opacity]
    switch (setting) {
      case SettingsConstants.all:
        profileHD.TooltipStyle.inGameBackgroundColor = bgColor;
        profileHD.TooltipFontSize = tooltipSize;
        break;
      case "opacity":
        profileHD.TooltipStyle.inGameBackgroundColor = bgColor;
        break;
      case "size":
        profileHD.TooltipFontSize = tooltipSize;
        break;
    }
  }
}
