import { createElement } from "../core";
// import { Scene, Entity, Component, Game } from "../elements";
const Jump = () => createElement("component", { id: "Jump" });
const PlatformerTemplate = () => (createElement("game", null,
    createElement("scene", { id: "main", entities: [] },
        createElement("entity", { id: "player", components: [] },
            createElement("sprite", { src: "playerSprite.png", width: 64, height: 128 }),
            createElement(Jump, { height: 256 })),
        createElement("entity", { id: "platform", components: [] }))));
export default PlatformerTemplate;
//# sourceMappingURL=PlatformerTemplate.js.map