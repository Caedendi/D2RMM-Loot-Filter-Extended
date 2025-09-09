import { EDoubleHighlightSetting } from "../../Settings/Enums/EDoubleHighlightSetting";

export enum EDoubleHighlightSize {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
  EXTRA_LARGE = 4,
  EXTRA_EXTRA_LARGE = 5,
}

export namespace EDoubleHighlightSize {
  export function fromSetting(setting: EDoubleHighlightSetting): EDoubleHighlightSize | null {
    if (setting === EDoubleHighlightSetting.DISABLED) {
      return null;
    }

    const validSizes = new Set<number>(Object.values(EDoubleHighlightSize).filter(v => typeof v === 'number') as number[]);
    if (validSizes.has(setting)) {
      return setting as unknown as EDoubleHighlightSize;
    }

    throw new Error(`Invalid EDoubleHighlightSetting value: ${setting}.`);
  }
}
