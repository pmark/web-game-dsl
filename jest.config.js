export default {
  preset: "ts-jest/presets/default-esm",
  globals: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Resolve .js extensions to .ts files
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
};
