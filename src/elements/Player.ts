import { BaseElement } from "./BaseElement";
import type { BaseElementProps } from "./BaseElement";

export interface PlayerProps extends BaseElementProps {
  health: number;
  speed: number;
}

export class Player extends BaseElement {
  health: number;
  speed: number;

  constructor(props: PlayerProps) {
    super(props);
    this.health = props.health;
    this.speed = props.speed;
  }

  // Player-specific methods
  takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health <= 0) {
      console.log(`${this.id} is defeated.`);
    }
  }
}
