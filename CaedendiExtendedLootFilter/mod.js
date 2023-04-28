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
const itemRunesPath = 'local\\lng\\strings\\item-runes.json';
const itemNamesPath = 'local\\lng\\strings\\item-names.json';
const itemNameAffixesPath = 'local\\lng\\strings\\item-nameaffixes.json';

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
const HIDDEN = '' + ' '.repeat(config.HiddenItemTooltipSize);


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
        break;
      case "goldg": // Gold displays as "1234 G" with white numbers and a gold-colored G.
        this.items.gld = `${GOLD1}G`;
        break;
      case "white": // Gold displays as "1234 G" in white.
        this.items.gld = `G`;
        break;
      case "hide": // Gold displays as "1234".
        this.items.gld = HIDDEN;
        break;
      case "custom": // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  // For some reason, the devs put these 4 gems in the wrong JSON file
  customizeGems(setting) {
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        this.items.gsw =  `${WHITE}o ${WHITE}Diamond`;  // Diamond
        this.items.gsg =  `${GREEN}o ${WHITE}Emerald`;  // Emerald
        this.items.gsr =    `${RED}o ${WHITE}Ruby`;     // Ruby
        this.items.gsb =   `${BLUE}o ${WHITE}Sapphire`; // Sapphire
        break;
      case "flawless": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideGems();
        break;
      case "perfect": // hide lvl 1-4 potions, show small/full rejuvs
      this.hideGems();
        break;
      case "custom": // [CSTM-GEM2]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  hideGems() {
    this.items.gsw = ``;
    this.items.gsg = ``;
    this.items.gsr = ``;
    this.items.gsb = ``;
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
  
  lvl1Highlight: [8, 15, 18, 19, 20],                        // Ral, Hel, Ko, Fal, Lem
  lvl2Highlight: [21, 22, 23, 24, 25],                       // Pul, Um, Mal, Ist, Gul
  lvl3Highlight: [26, 27, 28, 29, 30, 31, 32, 33],           // Vex, Ohm, Lo, Sur, Ber, Jah, Cham, Zod
  highlightSettings: ["all", "nrs-hls", "hls-raf", "hls"],

  customizeRunes(setting) {
    switch (setting) {
      case "none":
      case "raf": // Remove affix
        return;
      case "all": // Add rune numbers + highlights + remove affix
        this.setColor(ORANGE1, RED, setting);
        this.addRuneNumbers(setting);
        this.addHighlighting()
        break;
      case "nrs-raf": // Add rune numbers + remove affix
        this.setColor(ORANGE1, ORANGE1, setting);
        this.addRuneNumbers(setting);
        break;
      case "nrs-hls": // Add rune numbers + highlights
        this.addRuneAffix();
        this.setColor(ORANGE1, RED, setting);
        this.addRuneNumbers(setting); 
        this.addHighlighting();
        break;
      case "hls-raf": // Add highlights + remove affix
        this.setColor(ORANGE1, RED, setting);
        this.addHighlighting();
        break;
      case "nrs": // Add rune numbers
        this.addRuneAffix();
        this.setColor(ORANGE1, ORANGE1, setting);
        this.addRuneNumbers(setting);
        break;
      case "hls": // Add highlights
        this.addRuneAffix();
        this.setColor(ORANGE1, RED, setting);
        this.addHighlighting();
        break;
      case "custom": // [CSTM-RUN]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.runes.r01 = `${ORANGE1}El (1)`;                                              // El
        this.runes.r02 = `${ORANGE1}Eld (2)`;                                             // Eld
        this.runes.r03 = `${ORANGE1}Tir (3)`;                                             // Tir
        this.runes.r04 = `${ORANGE1}Nef (4)`;                                             // Nef
        this.runes.r05 = `${ORANGE1}Eth (5)`;                                             // Eth
        this.runes.r06 = `${ORANGE1}Ith (6)`;                                             // Ith
        this.runes.r07 = `${ORANGE1}Tal (7)`;                                             // Tal
        this.runes.r08 = `${RED}**  ${ORANGE1}Ral (8)  ${RED}**`;                         // Ral
        this.runes.r09 = `${ORANGE1}Ort (9)`;                                             // Ort
        this.runes.r10 = `${ORANGE1}Thul (10)`;                                           // Thul
        this.runes.r11 = `${ORANGE1}Amn (11)`;                                            // Amn
        this.runes.r12 = `${ORANGE1}Sol (12)`;                                            // Sol
        this.runes.r13 = `${ORANGE1}Shael (13)`;                                          // Shael
        this.runes.r14 = `${ORANGE1}Dol (14)`;                                            // Dol
        this.runes.r15 = `${RED}**  ${ORANGE1}Hel (15) ${RED}*`;                          // Hel
        this.runes.r16 = `${ORANGE1}Io (16)`;                                             // Io
        this.runes.r17 = `${ORANGE1}Lum (17)`;                                            // Lum
        this.runes.r18 = `${RED}**  ${ORANGE1}Ko (18)  ${RED}**`;                         // Ko
        this.runes.r19 = `${RED}**  ${ORANGE1}Fal (19)  ${RED}**`;                        // Fal
        this.runes.r20 = `${RED}**  ${ORANGE1}Lem (20)  ${RED}**`;                        // Lem
        this.runes.r21 = `${RED}*****   ${ORANGE1}Pul (21)   ${RED}*****`;                // Pul
        this.runes.r22 = `${RED}*****   ${ORANGE1}Um (22)   ${RED}*****`;                 // Um
        this.runes.r23 = `${RED}*****   ${ORANGE1}Mal (23)   ${RED}*****`;                // Mal
        this.runes.r24 = `${RED}*****   ${ORANGE1}Ist (24)   ${RED}*****`;                // Ist
        this.runes.r25 = `${RED}*****   ${ORANGE1}Gul (25)   ${RED}*****`;                // Gul
        this.runes.r26 = `${RED}**********     ${ORANGE1}Vex (26)     ${RED}**********`;  // Vex
        this.runes.r27 = `${RED}**********     ${ORANGE1}Ohm (27)     ${RED}**********`;  // Ohm
        this.runes.r28 = `${RED}**********     ${ORANGE1}Lo (28)     ${RED}**********`;   // Lo
        this.runes.r29 = `${RED}**********     ${ORANGE1}Sur (29)     ${RED}**********`;  // Sur
        this.runes.r30 = `${RED}**********     ${ORANGE1}Ber (30)     ${RED}**********`;  // Ber
        this.runes.r31 = `${RED}**********     ${ORANGE1}Jah (31)     ${RED}**********`;  // Jah
        this.runes.r32 = `${RED}**********     ${ORANGE1}Cham (32)     ${RED}**********`; // Cham
        this.runes.r33 = `${RED}**********     ${ORANGE1}Zod (33)     ${RED}**********`;  // Zod
        break;
    }
  },

  addRuneAffix() {
    for (const rune in this.runes) {
      this.runes[rune] = `${this.runes[rune]} Rune`;
    }
  },

  setColor(color, highlightColor, setting) {
    var i = 1;
    for (const rune in this.runes) {
      if (i > 25 && this.highlightSettings.includes(setting))
        this.runes[rune] = `${highlightColor}${this.runes[rune]}`;
      else 
        this.runes[rune] = `${color}${this.runes[rune]}`;

      i++;
    }
  },
  
  addRuneNumbers(setting) {
    var i = 1;
    for (const rune in this.runes) {
      if (i > 20 && this.highlightSettings.includes(setting)) 
        this.runes[rune] = this.runes[rune] + ` ${RED}(${i})`;
      else
        this.runes[rune] = this.runes[rune] + ` ${ORANGE}(${i})`;

      i++;
    }
  },

  addHighlighting() {
    var i = 1;
    for (const rune in this.runes) {
      if (this.lvl1Highlight.includes(i)) {
        this.runes[rune] = this.generateHighlight(this.runes[rune], '**', RED, 2);
      }
      else if (this.lvl2Highlight.includes(i)) {
        this.runes[rune] = this.generateHighlight(this.runes[rune], '*****', RED, 3);
      }
      else if (this.lvl3Highlight.includes(i)) {
        this.runes[rune] = this.generateHighlight(this.runes[rune], '**********', RED, 5);
      }

      i++;
    }
  },
  
  generateHighlight(rune, highlight, color, padding) {
    return `${color}${highlight}${" ".repeat(padding)}${rune}${" ".repeat(padding)}${color}${highlight}`;
  }
};

