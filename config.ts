import { browser } from "protractor";
exports.config = {

    directConnect: true,
    framework: 'mocha',

    SELENIUM_PROMISE_MANAGER: false,
    capabilities:
    {
       /* browserName: 'chrome',
        chromeOptions: { 'args': ['disable-infobars'] },
        acceptSslCerts: true*/
        browserName: 'firefox',
        'moz:firefoxOptions': {
            // args: ["--safe-mode"],
            args: ["--headless"],
        },
    },

    suites: {
        mochaTest: '../outputjs/pageObjects/*.js'
    },

    onPrepare: async function () {
        await browser.driver.manage().window().maximize();
    },

    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 100000
    },
}
