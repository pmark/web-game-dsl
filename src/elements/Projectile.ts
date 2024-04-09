import { Entity } from "./Entity";
import type { EntityProps } from "./Entity";

export interface ProjectileProps extends EntityProps {
  speed: number;
  damage: number;
}

export class Projectile extends Entity {
  speed: number;
  damage: number;

  constructor({ speed, damage, ...entityProps }: ProjectileProps) {
    super(entityProps);
    this.speed = speed;
    this.damage = damage;
  }

  update(deltaTime: number): void {
    // Move projectile according to its speed
  }
}
