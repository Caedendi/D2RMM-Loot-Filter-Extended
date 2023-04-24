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
  customizeGold(setting) {
    switch (setting) {
      case "none": // no change
        return;
      case "gold": // Gold displays as "1234 Gold" with white numbers and gold text.
        customAffixes.gld = `${GOLD1}Gold`; 
        break;
      case "goldg": // Gold displays as "1234 G" with white numbers and a gold-colored G.
        customAffixes.gld = `${GOLD1}G`; 
        break;
      case "white": // Gold displays as "1234 G" in white.
        customAffixes.gld = `G`;
        break;
      case "hide": // Gold displays as "1234".
        customAffixes.gld = HIDDEN;
        break;
      case "custom": // [CSTM-GLD]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  }
};

const customRunes = {
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

  customizeRunes(setting) {
    switch (setting) {
      case "none":
      case "raf": // Remove affix
        return;
      case "all": // Add rune numbers + highlights + remove affix
        this.setColor(ORANGE1);
        this.addRuneNumbers();
        this.addHighlighting()
        break;
      case "nrs-raf": // Add rune numbers + remove affix
        this.setColor(ORANGE1);
        this.addRuneNumbers();
        break;
      case "nrs-hls": // Add rune numbers + highlights
        this.setColor(ORANGE1);
        this.addRuneAffix();
        this.addRuneNumbers();
        this.addHighlighting();
        break;
      case "hls-raf": // Add highlights + remove affix
        this.setColor(ORANGE1);
        this.addHighlighting();
        break;
      case "nrs": // Add rune numbers
        this.setColor(ORANGE1);
        this.addRuneAffix();
        this.addRuneNumbers();
        break;
      case "hls": // Add highlights
        this.setColor(ORANGE1);
        this.addRuneAffix();
        this.addHighlighting();
        break;
      case "custom": // [CSTM-RUN]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.r01 = `${ORANGE1}El ${WHITE}[${RED}1${WHITE}]`;                                // El
        this.r02 = `${ORANGE1}Eld ${WHITE}[${RED}2${WHITE}]`;                               // Eld
        this.r03 = `${ORANGE1}Tir ${WHITE}[${RED}3${WHITE}]`;                               // Tir
        this.r04 = `${ORANGE1}Nef ${WHITE}[${RED}4${WHITE}]`;                               // Nef
        this.r05 = `${ORANGE1}Eth ${WHITE}[${RED}5${WHITE}]`;                               // Eth
        this.r06 = `${ORANGE1}Ith ${WHITE}[${RED}6${WHITE}]`;                               // Ith
        this.r07 = `${ORANGE1}Tal ${WHITE}[${RED}7${WHITE}]`;                               // Tal
        this.r08 = `${RED}* ${ORANGE1}Ral ${WHITE}[${RED}8${WHITE}] ${RED}*`;               // Ral
        this.r09 = `${ORANGE1}Ort ${WHITE}[${RED}9${WHITE}]`;                               // Ort
        this.r10 = `${ORANGE1}Thul ${WHITE}[${RED}10${WHITE}]`;                             // Thul
        this.r11 = `${ORANGE1}Amn ${WHITE}[${RED}11${WHITE}]`;                              // Amn
        this.r12 = `${ORANGE1}Sol ${WHITE}[${RED}12${WHITE}]`;                              // Sol
        this.r13 = `${ORANGE1}Shael ${WHITE}[${RED}13${WHITE}]`;                            // Shael
        this.r14 = `${ORANGE1}Dol ${WHITE}[${RED}14${WHITE}]`;                              // Dol
        this.r15 = `${RED}* ${ORANGE1}Hel ${WHITE}[${RED}15${WHITE}] ${RED}*`;              // Hel
        this.r16 = `${ORANGE1}Io ${WHITE}[${RED}16${WHITE}]`;                               // Io
        this.r17 = `${ORANGE1}Lum ${WHITE}[${RED}17${WHITE}]`;                              // Lum
        this.r18 = `${RED}* ${ORANGE1}Ko ${WHITE}[${RED}18${WHITE}] ${RED}*`;               // Ko
        this.r19 = `${RED}* ${ORANGE1}Fal ${WHITE}[${RED}19${WHITE}] ${RED}*`;              // Fal
        this.r20 = `${RED}* ${ORANGE1}Lem ${WHITE}[${RED}20${WHITE}] ${RED}*`;              // Lem
        this.r21 = `${RED}***  ${ORANGE1}Pul ${WHITE}[${RED}21${WHITE}]  ${RED}***`;        // Pul
        this.r22 = `${RED}***  ${ORANGE1}Um ${WHITE}[${RED}22${WHITE}]  ${RED}***`;         // Um
        this.r23 = `${RED}***  ${ORANGE1}Mal ${WHITE}[${RED}23${WHITE}]  ${RED}***`;        // Mal
        this.r24 = `${RED}***  ${ORANGE1}Ist ${WHITE}[${RED}24${WHITE}]  ${RED}***`;        // Ist
        this.r25 = `${RED}***  ${ORANGE1}Gul ${WHITE}[${RED}25${WHITE}]  ${RED}***`;        // Gul
        this.r26 = `${RED}*****   ${ORANGE1}Vex ${WHITE}[${RED}26${WHITE}]   ${RED}*****`;  // Vex
        this.r27 = `${RED}*****   ${ORANGE1}Ohm ${WHITE}[${RED}27${WHITE}]   ${RED}*****`;  // Ohm
        this.r28 = `${RED}*****   ${ORANGE1}Lo ${WHITE}[${RED}28${WHITE}]   ${RED}*****`;   // Lo
        this.r29 = `${RED}*****   ${ORANGE1}Sur ${WHITE}[${RED}29${WHITE}]   ${RED}*****`;  // Sur
        this.r30 = `${RED}*****   ${ORANGE1}Ber ${WHITE}[${RED}30${WHITE}]   ${RED}*****`;  // Ber
        this.r31 = `${RED}*****   ${ORANGE1}Jah ${WHITE}[${RED}31${WHITE}]   ${RED}*****`;  // Jah
        this.r32 = `${RED}*****   ${ORANGE1}Cham ${WHITE}[${RED}32${WHITE}]   ${RED}*****`; // Cham
        this.r33 = `${RED}*****   ${ORANGE1}Zod ${WHITE}[${RED}33${WHITE}]   ${RED}*****`;  // Zod
        break;
    }
  },

  setColor(color) {
    this.forEach(rune => `${color}${rune}`);
  },

  addRuneAffix() {
    this.forEach(rune => rune = rune + " Rune");
  },
  
  addRuneNumbers() {
    var i = 1;
    customRunes.forEach(rune => {
      rune = `${rune} ${WHITE}[${RED}${i}${WHITE}]`;
      i++;
    });
  },
  
  // TODO
  // TODO
  // TODO
  // TODO
  // TODO
  // TODO
  addHighlighting(rune, highlight, color, padding) {
    return `${color}${highlight}${" ".repeat(padding)}${rune}${" ".repeat(padding)}${color}${highlight}`;
  },
};

const customItems = {
  customizeHealingPotions(setting) {
    const hp1 = `${RED}+${WHITE}HP1`; // Minor Healing Potion
    const hp2 = `${RED}+${WHITE}HP2`; // Light Healing Potion
    const hp3 = `${RED}+${WHITE}HP3`; // Healing Potion
    const hp4 = `${RED}+${WHITE}HP4`; // Greater Healing Potion
    const hp5 = `${RED}+${WHITE}HP5`; // Super Healing Potion
    
    const mp1 = `${BLUE}+${WHITE}MP1`; // Minor Mana Potion
    const mp2 = `${BLUE}+${WHITE}MP2`; // Light Mana Potion
    const mp3 = `${BLUE}+${WHITE}MP3`; // Mana Potion
    const mp4 = `${BLUE}+${WHITE}MP4`; // Greater Mana Potion
    const mp5 = `${BLUE}+${WHITE}MP5`; // Super Mana Potion
    
    const rvs = `${PURPLE}+${WHITE}Small`; // Rejuvenation Potion
    const rvl = `${PURPLE}+${WHITE}Full`;  // Full Rejuvenation Potion

    // apply above custom names, unless set to "none" or "custom"
    switch (setting) {
      case "none":
        return;
      case "all": // show all
        customItems.hp1 = hp1;
        customItems.hp2 = hp2;
        customItems.hp3 = hp3;
        customItems.hp4 = hp4;
        customItems.hp5 = hp5;
        customItems.mp1 = mp1;
        customItems.mp2 = mp2;
        customItems.mp3 = mp3;
        customItems.mp4 = mp4;
        customItems.mp5 = mp5;
        customItems.rvs = rvs;
        customItems.rvl = rvl;
        break;
      case "hide3": // hide lvl 1-3 potions, show small/full rejuvs
        hideHealingPotions();
        customItems.hp4 = hp4;
        customItems.mp4 = mp4;
        customItems.hp5 = hp5;
        customItems.mp5 = mp5;
        customItems.rvs = rvs;
        customItems.rvl = rvl;
        break;
      case "hide4": // hide lvl 1-4 potions, show small/full rejuvs
        hideHealingPotions();
        customItems.hp5 = hp5;
        customItems.mp5 = mp5;
        customItems.rvs = rvs;
        customItems.rvl = rvl;
        break;
      case "hide3sr": // hide lvl 1-3 potions and small rejuvs, show full rejuvs
        hideHealingPotions();
        customItems.hp4 = hp4;
        customItems.mp4 = mp4;
        customItems.hp5 = hp5;
        customItems.mp5 = mp5;
        customItems.rvl = rvl;
        break;
      case "hide4sr": // hide lvl 1-4 potions and small rejuvs, show full rejuvs
        hideHealingPotions();
        customItems.hp5 = hp5;
        customItems.mp5 = mp5;
        customItems.rvl = rvl;
        break;
      case "sfr": // hide all healing/mana potions, show only small/full rejuvs
        hideHealingPotions();
        customItems.rvs = rvs;
        customItems.rvl = rvl;
        break;
      case "fr": // hide all healing/mana potions and small rejuvs, show only full rejuvs
        hideHealingPotions();
        customItems.rvl = rvl;
        break;
      case "hide": // hide all healing potions
        hideHealingPotions();
        break;
      case "custom": 
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  hideHealingPotions() {
    customItems.hp1 = HIDDEN; // Minor Healing Potion
    customItems.hp2 = HIDDEN; // Light Healing Potion
    customItems.hp3 = HIDDEN; // Healing Potion
    customItems.hp4 = HIDDEN; // Greater Healing Potion
    customItems.hp5 = HIDDEN; // Super Healing Potion
    
    customItems.mp1 = HIDDEN; // Minor Mana Potion
    customItems.mp2 = HIDDEN; // Light Mana Potion
    customItems.mp3 = HIDDEN; // Mana Potion
    customItems.mp4 = HIDDEN; // Greater Mana Potion
    customItems.mp5 = HIDDEN; // Super Mana Potion
    
    customItems.rvs = HIDDEN; // Rejuvenation Potion
    customItems.rvl = HIDDEN; // Full Rejuvenation Potion
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
        customItems.yps = yps;
        customItems.wms = wms;
        customItems.vps = vps;
        break;
      case "hide": // hide all
        customItems.yps = HIDDEN;
        customItems.wms = HIDDEN;
        customItems.vps = HIDDEN;
        break;
      case "custom":
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
        customItems.gpl = gpl;
        customItems.gpm = gpm;
        customItems.gps = gps;
        customItems.opl = opl;
        customItems.opm = opm;
        customItems.ops = ops;
        break;
      case "hide": // hide all
        customItems.gpl = HIDDEN;
        customItems.gpm = HIDDEN;
        customItems.gps = HIDDEN;
        customItems.opl = HIDDEN;
        customItems.opm = HIDDEN;
        customItems.ops = HIDDEN;
        break;
      case "custom":
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
        customItems.tbk = tbk;
        customItems.ibk = ibk;
        customItems.tsc = tsc;
        customItems.isc = isc;
        break;
      case "hide": // hide scrolls, show books
        customItems.tbk = tbk;
        customItems.ibk = ibk;
        customItems.tsc = HIDDEN; // Scroll of Town Portal
        customItems.isc = HIDDEN; // Scroll of Identify
        break;
      case "custom":
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  customizeArrowsAndBolts(setting) {
    const aqv = `${GRAY}o ${WHITE}Arrows`;
    const bqv = `${GRAY}o ${WHITE}Bolts`;

    switch (setting) {
      case "none":
        return;
      case "highlight":
        customItems.aqv = aqv;
        customItems.bqv = bqv;
        break;
      case "hide":
        customItems.aqv = HIDDEN; // Arrow Quiver
        customItems.cqv = HIDDEN; // Crossbow Bolt Quiver
        break;
      case "custom":
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
        customItems.amu = `${RED}0 ${BLUE}Amulet ${RED}0${BLUE}`; // Amulet
        customItems.rin = `${RED}0 ${BLUE}Ring ${RED}0${BLUE}`;   // Ring
        break;
      case "custom":
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  customizeJewels(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        customItems.jew = `${RED}0 ${BLUE}Jewel ${RED}0${BLUE}`; // Jewel
        break;
      case "custom":
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  customizeCharms(setting) {
    switch (setting) {
      case "none":
        return;
      case "highlight":
        customItems.cm1 = `${RED}0 ${BLUE}Small Charm ${RED}0${BLUE}`; // Small Charm
        customItems.cm2 = `${RED}0 ${BLUE}Large Charm ${RED}0${BLUE}`; // Large Charm
        customItems.cm3 = `${RED}0 ${BLUE}Grand Charm ${RED}0${BLUE}`; // Grand Charm
        break;
      case "custom":
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  //==========//
  //   Gems   //
  //==========//
  customizeGems(setting) {
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
    const gsw =  `${WHITE}o ${WHITE}Diamond`;  // Diamond
    const gsg =  `${GREEN}o ${WHITE}Emerald`;  // Emerald
    const gsr =    `${RED}o ${WHITE}Ruby`;     // Ruby
    const gsb =   `${BLUE}o ${WHITE}Sapphire`; // Sapphire
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
        customItems.gcv = gcv;
        customItems.gcw = gcw;
        customItems.gcg = gcg;
        customItems.gcr = gcr;
        customItems.gcb = gcb;
        customItems.gcy = gcy;
        customItems.skc = skc;
        // flawed
        customItems.gfv = gfv;
        customItems.gfw = gfw;
        customItems.gfg = gfg;
        customItems.gfr = gfr;
        customItems.gfb = gfb;
        customItems.gfy = gfy;
        customItems.skf = skf;
        // regular
        customItems.gsv = gsv;
        customItems.gsw = gsw;
        customItems.gsg = gsg;
        customItems.gsr = gsr;
        customItems.gsb = gsb;
        customItems.gsy = gsy;
        customItems.sku = sku;
        // flawless
        customItems.gzv = gzv;
        customItems.glw = glw;
        customItems.glg = glg;
        customItems.glr = glr;
        customItems.glb = glb;
        customItems.gly = gly;
        customItems.skl = skl;
        // perfect
        customItems.gpv = gpv;
        customItems.gpw = gpw;
        customItems.gpg = gpg;
        customItems.gpr = gpr;
        customItems.gpb = gpb;
        customItems.gpy = gpy;
        customItems.skz = skz;
        break;
      case "flawless": // hide lvl 1-3 potions, show small/full rejuvs
        hideGems();
        // flawless
        customItems.gzv = gzv;
        customItems.glw = glw;
        customItems.glg = glg;
        customItems.glr = glr;
        customItems.glb = glb;
        customItems.gly = gly;
        customItems.skl = skl;
        // perfect
        customItems.gpv = gpv;
        customItems.gpw = gpw;
        customItems.gpg = gpg;
        customItems.gpr = gpr;
        customItems.gpb = gpb;
        customItems.gpy = gpy;
        customItems.skz = skz;
        break;
      case "perfect": // hide lvl 1-4 potions, show small/full rejuvs
      hideGems();
        // perfect
        customItems.gpv = gpv;
        customItems.gpw = gpw;
        customItems.gpg = gpg;
        customItems.gpr = gpr;
        customItems.gpb = gpb;
        customItems.gpy = gpy;
        customItems.skz = skz;
        break;
      case "custom": 
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  hideGems() {
    customItems.gcv = ``;
    customItems.gcw = ``;
    customItems.gcg = ``;
    customItems.gcr = ``;
    customItems.gcb = ``;
    customItems.gcy = ``;
    customItems.gfv = ``;
    customItems.gfw = ``;
    customItems.gfg = ``;
    customItems.gfr = ``;
    customItems.gfb = ``;
    customItems.gfy = ``;
    customItems.gsv = ``;
    customItems.gsw = ``;
    customItems.gsg = ``;
    customItems.gsr = ``;
    customItems.gsb = ``;
    customItems.gsy = ``;
    customItems.gzv = ``;
    customItems.glw = ``;
    customItems.glg = ``;
    customItems.glr = ``;
    customItems.glb = ``;
    customItems.gly = ``;
    customItems.gpv = ``;
    customItems.gpw = ``;
    customItems.gpg = ``;
    customItems.gpr = ``;
    customItems.gpb = ``;
    customItems.gpy = ``;
    customItems.skc = ``;
    customItems.skf = ``;
    customItems.sku = ``;
    customItems.skl = ``;
    customItems.skz = ``;
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
        customItems.leg = `${RED}***  ${GOLD}Wirt's Leg  ${RED}***`;           // Wirt's Leg
        customItems.hdm = `${RED}***  ${GOLD}Horadric Malus  ${RED}***`;       // Horadric Malus
        customItems.bks = `${RED}***  ${GOLD}Scroll of Inifuss  ${RED}***`;    // Scroll of Inifuss
        customItems.bkd = `${RED}***  ${GOLD}Scroll of Inifuss  ${RED}***`;    // Scroll of Inifuss (deciphered)
        // Act 2
        customItems.ass = `${RED}***  ${GOLD}Book of Skill  ${RED}***`;        // Book of Skill
        customItems.box = `${RED}***  ${GOLD}Horadric Cube  ${RED}***`;        // Horadric Cube
        customItems.tr1 = `${RED}***  ${GOLD}Horadric Scroll  ${RED}***`;      // Horadric Scroll
        customItems.msf = `${RED}***  ${GOLD}Staff of Kings  ${RED}***`;       // Staff of Kings
        customItems.vip = `${RED}***  ${GOLD}Amulet of the Viper  ${RED}***`;  // Amulet of the Viper
        customItems.hst = `${RED}***  ${GOLD}Horadric Staff  ${RED}***`;       // Horadric Staff
        // Act 3
        customItems.xyz = `${RED}***  ${GOLD}Potion of Life  ${RED}***`;       // Potion of Life
        customItems.j34 = `${RED}***  ${GOLD}A Jade Figurine  ${RED}***`;      // A Jade Figurine
        customItems.g34 = `${RED}***  ${GOLD}The Golden Bird  ${RED}***`;      // The Golden Bird
        customItems.bbb = `${RED}***  ${GOLD}Lam Esen's Tome  ${RED}***`;      // Lam Esen's Tome
        customItems.g33 = `${RED}***  ${GOLD}The Gidbinn  ${RED}***`;          // The Gidbinn
        customItems.qf1 = `${RED}***  ${GOLD}Khalim's Flail  ${RED}***`;       // Khalim's Flail
        customItems.qf2 = `${RED}***  ${GOLD}Khalim's Will  ${RED}***`;        // Khalim's Will
        customItems.qey = `${RED}***  ${GOLD}Khalim's Eye  ${RED}***`;         // Khalim's Eye
        customItems.qhr = `${RED}***  ${GOLD}Khalim's Heart  ${RED}***`;       // Khalim's Heart
        customItems.qbr = `${RED}***  ${GOLD}Khalim's Brain  ${RED}***`;       // Khalim's Brain
        customItems.mss = `${RED}***  ${GOLD}Mephisto's Soulstone  ${RED}***`; // Mephisto's Soulstone
        // Act 4
        customItems.hfh = `${RED}***  ${GOLD}Hellforge Hammer  ${RED}***`;     // Hellforge Hammer
        // Act 5
        customItems.ice = `${RED}***  ${GOLD}Malah's Potion  ${RED}***`;       // Malah's Potion
        customItems.tr2 = `${RED}***  ${GOLD}Scroll of Resistance  ${RED}***`; // Scroll of Resistance
        break;
      case "custom":
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },

  //===================================================//
  //   Endgame: Pandemonium Event, Tokens & Essences   //
  //===================================================//
  customizeEndgameItems(){
    switch(setting) {
      case "none": // no change
        return;
      case "all": // highlight all
        this.highlightEndgameItems();
        customItems.std = `${RED}* ${GOLD}Standard of Heroes ${RED}*`; // Standard of Heroes
        break;
      case "xsh": // exclude Standard of Heroes from highlighting
        this.highlightEndgameItems();
        break;
      case "hsh": // hide Standard of Heroes
        this.highlightEndgameItems();
        customItems.std = ``;
        break;
      case "custom":
        // ADD YOUR CUSTOM ITEM NAMES HERE
        break;
    }
  },
  
  highlightEndgameItems() {
    customItems.tes = `${RED}* ${ORANGE}Twisted Essence of Suffering ${RED}*`;     // Twisted Essence of Suffering
    customItems.ceh = `${RED}* ${ORANGE}Charged Essense of Hatred ${RED}*`;        // Charged Essense of Hatred
    customItems.bet = `${RED}* ${ORANGE}Burning Essence of Terror ${RED}*`;        // Burning Essence of Terror
    customItems.fed = `${RED}* ${ORANGE}Festering Essence of Destruction ${RED}*`; // Festering Essence of Destruction
    customItems.toa = `${RED}***  ${ORANGE}Token of Absolution  ${RED}***`;        // Token of Absolution
    customItems.pk1 = `${RED}***  ${ORANGE}Pandemonium Key 1  ${RED}***`;          // Pandemonium Key 1 Key of Destruction
    customItems.pk2 = `${RED}***  ${ORANGE}Pandemonium Key 2  ${RED}***`;          // Pandemonium Key 2 Key of Hate
    customItems.pk3 = `${RED}***  ${ORANGE}Pandemonium Key 3  ${RED}***`;          // Pandemonium Key 3 Key of Terror
    customItems.dhn = `${RED}***  ${ORANGE}Diablo's Horn  ${RED}***`;              // Diablo's Horn
    customItems.bey = `${RED}***  ${ORANGE}Baal's Eye  ${RED}***`;                 // Baal's Eye
    customItems.mbr = `${RED}***  ${ORANGE}Mephisto's Brain  ${RED}***`;           // Mephisto's Brain
  },
};

//========================//
//   Applying the magic   //
//========================//
function applyLootFilter() {
  applyCustomGoldName();
  applyCustomRuneNames();
  applyCustomItemNames();
  applyTooltipMods();
}

function applyCustomGoldName() {
  if (config.Gold == "none")
    return;
  
  customAffixes.customizeGold(config.Gold);
  applyCustomNames(itemNameAffixesPath, customAffixes);
}

function applyCustomRuneNames() {
  if (config.Runes == "none")
    return;
  
  customRunes.customizeRunes(config.Runes);
  applyCustomNames(itemRunesPath, customRunes);
}

function applyCustomItemNames() {
  customItems.customizeHealingPotions(config.HealingPotions);
  customItems.customizeBuffPotions(config.BuffPotions);
  customItems.customizeThrowingPotions(config.ThrowingPotions);
  customItems.customizeScrollsAndTomes(config.ScrollsTomes);
  customItems.customizeArrowsAndBolts(config.ArrowsBolts);
  customItems.customizeRingsAndAmulets(config.RingsAmulets);
  customItems.customizeJewels(config.Jewels);
  customItems.customizeCharms(config.Charms);
  customItems.customizeGems(config.Gems);
  customItems.customizeQuestItems(config.Quest);
  customItems.customizeEndgameItems(config.Endgame);

  applyCustomNames(itemNamesPath, customItems);
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
