import { CharConstants } from "../../Constants/CharConstants";
import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { Settings } from "../../Settings/Settings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class ShortSupInferiorPrefixesComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    if (!Settings.statsAndModifiers.shortSupInfPrefixes.isEnabled)
      return;

    let supKey = "Hiquality";
    let infKeys = [ "Damaged", "Cracked", "Low Quality", "Crude" ];

    let supPrefix: string = CharConstants.empty;
    let infPrefix: string = CharConstants.empty;
    switch (Settings.statsAndModifiers.shortSupInfPrefixes.style) {
      case "plusminus": // Enable
        supPrefix = `${CharConstants.plus}`;
        infPrefix = `${CharConstants.minus}`;
        break;
      case "supinf": // Enable
        supPrefix = `Sup`;
        infPrefix = `Inf`;
        break;
      }

      if (Settings.statsAndModifiers.shortSupInfPrefixes.isGrayInfEnabled)
        infPrefix = `${ColorConstants.gray}${infPrefix}`;

      this.collection.upsert(new ItemEntry(supKey, supPrefix));
      infKeys.forEach(key => this.collection.upsert(new ItemEntry(key, infPrefix)));
  }
}
