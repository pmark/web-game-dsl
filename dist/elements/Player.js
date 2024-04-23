import { BaseElement } from "./BaseElement";
export class Player extends BaseElement {
    health;
    speed;
    constructor(props) {
        super(props);
        this.health = props.health;
        this.speed = props.speed;
    }
    // Player-specific methods
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            console.log(`${this.id} is defeated.`);
        }
    }
}
//# sourceMappingURL=Player.js.map