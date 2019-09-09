// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,jsx}'],
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "node_modules/",
    "dist",
    "/src/__mock__"
  ],
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  // The test environment that will be used for testing
  testEnvironment: "node",
};
