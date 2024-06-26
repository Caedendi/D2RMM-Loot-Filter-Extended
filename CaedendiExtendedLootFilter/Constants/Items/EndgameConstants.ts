import { ColorConstants } from "../Colors/ColorConstants";
import { HighlightConstants } from "./HighlightConstants";

export class EndgameConstants {
  static clrName = ColorConstants.orange;
  static clrHighlight = HighlightConstants.color;

  static prefixEss = `${this.clrHighlight}${HighlightConstants.pattern5}${this.clrName}${HighlightConstants.padding3}`;
  static prefixKey = `${this.clrHighlight}${HighlightConstants.pattern10}${this.clrName}${HighlightConstants.padding5}`;
  static prefixOrg = `${this.clrHighlight}${HighlightConstants.pattern3x10}${this.clrName}${HighlightConstants.padding5}`;
  static prefixSoh = `${this.clrHighlight}${HighlightConstants.pattern5}${HighlightConstants.uniqueColorName}${HighlightConstants.padding3}`;
  static prefixTkn = this.prefixKey;

  static suffixEss = `${HighlightConstants.padding3}${this.clrHighlight}${HighlightConstants.pattern5}${this.clrName}`;
  static suffixKey = `${HighlightConstants.padding5}${this.clrHighlight}${HighlightConstants.pattern10}${this.clrName}`;
  static suffixOrg = `${HighlightConstants.padding5}${this.clrHighlight}${HighlightConstants.pattern3x10}${this.clrName}`;
  static suffixSoh = `${HighlightConstants.padding3}${this.clrHighlight}${HighlightConstants.pattern5}${HighlightConstants.uniqueColorName}`;
  static suffixTkn = this.suffixKey;

  static essences = [
    { id: "tes", name: "Twisted Essence of Suffering", prefix: this.prefixEss, suffix: this.suffixEss }, // Twisted Essence of Suffering
    { id: "ceh", name: "Charged Essense of Hatred", prefix: this.prefixEss, suffix: this.suffixEss }, // Charged Essense of Hatred
    { id: "bet", name: "Burning Essence of Terror", prefix: this.prefixEss, suffix: this.suffixEss }, // Burning Essence of Terror
    { id: "fed", name: "Festering Essence of Destruction", prefix: this.prefixEss, suffix: this.suffixEss }, // Festering Essence of Destruction
  ];

  static keys = [
    { id: "pk1", name: "Key of Terror", prefix: this.prefixKey, suffix: this.suffixKey }, // Pandemonium Key 1: Key of Terror
    { id: "pk2", name: "Key of Hate", prefix: this.prefixKey, suffix: this.suffixKey }, // Pandemonium Key 2: Key of Hate
    { id: "pk3", name: "Key of Destruction", prefix: this.prefixKey, suffix: this.suffixKey }, // Pandemonium Key 3: Key of Destruction
  ];

  static organs = [
    { id: "dhn", name: "Diablo's Horn", prefix: this.prefixOrg, suffix: this.suffixOrg }, // Diablo's Horn
    { id: "bey", name: "Baal's Eye", prefix: this.prefixOrg, suffix: this.suffixOrg }, // Baal's Eye
    { id: "mbr", name: "Mephisto's Brain", prefix: this.prefixOrg, suffix: this.suffixOrg }, // Mephisto's Brain
  ];

  static token = { id: "toa", name: "Token of Absolution", prefix: this.prefixTkn, suffix: this.suffixTkn }; // Token of Absolution

  static standard = { id: "std", name: "Standard of Heroes", prefix: this.prefixSoh, suffix: this.suffixSoh }; // Standard of Heroes
}
