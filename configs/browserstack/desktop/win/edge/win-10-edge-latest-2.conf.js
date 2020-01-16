const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "win-10-edge-17",
        os: "Windows",
        os_version: "10",
        browser: "Edge",
        browser_version: "17.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
