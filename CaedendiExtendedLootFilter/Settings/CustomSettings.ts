import { CharConstants } from "../Constants/CharConstants";
import { SoundEffect } from "../Models/SoundEffect";

// TODO: finish?
export abstract class CustomSettings {
  public static readonly filter = {
    statsAndModifiers: {
      itemQuality: {
        indicatorStyle: {
          single: {
            normal:      "[custom n]",
            exceptional: "[custom x]",
            elite:       "[custom e]",
          },
          double: {
            prefix: {
              normal:       "-custom-",
              exceptional:  "=custom=",
              elite:       "-=custom=-",
            },
            suffix: {
              normal:       "-custom-",
              exceptional:  "=custom=",
              elite:       "-=custom=-",
            },
          },
        },
        bracketStyle: {
          openChar:  "[custom[",
          closeChar: "]custom]",
        }
      },
    },
    settings: {
      highlightCharacter: "c", // [CSTM-HLCTR]
    },
    bigTooltips: {
      prefix: CharConstants.empty, // [CSTM-BTT]
      suffix: CharConstants.empty, // [CSTM-BTT]
    },
  };
  
  public static readonly lightPillars = {

  };
  
  public static readonly dropSounds = {
    customSound: new SoundEffect("", "", "", ""), // [CSTM-DSND]
  };
}
