const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "win-10-firefox-70",
        os: "Windows",
        os_version: "10",
        browser: "Firefox",
        browser_version: "70.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
