# Roadmap

## Table of Contents
- [v4.0.0 (full release)](#v400-full-release)
  - [Fix Bugs](#fix-bugs)
  - [Finish planned features](#finish-planned-features)
  - [To Do: Loot Filter](#to-do-loot-filter)
  - [To Do: Item Filtering](#to-do-item-filtering)
  - [Documentation](#documentation)
- [v5.0.0](#v500)
- [Future versions](#future-versions)
  - [Code optimizations \& technical debt](#code-optimizations--technical-debt)
  - [D2RMM wishlist](#d2rmm-wishlist)
  - [New Features](#new-features)
  - [Caedendi's Simple Loot Filter](#caedendis-simple-loot-filter)


## v4.0.0 (full release)
- [ ] re-specify planned features for 4.0.0
- [ ] write full docs for release:
  - [x] update roadmap
  - [ ] update README
    - [ ] update settings overview
  - [ ] documentation: clarify eth color / sockets
  - [x] changelog
- [ ] reworked D2RMM settings menu
  - [ ] add recommended settings to description
- [ ] fix obvious/small bugs
- [ ] move other bug fixes to 4.0.1

### Finish planned features
- [x] full re-write in TypeScript
- [x] runes tier 3 and 4: alternate highlight color for pattern
- [x] Integrate [Settings Font Fix for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/200) by [olegbl](https://www.nexusmods.com/users/353885)


### Fix Bugs
- [x] ilvl unique charms
- [x] high runes big tooltip: 3x10 => 2x10
- [ ] Big Tooltips:
  - [x] gems: add indent when pick up 
  - [ ] disable ilvl when big tooltips is enabled for
    - [x] quest items: check ammy of the viper ilvl
    - [x] quest items: remove indent when enabled
    - [x] unique charms
    - [ ] facets + [2pu = highlight 4x] + [4pu = highlight 3x]
      - [ ] facets: name too long with pick up (?)
      - [x] check if BigTooltips enabled
      - [ ] same for other earlier settings
- [ ] Drop Sounds not working

### Finish up
- [ ] search code to fix all "// todo"
- [ ] remove redundant color codes (ItemEntry)

## v4.0.1

### Bug Fixes
- [ ] ?

## V4.1.0

### Expand Gems Section
Mod menu:
- show
- remove affix
- highlight
- highlight color (white or gem color)
- name color
- big tooltip

To do:
- [ ] subsection per quality level
- [ ] Big Tooltips
- [ ] remove affix
- [ ] show/hide toggle per quality level
- [ ] add option for regular gem name:
  - regular
  - common
  - standard
  - gem name (Ruby)
  - custom
- [ ] options to color highlight, quality indicator and gem type

## v5.0.0
- [ ] implement item stat ranges
- [ ] implement "Reduce Item Clutter" filtering style
- [ ] implement drop cloud and sound from korean mod
- [ ] rework D2RMM mod settings menu
- [ ] documentation: solve "Colors" definitions/origins


## Future versions

### Code optimizations & technical debt
- [ ] unit tests
- [ ] more accurate variable typings

### D2RMM wishlist
- [ ] stronger/more stable typing for D2RMM data types, preferable as a library
- [ ] toggle switch etc inside section header

### New Features
- [ ] Item Stat Ranges: pre-/suffix tag for which items sell for 35K
  - [ ] $
  - [ ] 35K
  - [ ] brackets
- [ ] low vision (_profilelv.json) and controller compatibility
- [ ] change light pillar aura position to circle item
- [ ] how to customize which rune belongs to which group

### Caedendi's Simple Loot Filter
- [ ] feature parity
  - [ ] custom weapons/armor filter lists
