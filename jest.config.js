export default {
  preset: 'ts-jest/presets/default-esm',
  globals: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Resolve .js extensions to .ts files
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
};

