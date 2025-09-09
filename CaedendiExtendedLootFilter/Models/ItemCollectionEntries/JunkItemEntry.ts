import { JunkConstants } from "../../Constants/JunkConstants";
import { IHighlight } from "../Highlights/Interfaces/IHighlight";
import { ItemEntry } from "./ItemEntry";

export class JunkItemEntry extends ItemEntry {
  constructor(
    key: string,
    newName?: string | null,
    highlight?: IHighlight | null
  ) {
    super(key, newName, JunkConstants.nameColor, highlight);
  }
}
