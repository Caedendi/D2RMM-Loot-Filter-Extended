import { JunkConstants } from "../../Constants/JunkConstants";
import { Potion } from "../Items/Potion";
import { JunkItemEntry } from "./JunkItemEntry";

export class PotionEntry extends JunkItemEntry {
  constructor(potion: Potion) {
      super(potion.key, potion.name, JunkConstants.getPotionHighlight(potion.type));
  }
}
