import { BaseElement, type BaseElementProps } from "./BaseElement";
import type { Component } from "./Component";

export interface EntityProps extends BaseElementProps {
  components?: Component[]; // Array of components that add functionality to the entity
}

export class Entity extends BaseElement {
  components: Map<string, Component>;

  constructor({ id, components = [] }: EntityProps) {
    super({ id });
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

  removeComponent(componentType: string): void {
    this.components.delete(componentType);
  }
}
