import { BaseElement } from ".";
export class Enemy extends BaseElement {
    attackPower;
    constructor(props) {
        super(props);
        this.attackPower = props.attackPower;
    }
    // Enemy-specific methods
    attack(target) {
        console.log(`${this.id} attacks ${target.id} for ${this.attackPower} damage.`);
        target.takeDamage(this.attackPower);
    }
}
//# sourceMappingURL=Enemy.js.map