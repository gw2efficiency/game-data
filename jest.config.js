module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testMatch: ['**/src/**/test.ts'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'ts']
}
