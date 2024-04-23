import type { BaseElementProps } from "./BaseElement";
import type { Entity } from "./Entity";
export interface EntityStateProps extends BaseElementProps {
    entity: Entity;
    isActive: boolean;
}
export declare class EntityState {
    entity: Entity;
    isActive: boolean;
    constructor({ entity, isActive }: EntityStateProps);
}
