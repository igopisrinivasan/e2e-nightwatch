const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "mac-catalina-firefox-71",
        os: "OS X",
        os_version: "Catalina",
        browser: "Firefox",
        browser_version: "71.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
