import type { BaseElementProps } from "./BaseElement";
import { Component } from "./Component";
export interface SpriteProps extends BaseElementProps {
    src: string;
    width: number;
    height: number;
}
export declare class Sprite extends Component {
    src: string;
    width: number;
    height: number;
    constructor({ src, width, height }: SpriteProps);
    update(deltaTime: number): void;
}
