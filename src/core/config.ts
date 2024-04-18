import * as fs from "node:fs";
import * as path from "node:path";

function loadConfiguration() {
  const defaultConfigPath = path.join(
    __dirname,
    "node_modules",
    "web-game-dsl",
    "dist",
    "lib",
    "core",
    "default-config.js"
  );

  const customConfigPath = path.join(process.cwd(), "web-game-dsl-config.ts");

  try {
    if (fs.existsSync(customConfigPath)) {
      return require(customConfigPath);
    }
    return require(defaultConfigPath);
  } catch (err) {
    console.error("Error loading configuration:", err);
    return require(defaultConfigPath); // Fallback to default config
  }
}

module.exports = loadConfiguration;
