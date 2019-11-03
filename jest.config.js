module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testMatch: ['**/src/**/test.ts'],
  testPathIgnorePatterns: ['/node_modules/', 'src/_helpers/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'ts']
}
