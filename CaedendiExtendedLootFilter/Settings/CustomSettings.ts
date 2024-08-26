export abstract class CustomSettings {
  // TODO
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
  };
  
  public static readonly lightPillars = {

  };
  
  public static readonly dropSounds = {

  };
}
