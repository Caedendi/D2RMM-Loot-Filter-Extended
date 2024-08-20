import { D2Color } from "../../Models/Colors/D2Color";

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
https://d2mods.info/forum/viewtopic.php?t=1762
https://d2mods.info/forum/viewtopic.php?f=6&t=66716&p=499720&hilit=color+codes#p499720
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
