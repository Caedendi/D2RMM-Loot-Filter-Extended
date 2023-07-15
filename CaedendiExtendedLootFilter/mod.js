////===============================================////
////===============================================////
////                                               ////
////   Caedendi's Extended Loot Filter for D2RMM   ////
////                                               ////
////===============================================////
////===============================================////


//===============//
//   Constants   //
//===============//

// File paths
const profileHdPath = 'global\\ui\\layouts\\_profilehd.json';

const itemNameAffixesPath = 'local\\lng\\strings\\item-nameaffixes.json';
const itemNamesPath = 'local\\lng\\strings\\item-names.json';
const itemRunesPath = 'local\\lng\\strings\\item-runes.json';
const uiPath = 'local\\lng\\strings\\ui.json';

// Color
const COLOR_PREFIX = 'ÿc';

const WHITE = `${COLOR_PREFIX}0`;
const WHITE1 = `${COLOR_PREFIX}=`;
const GRAY = `${COLOR_PREFIX}5`;
const GRAY1 = `${COLOR_PREFIX}K`;
const GRAY2 = `${COLOR_PREFIX}I`;
const BLACK = `${COLOR_PREFIX}6`;
const BLACK1 = `${COLOR_PREFIX}M`;
const RED = `${COLOR_PREFIX}1`;
const RED1 = `${COLOR_PREFIX}U`;
const LIGHTRED = `${COLOR_PREFIX}E`;
const DARKRED = `${COLOR_PREFIX}S`;
const GREEN = `${COLOR_PREFIX}2`;
const GREEN1 = `${COLOR_PREFIX}Q`;
const GREEN2 = `${COLOR_PREFIX}C`;
const GREEN3 = `${COLOR_PREFIX}<`;
const DARKGREEN1 = `${COLOR_PREFIX}A`;
const DARKGREEN2 = `${COLOR_PREFIX}:`;
const TURQUOISE = `${COLOR_PREFIX}N`;
const BLUE = `${COLOR_PREFIX}3`;
const BLUE1 = `${COLOR_PREFIX}B`;
const LIGHTBLUE1 = `${COLOR_PREFIX}F`;
const LIGHTBLUE2 = `${COLOR_PREFIX}P`;
const SKYBLUE = `${COLOR_PREFIX}T`;
const ORANGE = `${COLOR_PREFIX}8`;
const ORANGE1 = `${COLOR_PREFIX}@`;
const ORANGE2 = `${COLOR_PREFIX}J`;
const ORANGE3 = `${COLOR_PREFIX}L`;
const TAN = `${COLOR_PREFIX}7`;
const YELLOW = `${COLOR_PREFIX}9`;
const YELLOW1 = `${COLOR_PREFIX}R`;
const GOLD = `${COLOR_PREFIX}4`;
const GOLD1 = `${COLOR_PREFIX}D`;
const LIGHTGOLD1 = `${COLOR_PREFIX}H`;
const PINK = `${COLOR_PREFIX}O`;
const LIGHTPINK = `${COLOR_PREFIX}G`;
const PURPLE = `${COLOR_PREFIX};`;

// Naming
const HIDDEN = EMPTY_STRING + SINGLE_SPACE.repeat(config.HiddenItemTooltipSize);
const HIGHLIGHT = config.HighlightCharacter !== 'custom' ? config.HighlightCharacter : '*'; // [CSTM-HLC] replace * with custom character


//=========================//
//   Parameters - Global   //
//=========================//

const EMPTY_STRING = '';
const SINGLE_SPACE = ' ';
const NO_COLOR = EMPTY_STRING;
const NO_PATTERN = EMPTY_STRING;
const NO_PADDING = EMPTY_STRING;

const SMALL_O = 'o';
const PLUS = '+';
const ZERO = '0';
const PATTERN_2 = HIGHLIGHT.repeat(2);
const PATTERN_5 = HIGHLIGHT.repeat(5);
const PATTERN_10 = HIGHLIGHT.repeat(10);
const PATTERN_3x10 = `${HIGHLIGHT.repeat(10)} ${HIGHLIGHT.repeat(10)} ${HIGHLIGHT.repeat(10)}`;

const PADDING_1 = SINGLE_SPACE;
const PADDING_2 = SINGLE_SPACE.repeat(2);
const PADDING_3 = SINGLE_SPACE.repeat(3);
const PADDING_5 = SINGLE_SPACE.repeat(5);

//========================//
//   Parameters - Runes   //
//========================//

// I consider the rune tiers to be:
// - low: 1-15 (El-Hel)
// - low-mid: 16-20 (Io-Lem)
// - mid: 21-15 (Pul-Gul)
// - high: 26-33 (Vex-Zod)
// I have however switched Ral (8), Hel (15) and Lem (20) around because of their usefulness.

const RUNES_TIER_LOW = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14]; // El, Eld, Tir, Nef, Eth, Ith, Tal, Ort, Thul, Amn, Sol, Shael, Dol
const RUNES_TIER_LOWMID = [8, 15, 16, 17, 18, 19];                   // Ral, Hel, Io, Lum, Ko, Fal
const RUNES_TIER_MID = [20, 21, 22, 23, 24, 25];                     // Lem, Pul, Um, Mal, Ist, Gul
const RUNES_TIER_HIGH = [26, 27, 28, 29, 30, 31, 32, 33];            // Vex, Ohm, Lo, Sur, Ber, Jah, Cham, Zod

const RUNES_COLOR_DEFAULT = `${ORANGE1}`;
const RUNES_COLOR_HIGHLIGHT = `${RED}`;

const RUNES_PATTERN_LOW = NO_PATTERN;
const RUNES_PATTERN_LOWMID = PATTERN_5;
const RUNES_PATTERN_MID = PATTERN_10;
const RUNES_PATTERN_HIGH = PATTERN_3x10;

const RUNES_PADDING_LOW = NO_PADDING;
const RUNES_PADDING_LOWMID = PADDING_3;
const RUNES_PADDING_MID = PADDING_5;
const RUNES_PADDING_HIGH = PADDING_5;

const RUNES_TIER_HIGHLIGHTED = [].concat(RUNES_TIER_LOWMID, RUNES_TIER_MID, RUNES_TIER_HIGH); // runes with a highlight pattern (***** rune *****)
const RUNES_TIER_HIGHLIGHTED_NUMBERS = [].concat(RUNES_TIER_MID, RUNES_TIER_HIGH);            // runes where the added numbers (33) are in the highlight color instead of default
const RUNES_TIER_HIGHLIGHTED_NAMES = RUNES_TIER_HIGH;                                         // runes where the rune name is in the highlight color instead of default


//========================//
//   Parameters - Items   //
//========================//

