import { BaseElement, type BaseElementProps } from "./BaseElement";
import type { Entity } from "./Entity";
export interface SceneProps extends BaseElementProps {
    entities?: Entity[];
}
export declare class Scene extends BaseElement {
    entities: Entity[];
    constructor({ id, entities }: SceneProps);
    addEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
}
