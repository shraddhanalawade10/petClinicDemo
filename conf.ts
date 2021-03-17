import { Config, browser } from "protractor";

let reporter = require('cucumber-html-reporter');

exports.config = {

    allScriptsTimeout: 100000,
    getPageTimeout: 100000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    SELENIUM_PROMISE_MANAGER: false,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        /*browserName: 'chrome',
        chromeOptions: { 'args': ['disable-infobars'] },
        acceptSslCerts: true*/
        browserName: 'firefox',
        'moz:firefoxOptions': {
            // args: ["--safe-mode"],
            args: ["--headless"],
    },
},

    specs: [
        '../Features/*.feature'
        // '../features/Owners/newOwner.feature',
        // '../features/Owners/ownerList.feature',
        // '../features/Owners/viewOwner.feature',
        //'../features/veterinarians.feature',
        // '../features/petTypes.feature'    // Specs here are the cucumber feature files
    ],

    directConnect: true,

    cucumberOpts: {
        // require step definitions
        //tags:"@L3",
        format: 'json:./cucumberreport.json',

        strict: true,

        require: [
            '../outputjs/Step-definition/*.js',
            '../outputjs/config/*.js'
        ],
    },

    onPrepare: async () => {
        var os = require('os');
        browser.driver.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
    },

    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumberreport.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "test",
                "Browser": "Chrome  79.0.3945.88",
                "Platform": "Windows 7",
                "Parallel": "Scenarios",
                "Executed": "Web App"
            }
        };
        reporter.generate(options);
    }
}
