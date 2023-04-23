# Caedendi's Extended Loot Filter for D2RMM

Adds a customizable loot filter to D2R using D2RMM. 

Shortens item names or hides them by leaving them _blank_. Highlights important items. See the full feature list below.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Recommended Mods](#recommended-mods)
- [ToDo](#todo)
- [Credits](#credits)
  - [Code](#code)
  - [Loot Filter Style](#loot-filter-style)
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

### List of Presets

- Gold:
  - no change
  - gold text
  - gold-colored G
  - white-colored G
  - hide affix
  - no affix
  - custom
- Runes
  - no change
  - Add rune numbers + highlights + remove affix
  - Add rune numbers + remove affix
  - Add rune numbers + highlights
  - Add highlights + remove affix
  - Add rune numbers
  - Add highlights
  - Remove affix
  - custom
- Healing Potions
  - no change
  - all
  - hide lvl 3
  - hide lvl 4
  - hide lvl 3 + small rejuvs
  - hide lvl 4 + small rejuvs
  - show only rejuvs
  - show only full rejuvs
  - hide all
  - custom
- Buff Potions
  - no change
  - all
  - hide
  - custom
- Throwing Potions
  - no change
  - all
  - hide
  - custom
- Scrolls & Tomes
  - no change
  - all
  - hide scrolls
  - custom
- Arrows & Bolts
  - no change
  - highlight
  - hide
  - custom
- Rings, Amulets, Jewels, Charms
  - no change
  - highlight
  - custom
- Gems
  - no change
  - highlight all
  - highlight, show only flawless & perfect
  - highlight, show only perfect
  - custom
- Quest items
  - no change
  - highlight
  - custom
- Pandemonium Event, Essences, Tokens
  - no change
  - highlight
  - highlight (exclude Standard of Heroes)
  - highlight, hide Standard of Heroes
  - custom
- Tooltip size for hidden items (0 or more spaces)
- Tooltip
  - no change
  - Opacity & Size
  - Opactiy
  - Size



## Installation

- Download and install [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169), then run it
- Download and extract this mod folder to /D2RMM/mods/
- See D2RMM instructions on how to configure and enable

## Recommended Mods

I recommend you use these mods in addition to this:

- [Disable Battle.net](https://github.com/olegbl/d2rmm.mods) by olegbl
- [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200) by olegbl
- [LightPillar](https://www.nexusmods.com/diablo2resurrected/mods/197) by qhu91it
- [Skip Intro Videos](https://www.nexusmods.com/diablo2resurrected/mods/179) by olegbl
- [Towns QoL Changes](https://www.nexusmods.com/diablo2resurrected/mods/310) by night0wl117
- [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183) by olegbl _(note! allows teleporting past Jerhyn during the questline)_
- [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174) by olegbl
- [Short Quality Prefixes]() by Jobus _(until I have added it to this mod)_

## ToDo

- Fix bug with charms, rings, amulets and jewels always showing as blue, even when Rare or Unique
  - different emphasis for unique charms, rare jewels and facets (rainbow color)
- Integrate [Show Item Quality for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/351) or [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214/?tab=files&category=archived)
- Split items toggle into:
  - Junk
    - optional: hide Bolts & Arrows by changing name into _blank_
  - Gems
  - Rings & Amulets
  - Jewels
  - Charms
  - Quest Items
  - Pandemonium Event
  - Token & Essences

## Credits

This loot filter mod is based on code from existing mods and inspired by existing styles. I have added code optimizations, multiple toggles and my own personal flair and preferences, so remnants of other people's codes remain. I have tried to list the credits as accurately as I can. If you see any of your own code in this mod and it isn't credited, please send me a message.

Many thanks to:

### Code
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317) for acting as a base for this mod and the tooltip customization features
- olegbl for:
  - creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)
  - his [example mods](https://github.com/olegbl/d2rmm.mods) in general
  - his [Short Potion Names](https://www.nexusmods.com/diablo2resurrected/mods/177) mod for the list of colors

### Loot Filter Style
- [Path of Diablo filters](https://pathofdiablo.com/wiki/index.php?title=List_of_Loot_Filters) for removing all that clutter on Path of Diablo and inspiring me to create this loot filter for D2R
  - Mainly [Darkgale](https://www.twitch.tv/darkgale)'s filter called [Filtergale](https://www.reddit.com/r/pathofdiablo/comments/i9hdw7/filtergale/) ([download](https://greendu.de/s/ZbDwHekAg3rmeRB/download?path=%2F&files=item.filter))
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317)
- 

## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is given), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and not allowed to use this code.