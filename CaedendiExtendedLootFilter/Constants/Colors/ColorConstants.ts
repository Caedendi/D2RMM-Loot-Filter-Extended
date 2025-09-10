import { D2Color } from "../../Models/Colors/D2Color";
import { ED2ColorCode } from "../../Models/Colors/ED2ColorCode";

/*
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
*/

// TODO: v5.0.0 fix

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
  ÿc: — SPRITE_COLOR_DARKGREEN
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
https://d2mods.info/forum/viewtopic.php?f=217&t=67420&p=503242#p503242
https://d2mods.info/forum/kb/viewarticle?a=404
https://d2mods.info/forum/viewtopic.php?t=1762
https://d2mods.info/forum/viewtopic.php?f=6&t=66716&p=499720&hilit=color+codes#p499720
https://d2mods.info/forum/search.php?author_id=48468&sr=posts
*/

export abstract class ColorConstants {
  public static readonly white:     D2Color = new D2Color(ED2ColorCode.WHITE);
  public static readonly gray:      D2Color = new D2Color(ED2ColorCode.GRAY_DIMMER);
  public static readonly black:     D2Color = new D2Color(ED2ColorCode.BLACK);
  public static readonly red:       D2Color = new D2Color(ED2ColorCode.TOMATO);
  public static readonly green:     D2Color = new D2Color(ED2ColorCode.LIME);
  public static readonly darkGreen: D2Color = new D2Color(ED2ColorCode.GREEN);
  public static readonly blue:      D2Color = new D2Color(ED2ColorCode.CORN_FLOWER_BLUE);
  public static readonly lightBlue: D2Color = new D2Color(ED2ColorCode.LIGHT_SKY_BLUE);
  public static readonly yellow:    D2Color = new D2Color(ED2ColorCode.YELLOW);
  public static readonly orange:    D2Color = new D2Color(ED2ColorCode.ORANGE);
  public static readonly gold:      D2Color = new D2Color(ED2ColorCode.TAN);
  public static readonly purple:    D2Color = new D2Color(ED2ColorCode.DARK_VIOLET);
  public static readonly pink:      D2Color = new D2Color(ED2ColorCode.VIOLET);

  public static readonly magic:     D2Color = new D2Color(ED2ColorCode.CORN_FLOWER_BLUE_2); // $FontColorMagic
  public static readonly unique:    D2Color = new D2Color(ED2ColorCode.TAN_3); // $FontColorUnique
}
