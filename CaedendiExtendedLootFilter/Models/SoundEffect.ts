import { DropSoundConstants } from "../Constants/DropSoundConstants";

export class SoundEffectPair {
  public sd: string;
  public hd: string;

  constructor(sdFolder:string, sdName:string, hdFolder:string, hdName:string) {
    this.sd = `${sdFolder}${sdName}${DropSoundConstants.FILE_EXTENSION_FLAC}`;
    this.hd = `${hdFolder}${hdName}${DropSoundConstants.FILE_EXTENSION_FLAC}`;
  }
}