export interface GameConfig {
  width: number; // Width of the game window or canvas
  height: number; // Height of the game window or canvas
  parent: string; // The DOM element in which to insert the Phaser canvas
  backgroundColor: string; // Background color of the game window or canvas
  physics: {
    type: "arcade" | "matter" | "impact"; // Type of physics engine to use
    gravity: { x: number; y: number }; // Gravity vector for the physics engine
    maxVelocity: number; // Maximum velocity for physics objects
    debug: boolean; // Whether to enable physics debugging
  };
  audio: {
    disableWebAudio: boolean; // Whether to disable WebAudio and use HTML5 Audio
    noAudio: boolean; // Whether to completely disable all sound output
  };
  accessibility: {
    keyboardNavigationEnabled: boolean; // Enable tabbing and other keyboard controls
    highContrastEnabled: boolean; // High contrast mode for better visibility
  };
  performance: {
    powerPreference: "high-performance" | "low-power"; // Hint to the browser on how to balance performance and battery usage
    antialias: boolean; // Whether to perform antialiasing
    pixelArt: boolean; // Enables crisp pixel art scaling
  };
}
