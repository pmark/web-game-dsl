import { BaseElement } from "./BaseElement";
import type { BaseElementProps } from "./BaseElement";

export interface SystemProps extends BaseElementProps {}

export abstract class Component extends BaseElement {
  abstract update(deltaTime: number): void;
}
