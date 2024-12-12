exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '13',
        'appium:appPackage': 'com.android.chrome',
        'appium:appActivity': 'com.google.android.apps.chrome.Main', // Trở lại activity chính
        'appium:noReset': false, // Đổi thành false
        'appium:autoGrantPermissions': true,
        'appium:nativeWebScreenshot': true,
        'appium:newCommandTimeout': 3600,
        'appium:intentAction': 'android.intent.action.MAIN',
        'appium:intentCategory': 'android.intent.category.LAUNCHER',
        'appium:dontStopAppOnReset': true,
        'appium:chromedriverExecutable': '/opt/homebrew/bin/chromedriver'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.google.com',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            command: 'appium',
            args: {
                address: 'localhost',
                port: 4723
            },
            logPath: './logs'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    beforeSession: function () {
        allure.addStep('Starting test session');
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
}
require('dotenv').config()