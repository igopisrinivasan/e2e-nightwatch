const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "mac-catalina-chrome-79",
        os: "OS X",
        os_version: "Catalina",
        browser: "Chrome",
        browser_version: "79.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
