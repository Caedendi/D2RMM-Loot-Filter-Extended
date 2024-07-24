import { FileConstants } from "../Constants/FileConstants";

// TODO: match class name with file name
export class SoundEffectPair {
  public sd: string;
  public hd: string;

  constructor(sdFolder: string, sdName: string, hdFolder: string, hdName: string) {
    this.sd = `${sdFolder}${sdName}${FileConstants.FILE_EXTENSION_FLAC}`;
    this.hd = `${hdFolder}${hdName}${FileConstants.FILE_EXTENSION_FLAC}`;
  }
}
