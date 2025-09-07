import { ColorConstants } from "../../Constants/Colors/ColorConstants";
import { SettingsConstants } from "../../Constants/SettingsConstants";
import { D2Color } from "../../Models/Colors/D2Color";
import { ItemEntry } from "../../Models/ItemCollectionEntries/ItemEntry";
import { JunkSettings } from "../../Settings/Filter/JunkSettings";
import { IItemCollectionComposer } from "../Interfaces/IItemCollectionComposer";
import { ItemCollectionComposerBase } from "../ItemCollectionComposerBase";

export class GoldComposer extends ItemCollectionComposerBase implements IItemCollectionComposer {
  constructor() {
    super();
  }

  public applyFilter(): void {
    const color = this.getGoldAffixColor();
    const gld = "gld";

    switch (JunkSettings.goldSuffix) {
      case SettingsConstants.disabled: // Gold displays as "1234 Gold".
        if (color != null)
          this.collection.upsert(new ItemEntry(gld, null, color)); // TODO: test use of translated name
        return;
      case "g": // Gold displays as "1234 G".
        this.collection.upsert(new ItemEntry(gld, `G`, color));
        return;
      case "hide": // Gold displays as "1234".
        this.collection.upsertHidden(gld);
        return;
    }
  }

  private getGoldAffixColor(): D2Color | null {
    if (JunkSettings.goldTooltipColors === "wg")
      return ColorConstants.gold;
    if (JunkSettings.goldTooltipColors === "gw")
      return ColorConstants.white;

    return null;
  }
}
