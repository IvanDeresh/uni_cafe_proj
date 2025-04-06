import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/?(*.)+(spec|test).(ts|tsx|js)"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
