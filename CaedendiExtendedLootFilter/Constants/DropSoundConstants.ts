import { SoundEffectPair } from "../Models/SoundEffect";
import { CharConstants } from "./CharConstants";

export class DropSoundConstants {
  // sound names
  static SOUND_NONE = "";
  static SOUND_ITEM_RUNE = "item_rune";
  static SOUND_PREFIX = "celf_"; // caedendi's extended loot filter


  // channels
  static CHANNEL_ITEMS_SD = "sfx/items_sd";
  static CHANNEL_ITEMS_HD = "sfx/items_hd";

  // file names
  static FILE_CURSOR = "cursor\\";
  static FILE_OBJECT = "object\\";
  static FILE_EXTENSION_FLAC = ".flac";
  static FILE_NONE = `none${this.FILE_EXTENSION_FLAC}`;

  static SOUND_EFFECTS = {
    hostile:       new SoundEffectPair(this.FILE_CURSOR, "hostile",        this.FILE_CURSOR, "cursor_hostile_1_hd"),
    hf_place:      new SoundEffectPair(this.FILE_OBJECT, "hellforgeplace", this.FILE_OBJECT, "object_hellforgeplace_hd"),
    hf_smash:      new SoundEffectPair(this.FILE_OBJECT, "hellforgesmash", this.FILE_OBJECT, "object_hellforgesmash_hd"),
    cairn_success: new SoundEffectPair(this.FILE_OBJECT, "cairnsuccess",   this.FILE_OBJECT, "object_cairnsuccess_hd"),
    portal_open:   new SoundEffectPair(this.FILE_OBJECT, "portalopen",     this.FILE_OBJECT, "object_portalopen_hd"),
    quest_done:    new SoundEffectPair(this.FILE_CURSOR, "questdone",      this.FILE_CURSOR, "cursor_questdone_1_hd"),
    none:          new SoundEffectPair(CharConstants.empty, this.FILE_NONE, CharConstants.empty, this.FILE_NONE),
    custom:        new SoundEffectPair("", "", "", ""), // Put your custom drop sounds here [CSTM-DSND]
  };
}
