import { IHighlightPattern } from "./IHighlightPattern";

export abstract class DoubleHighlightPatternBase implements IHighlightPattern {
  protected _prefix: string;
  protected _suffix: string;

  public apply(displayName: string): string {
    return `${this.getPrefix()}${displayName}${this.getSuffix()}`;
  }

  protected abstract getPrefix(): string;

  protected abstract getSuffix(): string;
}
