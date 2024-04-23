import { BaseElement } from "./BaseElement";
import type { BaseElementProps } from "./BaseElement";
export interface PlayerProps extends BaseElementProps {
    health: number;
    speed: number;
}
export declare class Player extends BaseElement {
    health: number;
    speed: number;
    constructor(props: PlayerProps);
    takeDamage(amount: number): void;
}
