/**
 * Represents the amount of digits the iLvl has when shown in the item name.
 * 
 * Use None if the item has no iLvl, Single if it _always_ has a single digit iLvl (1 to 9, like Khalim's Will) and Double if it can have a two digits iLvl (10-99, like most items).
 */
export enum iLvlFix {
  None = 0,
  SingleDigit = 1,
  DoubleDigits = 2,
}
