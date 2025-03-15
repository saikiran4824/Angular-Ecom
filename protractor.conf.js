exports.config = {
  directConnect: true, // Connect directly to ChromeDriver
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome', // Use Chrome for testing
  },
  specs: ['./e2e/**/*.e2e-spec.ts'], // Path to your test files
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },
};
