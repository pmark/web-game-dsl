import { Entity } from "./Entity";
import type { EntityProps } from "./Entity";
export interface ProjectileProps extends EntityProps {
    speed: number;
    damage: number;
}
export declare class Projectile extends Entity {
    speed: number;
    damage: number;
    constructor({ speed, damage, ...entityProps }: ProjectileProps);
    update(deltaTime: number): void;
}
