require("dotenv").config();
lib = {
  commonConfig: {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: [],

    // See https://nightwatchjs.org/guide/working-with-page-objects/
    page_objects_path: ["page-objects"],

    // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
    custom_commands_path: "",

    // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
    custom_assertions_path: "",

    // See https://nightwatchjs.org/guide/#external-globals
    globals_path: "",

    webdriver: {},

    selenium: {
      start_process: false,
      host: "hub-cloud.browserstack.com",
      port: 443
    }
  },
  test_workers: {
    enabled: true,
    workers: 10
  },
  common_capabilities: {
    "browserstack.user": process.env.BROWSERSTACK_USERNAME,
    "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
    "browserstack.console": "errors",
    "browserstack.debug": true,
    "browserstack.geoLocation": "IT",
    "browserstack.networkLogs": true
    // resolution: "1280x1024"
  },
  extendConfig(nightwatch_config) {
    const currentEnv = this.getArg("ciEnv");

    for (var i in nightwatch_config.test_settings) {
      const config = nightwatch_config.test_settings[i];
      config["selenium_host"] = nightwatch_config.selenium.host;
      config["selenium_port"] = nightwatch_config.selenium.port;
      config["desiredCapabilities"] = config["desiredCapabilities"] || {};
      config["desiredCapabilities"].project = currentEnv;
      config["desiredCapabilities"].build = `${
        config["desiredCapabilities"].build
      } - ${new Date().toISOString()}`;

      for (var j in lib.common_capabilities) {
        config["desiredCapabilities"][j] =
          config["desiredCapabilities"][j] || lib.common_capabilities[j];
      }
    }
  },
  buildParallelConfig(suiteConfig) {
    const config = this.buildSeriesConfig(suiteConfig);
    config.test_workers = this.test_workers;
    return config;
  },
  buildSeriesConfig(suiteConfig) {
    const config = Object.assign({}, this.commonConfig, suiteConfig);

    this.extendConfig(config);

    const device = this.getArg("device");
    switch (device) {
      case "desktop":
        config.src_folders.push("tests/desktop");
        break;
      case "mobile":
        config.src_folders.push("tests/mobile");
        break;
      default:
        console.error("No --device arg passed");
        break;
    }
    return config;
  },
  getArg(argName) {
    const argFound = process.argv.find(item => item.includes(argName));

    if (argFound) {
      return argFound.split("=")[1];
    }
    return undefined;
  }
};

module.exports = lib;
