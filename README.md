# Caedendi's Extended Loot Filter for D2RMM

_See also: [Caedendi's Simple Loot Filter for D2RMM](https://github.com/Caedendi/D2RMM-Loot-Filter-Simple)_

Adds a customizable loot filter with lots of presets to Diablo 2: Resurrected using D2RMM. <br>
Cleans up item names to remove clutter and emphasizes important items. For the full feature list, see below.


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


## Features

- This mod was written in a way that allows for easy item name customizations by end users.
  - Just open the mod.js file in Notepad and change whatever item name into what you'd like it to be
  - Don't forget to reload and apply in D2RMM!
- All mods are optional and can be toggled in the D2RMM settings
  - Untoggling everything means no modding will be applied
- Shortens and colors gold tooltip
- Show rune numbers and emphasize better runes
- Shorten item names for junk and gems
- Emphasized items for quests, Pandemonium event (ubers), essences and token
- Item tooltip customization:
  - Change the background opacity
  - Change the font size
- Add your own custom naming for each item type. 
  - Search the code for the tag mentioned in the item type description in the D2RMM settings.


## Presets Overview

| Item Type                                    | Presets                                                    |
|----------------------------------------------|------------------------------------------------------------|
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
| **Tooltip size for hidden items**            | **0 (default)** - 100 spaces                               |
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

In addition to this mod, I recommend you also use the D2RMM mods below:

| Mod                                                                             | Creator     | Notes                                                                                      |
|---------------------------------------------------------------------------------|-------------|--------------------------------------------------------------------------------------------|
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                      | olegbl      | So you don't accidentally get yourself banned.                                             |
| [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200)      | olegbl      | In case any mod touches __profilehd_ and screws up the font size in the settings menu.     |
| [LightPillar](https://www.nexusmods.com/diablo2resurrected/mods/197)            | qhu91it     | Add an awesome effect when certain items drop.                                             |
| [Skip Intro Videos](https://www.nexusmods.com/diablo2resurrected/mods/179)      | olegbl      | On startup, gets you straight to the title screen.                                         |
| [Towns QoL Changes](https://www.nexusmods.com/diablo2resurrected/mods/310)      | night0wl117 | Move town starting points, TP locations and Cain's position in Act 5.                      |
| [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183)              | olegbl      | TP & buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_ |
| [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174)        | olegbl      | Adds the ilvl to the tooltips of all items with an ilvl.                                   |
| [Short Quality Prefixes](https://www.nexusmods.com/diablo2resurrected/mods/214) | Jobus       | Shortens the Superior/Inferior prefixes _(until I have added it to this mod)_.             |


## Roadmap

- Fix known bugs:
  - Enabling jewelry turns crafted/rare/set/unique jewelry blue.
- Add features:
  - different emphasis for unique charms, rare jewels and facets (rainbow color)
  - Integrate [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214/?tab=files&category=archived) or [Show Item Quality for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/351)


## Credits

This loot filter mod is based on code from existing mods and inspired by existing styles. I have added code optimizations, a shit-ton of toggles and my own personal flair and preferences. <br>
Remnants of other people's codes remain, so I have tried to list the credits as accurately as I can. If you see any of your own code in this mod and it isn't credited, please send me a message.

Many thanks to:

### Code
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317) for acting as a base for this mod and the tooltip customization features
- olegbl for:
  - creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)
  - his [example mods](https://github.com/olegbl/d2rmm.mods) in general
  - his [Short Potion Names](https://www.nexusmods.com/diablo2resurrected/mods/177) mod for the list of colors

### Filter Style
- [Path of Diablo filters](https://pathofdiablo.com/wiki/index.php?title=List_of_Loot_Filters) for removing all that clutter on Path of Diablo and inspiring me to create this loot filter for D2R
  - Mainly [Darkgale](https://www.twitch.tv/darkgale)'s filter called [Filtergale](https://www.reddit.com/r/pathofdiablo/comments/i9hdw7/filtergale/) ([download](https://greendu.de/s/ZbDwHekAg3rmeRB/download?path=%2F&files=item.filter)) regarding styling
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317)


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is given), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.