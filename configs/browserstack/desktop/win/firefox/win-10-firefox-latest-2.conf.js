const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "win-10-firefox-69",
        os: "Windows",
        os_version: "10",
        browser: "Firefox",
        browser_version: "69.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
