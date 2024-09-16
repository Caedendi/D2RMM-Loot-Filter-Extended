import { FontColorConstants } from "../Constants/Colors/FontColorConstants";
import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { EtherealColorSettings } from "../Settings/Filter/EtherealColorSettings";
import { JunkSettings } from "../Settings/Filter/JunkSettings";
import { TooltipModsSettings } from "../Settings/TooltipModsSettings";
import { IBuilder } from "./Interfaces/IBuilder";

// TODO: function param typing
export class ProfileHdModsBuilder implements IBuilder {
  public build(): void {
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
    this.applySettingsFontFix(profileHD);

    D2RMM.writeJson(path, profileHD);
  }

  protected applyCustomGoldColor(profileHD): void {
    if (JunkSettings.goldTooltipColors === SettingsConstants.disabled || JunkSettings.goldTooltipColors === "wg")
      return;

    profileHD.TooltipStyle.GoldColor = FontColorConstants.currencyGold.toString();
  }

  protected applyCustomEtherealColor(profileHD): void {
    if (!EtherealColorSettings.isEnabled)
      return;

    profileHD.TooltipStyle.EtherealColor = EtherealColorSettings.color.toString();
  }

  protected applyTooltipMods(profileHD): void {
    if (!TooltipModsSettings.isEnabled)
      return;

    profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, TooltipModsSettings.opacity]; // [R, G, B, opacity];
    profileHD.TooltipFontSize = TooltipModsSettings.size;
  }

  /**
   * Applies [Settings Font Fix for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/200) by 
   * [olegbl](https://www.nexusmods.com/users/353885).
   * 
   * This mod fixes the font size in the settings menu when any other mod modifies `_profilehd.json`.
   * 
   * This is necessary because D2R ships with a `_profilehd.json` file that does not follow standard JSON conventions 
   * (same key has multiple values), which means that whenever the file is modified by JavaScript, some data is lost. 
   * This mod restores this data by properly encoding the entire style into one object rather than having two styles on 
   * a single definition.
   * 
   * Source code: https://github.com/olegbl/d2rmm.mods/tree/main/SettingsFontFix
   * 
   * @param profileHD The `_profilehd.json` file.
   */
  protected applySettingsFontFix(profileHD): void {
    profileHD.StyleSettingsNumericSlider = {
      ...profileHD.StyleSettingsNumeric,
      alignment: {
        ...profileHD.StyleSettingsNumeric.alignment,
        h: 'right',
      },
    };

    profileHD.SettingsSliderValueFields.style = '$StyleSettingsNumericSlider';
  }
}
