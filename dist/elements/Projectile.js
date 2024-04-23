import { Entity } from "./Entity";
export class Projectile extends Entity {
    speed;
    damage;
    constructor({ speed, damage, ...entityProps }) {
        super(entityProps);
        this.speed = speed;
        this.damage = damage;
    }
    update(deltaTime) {
        // Move projectile according to its speed
    }
}
//# sourceMappingURL=Projectile.js.map