export class Assets {
    resources;
    constructor({ resources }) {
        this.resources = new Map(Object.entries(resources));
    }
    getResource(key) {
        return this.resources.get(key);
    }
}
//# sourceMappingURL=Assets.js.map