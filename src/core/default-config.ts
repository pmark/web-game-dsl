import type { GameConfig } from "./types";

// Default game configuration example
export const defaultConfig: GameConfig = {
  width: 800,
  height: 600,
  parent: "game-container",
  backgroundColor: "#000000",
  physics: {
    type: "arcade",
    gravity: { x: 0, y: 300 },
    maxVelocity: 200,
    debug: false,
  },
  audio: {
    disableWebAudio: false,
    noAudio: false,
  },
  accessibility: {
    keyboardNavigationEnabled: true,
    highContrastEnabled: false,
  },
  performance: {
    powerPreference: "high-performance",
    antialias: true,
    pixelArt: false,
  },
};
