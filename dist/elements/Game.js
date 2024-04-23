import { GameState } from "./GameState";
/**
 * Represents a game and its scenes which are usually associated with game states.
 */
export class Game {
    engine;
    title;
    scenes;
    currentState;
    // Make a list of engines for easy code completion
    constructor({ title = "", scenes = [], engine = "phaser", initialStateId = "", }) {
        this.engine = engine;
        this.title = title;
        this.scenes = new Map(scenes.map((s) => [s.id, s]));
        this.currentState = this.changeState(initialStateId || GameState.initial);
    }
    /**
     * Changes the game state to the specified scene.
     *
     * @param gameStateKey - The key of the game state scene ID to use unless otherwise specified.
     * @param sceneId - Optional scene ID override.
     */
    changeState(gameStateKey, sceneId = "") {
        const sceneKey = sceneId || gameStateKey;
        if (!sceneKey) {
            throw new Error("No scene ID provided while changing game state.");
        }
        const scene = this.scenes.get(sceneKey);
        if (scene) {
            return new GameState({ scene, id: gameStateKey });
        }
        return this.currentState;
    }
}
//# sourceMappingURL=Game.js.map