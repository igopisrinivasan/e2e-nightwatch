const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "mac-catalina-safari-13",
        os: "OS X",
        os_version: "Catalina",
        browser: "Safari",
        browser_version: "13.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
