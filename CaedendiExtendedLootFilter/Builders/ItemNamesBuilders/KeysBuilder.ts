import { SettingsConstants } from "../../Constants/SettingsConstants";
import { BaseBuilder } from "./BaseBuilder";
import { IBuilder } from "./Interfaces/IBuilder";

export class KeysBuilder extends BaseBuilder implements IBuilder {
  constructor() {
    super();
  }

  public build(): void {
    switch (config.Keys as string) { // todo: validate setting as string
      case SettingsConstants.disabled:
        return;
      case "hide":
        this.collection.upsert("key", SettingsConstants.hidden);
        return;
      case SettingsConstants.custom: // [CSTM-KEY]
        // ADD YOUR CUSTOM ITEM NAMES HERE
        this.collection.upsert("key", "Key");
        return;
    }
  }
}
