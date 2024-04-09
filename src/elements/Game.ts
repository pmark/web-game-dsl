import { GameState } from "./GameState";
import type { BaseElementProps } from "./BaseElement";
import type { Scene } from "./Scene";

export interface GameProps extends BaseElementProps {
  title?: string;
  scenes?: Scene[];
  currentState?: GameState;
}

/**
 * Represents a game and its scenes which are usually associated with game states.
 */
export class Game {
  title: string;
  scenes: Map<string, Scene>;
  currentState: GameState;

  constructor({ title = "", scenes = [], currentState }: GameProps) {
    this.title = title;
    this.scenes = new Map(scenes.map((s) => [s.id, s]));

    const firstScene = scenes[0];
    if (firstScene) {
      this.currentState = new GameState({
        scene: firstScene,
        id: firstScene.id,
      });
    } else {
      this.currentState = new GameState({ id: GameState.initial });
    }
  }

  /**
   * Changes the game state to the specified scene.
   *
   * @param gameStateKey - The key of the game state scene ID to use unless otherwise specified.
   * @param sceneId - Optional scene ID override.
   */
  changeState(gameStateKey: string, sceneId = ""): void {
    const scene = this.scenes.get(sceneId || gameStateKey);
    if (scene) {
      this.currentState = new GameState({ scene, id: gameStateKey });
    }
  }
}
