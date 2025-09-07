import { CharConstants } from "../../Constants/CharConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { ShortSupInfPrefixesSettings } from "../../Settings/Filter/ShortSupInfPrefixesSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class ShortSupInferiorPrefixesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (!ShortSupInfPrefixesSettings.isEnabled)
      return;

    const supKey = "Hiquality";
    const infKeys = [ "Damaged", "Cracked", "Low Quality", "Crude" ];

    let supPrefix = CharConstants.empty;
    let infPrefix = CharConstants.empty;
    const infColor = ShortSupInfPrefixesSettings.inferiorItemsColor;
    switch (ShortSupInfPrefixesSettings.style) {
      case "plusminus": // Enable
        supPrefix = `${CharConstants.plus}`;
        infPrefix = `${CharConstants.minus}`;
        break;
      case "supinf": // Enable
        supPrefix = `Sup`;
        infPrefix = `Inf`;
        break;
      }

      this.collection.upsert(new ItemEntry(supKey, supPrefix));
      infKeys.forEach(key => this.collection.upsert(new ItemEntry(key, `${infColor ?? CharConstants.empty}${infPrefix}`)));
  }
}
