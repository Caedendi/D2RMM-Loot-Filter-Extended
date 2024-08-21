import { D2Color } from "../../Models/Colors/D2Color";

export enum ED2ColorCodes {
  NONE = "",
  DEFAULT = "default",
  WHITE = "0",
  LIGHT_GRAY = "",
  DARK_GRAY = "",
  BLACK = "",
  LIGHT_BLUE = "",
  DARK_BLUE = "",
  CRYSTAL_BLUE = "",
  LIGHT_RED = "",
  DARK_RED = "",
  CRYSTAL_RED = "",
  LIGHT_GREEN = "",
  DARK_GREEN = "",
  CRYSTAL_GREEN = "",
  LIGHT_YELLOW = "",
  DARK_YELLOW = "",
  LIGHT_GOLD = "",
  DARK_GOLD = "",
  LIGHT_PURPLE = "",
  DARK_PURPLE = "",
  ORANGE = "",
  BRIGHT_WHITE = "",
}

// TODO: fix

/*
White
Light Grey
Dark Grey
Black
Light Blue
Dark Blue
Crystal Blue
Light Red
Dark Red
Crystal Red
Light Green
Dark Green
Crystal Green
Light Yellow
Dark Yellow
Light Gold
Dark Gold
Light Purple
Dark Purple
Orange
Bright White
*/


/*
https://d2mods.info/forum/viewtopic.php?t=67420&sid=47faa4e28760d543f321a67f36a125ab

ÿc0 — SPRITE_COLOR_NORMAL / FONTCOLOR_WHITE
ÿc1 — SPRITE_COLOR_RED (pale red)
  ÿcS — dark red
  ÿcU — rich red
ÿc2 — SPRITE_COLOR_GREEN
  ÿcQ — light green
  ÿc< — SPRITE_COLOR_NEWCHAR
  ÿc: — SPRITE_COLOR_DARKGREEN.
ÿc3 — SPRITE_COLOR_BLUE
  ÿcT — sky-blue
  ÿcP — pale violet
  ÿcN — light blue
ÿc4 — SPRITE_COLOR_PANEL / FONTCOLOR_GOLD
  ÿc7 — SPRITE_COLOR_BNETGOLD - unused
  ÿcM — light gold
ÿc5 — SPRITE_COLOR_GREY
ÿc6 — SPRITE_COLOR_BLACK
ÿc8 — SPRITE_COLOR_ORANGE
ÿc9 — SPRITE_COLOR_YELLOW
  ÿcR — yellow
ÿc; — SPRITE_COLOR_PURPLE
  ÿcO pink


ÿc= = DefaultColor      by default $FontColorWhite
ÿcE = HealthPotionColor by default $FontColorWhite
ÿcF = ManaPotionColor   by default $FontColorWhite
ÿcG = RejuvPotionColor  by default $FontColorWhite
ÿcH = GoldColor         by default $FontColorWhite
ÿcC = SetColor          by default $FontColorGreen
ÿcA = TemperedColor     by default $FontColorDarkGreen
ÿcB = MagicColor        by default $FontColorBlue
ÿc> = QuestColor        by default $FontColorGoldYellow
ÿcD = UniqueColor       by default $FontColorGoldYellow
ÿcK = SocketedColor     by default $FontColorGrey
ÿcI = EtherealColor     by default $FontColorGrey
ÿcL = EventItemsColor   by default $FontColorOrange
ÿcJ = RuneColor         by default $FontColorOrange
ÿc@ = CraftedColor      by default $FontColorOrange
ÿc? = RareColor         by default $FontColorYellow
*/

/*
https://d2mods.info/forum/kb/viewarticle?a=404
https://d2mods.info/forum/viewtopic.php?t=1762
https://d2mods.info/forum/viewtopic.php?f=6&t=66716&p=499720&hilit=color+codes#p499720
https://d2mods.info/forum/search.php?author_id=48468&sr=posts
*/

export abstract class ColorConstants {
  protected static baseColors = {
    none            : new D2Color( ""),
    white           : new D2Color("0"),
    whiteSmoke      : new D2Color("="),
    whiteSmoke2     : new D2Color("E"),
    whiteSmoke3     : new D2Color("F"),
    whiteSmoke4     : new D2Color("G"),
    whiteSmoke5     : new D2Color("H"),
    grayDim         : new D2Color("I"),
    grayDim2        : new D2Color("K"),
    grayDimmer      : new D2Color("5"),
    black           : new D2Color("6"),
    red             : new D2Color("U"),
    tomato          : new D2Color("1"),
    crimson         : new D2Color("S"),
    lime            : new D2Color("2"),
    lime2           : new D2Color("Q"),
    lime_v2         : new D2Color("C"),
    limeGreen       : new D2Color("<"),
    green           : new D2Color("A"),
    green2          : new D2Color(":"),
    deepSkyBlue     : new D2Color("N"),
    lightSkyBlue    : new D2Color("T"),
    mediumSlateBlue : new D2Color("P"),
    cornFlowerBlue  : new D2Color("3"),
    cornFlowerBlue2 : new D2Color("B"),
    yellow          : new D2Color("9"),
    lightYellow     : new D2Color("R"),
    orange          : new D2Color("8"),
    orange1         : new D2Color("J"),
    orange2         : new D2Color("L"),
    orange3         : new D2Color("@"),
    violet          : new D2Color("O"),
    darkViolet      : new D2Color(";"),
    tan             : new D2Color("4"),
    tan2            : new D2Color("D"),
    tan_v2          : new D2Color("7"),
    wheat           : new D2Color("M"),
  };

  // loot filter colors
  public static none:      D2Color = this.baseColors.none; // TODO: convert all entries to null
  public static white:     D2Color = this.baseColors.white;
  public static gray:      D2Color = this.baseColors.grayDimmer;
  public static black:     D2Color = this.baseColors.black;
  public static red:       D2Color = this.baseColors.tomato;
  public static green:     D2Color = this.baseColors.lime;
  public static darkGreen: D2Color = this.baseColors.green;
  public static blue:      D2Color = this.baseColors.cornFlowerBlue;
  public static lightBlue: D2Color = this.baseColors.lightSkyBlue;
  public static yellow:    D2Color = this.baseColors.yellow;
  public static orange:    D2Color = this.baseColors.orange;
  public static gold:      D2Color = this.baseColors.tan;
  public static purple:    D2Color = this.baseColors.darkViolet;
  public static pink:      D2Color = this.baseColors.violet;

  public static magic: D2Color = this.blue;

  public static getColorByCode(code: string): D2Color {
    return Object.values(this.baseColors).find(color => color.code === code) ?? this.none;
  }
}
