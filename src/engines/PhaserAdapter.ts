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
    // const gameSettings: Phaser.Types.Core.GameConfig = {
    //   type: config.renderer === "WebGL" ? Phaser.WEBGL : Phaser.CANVAS,
    //   width: config.width,
    //   height: config.height,
    //   physics: {
    //     default: config.physicsEngine.default,
    //     [config.physicsEngine.default]: config.physicsEngine.options,
    //   },
    // };

    this.game = new Phaser.Game(config);
    this.scenes = new Map();
  }

  addScene(sceneId: string, sceneConfig: any): void {
    const scene = new Phaser.Scene({
      key: sceneId,
      // physics: {
      //   arcade: {
      //     gravity: { y: sceneConfig.gravity },
      //   },
      // },
    });

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
