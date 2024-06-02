/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/**
 * @jest-environment jsdom
 */

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customConfig = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

module.exports = createJestConfig(customConfig);