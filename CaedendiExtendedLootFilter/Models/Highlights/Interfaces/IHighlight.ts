import { D2Color } from "../../Colors/D2Color";

export interface IHighlight {
  color: D2Color;
  pattern: string;
  padding: string;

  apply(displayName: string): string;
}
