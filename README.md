# Caedendi's Extended Loot Filter for D2RMM

_See also: [Caedendi's Simple Loot Filter for D2RMM](https://github.com/Caedendi/D2RMM-Loot-Filter-Simple)_

Adds an expansive customizable loot filter with a shitload of presets to Diablo 2: Resurrected using D2RMM. <br>
Hide junk, clean up tooltips to remove clutter and emphasize important items. For the full feature list, see below.

Recommended for those who prefer toggling presets to reach their desired functionality. <br>
If you'd rather have a compact list to act as a template for your own naming schemes, see the Simple version above.

## Table of Contents

- [Features](#features)
- [Presets Overview](#presets-overview)
- [Installation](#installation)
- [Recommended Mods](#recommended-mods)
- [Roadmap](#roadmap)
- [Credits](#credits)
  - [Code](#code)
  - [Filter Style](#filter-style)
- [License/Permissions](#licensepermissions)


## Screenshots

| Various items                                             | Runes                                                                    |
|-----------------------------------------------------------|--------------------------------------------------------------------------|
| ![01_pots_scrolls_gold](https://i.imgur.com/AGELRY4.png)  | ![03_runes_numbers](https://i.imgur.com/x91wdr9.png)                     |
| ![02_gems_quest_endgame](https://i.imgur.com/ObIq8LL.png) | ![04_runes_numbers_highlights_no-affix](https://i.imgur.com/f1DxeAI.png) |

---

<p float="left">
<img src="https://i.imgur.com/AGELRY4.png" alt="01_pots_scrolls_gold" width="49%">
<img src="https://i.imgur.com/ObIq8LL.png" alt="02_gems_quest_endgame" width="49%">
</p>

<p float="left">
<img src="https://i.imgur.com/x91wdr9.png" alt="03_runes_numbers" width="49%">
<img src="https://i.imgur.com/f1DxeAI.png" alt="04_runes_numbers_highlights_no-affix" width="49%">
</p>


## Features

- **Customize to your liking:**
  - Alter or hide each item type to your preference using the presets in the D2RMM settings.
  - Shorten or hide junk.
  - Emphasize the good/important stuff (runes, flawless gems, essences, uber keys/organs, quest items, etc).
  - For a full list of features, see [Presets Overview](#presets-overview).
  - Don't forget to reload and apply in D2RMM!
- **Completely optional:** 
  - Untoggling everything means no modding will be applied.
- **Apply your own custom naming schemes for specific item types**:
  - Set the item type to "Custom", open the mod.js file in Notepad and add your personalized naming schemes on the lines mentioned in the item type's setting description.
  - To hide an item, change its name to HIDDEN (without quotes). The value of HIDDEN (amount of spaces) can be changed in the D2RMM settings.
  - Don't forget to reload and apply in D2RMM!
- **Item tooltip customization:**
  - Modify the size and background opacity of the tooltip for items on the ground and in the inventory.
- **Rings, Amulets, Jewels and Charms customization disabled by default:**
  - Because of a bug, crafted/rare/set/unique variants of these items are also changed to the custom name/color.
  - If you enable this, make sure to pick up _all of them_ or you'd might miss a unique!


## Presets Overview

| Item Type                                    | Presets                                                    |
|----------------------------------------------|------------------------------------------------------------|
| **Gold**                                     | No change                                                  |
|                                              | Gold text                                                  |
|                                              | **Gold G (default)**                                       |
|                                              | White G                                                    |
|                                              | Hide affix                                                 |
|                                              | Custom                                                     |
| **Runes**                                    | No change                                                  |
|                                              | **Add rune numbers + highlights + remove affix (default)** |
|                                              | Add rune numbers + remove affix                            |
|                                              | Add rune numbers + highlights                              |
|                                              | Add highlights + remove affix                              |
|                                              | Add rune numbers                                           |
|                                              | Add highlights                                             |
|                                              | Remove affix                                               |
|                                              | Custom                                                     |
| **Healing Potions**                          | No change                                                  |
|                                              | **All (default)**                                          |
|                                              | Hide lvl 3                                                 |
|                                              | Hide lvl 4                                                 |
|                                              | Hide lvl 3 + small rejuvs                                  |
|                                              | Hide lvl 4 + small rejuvs                                  |
|                                              | Show only rejuvs                                           |
|                                              | Show only full rejuvs                                      |
|                                              | Hide all                                                   |
|                                              | Custom                                                     |
| **Buff Potions**                             | No change                                                  |
|                                              | **All (default)**                                          |
|                                              | Hide                                                       |
|                                              | Custom                                                     |
| **Throwing Potions**                         | No change                                                  |
|                                              | **All (default)**                                          |
|                                              | Hide                                                       |
|                                              | Custom                                                     |
| **Scrolls & Tomes**                          | No change                                                  |
|                                              | **All (default)**                                          |
|                                              | Hide scrolls                                               |
|                                              | Custom                                                     |
| **Arrows & Bolts**                           | No change                                                  |
|                                              | **Highlight (default)**                                    |
|                                              | Hide                                                       |
|                                              | Custom                                                     |
| **Keys**                                     | **No change (default)**                                    |
|                                              | Hide                                                       |
|                                              | Custom                                                     |
| **Rings, Amulets, Jewels & Charms [BUGGED]** | **No change (default)**                                    |
|                                              | Highlight                                                  |
|                                              | Custom                                                     |
| **Gems**                                     | No change                                                  |
|                                              | **Highlight all (default)**                                |
|                                              | Highlight, show only flawless & perfect                    |
|                                              | Highlight, show only perfect                               |
|                                              | Custom                                                     |
| **Quest items**                              | No change                                                  |
|                                              | **Highlight (default)**                                    |
|                                              | Custom                                                     |
| **Endgame Items**                            | No change                                                  |
|                                              | **Highlight (default)**                                    |
|                                              | Highlight (exclude Standard of Heroes)                     |
|                                              | Highlight, hide Standard of Heroes                         |
|                                              | Custom                                                     |
| **Tooltip size for hidden items**            | **0 (default)** to 25 (max) spaces                         |
| **Tooltip**                                  | **No change (default)**                                    |
|                                              | Opacity & Size                                             |
|                                              | Opactiy                                                    |
|                                              | Size                                                       |


## Installation

- Download and install [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169), then run it.
- Download and extract this mod folder to /D2RMM/mods/.
- See D2RMM instructions on how to configure and enable.
- Play the game!


## Recommended Mods

In addition to this, I recommend you also use the following D2RMM mods:

| Mod                                                                             |   Creator   | Notes                                                                                              |
|---------------------------------------------------------------------------------|:-----------:|----------------------------------------------------------------------------------------------------|
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                      |   olegbl    | So you don't accidentally get yourself banned.                                                     |
| [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200)      |   olegbl    | In case any mod touches __profilehd_ and screws up the font size in the settings menu.             |
| [LightPillar](https://www.nexusmods.com/diablo2resurrected/mods/197)            |   qhu91it   | Add an awesome effect when certain items drop.                                                     |
| [Skip Intro Videos](https://www.nexusmods.com/diablo2resurrected/mods/179)      |   olegbl    | On startup, gets you straight to the title screen.                                                 |
| [Towns QoL Changes](https://www.nexusmods.com/diablo2resurrected/mods/310)      | night0wl117 | Move town starting points, TP locations and Cain's position in Act 5.                              |
| [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183)              |   olegbl    | Teleport and buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_ |
| [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174)        |   olegbl    | Adds the ilvl to the tooltips of all items with an ilvl.                                           |
| [Short Quality Prefixes](https://www.nexusmods.com/diablo2resurrected/mods/214) |    Jobus    | Shortens the Superior/Inferior prefixes _(will be added to this mod in a future update)_.          |


## Roadmap

- [x] Finish code
  - [x] Rework to implement loads of toggles & presets
  - [x] Implement/fix rune highlighting
- [x] Document mod
  - [x] JSON descriptions
  - [x] Add all custom naming shortcut codes to code & preset descriptions
  - [x] Finish README
- [x] Test
  - [x] verify keys
  - [x] verify gas/oil potions
  - [x] verify essences
- [ ] Publish mod
  - [x] Create pictures
  - [ ] Link pictures in README
  - [ ] Git tag + release
  - [ ] Publish on Nexus Mods
  - [ ] Reddit post
- [ ] Fix known bugs:
  - [x] Not working for regular Ruby, Sapphire, Emerald and Diamond
  - [ ] Enabling jewelry turns crafted/rare/set/unique jewelry blue
- [ ] Add features:
  - [ ] Integrate [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214/?tab=files&category=archived) or [Show Item Quality for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/351)
  - [ ] Different emphasis for unique charms, rare jewels and facets (rainbow color)


## Credits

This loot filter mod is based on code from existing mods and inspired by existing styles. I have added code optimizations, a shit-ton of toggles and my own personal flair and preferences. <br>
Remnants of other people's codes remain, so I have tried to list the credits as accurately as I can. If you see any of your own code in this mod and it isn't credited, please send me a message.

Many thanks to:

### Code
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317) for acting as a base to build upon and the tooltip customization features
- [olegbl](https://github.com/olegbl) for:
  - Creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169).
  - His [example mods](https://github.com/olegbl/d2rmm.mods) in general.
  - His [Short Potion Names](https://www.nexusmods.com/diablo2resurrected/mods/177) mod for the list of colors.

### Filter Style
- [Path of Diablo filters](https://pathofdiablo.com/wiki/index.php?title=List_of_Loot_Filters) for removing all that clutter on Path of Diablo and inspiring me to create this loot filter for D2R.
  - Mainly [Darkgale](https://www.twitch.tv/darkgale)'s filter called [Filtergale](https://www.reddit.com/r/pathofdiablo/comments/i9hdw7/filtergale/) ([download](https://greendu.de/s/ZbDwHekAg3rmeRB/download?path=%2F&files=item.filter)) regarding styling.
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317)


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is given), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.