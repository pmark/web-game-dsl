import { BaseElement } from ".";
import type { Player, BaseElementProps } from ".";
export interface EnemyProps extends BaseElementProps {
    attackPower: number;
}
export declare class Enemy extends BaseElement {
    attackPower: number;
    constructor(props: EnemyProps);
    attack(target: Player): void;
}
