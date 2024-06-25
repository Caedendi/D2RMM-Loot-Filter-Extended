import { ColorConstants } from "./ColorConstants";
import { FileConstants } from "./FileConstants";
import { HighlightConstants } from "./HighlightConstants";
import { RuneConstants } from "./RuneConstants";
import { SettingsConstants } from "./SettingsConstants";
import { Helper } from "./Helper";
import { AbstractItemBuilder } from "./AbstractItemBuilder";

export class ItemRunesBuilder extends AbstractItemBuilder {
  constructor() {
    super(FileConstants.FILE_ITEM_RUNES_PATH);

    RuneConstants.tiers.forEach(tier => {
      this.initCollection(tier.level);
    });
  }

  build() {
    if ( config.RunesHighlighting === SettingsConstants.disabled
      || config.RunesHighlighting === "raf") {
      return;
    }

    this.customizeRunes(config.RunesHighlighting);
    this.addBigTooltips();
    this.applyCustomNames();
  }

  customizeRunes(setting) {
    const hasAffix = ["nrs-hls", "nrs", "hls"].includes(setting); // settings that keep the " Rune" affix
    const hasNumber = [SettingsConstants.all, "nrs-raf", "nrs-hls", "nrs"].includes(setting); // settings that add rune numbers
    const hasSettingHighlighting = [SettingsConstants.all, "nrs-hls", "hls-raf", "hls"].includes(setting); // settings that add highlighting

    switch (setting) {
      case SettingsConstants.disabled: // should not be reached
      case "raf": // Remove affix
        return;
      case SettingsConstants.all: // Add rune numbers + highlights + remove affix
      case "nrs-raf": // Add rune numbers + remove affix
      case "nrs-hls": // Add rune numbers + highlights
      case "hls-raf": // Add highlights + remove affix
      case "nrs": // Add rune numbers
      case "hls": // Add highlights
        this.generateRuneNames(hasAffix, hasNumber, hasSettingHighlighting);
        return;
      case SettingsConstants.custom: // [CSTM-RUN]

        // ADD YOUR CUSTOM ITEM NAMES HERE. NOTE: THIS BYPASSES BIG TOOLTIPS SETTINGS.
        // todo: is broken, correct
        let clrMsg = ColorConstants.purple;
        let clrRune = ColorConstants.orange;
        let clrHighlight = ColorConstants.red;
        let highlight1 = "**";
        let highlight2 = "*****";
        let highlight3 = "**********";

        this.runes.r01 = `${clrRune}El (1)`; // El
        this.runes.r02 = `${clrRune}Eld (2)`; // Eld
        this.runes.r03 = `${clrRune}Tir (3)`; // Tir
        this.runes.r04 = `${clrRune}Nef (4)`; // Nef
        this.runes.r05 = `${clrRune}Eth (5)`; // Eth
        this.runes.r06 = `${clrRune}Ith (6)`; // Ith
        this.runes.r07 = `${clrRune}Tal (7)`; // Tal
        this.runes.r08 = `${clrHighlight}${highlight1}${clrRune}  Ral (8)  ${clrHighlight}${highlight1}${clrRune}`; // Ral
        this.runes.r09 = `${clrRune}Ort (9)`; // Ort
        this.runes.r10 = `${clrRune}Thul (10)`; // Thul
        this.runes.r11 = `${clrRune}Amn (11)`; // Amn
        this.runes.r12 = `${clrRune}Sol (12)`; // Sol
        this.runes.r13 = `${clrRune}Shael (13)`; // Shael
        this.runes.r14 = `${clrRune}Dol (14)`; // Dol
        this.runes.r15 = `${clrHighlight}${highlight1}${clrRune}  Hel (15) ${clrHighlight}${highlight1}${clrRune}`; // Hel
        this.runes.r16 = `${clrRune}Io (16)`; // Io
        this.runes.r17 = `${clrRune}Lum (17)`; // Lum
        this.runes.r18 = `${clrHighlight}${highlight1}${clrRune}  Ko (18)  ${clrHighlight}${highlight1}${clrRune}`; // Ko
        this.runes.r19 = `${clrHighlight}${highlight1}${clrRune}  Fal (19)  ${clrHighlight}${highlight1}${clrRune}`; // Fal
        this.runes.r20 = `${clrHighlight}${highlight1}${clrRune}  Lem (20)  ${clrHighlight}${highlight1}${clrRune}`; // Lem
        this.runes.r21 = `${clrHighlight}${highlight2}${clrRune}   Pul (21)   ${clrHighlight}${highlight2}${clrRune}`; // Pul
        this.runes.r22 = `${clrHighlight}${highlight2}${clrRune}   Um (22)   ${clrHighlight}${highlight2}${clrRune}`; // Um
        this.runes.r23 = `${clrHighlight}${highlight2}${clrRune}   Mal (23)   ${clrHighlight}${highlight2}${clrRune}`; // Mal
        this.runes.r24 = `${clrHighlight}${highlight2}${clrRune}   Ist (24)   ${clrHighlight}${highlight2}${clrRune}`; // Ist
        this.runes.r25 = `${clrHighlight}${highlight2}${clrRune}   Gul (25)   ${clrHighlight}${highlight2}${clrRune}`; // Gul
        this.runes.r26 = `${clrHighlight}${highlight3}${clrRune}     Vex (26)     ${clrHighlight}${highlight3}${clrRune}`; // Vex
        this.runes.r27 = `${clrHighlight}${highlight3}${clrRune}     Ohm (27)     ${clrHighlight}${highlight3}${clrRune}`; // Ohm
        this.runes.r28 = `${clrHighlight}${highlight3}${clrRune}     Lo (28)     ${clrHighlight}${highlight3}${clrRune}`; // Lo
        this.runes.r29 = `${clrHighlight}${highlight3}${clrRune}     Sur (29)     ${clrHighlight}${highlight3}${clrRune}`; // Sur
        this.runes.r30 = `${clrHighlight}${highlight3}${clrRune}     Ber (30)     ${clrHighlight}${highlight3}${clrRune}`; // Ber
        this.runes.r31 = `${clrHighlight}${highlight3}${clrRune}     Jah (31)     ${clrHighlight}${highlight3}${clrRune}`; // Jah

        // this.runes.r32 = `${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}`; // Cham
        this.runes.r32 = `\n\n${clrMsg}Pick Up\n${LTT_PADDING}${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}${LTT_PADDING}\n\n`; // Cham
        this.runes.r32 = Helper.generateBigTooltip(config.BigTooltipRunesHigh, `${clrHighlight}${HighlightConstants.pattern2x10}${clrRune}${HighlightConstants.padding10}Cham (32)${HighlightConstants.padding10}${clrHighlight}${HighlightConstants.pattern2x10}${clrRune}`); // Cham



        // this.runes.r32 = Helper.generateBigTooltip(`${clrHighlight}${highlight3}${clrRune}     Cham (32)     ${clrHighlight}${highlight3}${clrRune}`); // Cham
        // this.runes.r33 = `${clrHighlight}${highlight3}${clrRune}     Zod (33)     ${clrHighlight}${highlight3}${clrRune}`;  // Zod
        // this.runes.r33 = `${RuneConstants.clrHighlight}${HighlightConstants.pattern10}${HighlightConstants.padding5}${RuneConstants.clrName}Zod (33)${HighlightConstants.padding5}${RuneConstants.clrHighlight}${HighlightConstants.pattern10}${RuneConstants.clrName}`;  // Zod
        this.runes.r33 = Helper.generateDoubleHighlight(clrHighlight, HighlightConstants.pattern10, HighlightConstants.padding5, clrRune, "Zod Rune (33)"); // Zod
        return;
    }
  }

