const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.+(ts|tsx|js)',
    '!**/__tests__/test-utils/**/*.+(ts|tsx|js)',
  ],
};

module.exports = customJestConfig;
