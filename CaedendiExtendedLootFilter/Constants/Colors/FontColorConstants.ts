import { D2rColor } from "../../Models/D2rColor";

/**
 * Font color variables set in _profilehd.json, _profilelv.json, etc
 */
export class FontColorConstants {
  public static prefix = "$FontColor";

  public static beige:         D2rColor = new D2rColor("Beige");
  public static black:         D2rColor = new D2rColor("Black");
  public static currencyGold:  D2rColor = new D2rColor("CurrencyGold");
  public static darkGreen:     D2rColor = new D2rColor("DarkGreen");
  public static green:         D2rColor = new D2rColor("Green");
  public static lightBlue:     D2rColor = new D2rColor("LightBlue");
  public static lightGray:     D2rColor = new D2rColor("LightGray");
  public static lightPurple:   D2rColor = new D2rColor("LightPurple");
  public static lightRed:      D2rColor = new D2rColor("LightRed");
  public static lightTeal:     D2rColor = new D2rColor("LightTeal");
  public static red:           D2rColor = new D2rColor("Red");
  public static veryLightGray: D2rColor = new D2rColor("VeryLightGray");
  public static white:         D2rColor = new D2rColor("White");

  // TODO: clean up
  
  // static beige         = `${this.prefix}Beige`;
  // static black         = `${this.prefix}Black`;
  // static currencyGold  = `${this.prefix}CurrencyGold`;
  // static darkGreen     = `${this.prefix}DarkGreen`;
  // static green         = `${this.prefix}Green`;
  // static lightBlue     = `${this.prefix}LightBlue`;
  // static lightGray     = `${this.prefix}LightGray`;
  // static lightPurple   = `${this.prefix}LightPurple`;
  // static lightRed      = `${this.prefix}LightRed`;
  // static lightTeal     = `${this.prefix}LightTeal`;
  // static red           = `${this.prefix}Red`;
  // static veryLightGray = `${this.prefix}VeryLightGray`;
  // static white         = `${this.prefix}White`;
}
