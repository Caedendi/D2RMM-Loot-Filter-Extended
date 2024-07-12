import { IBigTooltipItemBuilder } from "./Interfaces/IBigTooltipItemBuilder";
import { ItemBuilderBase } from "./ItemBuilderBase";

// TODO: remove? adds nothing new to IBigTooltipItemBuilder
export abstract class BigTooltipItemBuilderBase extends ItemBuilderBase implements IBigTooltipItemBuilder {
  public abstract addBigTooltips(): void;
}
