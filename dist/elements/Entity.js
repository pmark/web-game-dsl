import { BaseElement } from "./BaseElement";
export class Entity extends BaseElement {
    components;
    constructor({ id, components = [] }) {
        super({ id });
        this.components = new Map(components.map((c) => [c.constructor.name, c]));
    }
    addComponent(component) {
        this.components.set(component.constructor.name, component);
    }
    getComponent(componentType) {
        return this.components.get(componentType.name);
    }
    removeComponent(componentType) {
        this.components.delete(componentType);
    }
}
//# sourceMappingURL=Entity.js.map