const FACET_COLOR_NAME = GOLD;
const FACET_PATTERN = PATTERN_2;
const FACET_PADDING_1 = PADDING_2; // padding between patterns
const FACET_PADDING_2 = PADDING_5; // padding between name and highlight
const FACET_PREFIX = `${RED}${FACET_PATTERN}${FACET_PADDING_1}${YELLOW}${FACET_PATTERN}${FACET_PADDING_1}${BLUE}${FACET_PATTERN}${FACET_PADDING_1}${GREEN}${FACET_PATTERN}${FACET_COLOR_NAME}${FACET_PADDING_2}`;
const FACET_SUFFIX = `${FACET_PADDING_2}${GREEN}${FACET_PATTERN}${FACET_PADDING_1}${BLUE}${FACET_PATTERN}${FACET_PADDING_1}${YELLOW}${FACET_PATTERN}${FACET_PADDING_1}${RED}${FACET_PATTERN}${FACET_COLOR_NAME}`;


//======================//
//   Global Functions   //
//======================//

function generateSingleHighlight(patternColor, pattern, padding, itemColor, itemName) {
  return `${patternColor}${pattern}${itemColor}${padding}${itemName}${itemColor}`;
}
  
function generateDoubleHighlight(patternColor, pattern, padding, itemColor, itemName) {
  return `${patternColor}${pattern}${itemColor}${padding}${itemName}${padding}${patternColor}${pattern}${itemColor}`;
}


//============================//
//   Custom Item Name Lists   //
//============================//

const customAffixes = {
  items: {},

  customizeGold(setting) {
    switch (setting) {
      case "none": // no change
        return;
      case "gold": // Gold displays as "1234 Gold" with white numbers and gold text.
        this.items.gld = `${GOLD1}Gold`; 
        return;
      case "goldg": // Gold displays as "1234 G" with white numbers and a gold-colored G.
        this.items.gld = `${GOLD1}G`;
        return;
      case "white": // Gold displays as "1234 G" in white.
        this.items.gld = `G`;
        return;
      case "hide": // Gold displays as "1234".
        this.items.gld = HIDDEN;
        return;
      case "custom": // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gld = `Gold`;
        return;
    }
  },

  customizeGems(setting) {
    // For some reason, the devs put these 4 gems in the wrong JSON file
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        // `${GREEN}o${WHITE} Emerald`;
        this.items.gsw = generateSingleHighlight(WHITE, SMALL_O, PADDING_1, WHITE, 'Diamond');  // Diamond
        this.items.gsg = generateSingleHighlight(GREEN, SMALL_O, PADDING_1, WHITE, 'Emerald');  // Emerald
        this.items.gsr = generateSingleHighlight(RED,   SMALL_O, PADDING_1, WHITE, 'Ruby');     // Ruby
        this.items.gsb = generateSingleHighlight(BLUE,  SMALL_O, PADDING_1, WHITE, 'Sapphire'); // Sapphire
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideGems();
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideGems();
        return;
      case "custom": // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.gsw = `Diamond`; 
        this.items.gsg = `Emerald`; 
        this.items.gsr = `Ruby`;
        this.items.gsb = `Sapphire`;
        return;
    }
  },

  hideGems() {
    this.items.gsw = HIDDEN;
    this.items.gsg = HIDDEN;
    this.items.gsr = HIDDEN;
    this.items.gsb = HIDDEN;
  },
};

