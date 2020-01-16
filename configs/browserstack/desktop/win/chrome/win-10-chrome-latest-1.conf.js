const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "win-10-chrome-78",
        os: "Windows",
        os_version: "10",
        browser: "Chrome",
        browser_version: "78.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
