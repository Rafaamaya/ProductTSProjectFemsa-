module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'png', 'jpg', 'html'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,tsx}',
    '!**/src/hooks/*.{js,ts,tsx}',
    '!**/src/interfaces/*.{js,ts,tsx}',
    '!**/src/navigator/*.{js,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'src/utils/speakeasy.js',
    'src/utils/ntpUtils.js',
    'src/utils/storiesUtils.tsx',
    'src/config/notifications/pushNotifications.ts',
  ],
  coverageThreshold: {
    global: {
      'branches': 20,
      'functions': 30,
      'lines': 50,
      'statements': 50,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
    '<rootDir>/__tests__/*',
    '\\.(test.js)$',
  ],
};