const customRunes = {
  runes: {
    r01: "El",
    r02: "Eld",
    r03: "Tir",
    r04: "Nef",
    r05: "Eth",
    r06: "Ith",
    r07: "Tal",
    r08: "Ral",
    r09: "Ort",
    r10: "Thul",
    r11: "Amn",
    r12: "Sol",
    r13: "Shael",
    r14: "Dol",
    r15: "Hel",
    r16: "Io",
    r17: "Lum",
    r18: "Ko",
    r19: "Fal",
    r20: "Lem",
    r21: "Pul",
    r22: "Um",
    r23: "Mal",
    r24: "Ist",
    r25: "Gul",
    r26: "Vex",
    r27: "Ohm",
    r28: "Lo",
    r29: "Sur",
    r30: "Ber",
    r31: "Jah",
    r32: "Cham",
    r33: "Zod",
  },
  
  customizeRunes(setting) {
    const RUNES_SETTINGS_AFFIX = ["nrs-hls", "nrs", "hls"];                // settings that add the " Rune" affix
    const RUNES_SETTINGS_NUMBER = ["all", "nrs-raf", "nrs-hls", "nrs"];    // settings that add rune numbers
    const RUNES_SETTINGS_HIGHLIGHT = ["all", "nrs-hls", "hls-raf", "hls"]; // settings that add highlighting

    switch (setting) {
      case "none":
      case "raf": // Remove affix
        return;
      case "all": // Add rune numbers + highlights + remove affix
      case "nrs-raf": // Add rune numbers + remove affix
      case "nrs-hls": // Add rune numbers + highlights
      case "hls-raf": // Add highlights + remove affix
      case "nrs": // Add rune numbers
      case "hls": // Add highlights
        generateRuneNames(setting, RUNES_SETTINGS_AFFIX, RUNES_SETTINGS_NUMBER, RUNES_SETTINGS_HIGHLIGHT);
        return;

      // case "all": // Add rune numbers + highlights + remove affix
      //   this.setColor(ORANGE1, RED, setting);
      //   this.addRuneNumbers(ORANGE1, RED, setting);
      //   this.addHighlighting()
      //   break;
      // case "nrs-raf": // Add rune numbers + remove affix
      //   this.setColor(ORANGE1, ORANGE1, setting);
      //   this.addRuneNumbers(ORANGE1, ORANGE1, setting);
      //   break;
      // case "nrs-hls": // Add rune numbers + highlights
      //   this.addRuneAffix();
      //   this.setColor(ORANGE1, RED, setting);
      //   this.addRuneNumbers(ORANGE1, RED, setting); 
      //   this.addHighlighting();
      //   break;
      // case "hls-raf": // Add highlights + remove affix
      //   this.setColor(ORANGE1, RED, setting);
      //   this.addHighlighting();
      //   break;
      // case "nrs": // Add rune numbers
      //   this.addRuneAffix();
      //   this.setColor(ORANGE1, ORANGE1, setting);
      //   this.addRuneNumbers(ORANGE1, ORANGE1, setting);
      //   break;
      // case "hls": // Add highlights
      //   this.addRuneAffix();
      //   this.setColor(ORANGE1, RED, setting);
      //   this.addHighlighting();
      //   break;

      case "custom": // [CSTM-RUN]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.runes.r01 = `${ORANGE1}El (1)`;                                                        // El
        this.runes.r02 = `${ORANGE1}Eld (2)`;                                                       // Eld
        this.runes.r03 = `${ORANGE1}Tir (3)`;                                                       // Tir
        this.runes.r04 = `${ORANGE1}Nef (4)`;                                                       // Nef
        this.runes.r05 = `${ORANGE1}Eth (5)`;                                                       // Eth
        this.runes.r06 = `${ORANGE1}Ith (6)`;                                                       // Ith
        this.runes.r07 = `${ORANGE1}Tal (7)`;                                                       // Tal
        this.runes.r08 = `${RED}**${ORANGE1}  Ral (8)  ${RED}**${ORANGE1}`;                         // Ral
        this.runes.r09 = `${ORANGE1}Ort (9)`;                                                       // Ort
        this.runes.r10 = `${ORANGE1}Thul (10)`;                                                     // Thul
        this.runes.r11 = `${ORANGE1}Amn (11)`;                                                      // Amn
        this.runes.r12 = `${ORANGE1}Sol (12)`;                                                      // Sol
        this.runes.r13 = `${ORANGE1}Shael (13)`;                                                    // Shael
        this.runes.r14 = `${ORANGE1}Dol (14)`;                                                      // Dol
        this.runes.r15 = `${RED}**${ORANGE1}  Hel (15) ${RED}**${ORANGE1}`;                         // Hel
        this.runes.r16 = `${ORANGE1}Io (16)`;                                                       // Io
        this.runes.r17 = `${ORANGE1}Lum (17)`;                                                      // Lum
        this.runes.r18 = `${RED}**${ORANGE1}  Ko (18)  ${RED}**${ORANGE1}`;                         // Ko
        this.runes.r19 = `${RED}**${ORANGE1}  Fal (19)  ${RED}**${ORANGE1}`;                        // Fal
        this.runes.r20 = `${RED}**${ORANGE1}  Lem (20)  ${RED}**${ORANGE1}`;                        // Lem
        this.runes.r21 = `${RED}*****${ORANGE1}   Pul (21)   ${RED}*****${ORANGE1}`;                // Pul
        this.runes.r22 = `${RED}*****${ORANGE1}   Um (22)   ${RED}*****${ORANGE1}`;                 // Um
        this.runes.r23 = `${RED}*****${ORANGE1}   Mal (23)   ${RED}*****${ORANGE1}`;                // Mal
        this.runes.r24 = `${RED}*****${ORANGE1}   Ist (24)   ${RED}*****${ORANGE1}`;                // Ist
        this.runes.r25 = `${RED}*****${ORANGE1}   Gul (25)   ${RED}*****${ORANGE1}`;                // Gul
        this.runes.r26 = `${RED}**********${ORANGE1}     Vex (26)     ${RED}**********${ORANGE1}`;  // Vex
        this.runes.r27 = `${RED}**********${ORANGE1}     Ohm (27)     ${RED}**********${ORANGE1}`;  // Ohm
        this.runes.r28 = `${RED}**********${ORANGE1}     Lo (28)     ${RED}**********${ORANGE1}`;   // Lo
        this.runes.r29 = `${RED}**********${ORANGE1}     Sur (29)     ${RED}**********${ORANGE1}`;  // Sur
        this.runes.r30 = `${RED}**********${ORANGE1}     Ber (30)     ${RED}**********${ORANGE1}`;  // Ber
        this.runes.r31 = `${RED}**********${ORANGE1}     Jah (31)     ${RED}**********${ORANGE1}`;  // Jah
        this.runes.r32 = `${RED}**********${ORANGE1}     Cham (32)     ${RED}**********${ORANGE1}`; // Cham
        // this.runes.r33 = `${RED}**********${ORANGE1}     Zod (33)     ${RED}**********${ORANGE1}`;  // Zod
        // this.runes.r33 = `${RED}${HIGHLIGHT.repeat(10)}${PADDING3}${ORANGE1}Zod (33)${PADDING3}${RED}${HIGHLIGHT.repeat(10)}`;  // Zod
        this.runes.r33 = generateDoubleHighlight(RED, PATTERN_10, PADDING_5, ORANGE1, 'Zod Rune (33)'); // Zod
        return;
    }
  },

  generateRuneNames(setting, settingsAffix, settingsNumbers, settingsHighlighting) {
    var i = 1;
    for (const rune in this.runes) {
      this.runes[rune] = this.generateRuneName(this.runes[rune], i, setting, settingsAffix, settingsNumbers, settingsHighlighting);
      i++;
    }
  },

  generateRuneName(name, number, setting, settingsAffix, settingsNumbers, settingsHighlighting) {
    const hasAffix = settingsAffix.includes(setting);
    const hasNumber = settingsNumbers.includes(setting);
    const hasHighlighting = (settingsHighlighting.includes(setting) && RUNES_TIER_HIGHLIGHTED.includes(runeNumber));
    const hasHighlightedNumber = (settingsHighlighting.includes(setting) && RUNES_TIER_HIGHLIGHTED_NUMBERS.includes(runeNumber));
    const hasHighlightedName = (settingsHighlighting.includes(setting) && RUNES_TIER_HIGHLIGHTED_NAMES.includes(runeNumber));

    const highlightColor1 = hasHighlighting ? this.RUNES_COLOR_HIGHLIGHT : NO_COLOR;
    const highlightColor2 = highlightColor1;
    const nameColor1 = hasHighlightedName ? RUNES_COLOR_HIGHLIGHT : RUNES_COLOR_DEFAULT;
    const nameColor2 = nameColor1;
    const numberColor = hasHighlightedNumber ? RUNES_COLOR_HIGHLIGHT : RUNES_COLOR_DEFAULT;
    const padding = this.determinePadding(number);
    const highlightPattern = this.determinePattern(number);

    if (hasAffix) {
      name = `${name} Rune`;
    }

    // remove duplicate color codes where necessary
    if (hasHighlighting && nameColor2 == highlightColor2) {
      nameColor2 = NO_COLOR;
    }
    if (hasHighlighting && ((hasNumber && highlightColor2 === numberColor) || (!hasNumber && highlightColor2 === nameColor1))) {
      highlightColor2 = NO_COLOR;
    }
    // set rune number
    if (hasNumber) {
      if (numberColor === nameColor1) {
        numberColor = NO_COLOR;
      }
      name = `${name} ${numberColor}(${number})`;
    }
    // remove last duplicate color code where necessary
    if (hasHighlighting && highlightColor1 === nameColor1) {
      nameColor1 = NO_COLOR;
    }

    return `${highlightColor1}${highlightPattern}${nameColor1}${padding}${name}${padding}${highlightColor2}${highlightPattern}${nameColor2}`;
  },

  determinePadding(runeNumber) {
    if (RUNES_TIER_LOW.includes(runeNumber)) {
      return RUNES_PADDING_LOW;
    }
    else if (RUNES_TIER_LOWMID.includes(runeNumber)) {
      return RUNES_PADDING_LOWMID;
    }
    else if (RUNES_TIER_MID.includes(runeNumber)) {
      return RUNES_PADDING_MID;
    }
    else if (RUNES_TIER_HIGH.includes(runeNumber)) {
      return RUNES_PADDING_HIGH;
    }

    return NO_PADDING;
  },

  determinePattern(runeNumber) {
    if (RUNES_TIER_LOW.includes(runeNumber)) {
      return RUNES_PATTERN_LOW;
    }
    else if (RUNES_TIER_LOWMID.includes(runeNumber)) {
      return RUNES_PATTERN_LOWMID;
    }
    else if (RUNES_TIER_MID.includes(runeNumber)) {
      return RUNES_PATTERN_MID;
    }
    else if (RUNES_TIER_HIGH.includes(runeNumber)) {
      return RUNES_PATTERN_HIGH;
    }

    return NO_PATTERN;
  },



  /////////////////////////

  /*

  addRuneAffix() {
    for (const rune in this.runes) {
      this.runes[rune] = `${this.runes[rune]} Rune`;
    }
  },

  // low no highlight default colors
  // lowmid ***** padding3 default colors
  // mid ********** padding5 orange name red numbers
  // high 3x10 padding 5 red name red numbers

  setNameColor(lowRuneColor, lowMidRuneColor, midRuneColor, highRuneColor) {
    var i = 1;
    var color = STRING_EMPTY;
    for (const rune in this.runes) {
      color = this.selectColor(lowRuneColor, lowMidRuneColor, midRuneColor, highRuneColor, i);
      this.runes[rune] = `${color}${this.runes[rune]}`;
      i++;
    }
  },
  
  addRuneNumbers(lowRuneColor, lowMidRuneColor, midRuneColor, highRuneColor) {
    var i = 1;
    var color = STRING_EMPTY;
    for (const rune in this.runes) {
      color = this.selectColor(lowRuneColor, lowMidRuneColor, midRuneColor, highRuneColor, i);
      this.runes[rune] = `${this.runes[rune]} ${color}(${i})`;
      i++;
    }
  },

  selectColor(lowRuneColor, lowMidRuneColor, midRuneColor, highRuneColor, i) {
    if (RUNES_TIER_LOW.includes(i)) {
      return lowRuneColor;
    }
    else if (RUNES_TIER_LOWMID.includes(i)) {
      return lowMidRuneColor;
    }
    else if (RUNES_TIER_MID.includes(i)) {
      return midRuneColor;
    }
    else if (RUNES_TIER_HIGH.includes(i)) {
      return highRuneColor;
    }
    return STRING_EMPTY;
  },
  
  addHighlighting() {
    var i = 1;
    for (const rune in this.runes) {
      if (this.lvl1Highlight.includes(i)) {
        this.runes[rune] = this.generateHighlight(this.runes[rune], PATTERN2, RED, PADDING1);
      }
      else if (this.lvl2Highlight.includes(i)) {
        this.runes[rune] = this.generateHighlight(this.runes[rune], PATTERN3, RED, PADDING2);
      }
      else if (this.lvl3Highlight.includes(i)) {
        this.runes[rune] = this.generateHighlight(this.runes[rune], PATTERN4, RED, PADDING3);
      }

      i++;
    }
  },
  
  generateHighlight(rune, pattern, patternColor, padding) {
    return `${patternColor}${pattern}${padding}${rune}${padding}${patternColor}${pattern}`;
  }

  */
};

