# Options
- disable (add affix)
- all (remove affix, add rune numbers, remove affix)
- nrs-hls ()

| Code | Description  |
|------|--------------|
| nrs  | numbers      |
| hls  | highlights   |
| raf  | remove affix |


| Option  | Description                                    | Note           |
|---------|------------------------------------------------|----------------|
| none    | Disable                                        | do nothing     |
| all     | Add Rune numbers, add highlights, remove affix |                |
| nrs-hls | Add Rune numbers, add highlights               | add affix      |
| nrs-raf | Add Rune numbers, remove affix                 |                |
| hls-raf | Add highlights, remove affix                   |                |
| nrs     | Add Rune numbers                               | add affix      |
| hls     | Add highlights                                 | add affix      |
| raf     | Remove affix                                   | none           |
| custom  | Custom                                         | custom         |

Highlights:
- adding highlight characters `***** name *****`
- color rune number on mid/high runes
- color rune name on high runes



# Algorithm
- rune name
- ' Rune' affix
- rune numbers
- highlighting
- highlight lvls:
  - low
  - mid-low
  - mid
  - high

- Add affix
- Add rune numbers
  - color according to 4 rune lvls
  - if missing, no fallback
- add highlights
  - color & style according to 4 rune lvls
  - if missing, no fallback

