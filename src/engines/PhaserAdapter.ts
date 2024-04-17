import * as Phaser from "phaser";

interface GameConfig {
  width: number;
  height: number;
  renderer: Phaser.Types.Core.Renderer;
  physicsEngine: Phaser.Types.Core.PhysicsConfig;
}

export class PhaserAdapter {
  game: Phaser.Game;
  private scenes: Map<string, Phaser.Scene>;

  constructor(config: GameConfig) {
    const gameConfig = {
      type: Phaser.AUTO,
      ...config,
    };

    this.game = new Phaser.Game(gameConfig);
    this.scenes = new Map();
  }

  addScene(
    sceneId: string,
    sceneConfig: string | Phaser.Types.Scenes.SettingsConfig
  ): void {
    const scene = new Phaser.Scene({ key: sceneId });

    scene.create = () => {
      const camera = scene.cameras.main;
      camera.setBackgroundColor(0x00ff99);
    };

    this.scenes.set(sceneId, scene);
    this.game.scene.add(sceneId, scene, true);
  }

  createSprite(sceneId: string, spriteConfig: any): Phaser.GameObjects.Sprite {
    const scene = this.scenes.get(sceneId);
    if (!scene) {
      throw new Error("Scene not found: " + sceneId);
    }

    const sprite = scene.add.sprite(
      spriteConfig.x,
      spriteConfig.y,
      spriteConfig.texture
    );
    if (spriteConfig.physics) {
      scene.physics.world.enable(sprite);
      sprite.body.setVelocity(spriteConfig.velocity.x, spriteConfig.velocity.y);
    }
    // Additional sprite configuration as necessary
    return sprite;
  }

  // Additional methods for event handling, asset management, etc.
}
