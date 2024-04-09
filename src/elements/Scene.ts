import { BaseElement, type BaseElementProps } from "./BaseElement";
import type { Entity } from "./Entity";

export interface SceneProps extends BaseElementProps {
  entities?: Entity[];
}

export class Scene extends BaseElement {
  entities: Entity[];

  constructor({ id, entities = [] }: SceneProps) {
    super({ id });
    this.entities = entities;
  }

  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }
}
