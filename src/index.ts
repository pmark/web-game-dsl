import { PhaserAdapter } from "./engines/PhaserAdapter";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

// Example of configuration usage
// document.addEventListener("DOMContentLoaded", () => {
const adapter = new PhaserAdapter({
  width: 1024,
  height: 768,
  renderer: "auto",
  physicsEngine: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 200 },
    },
  },
});

adapter.addScene("main", {});

adapter.createSprite("main", {
  x: 100,
  y: 100,
  texture: "player",
  velocity: { x: 0, y: 0 },
});
// });

// TODO: define game using DSL syntax
// TODO: import components from components/index.ts
export default adapter.game;
