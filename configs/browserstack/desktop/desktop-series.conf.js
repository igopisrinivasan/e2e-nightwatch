const lib = require("../../../config-helper");

suiteConfig = {
  test_settings: {
    "win-10-chrome-78": {
      desiredCapabilities: {
        build: "win-10-chrome-78",
        os: "Windows",
        os_version: "10",
        browser: "Chrome",
        browser_version: "78.0"
      }
    },
    "win-10-edge-79": {
      desiredCapabilities: {
        build: "win-10-edge-79",
        os: "Windows",
        os_version: "10",
        browser: "Edge",
        browser_version: "79.0 beta"
      }
    },
    "win-10-firefox-71": {
      desiredCapabilities: {
        build: "win-10-firefox-71",
        os: "Windows",
        os_version: "10",
        browser: "Firefox",
        browser_version: "71.0"
      }
    }
  }
};

module.exports = lib.buildSeriesConfig(suiteConfig);
