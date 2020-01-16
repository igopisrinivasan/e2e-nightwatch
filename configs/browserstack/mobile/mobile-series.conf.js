const lib = require("../../../config-helper");

suiteConfig = {
  test_settings: {
    "ios-13-iphone-xs": {
      // silent: true,
      // automationName: "XCUITest",
      desiredCapabilities: {
        build: "ios-13-iphone-xs",
        device: "iPhone XS",
        realMobile: "true",
        os_version: "13"
      }
    },
    "ios-11-iphone-x": {
      // silent: true,
      // automationName: "XCUITest",
      desiredCapabilities: {
        build: "ios-11-iphone-x",
        device: "iPhone X",
        realMobile: "true",
        os_version: "11"
      }
    },
    "ios-13-iphone-8": {
      // silent: true,
      // automationName: "XCUITest",
      desiredCapabilities: {
        build: "ios-13-iphone-8",
        device: "iPhone 8",
        realMobile: "true",
        os_version: "13"
      }
    },
    "ios-12-ipad-air-2019": {
      // silent: true,
      // automationName: "XCUITest",
      desiredCapabilities: {
        build: "ios-12-ipad-air-2019",
        device: "iPad Air 2019",
        realMobile: "true",
        os_version: "12"
      }
    },
    "android-9-galaxy-s10": {
      desiredCapabilities: {
        build: "android-9-galaxy-s10",
        device: "Samsung Galaxy S10",
        realMobile: "true",
        os_version: "9.0"
      }
    },
    "android-7-galaxy-s8": {
      desiredCapabilities: {
        build: "android-7-galaxy-s8",
        device: "Samsung Galaxy S8",
        realMobile: "true",
        os_version: "7.0"
      }
    },
    "android-9-galaxy-note-10": {
      desiredCapabilities: {
        build: "android-9-galaxy-note-10",
        device: "Samsung Galaxy Note 10",
        realMobile: "true",
        os_version: "9.0"
      }
    },
    "android-10-pixel-3": {
      desiredCapabilities: {
        build: "android-10-pixel-3",
        device: "Google Pixel 3",
        realMobile: "true",
        os_version: "10.0"
      }
    },
    "android-9-galaxy-tab-s5e": {
      desiredCapabilities: {
        build: "android-9-galaxy-tab-s5e",
        device: "Samsung Galaxy Tab S5e",
        realMobile: "true",
        os_version: "9.0"
      }
    },
    "android-7-galaxy-tab-s3": {
      desiredCapabilities: {
        build: "android-7-galaxy-tab-s3",
        device: "Samsung Galaxy Tab S3",
        realMobile: "true",
        os_version: "7.0"
      }
    }
  }
};

module.exports = lib.buildSeriesConfig(suiteConfig);
