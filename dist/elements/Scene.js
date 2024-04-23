import { BaseElement } from "./BaseElement";
export class Scene extends BaseElement {
    entities;
    constructor({ id, entities = [] }) {
        super({ id });
        this.entities = entities;
    }
    addEntity(entity) {
        this.entities.push(entity);
    }
    removeEntity(entity) {
        this.entities = this.entities.filter((e) => e !== entity);
    }
}
//# sourceMappingURL=Scene.js.map