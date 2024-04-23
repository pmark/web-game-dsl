import { type IWorld, type IComponent } from "bitecs";
/**
 * Registers a new ECS component and automatically creates a JSX-compatible component function.
 * @template T The type of the component properties.
 * @param name The unique name of the component.
 * @param definition A function that defines the component's properties and types.
 * @returns A function that creates an instance of the component with specified properties.
 */
export declare function registerECSComponent<T>(name: string, definition: () => IComponent): (props: T) => ECSComponent<T>;
/**
 * The generic class for an ECS component that can be instantiated with specific properties.
 * @template T The type of the properties for this component.
 */
export declare class ECSComponent<T> {
    type: string;
    properties: T;
    constructor(type: string, properties: T);
    /**
     * Instantiates this component within the specified ECS world and entity.
     * @param world The ECS world where the entity exists.
     * @param eid The entity ID to which this component will be attached.
     */
    instantiate(world: IWorld, eid: number): void;
}
