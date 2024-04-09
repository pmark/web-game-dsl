import type { Component } from "./Component";

export interface EntityProps {
  id: string;
  components: Component[]; // Array of components that add functionality to the entity
}

export class Entity {
  id: string;
  components: Map<string, Component>;

  constructor({ id, components = [] }: EntityProps) {
    this.id = id;
    this.components = new Map(components.map((c) => [c.constructor.name, c]));
  }

  addComponent(component: Component): void {
    this.components.set(component.constructor.name, component);
  }

  getComponent<T extends Component>(
    componentType: new (...args: any[]) => T
  ): T | undefined {
    return this.components.get(componentType.name) as T | undefined;
  }

  removeComponent(componentType: Function): void {
    this.components.delete(componentType.name);
  }
}
