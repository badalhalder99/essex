/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/jest-transformer.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest-static-asset-transformer.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setupTests.js"],
  roots: ["<rootDir>/tests"],
};
