module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
}
