import { D2Color } from "../../Models/D2Color";

// TODO: make all constants abstract?
export abstract class ColorConstants {
  public static prefix = "ÿc";

  protected static baseColors = {
    none            : new D2Color( "", "none"),
    white           : new D2Color("0", "White"),
    whiteSmoke      : new D2Color("=", "White Smoke"),
    whiteSmoke2     : new D2Color("E", "White Smoke 2"),
    whiteSmoke3     : new D2Color("F", "White Smoke 3"),
    whiteSmoke4     : new D2Color("G", "White Smoke 4"),
    whiteSmoke5     : new D2Color("H", "White Smoke 5"),
    grayDim         : new D2Color("I", "Gray Dim"),
    grayDim2        : new D2Color("K", "Gray Dim 2"),
    grayDimmer      : new D2Color("5", "Gray Dimmer"),
    black           : new D2Color("6", "Black"),
    red             : new D2Color("U", "Red"),
    tomato          : new D2Color("1", "Tomato"),
    crimson         : new D2Color("S", "Crimson"),
    lime            : new D2Color("2", "Lime"),
    lime2           : new D2Color("Q", "Lime 2"),
    lime_v2         : new D2Color("C", "Lime v2"),
    limeGreen       : new D2Color("<", "Lime Green"),
    green           : new D2Color("A", "Green"),
    green2          : new D2Color(":", "Green 2"),
    deepSkyBlue     : new D2Color("N", "Deep Sky Blue"),
    lightSkyBlue    : new D2Color("T", "Light Sky Blue"),
    mediumSlateBlue : new D2Color("P", "Medium Slate Blue"),
    cornFlowerBlue  : new D2Color("3", "Corn Flower Blue"),
    cornFlowerBlue2 : new D2Color("B", "Corn Flower Blue 2"),
    yellow          : new D2Color("9", "Yellow"),
    lightYellow     : new D2Color("R", "Light Yellow"),
    orange          : new D2Color("8", "Orange"),
    orange1         : new D2Color("J", "Orange 1"),
    orange2         : new D2Color("L", "Orange 2"),
    orange3         : new D2Color("@", "Orange 3"),
    violet          : new D2Color("O", "Violet"),
    darkViolet      : new D2Color(";", "Dark Violet"),
    tan             : new D2Color("4", "Tan"),
    tan2            : new D2Color("D", "Tan 2"),
    tan_v2          : new D2Color("7", "Tan v2"),
    wheat           : new D2Color("M", "Wheat"),
  };

  // loot filter colors
  public static none:      D2Color = this.baseColors.none;
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

  public static getColorByCode(code: string): D2Color {
    return Object.values(this.baseColors).find(x => x.getCode() === code);
  }
}
