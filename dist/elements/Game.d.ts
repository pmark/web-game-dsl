import { GameState } from "./GameState";
import type { BaseElementProps } from "./BaseElement";
import type { Scene } from "./Scene";
export interface GameProps extends BaseElementProps {
    title?: string;
    scenes?: Scene[];
    initialStateId?: string;
    engine?: Engine;
}
/**
 * Represents a game and its scenes which are usually associated with game states.
 */
export declare class Game {
    engine: Engine;
    title: string;
    scenes: Map<string, Scene>;
    currentState: GameState;
    constructor({ title, scenes, engine, initialStateId, }: GameProps);
    /**
     * Changes the game state to the specified scene.
     *
     * @param gameStateKey - The key of the game state scene ID to use unless otherwise specified.
     * @param sceneId - Optional scene ID override.
     */
    changeState(gameStateKey: string, sceneId?: string): GameState;
}
export type Engine = "phaser" | "three" | "babylon";
