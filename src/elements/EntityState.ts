import type { BaseElementProps } from "./BaseElement";
import type { Entity } from "./Entity";

export interface EntityStateProps extends BaseElementProps {
  entity: Entity;
  isActive: boolean;
}

export class EntityState {
  entity: Entity;
  isActive: boolean;

  constructor({ entity, isActive = true }: EntityStateProps) {
    this.entity = entity;
    this.isActive = isActive;
  }
}
