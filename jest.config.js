module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'png', 'jpg', 'html'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,tsx}',
    '**/modo-ui/**/*.{js,ts,tsx}',
    '!**/src/**/config/*.{js,ts,tsx}',
    '!**/*.stories.{js,ts,tsx}',
    '!**/*.e2e.{js,ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    'src/utils/speakeasy.js',
    'src/utils/ntpUtils.js',
    'src/utils/storiesUtils.tsx',
    'src/config/notifications/pushNotifications.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 78.5,
      branches: 65.26,
      functions: 70.75,
      lines: 79.42
    }
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
    '<rootDir>/__tests__/*',
    '\\.(test.js)$'
  ]
};