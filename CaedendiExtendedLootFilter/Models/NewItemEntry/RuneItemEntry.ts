import { D2Color } from "../D2Color";
import { ItemEntry } from "../ItemEntry";

// if has no affix: rune name will be hardcoded
// if has affix: use translated name and 
export class RuneItemEntry extends ItemEntry {
  protected _tier: number;
  protected _hasRuneAffix: boolean;
  protected _number?: number;
  protected _alternateHighlightColor?: D2Color;
}
