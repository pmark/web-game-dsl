import { BaseElement } from ".";
import type { Player, BaseElementProps } from ".";

export interface EnemyProps extends BaseElementProps {
  attackPower: number;
}

export class Enemy extends BaseElement<EnemyProps> {
  attackPower: number;

  constructor(props: EnemyProps) {
    super(props);
    this.attackPower = props.attackPower;
  }

  // Enemy-specific methods
  attack(target: Player): void {
    console.log(
      `${this.id} attacks ${target.id} for ${this.attackPower} damage.`
    );
    target.takeDamage(this.attackPower);
  }
}
