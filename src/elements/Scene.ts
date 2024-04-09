import type { BaseElementProps } from "./BaseElement";
import type { Entity } from "./Entity";

export interface SceneProps extends BaseElementProps {
  id: string;
  entities: Entity[];
}

export class Scene {
  id: string;
  entities: Entity[];

  constructor({ id, entities = [] }: SceneProps) {
    this.id = id;
    this.entities = entities;
  }

  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }
}
