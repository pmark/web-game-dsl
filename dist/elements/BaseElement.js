export class BaseElement {
    id;
    active;
    children;
    constructor({ id = "", active = true, children = [], } = {}) {
        this.id = id;
        this.active = active;
        this.children = children;
    }
    addElement(child) {
        this.children.push(child);
    }
    removeElement(child) {
        this.children = this.children.filter((c) => c !== child);
    }
    toggleActivity() {
        this.active = !this.active;
    }
}
//# sourceMappingURL=BaseElement.js.map