  generateRuneNames(hasAffix: boolean, hasNumber: boolean, hasSettingHighlighting: boolean) {
    RuneConstants.tiers.forEach((tier) => {
      let tierCollection = this.getCollectionById(tier.level);

      tier.runes.forEach((rune) => {
        let itemCode = rune.number < 10 ? `r0${rune.number}` : `r${rune.number}`;
        let runeName = !tier.isVisible ? SettingsConstants.hidden : this.generateRuneName(rune.name, rune.number, tier.level, tier.pattern, tier.padding, hasAffix, hasNumber, hasSettingHighlighting);
        this.upsert(tierCollection, itemCode, runeName); // chuck generated code/name combination into this.collections => [current tier] => [current rune]
      });
    });
  }

  generateRuneName(name, number, tier, highlightPattern, padding, hasAffix, hasNumber, hasSettingHighlighting) {
    const hasHighlighting = hasSettingHighlighting && RuneConstants.tiersHighlighted.includes(tier);
    const hasHighlightedNumber = hasSettingHighlighting && RuneConstants.tiersHighlightedNumbers.includes(tier);
    const hasHighlightedName = hasSettingHighlighting && RuneConstants.tiersHighlightedNames.includes(tier);
    const hasAlternateNameColor = RuneConstants.isAlternateColor && RuneConstants.tiersAlternateColor.includes(tier);

    var highlightColor1 = hasHighlighting ? RuneConstants.clrHighlight : ColorConstants.none;
    var highlightColor2 = highlightColor1;
    var nameColor1 = !hasAlternateNameColor ? (hasHighlightedName ? RuneConstants.clrHighlight : RuneConstants.clrName) : RuneConstants.colorAlternate;
    var nameColor2 = nameColor1;
    var numberColor = !hasAlternateNameColor ? (hasHighlightedNumber ? RuneConstants.clrHighlight : RuneConstants.clrName) : ColorConstants.none;

    if (hasAffix) {
      name = `${name} Rune`;
    }

    // remove duplicate color codes where possible
    if ((hasHighlighting && nameColor2 === highlightColor2) || !hasHighlighting) {
      nameColor2 = ColorConstants.none;
    }
    if (hasHighlighting && ((hasNumber && highlightColor2 === numberColor) || (!hasNumber && highlightColor2 === nameColor1))) {
      highlightColor2 = ColorConstants.none;
    }
    // set rune number
    if (hasNumber) {
      if (numberColor === nameColor1) {
        numberColor = ColorConstants.none;
      }
      name = `${name} ${numberColor}(${number})`;
    }
    // remove last duplicate color code where possible
    if (hasHighlighting && highlightColor1 === nameColor1) {
      nameColor1 = ColorConstants.none;
    }

    let runeName = `${highlightColor1}${highlightPattern}${nameColor1}${padding}${name}${padding}${highlightColor2}${highlightPattern}${nameColor2}`;

    return runeName;
  }

  addBigTooltips() {
    if (!config.IsBigTooltipsEnabled) {
      return;
    }

    RuneConstants.tiers.forEach(tier => {
      let tierCollection = this.getCollectionById(tier.level);
      Helper.addBigTooltips(tierCollection, tier.bigTooltipSetting);
    });
  }
}
