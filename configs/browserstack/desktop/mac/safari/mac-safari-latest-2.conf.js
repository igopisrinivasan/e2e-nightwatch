const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "mac-high-sierra-safari-11",
        os: "OS X",
        os_version: "High Sierra",
        browser: "Safari",
        browser_version: "11.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
