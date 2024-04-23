import type { BaseElementProps } from "./BaseElement";
import type { Scene } from "./Scene";
export interface GameStateProps extends BaseElementProps {
    scene?: Scene;
    id: string;
}
export declare class GameState {
    scene?: Scene;
    id: string;
    constructor({ scene, id }: GameStateProps);
    static initial: string;
    static paused: string;
    static playing: string;
    static gameOver: string;
    static levelComplete: string;
    static cutscene: string;
    static menu: string;
    static settings: string;
    static credits: string;
    static loading: string;
    static saving: string;
    static exiting: string;
    static error: string;
}
