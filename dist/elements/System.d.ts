import { BaseElement } from "./BaseElement";
import type { BaseElementProps } from "./BaseElement";
import type { Entity } from "./Entity";
export interface SystemProps extends BaseElementProps {
}
export declare abstract class System extends BaseElement {
    abstract update(entities: Entity[], deltaTime: number): void;
}
