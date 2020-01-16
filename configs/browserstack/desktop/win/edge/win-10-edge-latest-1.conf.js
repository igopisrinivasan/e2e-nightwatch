const lib = require("../../../../config-helper");

suiteConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        build: "win-10-edge-18",
        os: "Windows",
        os_version: "10",
        browser: "Edge",
        browser_version: "18.0"
      }
    }
  }
};

module.exports = lib.buildParallelConfig(suiteConfig);
