import { createElement } from "../core";
import { PlatformerTemplate } from "../templates";
const MyGame = () => (createElement(PlatformerTemplate, null,
    createElement("player", { id: "hero", health: 100, speed: 100 }),
    createElement("enemy", { id: "villain", attackPower: 10 })));
//# sourceMappingURL=game-1.js.map