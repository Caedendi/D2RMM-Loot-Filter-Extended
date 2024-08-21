import { CharConstants } from "../../Constants/CharConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { RawSettings } from "../../Settings/RawSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class ShortSupInferiorPrefixesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (!RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.isEnabled)
      return;

    let supKey = "Hiquality";
    let infKeys = [ "Damaged", "Cracked", "Low Quality", "Crude" ];

    let supPrefix: string = CharConstants.empty;
    let infPrefix: string = CharConstants.empty;
    let infColor: D2Color = RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.inferiorItemsColor;
    switch (RawSettings.filter.statsAndModifiers.shortSupInfPrefixes.style) {
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
      infKeys.forEach(key => this.collection.upsert(new ItemEntry(key, `${infColor}${infPrefix}`)));
  }
}
