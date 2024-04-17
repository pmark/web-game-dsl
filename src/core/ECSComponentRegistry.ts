// File: ECSComponentRegistry.ts
import { type IWorld, defineComponent, type IComponent, Types } from "bitecs";

/**
 * A registry for storing ECS components.
 */
const ECSComponentRegistry = new Map<string, IComponent>();

/**
 * Registers a new ECS component and automatically creates a JSX-compatible component function.
 * @template T The type of the component properties.
 * @param name The unique name of the component.
 * @param definition A function that defines the component's properties and types.
 * @returns A function that creates an instance of the component with specified properties.
 */
export function registerECSComponent<T>(
  name: string,
  definition: () => IComponent
): (props: T) => ECSComponent<T> {
  const component = definition();
  ECSComponentRegistry.set(name, component);

  return function Component(props: T): ECSComponent<T> {
    return new ECSComponent<T>(name, props);
  };
}

/**
 * The generic class for an ECS component that can be instantiated with specific properties.
 * @template T The type of the properties for this component.
 */
export class ECSComponent<T> {
  type: string;
  properties: T;

  constructor(type: string, properties: T) {
    this.type = type;
    this.properties = properties;
  }

  /**
   * Instantiates this component within the specified ECS world and entity.
   * @param world The ECS world where the entity exists.
   * @param eid The entity ID to which this component will be attached.
   */
  instantiate(world: IWorld, eid: number) {
    const component = ECSComponentRegistry.get(this.type);
    if (!component) {
      throw new Error(`Component type '${this.type}' not registered.`);
    }
    for (const propKey of Object.keys(this.properties as object)) {
      (component as any)[propKey as keyof T][eid] =
        this.properties[propKey as keyof T];
    }
  }
}
