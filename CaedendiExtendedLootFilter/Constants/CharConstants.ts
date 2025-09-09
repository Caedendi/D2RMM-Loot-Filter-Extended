export abstract class CharConstants {
  public static empty = '';
  public static space = ' ';
  public static newLine = "\n";
  public static newLine2 = "\n\n";
  public static o     = 'o';
  public static plus  = '+';
  public static minus = '-';
  public static asterisk = '*';

  public static getSpaces(amount: number): string {
    return this.space.repeat(amount);
  }
}
