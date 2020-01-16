const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "win-10-edge-79",
        os: "Windows",
        os_version: "10",
        browser: "Edge",
        browser_version: "79.0 beta"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
