import { createElement } from "../core";
describe("createElement", () => {
    it("should create a complex element with nested children", () => {
        const element = createElement("game", {}, createElement("scene", {}));
        expect(element).toEqual({
            type: "game",
            props: {},
            children: [
                {
                    type: "scene",
                    props: {},
                    children: [],
                },
            ],
        });
    });
});
describe("parseJSX", () => {
    it("should correctly parse simple JSX", () => {
        const result = (createElement("game", { title: "test game" },
            createElement("scene", { id: "play" },
                createElement("entity", { id: "player" }))));
        expect(result).toEqual({
            type: "game",
            props: {
                title: "test game",
                engine: "phaser",
            },
            children: [
                {
                    type: "scene",
                    props: {},
                    children: [
                        {
                            type: "entity",
                            props: {
                                key: "player",
                            },
                            children: [],
                        },
                    ],
                },
            ],
        });
    });
});
//# sourceMappingURL=jsx-runtime.test.js.map