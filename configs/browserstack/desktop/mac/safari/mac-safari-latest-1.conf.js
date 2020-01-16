const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "mac-mojave-safari-12",
        os: "OS X",
        os_version: "Mojave",
        browser: "Safari",
        browser_version: "12.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