const customItems = {
  items: {},

  customizeHealingPotions(setting) {
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
    
    const rvs = `${PURPLE}+${WHITE}SRP`; // Rejuvenation Potion
    const rvl = `${PURPLE}+${WHITE}FRP`; // Full Rejuvenation Potion

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
        break;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.items.hp4 = hp4;
        this.items.mp4 = mp4;
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        break;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        this.hideHealingPotions();
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        break;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.items.hp4 = hp4;
        this.items.mp4 = mp4;
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvl = rvl;
        break;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        this.hideHealingPotions();
        this.items.hp5 = hp5;
        this.items.mp5 = mp5;
        this.items.rvl = rvl;
        break;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        this.hideHealingPotions();
        this.items.rvs = rvs;
        this.items.rvl = rvl;
        break;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        this.hideHealingPotions();
        this.items.rvl = rvl;
        break;
      case "hide": // hide all healing potions
        this.hideHealingPotions();
        break;
      case "custom": // [CSTM-HPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
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
        break;
      case "hide": // hide all
        this.items.yps = HIDDEN;
        this.items.wms = HIDDEN;
        this.items.vps = HIDDEN;
        break;
      case "custom": // [CSTM-BPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  customizeThrowingPotions(setting) {
    const gpl = `${DARKGREEN1}o ${WHITE}Gas 1`; // Strangling Gas Potion
    const gpm = `${DARKGREEN1}o ${WHITE}Gas 2`; // Choking Gas Potion
    const gps = `${DARKGREEN1}o ${WHITE}Gas 3`; // Rancid Gas Potion
    
    const opl = `${ORANGE}o ${WHITE}Oil 1`; // Fulminating Potion
    const opm = `${ORANGE}o ${WHITE}Oil 2`; // Exploding Potion
    const ops = `${ORANGE}o ${WHITE}Oil 3`; // Oil Potion

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
        break;
      case "hide": // hide all
        this.items.gpl = HIDDEN;
        this.items.gpm = HIDDEN;
        this.items.gps = HIDDEN;
        this.items.opl = HIDDEN;
        this.items.opm = HIDDEN;
        this.items.ops = HIDDEN;
        break;
      case "custom": // [CSTM-TPT]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
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
        break;
      case "hide": // hide scrolls, show books
        this.items.tbk = tbk;
        this.items.ibk = ibk;
        this.items.tsc = HIDDEN; // Scroll of Town Portal
        this.items.isc = HIDDEN; // Scroll of Identify
        break;
      case "custom": // [CSTM-SCR]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  customizeArrowsAndBolts(setting) {
    const aqv = `${GRAY}o ${WHITE}Arrows`;
    const cqv = `${GRAY}o ${WHITE}Bolts`;

    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.aqv = aqv;
        this.items.cqv = cqv;
        break;
      case "hide":
        this.items.aqv = HIDDEN; // Arrow Quiver
        this.items.cqv = HIDDEN; // Crossbow Bolt Quiver
        break;
      case "custom": // [CSTM-ARB]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  customizeKeys(setting) {
    switch (setting) {
      case "none":
        return;
      case "hide":
        this.items.key = HIDDEN;
        break;
      case "custom": // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  //=============//
  //   Jewelry   //   BUGGED: crafted/rare/set/unique jewelry and charms show up as blue
  //=============//
  customizeRingsAndAmulets(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.amu = `${RED}0 ${BLUE}Amulet ${RED}0${BLUE}`; // Amulet
        this.items.rin = `${RED}0 ${BLUE}Ring ${RED}0${BLUE}`;   // Ring
        break;
      case "custom": // [CSTM-RAM]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  customizeJewels(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.jew = `${RED}0 ${BLUE}Jewel ${RED}0${BLUE}`; // Jewel
        break;
      case "custom": // [CSTM-JWL]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  customizeCharms(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        this.items.cm1 = `${RED}0 ${BLUE}Small Charm ${RED}0${BLUE}`; // Small Charm
        this.items.cm2 = `${RED}0 ${BLUE}Large Charm ${RED}0${BLUE}`; // Large Charm
        this.items.cm3 = `${RED}0 ${BLUE}Grand Charm ${RED}0${BLUE}`; // Grand Charm
        break;
      case "custom": // [CSTM-CHA]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  //==========//
  //   Gems   //
  //==========//
  customizeGems(setting) {
    // For Ruby, Sapphire, Emerald and Diamond, see "Affixes" above.
    // For some reason, the devs put these gems in another JSON file.

    const gcv = `${PURPLE}o ${WHITE}Chipped`;  // Chipped Amethyst
    const gcw =  `${WHITE}o ${WHITE}Chipped`;  // Chipped Diamond
    const gcg =  `${GREEN}o ${WHITE}Chipped`;  // Chipped Emerald
    const gcr =    `${RED}o ${WHITE}Chipped`;  // Chipped Ruby
    const gcb =   `${BLUE}o ${WHITE}Chipped`;  // Chipped Sapphire
    const gcy = `${YELLOW}o ${WHITE}Chipped`;  // Chipped Topaz
    const skc =   `${GRAY}o ${WHITE}Chipped`;  // Chipped Skull
    
    const gfv = `${PURPLE}o ${WHITE}Flawed`;   // Flawed Amethyst
    const gfw =  `${WHITE}o ${WHITE}Flawed`;   // Flawed Diamond
    const gfg =  `${GREEN}o ${WHITE}Flawed`;   // Flawed Emerald
    const gfr =    `${RED}o ${WHITE}Flawed`;   // Flawed Ruby
    const gfb =   `${BLUE}o ${WHITE}Flawed`;   // Flawed Sapphire
    const gfy = `${YELLOW}o ${WHITE}Flawed`;   // Flawed Topaz
    const skf =   `${GRAY}o ${WHITE}Flawed`;   // Flawed Skull

    const gsv = `${PURPLE}o ${WHITE}Amethyst`; // Amethyst
    // const gsw =  `${WHITE}o ${WHITE}Diamond`;  // Diamond
    // const gsg =  `${GREEN}o ${WHITE}Emerald`;  // Emerald
    // const gsr =    `${RED}o ${WHITE}Ruby`;     // Ruby
    // const gsb =   `${BLUE}o ${WHITE}Sapphire`; // Sapphire
    const gsy = `${YELLOW}o ${WHITE}Topaz`;    // Topaz
    const sku =   `${GRAY}o ${WHITE}Skull`;    // Skull

    const gzv = `${PURPLE}o ${WHITE}Flawless`; // Flawless Amethyst
    const glw =  `${WHITE}o ${WHITE}Flawless`; // Flawless Diamond
    const glg =  `${GREEN}o ${WHITE}Flawless`; // Flawless Emerald
    const glr =    `${RED}o ${WHITE}Flawless`; // Flawless Ruby
    const glb =   `${BLUE}o ${WHITE}Flawless`; // Flawless Sapphire
    const gly = `${YELLOW}o ${WHITE}Flawless`; // Flawless Topaz
    const skl =   `${GRAY}o ${WHITE}Flawless`; // Flawless Skull

    const gpv = `${PURPLE}o ${WHITE}Perfect`;  // Perfect Amethyst
    const gpw =  `${WHITE}o ${WHITE}Perfect`;  // Perfect Diamond
    const gpg =  `${GREEN}o ${WHITE}Perfect`;  // Perfect Emerald
    const gpr =    `${RED}o ${WHITE}Perfect`;  // Perfect Ruby
    const gpb =   `${BLUE}o ${WHITE}Perfect`;  // Perfect Sapphire
    const gpy = `${YELLOW}o ${WHITE}Perfect`;  // Perfect Topaz
    const skz =   `${GRAY}o ${WHITE}Perfect`;  // Perfect Skull
    
    // apply above custom names, unless set to "none" or "custom"
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        // chipped
        this.items.gcv = gcv;
        this.items.gcw = gcw;
        this.items.gcg = gcg;
        this.items.gcr = gcr;
        this.items.gcb = gcb;
        this.items.gcy = gcy;
        this.items.skc = skc;
        // flawed
        this.items.gfv = gfv;
        this.items.gfw = gfw;
        this.items.gfg = gfg;
        this.items.gfr = gfr;
        this.items.gfb = gfb;
        this.items.gfy = gfy;
        this.items.skf = skf;
        // regular
        this.items.gsv = gsv;
        // this.items.gsw = gsw;
        // this.items.gsg = gsg;
        // this.items.gsr = gsr;
        // this.items.gsb = gsb;
        this.items.gsy = gsy;
        this.items.sku = sku;
        // flawless
        this.items.gzv = gzv;
        this.items.glw = glw;
        this.items.glg = glg;
        this.items.glr = glr;
        this.items.glb = glb;
        this.items.gly = gly;
        this.items.skl = skl;
        // perfect
        this.items.gpv = gpv;
        this.items.gpw = gpw;
        this.items.gpg = gpg;
        this.items.gpr = gpr;
        this.items.gpb = gpb;
        this.items.gpy = gpy;
        this.items.skz = skz;
        break;
      case "flawless": // hide lvl 1-3 potions, show small/full rejuvs
        this.hideGems();
        // flawless
        this.items.gzv = gzv;
        this.items.glw = glw;
        this.items.glg = glg;
        this.items.glr = glr;
        this.items.glb = glb;
        this.items.gly = gly;
        this.items.skl = skl;
        // perfect
        this.items.gpv = gpv;
        this.items.gpw = gpw;
        this.items.gpg = gpg;
        this.items.gpr = gpr;
        this.items.gpb = gpb;
        this.items.gpy = gpy;
        this.items.skz = skz;
        break;
      case "perfect": // hide lvl 1-4 potions, show small/full rejuvs
      this.hideGems();
        // perfect
        this.items.gpv = gpv;
        this.items.gpw = gpw;
        this.items.gpg = gpg;
        this.items.gpr = gpr;
        this.items.gpb = gpb;
        this.items.gpy = gpy;
        this.items.skz = skz;
        break;
      case "custom": // [CSTM-GEM1]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        // NOTE: Ruby, Sapphire, Emerald and Diamond have to be set in the "Affixes" section on line 110. See [CSTM-GEM2].
        break;
    }
  },

  hideGems() {
    this.items.gcv = ``;
    this.items.gcw = ``;
    this.items.gcg = ``;
    this.items.gcr = ``;
    this.items.gcb = ``;
    this.items.gcy = ``;
    this.items.skc = ``;

    this.items.gfv = ``;
    this.items.gfw = ``;
    this.items.gfg = ``;
    this.items.gfr = ``;
    this.items.gfb = ``;
    this.items.gfy = ``;
    this.items.skf = ``;

    this.items.gsv = ``;
    // this.items.gsw = ``;
    // this.items.gsg = ``;
    // this.items.gsr = ``;
    // this.items.gsb = ``;
    this.items.gsy = ``;
    this.items.sku = ``;

    this.items.gzv = ``;
    this.items.glw = ``;
    this.items.glg = ``;
    this.items.glr = ``;
    this.items.glb = ``;
    this.items.gly = ``;
    this.items.skl = ``;

    this.items.gpv = ``;
    this.items.gpw = ``;
    this.items.gpg = ``;
    this.items.gpr = ``;
    this.items.gpb = ``;
    this.items.gpy = ``;
    this.items.skz = ``;
  },
  
  //=================//
  //   Quest Items   //
  //=================//
  customizeQuestItems(setting) {
    switch (setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        // Act 1
        this.items.leg = `${RED}**********     ${GOLD}Wirt's Leg     ${RED}**********`;           // Wirt's Leg
        this.items.hdm = `${RED}**********     ${GOLD}Horadric Malus     ${RED}**********`;       // Horadric Malus
        this.items.bks = `${RED}**********     ${GOLD}Scroll of Inifuss     ${RED}**********`;    // Scroll of Inifuss
        this.items.bkd = `${RED}**********     ${GOLD}Scroll of Inifuss     ${RED}**********`;    // Scroll of Inifuss (deciphered)
        // Act 2
        this.items.ass = `${RED}**********     ${GOLD}Book of Skill     ${RED}**********`;        // Book of Skill
        this.items.box = `${RED}**********     ${GOLD}Horadric Cube     ${RED}**********`;        // Horadric Cube
        this.items.tr1 = `${RED}**********     ${GOLD}Horadric Scroll     ${RED}**********`;      // Horadric Scroll
        this.items.msf = `${RED}**********     ${GOLD}Staff of Kings     ${RED}**********`;       // Staff of Kings
        this.items.vip = `${RED}**********     ${GOLD}Amulet of the Viper     ${RED}**********`;  // Amulet of the Viper
        this.items.hst = `${RED}**********     ${GOLD}Horadric Staff     ${RED}**********`;       // Horadric Staff
        // Act 3
        this.items.xyz = `${RED}**********     ${GOLD}Potion of Life     ${RED}**********`;       // Potion of Life
        this.items.j34 = `${RED}**********     ${GOLD}A Jade Figurine     ${RED}**********`;      // A Jade Figurine
        this.items.g34 = `${RED}**********     ${GOLD}The Golden Bird     ${RED}**********`;      // The Golden Bird
        this.items.bbb = `${RED}**********     ${GOLD}Lam Esen's Tome     ${RED}**********`;      // Lam Esen's Tome
        this.items.g33 = `${RED}**********     ${GOLD}The Gidbinn     ${RED}**********`;          // The Gidbinn
        this.items.qf1 = `${RED}**********     ${GOLD}Khalim's Flail     ${RED}**********`;       // Khalim's Flail
        this.items.qf2 = `${RED}**********     ${GOLD}Khalim's Will     ${RED}**********`;        // Khalim's Will
        this.items.qey = `${RED}**********     ${GOLD}Khalim's Eye     ${RED}**********`;         // Khalim's Eye
        this.items.qhr = `${RED}**********     ${GOLD}Khalim's Heart     ${RED}**********`;       // Khalim's Heart
        this.items.qbr = `${RED}**********     ${GOLD}Khalim's Brain     ${RED}**********`;       // Khalim's Brain
        this.items.mss = `${RED}**********     ${GOLD}Mephisto's Soulstone     ${RED}**********`; // Mephisto's Soulstone
        // Act 4
        this.items.hfh = `${RED}**********     ${GOLD}Hellforge Hammer     ${RED}**********`;     // Hellforge Hammer
        // Act 5
        this.items.ice = `${RED}**********     ${GOLD}Malah's Potion     ${RED}**********`;       // Malah's Potion
        this.items.tr2 = `${RED}**********     ${GOLD}Scroll of Resistance     ${RED}**********`; // Scroll of Resistance
        break;
      case "custom": // [CSTM-QST]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(setting){
    switch(setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        this.highlightEndgameItems();
        this.items.std = `${RED}**  ${GOLD}Standard of Heroes  ${RED}**`; // Standard of Heroes
        break;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems();
        break;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems();
        this.items.std = ``;
        break;
      case "custom": // [CSTM-END]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  highlightEndgameItems() {
    this.items.tes = `${RED}**  ${ORANGE}Twisted Essence of Suffering  ${RED}**`;           // Twisted Essence of Suffering
    this.items.ceh = `${RED}**  ${ORANGE}Charged Essense of Hatred  ${RED}**`;              // Charged Essense of Hatred
    this.items.bet = `${RED}**  ${ORANGE}Burning Essence of Terror  ${RED}**`;              // Burning Essence of Terror
    this.items.fed = `${RED}**  ${ORANGE}Festering Essence of Destruction  ${RED}**`;       // Festering Essence of Destruction
    this.items.toa = `${RED}*****   ${ORANGE}Token of Absolution   ${RED}*****`;            // Token of Absolution
    this.items.pk1 = `${RED}*****   ${ORANGE}Key of Terror   ${RED}*****`;                  // Pandemonium Key 1 Key of Terror
    this.items.pk2 = `${RED}*****   ${ORANGE}Key of Hate   ${RED}*****`;                    // Pandemonium Key 2 Key of Hate
    this.items.pk3 = `${RED}*****   ${ORANGE}Key of Destruction   ${RED}*****`;             // Pandemonium Key 3 Key of Destruction
    this.items.dhn = `${RED}**********     ${ORANGE}Diablo's Horn     ${RED}**********`;    // Diablo's Horn
    this.items.bey = `${RED}**********     ${ORANGE}Baal's Eye     ${RED}**********`;       // Baal's Eye
    this.items.mbr = `${RED}**********     ${ORANGE}Mephisto's Brain     ${RED}**********`; // Mephisto's Brain
  },
};

//========================//
//   Applying the magic   //
//========================//
function applyLootFilter() {
  applyCustomAffixes();
  applyCustomRuneNames();
  applyCustomItemNames();
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
      break;
    case "opacity":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      break;
    case "size":
      profileHD.TooltipFontSize = config.TooltipSize;
      break;
  }
  
  D2RMM.writeJson(profileHdPath, profileHD);
  D2RMM.copyFile('hd', 'hd', true);
  // This simply copies the rune.json files instead of modifying each one with code which 
  // I am too dumb to understand how to do. It gets the job done, it may cause issues if 
  // you have other mods that modify the runes.json files.
}

applyLootFilter();