const customItems = {
  items: {},

  customizeHealingPotions(setting) {
    const healingPatternColor = RED;
    const manaPatternColor = BLUE;
    const pattern = PLUS;
    const nameColor = WHITE;

    const hp1 = `${RED}+${WHITE}HP1`;    // Minor Healing Potion
    const hp2 = `${RED}+${WHITE}HP2`;    // Light Healing Potion
    const hp3 = `${RED}+${WHITE}HP3`;    // Healing Potion
    const hp4 = `${RED}+${WHITE}HP4`;    // Greater Healing Potion
    const hp5 = `${RED}+${WHITE}HP5`;    // Super Healing Potion
    
    const mp1 = `${BLUE}+${WHITE}MP1`;   // Minor Mana Potion
    const mp2 = `${BLUE}+${WHITE}MP2`;   // Light Mana Potion
    const mp3 = `${BLUE}+${WHITE}MP3`;   // Mana Potion
    const mp4 = `${BLUE}+${WHITE}MP4`;   // Greater Mana Potion
    const mp5 = `${BLUE}+${WHITE}MP5`;   // Super Mana Potion
    
    const rvs = `${PURPLE}+${WHITE}RPS`; // Rejuvenation Potion
    // const rvl = `${PURPLE}+${WHITE}RPF`; // Full Rejuvenation Potion

    
    const rvl = generateSingleHighlight(PURPLE, PLUS, NO_PADDING, WHITE, 'RPF');  // Full Rejuvenation Potion

    // apply above custom names, unless set to "none" or "custom"
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        this.items.hp1 = hp1;
        this.items.hp2 = hp2;
        this.items.hp3 = hp3;
        this.items.hp4 = hp4;
        this.items.hp5 = hp5;
        this.items.mp1 = mp1;
        this.items.mp2 = mp2;
        this.items.mp3 = mp3;
        this.items.mp4 = mp4;
        this.items.mp5 = mp5;
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        return;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.items.hp4 = hp4;
        this.items.mp4 = mp4;
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        return;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        return;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.items.hp4 = hp4;
        this.items.mp4 = mp4;
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvl = rvl;
        return;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvl = rvl;
        return;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions();
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        return;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions();
        this.items.rvl = rvl;
        return;
      case "hide": // hide all healing potions
        this.hideHealingPotions();
        return;
      case "custom": // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  hideHealingPotions() {
    this.items.hp1 = HIDDEN; // Minor Healing Potion
    this.items.hp2 = HIDDEN; // Light Healing Potion
    this.items.hp3 = HIDDEN; // Healing Potion
    this.items.hp4 = HIDDEN; // Greater Healing Potion
    this.items.hp5 = HIDDEN; // Super Healing Potion
    
    this.items.mp1 = HIDDEN; // Minor Mana Potion
    this.items.mp2 = HIDDEN; // Light Mana Potion
    this.items.mp3 = HIDDEN; // Mana Potion
    this.items.mp4 = HIDDEN; // Greater Mana Potion
    this.items.mp5 = HIDDEN; // Super Mana Potion
    
    this.items.rvs = HIDDEN; // Rejuvenation Potion
    this.items.rvl = HIDDEN; // Full Rejuvenation Potion
  },

  customizeBuffPotions(setting) {
    const yps = `${GREEN}+${WHITE}Antidote`; // Antidote Potion
    const wms = `${GREEN}+${WHITE}Thawing`;  // Thawing Potion
    const vps = `${GREEN}+${WHITE}Stamina`;  // Stamina Potion

    // apply above custom names, unless set to "none"
    switch (setting) {
      case "none": // no change
        return;
      case "all": // show all
        this.items.yps = yps;
        this.items.wms = wms;
        this.items.vps = vps;
        return;
      case "hide": // hide all
        this.items.yps = HIDDEN;
        this.items.wms = HIDDEN;
        this.items.vps = HIDDEN;
        return;
      case "custom": // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  customizeThrowingPotions(setting) {
    const gpl = `${DARKGREEN1}o${WHITE} Gas 1`; // Strangling Gas Potion
    const gpm = `${DARKGREEN1}o${WHITE} Gas 2`; // Choking Gas Potion
    const gps = `${DARKGREEN1}o${WHITE} Gas 3`; // Rancid Gas Potion
    
    const opl = `${ORANGE}o${WHITE} Oil 1`; // Fulminating Potion
    const opm = `${ORANGE}o${WHITE} Oil 2`; // Exploding Potion
    const ops = `${ORANGE}o${WHITE} Oil 3`; // Oil Potion

    // apply above custom names, unless set to "none"
    switch (setting) {
      case "none": // no change
        return;
      case "all": // show all
        this.items.gpl = gpl;
        this.items.gpm = gpm;
        this.items.gps = gps;
        this.items.opl = opl;
        this.items.opm = opm;
        this.items.ops = ops;
        return;
      case "hide": // hide all
        this.items.gpl = HIDDEN;
        this.items.gpm = HIDDEN;
        this.items.gps = HIDDEN;
        this.items.opl = HIDDEN;
        this.items.opm = HIDDEN;
        this.items.ops = HIDDEN;
        return;
      case "custom": // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  customizeScrollsAndTomes(setting) {
    const tbk = `${DARKGREEN1}+${WHITE}TP Tome`; // Tome of Town Portal
    const ibk = `${DARKGREEN1}+${WHITE}ID Tome`; // Tome of Identify
    const tsc = `${GREEN}+${WHITE}TP`;           // Scroll of Town Portal
    const isc = `${GREEN}+${WHITE}ID`;           // Scroll of Identify

    // apply above custom names, unless set to "none"
    switch (setting) {
      case "none": // no change
        return;
      case "all": // show all
        this.items.tbk = tbk;
        this.items.ibk = ibk;
        this.items.tsc = tsc;
        this.items.isc = isc;
        return;
      case "hide": // hide scrolls, show books
        this.items.tbk = tbk;
        this.items.ibk = ibk;
        this.items.tsc = HIDDEN; // Scroll of Town Portal
        this.items.isc = HIDDEN; // Scroll of Identify
        return;
      case "custom": // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  customizeArrowsAndBolts(setting) {
    const aqv = `${GRAY}o${WHITE} Arrows`;
    const cqv = `${GRAY}o${WHITE} Bolts`;

    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.aqv = aqv;
        this.items.cqv = cqv;
        return;
      case "hide":
        this.items.aqv = HIDDEN; // Arrow Quiver
        this.items.cqv = HIDDEN; // Crossbow Bolt Quiver
        return;
      case "custom": // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  customizeKeys(setting) {
    switch (setting) {
      case "none":
        return;
      case "hide":
        this.items.key = HIDDEN;
        return;
      case "custom": // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.key = "Key";
        return;
    }
  },
  

  //==========//
  //   Gems   //
  //==========//
  customizeGems(setting) {
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        this.highlightChipped();
        this.highlightFlawed();
        this.highlightRegular();
        this.highlightFlawless();
        this.highlightPerfect();
        return;
      case "flawless": // hide chipped/flawed/regular gems
        this.hideChipped();
        this.hideFlawed();
        this.hideRegular();
        this.highlightFlawless();
        this.highlightPerfect();
        return;
      case "perfect": // hide chipped/flawed/regular/flawless gems
        this.hideChipped();
        this.hideFlawed();
        this.hideRegular();
        this.hideFlawless();
        this.highlightPerfect();
        return;
      case "hide": // hide chipped/flawed/regular/flawless gems
        this.hideChipped();
        this.hideFlawed();
        this.hideRegular();
        this.hideFlawless();
        this.hidePerfect();
        return;
      case "custom": // [CSTM-GEM1]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        // For Ruby, Sapphire, Emerald and Diamond, see [CSTM-GEM2] in the "Affixes" section above.
        // For some reason, the devs put these gems in another JSON file.

        // chipped
        this.items.gcv = `Chipped Amethyst`;
        this.items.gcw = `Chipped Diamond`;
        this.items.gcg = `Chipped Emerald`;
        this.items.gcr = `Chipped Ruby`;
        this.items.gcb = `Chipped Sapphire`;
        this.items.gcy = `Chipped Topaz`;
        this.items.skc = `Chipped Skull`;
        // flawed
        this.items.gfv = `Flawed Amethyst`;
        this.items.gfw = `Flawed Diamond`;
        this.items.gfg = `Flawed Emerald`;
        this.items.gfr = `Flawed Ruby`;
        this.items.gfb = `Flawed Sapphire`;
        this.items.gfy = `Flawed Topaz`;
        this.items.skf = `Flawed Skull`;
        // regular
        this.items.gsv = `Amethyst`;
     // this.items.gsw = `Diamond`;  // See [CSTM-GEM2]
     // this.items.gsg = `Emerald`;  // See [CSTM-GEM2]
     // this.items.gsr = `Ruby`;     // See [CSTM-GEM2]
     // this.items.gsb = `Sapphire`; // See [CSTM-GEM2]
        this.items.gsy = `Topaz`;
        this.items.sku = `Skull`;
        // flawless
        this.items.gzv = `Flawless Amethyst`;
        this.items.glw = `Flawless Diamond`;
        this.items.glg = `Flawless Emerald`;
        this.items.glr = `Flawless Ruby`;
        this.items.glb = `Flawless Sapphire`;
        this.items.gly = `Flawless Topaz`;
        this.items.skl = `Flawless Skull`;
        //perfect
        this.items.gpv = `Perfect Amethyst`;
        this.items.gpw = `Perfect Diamond`;
        this.items.gpg = `Perfect Emerald`;
        this.items.gpr = `Perfect Ruby`;
        this.items.gpb = `Perfect Sapphire`;
        this.items.gpy = `Perfect Topaz`;
        this.items.skz = `Perfect Skull`;
        return;
    }
  },

  hideChipped() {
    this.items.gcv = HIDDEN;
    this.items.gcw = HIDDEN;
    this.items.gcg = HIDDEN;
    this.items.gcr = HIDDEN;
    this.items.gcb = HIDDEN;
    this.items.gcy = HIDDEN;
    this.items.skc = HIDDEN;
  },

  hideFlawed() {
    this.items.gfv = HIDDEN;
    this.items.gfw = HIDDEN;
    this.items.gfg = HIDDEN;
    this.items.gfr = HIDDEN;
    this.items.gfb = HIDDEN;
    this.items.gfy = HIDDEN;
    this.items.skf = HIDDEN;
  },

  hideRegular() {
    // For Ruby, Sapphire, Emerald and Diamond, see the "Affixes" section above.
    // For some reason, the devs put these gems in another JSON file.
    this.items.gsv = HIDDEN;
    // this.items.gsw = HIDDEN;
    // this.items.gsg = HIDDEN;
    // this.items.gsr = HIDDEN;
    // this.items.gsb = HIDDEN;
    this.items.gsy = HIDDEN;
    this.items.sku = HIDDEN;
  },

  hideFlawless() {
    this.items.gzv = HIDDEN;
    this.items.glw = HIDDEN;
    this.items.glg = HIDDEN;
    this.items.glr = HIDDEN;
    this.items.glb = HIDDEN;
    this.items.gly = HIDDEN;
    this.items.skl = HIDDEN;
  },

  hidePerfect() {
    this.items.gpv = HIDDEN;
    this.items.gpw = HIDDEN;
    this.items.gpg = HIDDEN;
    this.items.gpr = HIDDEN;
    this.items.gpb = HIDDEN;
    this.items.gpy = HIDDEN;
    this.items.skz = HIDDEN;
  },

  highlightChipped() {
    this.items.gcv = `${PURPLE}o${WHITE} Chipped`;  // Chipped Amethyst
    this.items.gcw =  `${WHITE}o${WHITE} Chipped`;  // Chipped Diamond
    this.items.gcg =  `${GREEN}o${WHITE} Chipped`;  // Chipped Emerald
    this.items.gcr =    `${RED}o${WHITE} Chipped`;  // Chipped Ruby
    this.items.gcb =   `${BLUE}o${WHITE} Chipped`;  // Chipped Sapphire
    this.items.gcy = `${YELLOW}o${WHITE} Chipped`;  // Chipped Topaz
    this.items.skc =   `${GRAY}o${WHITE} Chipped`;  // Chipped Skull
  },

  highlightFlawed() {
    this.items.gfv = `${PURPLE}o${WHITE} Flawed`;   // Flawed Amethyst
    this.items.gfw =  `${WHITE}o${WHITE} Flawed`;   // Flawed Diamond
    this.items.gfg =  `${GREEN}o${WHITE} Flawed`;   // Flawed Emerald
    this.items.gfr =    `${RED}o${WHITE} Flawed`;   // Flawed Ruby
    this.items.gfb =   `${BLUE}o${WHITE} Flawed`;   // Flawed Sapphire
    this.items.gfy = `${YELLOW}o${WHITE} Flawed`;   // Flawed Topaz
    this.items.skf =   `${GRAY}o${WHITE} Flawed`;   // Flawed Skull
  },

  highlightRegular() {
    // For Ruby, Sapphire, Emerald and Diamond, see the "Affixes" section above.
    // For some reason, the devs put these gems in another JSON file.
    this.items.gsv = `${PURPLE}o${WHITE} Amethyst`; // Amethyst
 // this.items.gsw =  `${WHITE}o${WHITE} Diamond`;  // Diamond
 // this.items.gsg =  `${GREEN}o${WHITE} Emerald`;  // Emerald
 // this.items.gsr =    `${RED}o${WHITE} Ruby`;     // Ruby
 // this.items.gsb =   `${BLUE}o${WHITE} Sapphire`; // Sapphire
    this.items.gsy = `${YELLOW}o${WHITE} Topaz`;    // Topaz
    this.items.sku =   `${GRAY}o${WHITE} Skull`;    // Skull
  },

  highlightFlawless() {
    this.items.gzv = `${PURPLE}o${WHITE} Flawless`; // Flawless Amethyst
    this.items.glw =  `${WHITE}o${WHITE} Flawless`; // Flawless Diamond
    this.items.glg =  `${GREEN}o${WHITE} Flawless`; // Flawless Emerald
    this.items.glr =    `${RED}o${WHITE} Flawless`; // Flawless Ruby
    this.items.glb =   `${BLUE}o${WHITE} Flawless`; // Flawless Sapphire
    this.items.gly = `${YELLOW}o${WHITE} Flawless`; // Flawless Topaz
    this.items.skl =   `${GRAY}o${WHITE} Flawless`; // Flawless Skull
  },

  highlightPerfect() {
    this.items.gpv = `${PURPLE}o${WHITE} Perfect`;  // Perfect Amethyst
    this.items.gpw =  `${WHITE}o${WHITE} Perfect`;  // Perfect Diamond
    this.items.gpg =  `${GREEN}o${WHITE} Perfect`;  // Perfect Emerald
    this.items.gpr =    `${RED}o${WHITE} Perfect`;  // Perfect Ruby
    this.items.gpb =   `${BLUE}o${WHITE} Perfect`;  // Perfect Sapphire
    this.items.gpy = `${YELLOW}o${WHITE} Perfect`;  // Perfect Topaz
    this.items.skz =   `${GRAY}o${WHITE} Perfect`;  // Perfect Skull
  },
  

  //=============//
  //   Jewelry   //   BUGGED: crafted/rare/set/unique jewelry and charms show up as blue
  //=============//
  customizeRingsAndAmulets(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.amu = `${RED}0${BLUE} Amulet ${RED}0${BLUE}`; // Amulet
        this.items.rin = `${RED}0${BLUE} Ring ${RED}0${BLUE}`;   // Ring
        return;
      case "custom": // [CSTM-RAM]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  // todo: remove broken highlighting, facets only
  customizeJewels(setting) {
    switch (setting) {
      case "none":
        return;
      case "all":
        this.items.jew = `${RED}0${BLUE} Jewel ${RED}0${BLUE}`;
        this.items["Rainbow Facet"] = `${FACET_PREFIX}Rainbow Facet${FACET_SUFFIX}`;
        return;
      case "jewel":
        this.items.jew = `${RED}0${BLUE} Jewel ${RED}0${BLUE}`;
        return;
      case "facet":
        this.items["Rainbow Facet"] = `${FACET_PREFIX}Rainbow Facet${FACET_SUFFIX}`;
        return;
      case "custom": // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },
  
  customizeCharms(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.cm1 = `${RED}0${BLUE} Small Charm ${RED}0${BLUE}`; // Small Charm
        this.items.cm2 = `${RED}0${BLUE} Large Charm ${RED}0${BLUE}`; // Large Charm
        this.items.cm3 = `${RED}0${BLUE} Grand Charm ${RED}0${BLUE}`; // Grand Charm
        return;
      case "custom": // [CSTM-CHA]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },

  
  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    const highlight = `${RED}${PATTERN3}${GOLD}`;
    const padding = STRING_EMPTY + SINGLE_SPACE.repeat(5);
    const prefix = `${highlight}${padding}`;
    const suffix = `${padding}${highlight}`;

    switch (setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        highlightQuestItems(prefix, suffix);
        highlightCube(prefix, suffix);
        return;
      case "xhc": // exclude cube
        highlightQuestItems(prefix, suffix);
        return;
      case "custom": // [CSTM-QST1]
        // Act 1
        this.items.leg = `Wirt's Leg`;           // Wirt's Leg
        this.items.hdm = `Horadric Malus`;       // Horadric Malus
        this.items.bks = `Scroll of Inifuss`;    // Scroll of Inifuss
        this.items.bkd = `Scroll of Inifuss`;    // Scroll of Inifuss (deciphered)
        // Act 2
        this.items.ass = `Book of Skill`;        // Book of Skill
        this.items.tr1 = `Horadric Scroll`;      // Horadric Scroll
        this.items.box = `Horadric Cube`;        // Horadric Cube
        this.items.msf = `Staff of Kings`;       // Staff of Kings
        this.items.vip = `Amulet of the Viper`;  // Amulet of the Viper
        this.items.hst = `Horadric Staff`;       // Horadric Staff
        // Act 3
        this.items.xyz = `Potion of Life`;       // Potion of Life
        this.items.j34 = `A Jade Figurine`;      // A Jade Figurine
        this.items.g34 = `The Golden Bird`;      // The Golden Bird
        this.items.bbb = `Lam Esen's Tome`;      // Lam Esen's Tome
        this.items.g33 = `The Gidbinn`;          // The Gidbinn
        this.items.qf1 = `Khalim's Flail`;       // Khalim's Flail
        this.items.qf2 = `Khalim's Will`;        // Khalim's Will
        this.items.qey = `Khalim's Eye`;         // Khalim's Eye
        this.items.qhr = `Khalim's Heart`;       // Khalim's Heart
        this.items.qbr = `Khalim's Brain`;       // Khalim's Brain
        this.items.mss = `Mephisto's Soulstone`; // Mephisto's Soulstone
        // Act 4
        this.items.hfh = `Hell Forge Hammer`;    // Hell Forge Hammer
        // Act 5
        this.items.ice = `Malah's Potion`;       // Malah's Potion
        this.items.tr2 = `Scroll of Resistance`; // Scroll of Resistance
    
        // Extra
        this.items["Staff of Kings"]      = `Staff of Kings`;      // Staff of Kings
        this.items["Amulet of the Viper"] = `Amulet of the Viper`; // Amulet of the Viper
        this.items["Horadric Staff"]      = `Horadric Staff`;      // Horadric Staff
        this.items.LamTome                = `Lam Esen's Tome`;     // Lam Esen's Tome
        this.items.KhalimFlail            = `Khalim's Flail`;      // Khalim's Flail
        this.items.SuperKhalimFlail       = `Khalim's Will`;       // Khalim's Will
        this.items["Hell Forge Hammer"]   = `Hell Forge Hammer`;   // Hell Forge Hammer
        return;
    }
  },

  highlightQuestItems(prefix, suffix) {
    // Act 1
    this.items.leg = `${prefix}Wirt's Leg${suffix}`;           // Wirt's Leg
    this.items.hdm = `${prefix}Horadric Malus${suffix}`;       // Horadric Malus
    this.items.bks = `${prefix}Scroll of Inifuss${suffix}`;    // Scroll of Inifuss
    this.items.bkd = `${prefix}Scroll of Inifuss${suffix}`;    // Scroll of Inifuss (deciphered)
    // Act 2
    this.items.ass = `${prefix}Book of Skill${suffix}`;        // Book of Skill
    this.items.tr1 = `${prefix}Horadric Scroll${suffix}`;      // Horadric Scroll
    this.items.msf = `${prefix}Staff of Kings${suffix}`;       // Staff of Kings
    this.items.vip = `${prefix}Amulet of the Viper${suffix}`;  // Amulet of the Viper
    this.items.hst = `${prefix}Horadric Staff${suffix}`;       // Horadric Staff
    // Act 3
    this.items.xyz = `${prefix}Potion of Life${suffix}`;       // Potion of Life
    this.items.j34 = `${prefix}A Jade Figurine${suffix}`;      // A Jade Figurine
    this.items.g34 = `${prefix}The Golden Bird${suffix}`;      // The Golden Bird
    this.items.bbb = `${prefix}Lam Esen's Tome${suffix}`;      // Lam Esen's Tome
    this.items.g33 = `${prefix}The Gidbinn${suffix}`;          // The Gidbinn
    this.items.qf1 = `${prefix}Khalim's Flail${suffix}`;       // Khalim's Flail
    this.items.qf2 = `${prefix}Khalim's Will${suffix}`;        // Khalim's Will
    this.items.qey = `${prefix}Khalim's Eye${suffix}`;         // Khalim's Eye
    this.items.qhr = `${prefix}Khalim's Heart${suffix}`;       // Khalim's Heart
    this.items.qbr = `${prefix}Khalim's Brain${suffix}`;       // Khalim's Brain
    this.items.mss = `${prefix}Mephisto's Soulstone${suffix}`; // Mephisto's Soulstone
    // Act 4
    this.items.hfh = `${prefix}Hell Forge Hammer${suffix}`;    // Hell Forge Hammer
    // Act 5
    this.items.ice = `${prefix}Malah's Potion${suffix}`;       // Malah's Potion
    this.items.tr2 = `${prefix}Scroll of Resistance${suffix}`; // Scroll of Resistance

    // Extra
    this.items["Staff of Kings"]      = `${prefix}Staff of Kings${suffix}`;      // Staff of Kings
    this.items["Amulet of the Viper"] = `${prefix}Amulet of the Viper${suffix}`; // Amulet of the Viper
    this.items["Horadric Staff"]      = `${prefix}Horadric Staff${suffix}`;      // Horadric Staff
    this.items.LamTome                = `${prefix}Lam Esen's Tome${suffix}`;     // Lam Esen's Tome
    this.items.KhalimFlail            = `${prefix}Khalim's Flail${suffix}`;      // Khalim's Flail
    this.items.SuperKhalimFlail       = `${prefix}Khalim's Will${suffix}`;       // Khalim's Will
    this.items["Hell Forge Hammer"]   = `${prefix}Hell Forge Hammer${suffix}`;   // Hell Forge Hammer
  },

  highlightCube(prefix, suffix) {
    this.items.box = `${prefix}Horadric Cube${suffix}`;      // Horadric Cube
  },
    
  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(setting){
    const prefix1 = `${RED}${PATTERN2}${ORANGE}${PADDING2}`; // essences
    const prefix2 = `${RED}${PATTERN3}${ORANGE}${PADDING3}`; // token, keys
    const prefix3 = `${RED}${PATTERN4}${ORANGE}${PADDING3}`; // pandemonium organs
    const prefix4 = `${RED}${PATTERN4}${GOLD}${PADDING3}`;   // anni & torch
    const prefix5 = `${RED}${PATTERN2}${GOLD}${PADDING2}`;   // standard of heroes

    const suffix1 = `${PADDING2}${RED}${PATTERN2}${ORANGE}`; // essences
    const suffix2 = `${PADDING3}${RED}${PATTERN3}${ORANGE}`; // token, keys
    const suffix3 = `${PADDING3}${RED}${PATTERN4}${ORANGE}`; // pandemonium organs
    const suffix4 = `${PADDING3}${RED}${PATTERN4}${GOLD}`;   // anni & torch
    const suffix5 = `${PADDING2}${RED}${PATTERN2}${GOLD}`;   // standard of heroes

    switch(setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        this.highlightEssences(prefix1, suffix1);
        this.highlightToken(prefix2, suffix2);
        this.highlightKeys(prefix2, suffix2);
        this.highlightOrgans(prefix3, suffix3);
        this.highlightAnniTorch(prefix4, suffix4);
        this.highlightStandardOfHeroes(prefix5, suffix5);
        return;
      case "xat": // exclude Annihilus and Hellfire Torch from highlighting
        this.highlightEssences(prefix1, suffix1);
        this.highlightToken(prefix2, suffix2);
        this.highlightKeys(prefix2, suffix2);
        this.highlightOrgans(prefix3, suffix3);
        this.highlightStandardOfHeroes(prefix5, suffix5);
        return;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEssences(prefix1, suffix1);
        this.highlightToken(prefix2, suffix2);
        this.highlightKeys(prefix2, suffix2);
        this.highlightOrgans(prefix3, suffix3);
        this.highlightAnniTorch(prefix4, suffix4);
        return;
      case "hsh": // hide Standard of Heroes
        this.highlightEssences(prefix1, suffix1);
        this.highlightToken(prefix2, suffix2);
        this.highlightKeys(prefix2, suffix2);
        this.highlightOrgans(prefix3, suffix3);
        this.highlightAnniTorch(prefix4, suffix4);
        this.items.std = HIDDEN;
        return;
      case "xat-xsh": // exclude Annihilus, Hellfire Torch and Standard of Heroes from highlighting
        this.highlightEssences(prefix1, suffix1);
        this.highlightToken(prefix2, suffix2);
        this.highlightKeys(prefix2, suffix2);
        this.highlightOrgans(prefix3, suffix3);
        return;
      case "xat-hsh": // exclude Annihilus and Hellfire Torch from highlighting, hide Standard of Heroes
        this.highlightEssences(prefix1, suffix1);
        this.highlightToken(prefix2, suffix2);
        this.highlightKeys(prefix2, suffix2);
        this.highlightOrgans(prefix3, suffix3);
        this.items.std = HIDDEN;
        break;
      case "custom": // [CSTM-END]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        return;
    }
  },
  
  highlightEssences(prefix, suffix) {
    this.items.tes = `${prefix}Twisted Essence of Suffering${suffix}`;     // Twisted Essence of Suffering
    this.items.ceh = `${prefix}Charged Essense of Hatred${suffix}`;        // Charged Essense of Hatred
    this.items.bet = `${prefix}Burning Essence of Terror${suffix}`;        // Burning Essence of Terror
    this.items.fed = `${prefix}Festering Essence of Destruction${suffix}`; // Festering Essence of Destruction
  },
  
  highlightToken(prefix, suffix) {
    this.items.toa = `${prefix}Token of Absolution${suffix}`;              // Token of Absolution
  },
  
  highlightKeys(prefix, suffix) {
    this.items.pk1 = `${prefix}Key of Terror${suffix}`;                    // Pandemonium Key 1 Key of Terror
    this.items.pk2 = `${prefix}Key of Hate${suffix}`;                      // Pandemonium Key 2 Key of Hate
    this.items.pk3 = `${prefix}Key of Destruction${suffix}`;               // Pandemonium Key 3 Key of Destruction
  },

  highlightOrgans(prefix, suffix) {
    this.items.dhn = `${prefix}Diablo's Horn${suffix}`;                    // Diablo's Horn
    this.items.bey = `${prefix}Baal's Eye${suffix}`;                       // Baal's Eye
    this.items.mbr = `${prefix}Mephisto's Brain${suffix}`;                 // Mephisto's Brain
  },

  highlightAnniTorch(prefix, suffix) {
    this.items["Annihilus"]      = `${prefix}Annihilus${suffix}`;          // Annihilus
    this.items["Hellfire Torch"] = `${prefix}Hellfire Torch${suffix}`;     // Hellfire Torch
  },

  highlightStandardOfHeroes(prefix, suffix) {
    this.items.std = `${prefix}Standard of Heroes${suffix}`; // Standard of Heroes
  },



  // fixIlvlIndent(){

  // },

  

  // addHighlighting() {
  //   var i = 1;
  //   for (const rune in this.runes) {
  //     if (this.lvl1Highlight.includes(i)) {
  //       this.runes[rune] = this.generateHighlight(this.runes[rune], '**', RED, 2);
  //     }
  //     else if (this.lvl2Highlight.includes(i)) {
  //       this.runes[rune] = this.generateHighlight(this.runes[rune], '*****', RED, 3);
  //     }
  //     else if (this.lvl3Highlight.includes(i)) {
  //       this.runes[rune] = this.generateHighlight(this.runes[rune], '**********', RED, 5);
  //     }

  //     i++;
  //   }
  // },
  
  // generateHighlight(rune, highlight, color, padding) {
  //   return `${color}${highlight}${" ".repeat(padding)}${rune}${" ".repeat(padding)}${color}${highlight}`;
  // }
};

const customUi = {
  items: {},
  
  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    // Section specific to Book of Skill and Potion of Life, as these items are in a different file.
    const highlight = `${RED}${PATTERN3}${GOLD}`;
    const padding = STRING_EMPTY + SINGLE_SPACE.repeat(5);
    const prefix = `${highlight}${padding}`;
    const suffix = `${padding}${highlight}`;

    switch (setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        this.items.ass = `${prefix}Book of Skill${suffix}`;  // Book of Skill
        this.items.xyz = `${prefix}Potion of Life${suffix}`; // Potion of Life
        return;
      case "custom": // [CSTM-QST2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.items.ass = `Book of Skill`;  // Book of Skill
        this.items.xyz = `Potion of Life`; // Potion of Life
        return;
    }
  },
};

//========================//
//   Applying the magic   //
//========================//
function applyLootFilter() {
  applyCustomAffixes();
  applyCustomRuneNames();
  applyCustomItemNames();
  applyCustomUiNames();
  applyTooltipMods();
}

function applyCustomAffixes() {
  if (config.Gold == "none" && config.Gems == "none")
    return;
  
  customAffixes.customizeGold(config.Gold);
  customAffixes.customizeGems(config.Gems);
  applyCustomNames(itemNameAffixesPath, customAffixes.items);
}

function applyCustomRuneNames() {
  if (config.Runes == "none")
    return;
  
  customRunes.customizeRunes(config.Runes);
  applyCustomNames(itemRunesPath, customRunes.runes);
}

function applyCustomItemNames() {
  customItems.customizeHealingPotions(config.HealingPotions);
  customItems.customizeBuffPotions(config.BuffPotions);
  customItems.customizeThrowingPotions(config.ThrowingPotions);
  customItems.customizeScrollsAndTomes(config.ScrollsTomes);
  customItems.customizeArrowsAndBolts(config.ArrowsBolts);
  customItems.customizeKeys(config.Keys);
  customItems.customizeRingsAndAmulets(config.RingsAmulets);
  customItems.customizeJewels(config.Jewels);
  customItems.customizeCharms(config.Charms);
  customItems.customizeGems(config.Gems);
  customItems.customizeQuestItems(config.Quest);
  customItems.customizeEndgameItems(config.Endgame);

  applyCustomNames(itemNamesPath, customItems.items);
}

function applyCustomUiNames() {
  if (config.Quest == "none")
    return;

  customUi.customizeQuestItems(config.Quest);
  applyCustomNames(uiPath, customUi.items);
}

function applyCustomNames(path, customNames) {
  let file = D2RMM.readJson(path); // copy existing file
  file.forEach((item) => { // overwrite provided entries with new names
    if (item.Key in customNames) {
      for (const key in item) {
        if (key !== 'id' && key !== 'Key') {
          item[key] = customNames[item.Key];
        }
      }
    }
  });
  D2RMM.writeJson(path, file); // overwrite existing file with new file
}

function applyTooltipMods() {
  if (config.Tooltip == "none")
    return

  let profileHD = D2RMM.readJson(profileHdPath);

  switch (config.Tooltip) {
    case "all":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      profileHD.TooltipFontSize = config.TooltipSize;
      return;
    case "opacity":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      return;
    case "size":
      profileHD.TooltipFontSize = config.TooltipSize;
      return;
  }
  
  D2RMM.writeJson(profileHdPath, profileHD);
  D2RMM.copyFile('hd', 'hd', true);
  // This simply copies the rune.json files instead of modifying each one with code which 
  // I am too dumb to understand how to do. It gets the job done, it may cause issues if 
  // you have other mods that modify the runes.json files.
}

applyLootFilter();
