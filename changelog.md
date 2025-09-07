# Caedendi's Extended Loot Filter: changelog

## 4.0.0
- Complete rewrite of the mod in TypeScript from the ground up, allowing for more flexibility in adding new features, a more solid codebase and an easier time with squashing bugs
- Feature parity with v3.0.0
- Compatibility for languages other than English has been added!
- The Settings menu has been completely revamped: the D2RMM subsection feature introduced per my request allows for stronger grouping of settings while other settings have been moved or reworked from a design standpoint
- The Junk, Runes, Jewelry, Quest & Endgame, Custom Filter List and Item Stats & Modifiers sections are now grouped into the Loot Filter section
- The Big Tooltips section has been reworked: each entry now appears as an additional option for their respective item's entry in the Loot Filter section
- Settings in the Tooltips section for the highlight character, highlight color and tooltip width for hidden items have been moved into the Loot Filter => Settings section, and the Tooltips section has been renamed back to "Tooltip Mods"
- The individual custom filter lists found in the code have been reworked into a single external file for end users to customize, creating a more powerful, intuitive and user-friendly experience (see the "CustomFilterList.ts" file in the base mod folder)
- The Arrows & Bolts group in the Junk section has been renamed to Ammo (functionality remains unchanged)
- The Runes section has been expanded with subsections for each rune tier that can be fully customized individually
- The Jewelry section has been improved (though no new features were added)
- The Quest & Endgame section has been expanded to now support more highlighting options and that can be individually set per item type, while also introducing two toggles to hide Essences and the Standard of Heroes
- The Show Item Quality feature in the Item Stats & Modifiers section has been expanded to additionally support a "prefix and suffix" setting and more indicator styling options have been added
- The Shorten Superior/Inferior Prefixes feature in the Item Stats & Modifiers section now supports an additional prefix style
- The Light Pillars section has been sorted into subsections for Runes, Jewelry and Quest & Endgame items (functionality remains unchanged)
- The Drop Sounds section has been sorted into subsections for Runes and Quest & Endgame items (functionality remains unchanged)
- Quite some bug fixes for stuff I didn't even know was broken because JavaScript is a mess of a language
- Many thanks to olegbl for implementing my feature requests for D2RMM sections, subsections and conditional setting visibility!

### Known Issues
- Known issue: gem names don't abbreviate
- Known issue: item quality tags aren't working
- Known issue: some settings have incomplete/incorrect descriptions

## To check:
- light pillars: disable for hidden items
- drop sounds: disable for hidden items


## 4.0.0-pre-release
- Complete rewrite from the ground up using TypeScript, which allows me to add future new features faster, easier and with less chance of bugs
- Bug fixes for stuff I didn't even know was broken because JavaScript is a mess of a language
- Almost complete feature parity with v3.0.0
- Compatibility for other languages has been added!
- Existing features have been expanded upon
- Settings menu has been completely revamped
- Probably introduced a few new bugs
- Known issue: gem names don't abbreviate
- Known issue: item quality tags aren't working
- Known issue: some settings have incomplete/incorrect descriptions
- Known issue: probably some other stuff I've missed


## 3.0.0-pre-release
- Introducing Drop Sounds! Configure new sound effects for when select item types drop so you'll never miss a drop again!
- For those running custom filter options: all colors have been renamed to more standardized names (see /docs/colors.md for details)
- Added multi-line tooltips! Enable for select items to increase the height of the tooltips of items on the ground and optionally add a purple "Pick Up" message above the name. If you prefer to have a big transparent box instead of highlight characters, enable highlighting and set the highlight character to space
- Added personal filter list for all items! Supports all (base) items, sets and uniques in item-names.json. Search for [CSTM-CFL] in the code and add whatever you'd like
- Added option to customize the tooltip color for Ethereal items when on the ground (recommended: light teal)
- Added option to disable all Light Pillars
- Added customization of the Gold amount color (in addition to the existing suffix customization)
- Added customization of the highlight color (can now be set to colors other than tomato red)
- Added customization of the alternate rune color scheme (can now be set to colors other than dark violet)
- Added space as a highlight character option
- Split runes into 4 tiers, each of which you can individually enable/disable visibility, Light Pillars, Drop Sounds and big tooltips for
- Changed the Light Pillars setting for Quest Weapons from "exclude" to "include"
- Mod settings have been overhauled. Delete your config.json to start from scratch to prevent issues.
- Note: this pre-release contains a few bugs regarding item name indentation when multiple features are enabled. Nothing game-breaking, I just haven't gotten around fixing it in the past few months. This version is very close to what will be the full 3.0.0 release.


## 2.1.1
- Fixed tooltip mods (broken since 2.0.0)


## 2.1.0
- Added option to disable light pillars for hidden items


## 2.0.1
- Removed light pillar support for circlets


## 2.0.0
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


## 1.0.0
- First official release!
- Customize Gold drops by coloring, abbreviating or removing the affix
- Customize runes by adding rune numbers, removing the "Rune" affix, adding highlights
- Customize junk items by adding a colored indicator and abbreviating their names, or hide them from view by setting their name to an empty value
- Highlight rings, amulets, jewels and charms by adding a colored indicator (this feature is currently bugged)
- Customize gems by adding a color indicator per gem type and abbreviate their names, or hide gems of low quality
- Highlight Quest & Endgame Items
- Or set your own custom naming schemes for any of the items mentioned above!
- Option to customize the tooltip width for hidden items or to change the tooltip's opacity and font size
