import * as Phaser from "phaser";
interface GameConfig {
    width: number;
    height: number;
    renderer: Phaser.Types.Core.Renderer;
    physicsEngine: Phaser.Types.Core.PhysicsConfig;
}
export declare class PhaserAdapter {
    game: Phaser.Game;
    private scenes;
    constructor(config: GameConfig);
    addScene(sceneId: string, sceneConfig: any): void;
    createSprite(sceneId: string, spriteConfig: any): Phaser.GameObjects.Sprite;
}
export {};
