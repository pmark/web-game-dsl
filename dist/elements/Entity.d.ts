import { BaseElement, type BaseElementProps } from "./BaseElement";
import type { Component } from "./Component";
export interface EntityProps extends BaseElementProps {
    components?: Component[];
}
export declare class Entity extends BaseElement {
    components: Map<string, Component>;
    constructor({ id, components }: EntityProps);
    addComponent(component: Component): void;
    getComponent<T extends Component>(componentType: new (...args: any[]) => T): T | undefined;
    removeComponent(componentType: string): void;
}
