# Caedendi's Extended Loot Filter for D2RMM

_See also: [Caedendi's Simple Loot Filter for D2RMM](https://github.com/Caedendi/D2RMM-Loot-Filter-Simple)_

Adds an expansive customizable loot filter with a shitload of presets to Diablo II: Resurrected using D2RMM. <br>
Hide junk, clean up tooltips to remove clutter and emphasize important items. For the full feature list, see below.

Recommended for those who prefer toggling presets to reach their desired functionality. <br>
If you'd rather have a compact list to act as a template for your own naming schemes, see the Simple version at the bottom of the page.

## Table of Contents

- [Screenshots](#screenshots)
- [Changelog](#changelog)
  - [2.1.1](#211)
  - [2.1.0](#210)
  - [2.0.1](#201)
  - [2.0.0](#200)
  - [1.0.0](#100)
- [How to Install](#how-to-install)
- [Features](#features)
- [Presets Overview](#presets-overview)
- [Roadmap](#roadmap)
  - [Fix known bugs](#fix-known-bugs)
  - [Add features](#add-features)
- [Recommended Mods](#recommended-mods)
- [License/Permissions](#licensepermissions)
- [Credits](#credits)
  - [Code](#code)
  - [Filter Style](#filter-style)
- [My Mods + Source](#my-mods--source)
  - [Diablo II: Resurrected](#diablo-ii-resurrected)


## Screenshots

<p float="left">
  <img src="https://i.imgur.com/mxQB5wx.png" alt="01_pots_scrolls_gold" width="49%">
  <img src="https://i.imgur.com/63Oygn8.png" alt="02_gems_keys_essences" width="49%">
</p>

<p float="left">
  <img src="https://i.imgur.com/AU2d8Hy.png" alt="03_sup_inferior_affix" width="49%">
  <img src="https://i.imgur.com/8mu49cv.png" alt="04_item_quality" width="49%">
</p>

<p float="left">
  <img src="https://i.imgur.com/8g9brig.png" alt="05_runes_numbers" width="49%">
  <img src="https://i.imgur.com/AK8NfuC.png" alt="06_runes_highlights" width="49%">
</p>

<p float="left">
  <img src="https://i.imgur.com/QvtWvmw.png" alt="07_runes_alternate" width="49%">
  <img src="https://i.imgur.com/0dLY9NC.png" alt="08_jewelry" width="49%">
</p>

<p float="left">
  <img src="https://i.imgur.com/MS1cNK1.png" alt="09_act3_quest_items" width="49%">
  <img src="https://i.imgur.com/v7zYs7q.png" alt="10_facet_sunder_alternate" width="49%">
</p>


## Changelog

### 2.1.1

- Fixed tooltip mods (broken since 2.0.0)

### 2.1.0

- Added option to disable light pillars for hidden items

### 2.0.1

- Removed light pillar support for circlets

### 2.0.0

- The mod settings menu is now divided into sections. Make sure to use D2RMM 1.4.6 or higher!
- Fixed high rune numbers incorrectly being highlighted in red when number is enabled and highlighting is disabled
- Fixed half of the quest items not having highlighting patterns
- Fixed the cube window's title being all messy when highlighting quest items is enabled by adding an option to exclude the cube
- Fixed Hell Forge Hammer incorrectly displaying as "Hellforge Hammer" when highlighting is enabled
- Fixed some gem names not being filtered correctly
- Fixed bugged support for charms and added highlighting of id'd uniques
- Removed bugged support for jewels, rings and amulets as they can't be fixed
- Changed Small/Full Rejuvenation Potion name from +SRP/+FRP to +RPS/+RPF
- Improved highlight patterns
- Added highlighting to Rainbow Facets
- Added built-in ilvl support and fixed indentation being all messy for highlighted items when ilvl is enabled
- Added built-in short superior/inferior prefixes mod
- Added built-in item quality (normal/exceptional/elite) tags
- Added built-in expanded light pillar support (for a lot more item types than currently available in other mods)
- Added alternate color schemes for runes, facets and sunder charms
- Added customization of the highlight character (can now be set to characters other than *)
- Custom sections in the code are now pre-filled with examples, making it more intuitive for those who want to add their own custom naming

### 1.0.0

First official release!


## How to Install

- Download and install [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169), then run it.
- Download and extract this mod folder to /D2RMM/mods/.
- See D2RMM instructions on how to configure and enable.
- Play the game!


## Features

For a full list of features, see [Presets Overview](#presets-overview) below.
  
- **Customize to your liking:**
  - Alter or hide each item type to your preference using the presets in the D2RMM settings.
  - Shorten or hide junk.
  - Emphasize the good/important stuff (runes, flawless gems, essences, uber keys/organs, quest items, etc).
- **Completely optional:** 
  - Disabling everything means no modding will be applied.
- **Integrated mods:**
  - Show the item level on all items that have one.
  - Shorten superior/inferior prefixes to + and -.
  - Show the item quality (normal/exceptional/elite) on all equipment with short (n), (x) and (e) tags.
  - Shine light pillars on those special drops! Mod functionality expanded to support runes, rings/amulets, gems, jewels, quest items and endgame items.
- **Apply your own custom naming schemes**:
  - Set the item type to "Custom", open the mod.js file in Notepad or VSCodium and add your personalized naming schemes on the lines mentioned in the item type's setting description.
  - To hide an item, change its name to HIDDEN (without quotes). The value of HIDDEN (amount of spaces) can be changed in the D2RMM settings.
  - Don't forget to reload and apply in D2RMM!
- **Item tooltip customization:**
  - Modify the size and background opacity of the tooltip for items on the ground and in the inventory.


## Presets Overview

|          Section           |               Setting                | Default | Options                                      |
|:--------------------------:|:------------------------------------:|:-------:|:---------------------------------------------|
|      **Gold & Runes**      |               **Gold**               |         | No change                                    |
|                            |                                      |         | Gold text                                    |
|                            |                                      |    x    | Gold G                                       |
|                            |                                      |         | White G                                      |
|                            |                                      |         | Hide affix                                   |
|                            |                                      |         | Custom                                       |
|                            |              **Runes**               |         | No change                                    |
|                            |                                      |    x    | Add rune numbers + highlights + remove affix |
|                            |                                      |         | Add rune numbers + highlights                |
|                            |                                      |         | Add rune numbers + remove affix              |
|                            |                                      |         | Add highlights + remove affix                |
|                            |                                      |         | Add rune numbers                             |
|                            |                                      |         | Add highlights                               |
|                            |                                      |         | Remove affix                                 |
|                            |                                      |         | Custom                                       |
|          **Junk**          |         **Healing Potions**          |         | No change                                    |
|                            |                                      |    x    | All                                          |
|                            |                                      |         | Hide lvl 3                                   |
|                            |                                      |         | Hide lvl 4                                   |
|                            |                                      |         | Hide lvl 3 + small rejuvs                    |
|                            |                                      |         | Hide lvl 4 + small rejuvs                    |
|                            |                                      |         | Show only rejuvs                             |
|                            |                                      |         | Show only full rejuvs                        |
|                            |                                      |         | Hide all                                     |
|                            |                                      |         | Custom                                       |
|                            |           **Buff Potions**           |         | No change                                    |
|                            |                                      |    x    | All                                          |
|                            |                                      |         | Hide                                         |
|                            |                                      |         | Custom                                       |
|                            |         **Throwing Potions**         |         | No change                                    |
|                            |                                      |    x    | All                                          |
|                            |                                      |         | Hide                                         |
|                            |                                      |         | Custom                                       |
|                            |         **Scrolls & Tomes**          |         | No change                                    |
|                            |                                      |    x    | All                                          |
|                            |                                      |         | Hide scrolls                                 |
|                            |                                      |         | Custom                                       |
|                            |          **Arrows & Bolts**          |         | No change                                    |
|                            |                                      |    x    | Highlight                                    |
|                            |                                      |         | Hide                                         |
|                            |                                      |         | Custom                                       |
|                            |               **Keys**               |    x    | No change                                    |
|                            |                                      |         | Hide                                         |
|                            |                                      |         | Custom                                       |
|        **Jewelry**         |               **Gems**               |         | No change                                    |
|                            |                                      |    x    | Highlight all                                |
|                            |                                      |         | Highlight, show only flawless & perfect      |
|                            |                                      |         | Highlight, show only perfect                 |
|                            |                                      |         | Hide all                                     |
|                            |                                      |         | Custom                                       |
|                            |              **Jewels**              |         | No change                                    |
|                            |                                      |    x    | Highlight Facets                             |
|                            |                                      |         | Custom                                       |
|                            |              **Charms**              |         | No change                                    |
|                            |                                      |    x    | Highlight all                                |
|                            |                                      |         | Highlight unique charms only                 |
|                            |                                      |         | Highlight non-unique charms only             |
|                            |                                      |         | Custom                                       |
|    **Quest & Endgame**     |           **Quest items**            |         | No change                                    |
|                            |                                      |         | Highlight                                    |
|                            |                                      |    x    | Highlight, exclude Cube                      |
|                            |                                      |         | Custom                                       |
|                            |          **Endgame Items**           |         | No change                                    |
|                            |                                      |    x    | Highlight                                    |
|                            |                                      |         | Highlight, exclude Standard of Heroes        |
|                            |                                      |         | Highlight, hide Standard of Heroes           |
|                            |                                      |         | Custom                                       |
| **Item Stats & Modifiers** |            **Item Level**            |         | No change                                    |
|                            |                                      |    x    | Enable, fix indentation                      |
|                            |                                      |         | Enable                                       |
|                            | **Short Superior/Inferior Prefixes** |         | No change                                    |
|                            |                                      |    x    | Enable                                       |
|                            |                                      |         | Enable, gray inferior items                  |
|                            |                                      |         | Custom                                       |
|                            |           **Item Quality**           |    x    | No change                                    |
|                            |                                      |         | Suffix, parentheses                          |
|                            |                                      |         | Suffix, square brackets                      |
|                            |                                      |         | Prefix, parentheses                          |
|                            |                                      |         | Prefix, square brackets                      |
|                            |                                      |         | Custom                                       |
|     **Light Pillars**      |          **Light Pillars**           |    x    | Runes                                        |
|                            |                                      |    x    | Rings & Amulets                              |
|                            |                                      |    x    | Gems & Jewels                                |
|                            |                                      |    x    | Charms                                       |
|                            |                                      |    x    | Quest items                                  |
|                            |                                      |         | Quest items: exclude weapons                 |
|                            |                                      |    x    | Essences                                     |
|                            |                                      |    x    | Token of Absolution                          |
|                            |                                      |    x    | Keys                                         |
|                            |                                      |    x    | Organs                                       |
|                            |                                      |    x    | Standard of Heroes                           |
|          **Misc**          |     **Alternate Color Schemes**      |         | No change                                    |
|                            |                                      |         | Facets, Sunder Charms, Runes                 |
|                            |                                      |    x    | Facets, Sunder Charms                        |
|                            |                                      |         | Facets, Runes                                |
|                            |                                      |         | Sunder Charms, Runes                         |
|                            |                                      |         | Facets                                       |
|                            |                                      |         | Sunder Charms                                |
|                            |                                      |         | Runes                                        |
|                            |       **Highlight character**        |    x    | \* (asterisk)                                |
|                            |                                      |         | = (equals)                                   |
|                            |                                      |         | + (plus)                                     |
|                            |                                      |         | - (hyphen/dash/minus)                        |
|                            |                                      |         | x (small letter x)                           |
|                            |                                      |         | X (capital letter x)                         |
|                            |                                      |         | o (small letter o)                           |
|                            |                                      |         | O (capital letter o)                         |
|                            |                                      |         | 0 (zero)                                     |
|                            |                                      |         | ~ (tilde)                                    |
|                            |                                      |         | ! (exclamation mark)                         |
|                            |                                      |         | @ (at)                                       |
|                            |                                      |         | # (number/pound/hash)                        |
|                            |                                      |         | $ (dollar)                                   |
|                            |                                      |         | % (percent)                                  |
|                            |                                      |         | & (ampersand)                                |
|                            |                                      |         | Custom                                       |
|                            |  **Tooltip size for hidden items**   |    0    | 0 - 25 spaces                                |
|      **Tooltip Mods**      |           **Tooltip mods**           |    x    | No change                                    |
|                            |                                      |         | Opacity & Size                               |
|                            |                                      |         | Opactiy                                      |
|                            |                                      |         | Size                                         |
|                            |         **Tooltip: opacity**         |  0.75   | 0.00 - 1.00 (unmodded = 0.60)                |
|                            |        **Tooltip: font size**        |   33    | 20 - 50 (unmodded = 36)                      |


## Roadmap

None at the moment. If you have a request for a feature, please open a GitHub issue (preferred) or post a comment on Nexus Mods.

### Fix known bugs

- [x] Regular Ruby, Sapphire, Emerald and Diamond not working
- [x] Certain quest item customization not working
- [x] Enabling quest item highlighting screws up the Horadric Cube's displayed name when the cube menu is open.
- [x] Enabling jewelry turns crafted/rare/set/unique jewelry blue
- [x] Item name alignment out of place when [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174) is enabled
- [x] Tooltip mods not working

### Add features

- [x] Integrate [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174) by [olegbl](https://github.com/olegbl)
- [x] Integrate [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214) by [Jobus](https://www.nexusmods.com/diablo2resurrected/users/3107665)
- [x] Integrate [Show Item Quality for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/351) by [minseoksuh](https://www.nexusmods.com/diablo2resurrected/users/176581440)
- [x] Integrate [LightPillar for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/197) by [qhu91it](https://github.com/qhu91it) and [buzh](https://www.nexusmods.com/diablo2resurrected/users/2596633)
- [x] Rework alternate color schemes into optional setting as a drop-down menu
  - [x] Alternate color scheme for Facets (rainbow highlights)
  - [x] Alternate color scheme for Sunder Charms (element-colored highlights)
  - [x] Alternate color scheme for mid/high runes (purple names)
- [x] Only show Light Pillars on non-hidden items


## Recommended Mods

In addition to this, I recommend you also use the following D2RMM mods:

| Mod                                                                                 |                                    Creator                                    | Notes                                                                                              |
|-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------:|----------------------------------------------------------------------------------------------------|
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                          |                      [olegbl](https://github.com/olegbl)                      | So you don't accidentally get yourself banned.                                                     |
| [Skip Videos](https://www.nexusmods.com/diablo2resurrected/mods/179)                | [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me) | Disable launch intro videos and cinematic cutscenes when transitioning between acts.               |
| [Improved Potion Visibility](https://www.nexusmods.com/diablo2resurrected/mods/384) |   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)    | Changes healing/mana potion sprites so it's easier to distinguish different potion levels.         |
| [UI Fixes](https://www.nexusmods.com/diablo2resurrected/mods/387)                   |   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)    | Fixes the placement of a few item grids.                                                           |
| [Towns QoL Changes](https://www.nexusmods.com/diablo2resurrected/mods/310)          |  [night0wl117](https://www.nexusmods.com/diablo2resurrected/users/33697975)   | Move town starting points, TP locations and Cain's position in Act 5.                              |
| [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183)                  |                      [olegbl](https://github.com/olegbl)                      | Teleport and buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_ |
| [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200)          |                      [olegbl](https://github.com/olegbl)                      | In case any mod touches __profilehd_ and screws up the font size in the settings menu.             |


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is given), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.


## Credits

This loot filter mod is based on code from existing mods and inspired by existing styles. I have added code optimizations, a shit-ton of toggles, expanded some features and gave it my own personal flair and preference. <br>
Remnants of other people's codes remain, so I have tried to list the credits as accurately as I can. If you see any of your own code in this mod and it isn't credited, please send me a message.

Many thanks to:

### Code
- [salzgaard](https://www.nexusmods.com/diablo2resurrected/users/6397569) for his [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317), which acted as a base for this mod and the tooltip customization features.
- [olegbl](https://github.com/olegbl) for
  - Creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)
  - His [example mods](https://github.com/olegbl/d2rmm.mods) in general
  - His [Short Potion Names](https://www.nexusmods.com/diablo2resurrected/mods/177) mod for the list of colors
  - His [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174) mod, which I integrated
- [Jobus](https://www.nexusmods.com/diablo2resurrected/users/3107665) for his [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214) mod, which I integrated
- [minseoksuh](https://www.nexusmods.com/diablo2resurrected/users/176581440) for his [Show Item Quality for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/351) mod, which I integrated
- [seunggil](https://www.nexusmods.com/diablo2resurrected/users/3948946), [qhu91it](https://github.com/qhu91it) and [buzh](https://www.nexusmods.com/diablo2resurrected/users/2596633) for the [lightpillar](https://www.nexusmods.com/diablo2resurrected/mods/112) and [LightPillar for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/197) mods, which I integrated and expanded

### Filter Style
- [Path of Diablo filters](https://pathofdiablo.com/wiki/index.php?title=List_of_Loot_Filters) for removing all that clutter on Path of Diablo and inspiring me to create this loot filter for D2R.
  - Mainly [Darkgale](https://www.twitch.tv/darkgale)'s filter called [Filtergale](https://www.reddit.com/r/pathofdiablo/comments/i9hdw7/filtergale/) ([download](https://greendu.de/s/ZbDwHekAg3rmeRB/download?path=%2F&files=item.filter)) regarding styling.
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317)
- [Cbraqz](https://www.nexusmods.com/diablo2resurrected/users/3106975)'s [D2R Simple Loot Filter](https://www.nexusmods.com/diablo2resurrected/mods/54) mod for giving me an idea on how to fix highlighting charms without removing rarity coloring


## My Mods + Source

### Diablo II: Resurrected ###

| Nexus Mods Page                                                                                    | Source                                                           |
|:---------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
| [Caedendi's Extended Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/361) | [GitHub](https://github.com/Caedendi/D2RMM-Loot-Filter-Extended) |
| [Caedendi's Simple Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/360)   | [GitHub](https://github.com/Caedendi/D2RMM-Loot-Filter-Simple)   |
| [Skip Videos for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/397)                     | [GitHub](https://github.com/Caedendi/D2RMM-Skip-Videos)          |
