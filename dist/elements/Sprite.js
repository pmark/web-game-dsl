import { Component } from "./Component";
export class Sprite extends Component {
    src;
    width;
    height;
    constructor({ src, width, height }) {
        super();
        this.src = src;
        this.width = width;
        this.height = height;
    }
    update(deltaTime) {
        // Animation or rendering updates
    }
}
//# sourceMappingURL=Sprite.js.map