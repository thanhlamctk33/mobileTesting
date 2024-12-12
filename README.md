# Mobile Automation Framework

## Overview
Mobile automation testing framework using WebdriverIO, TypeScript and Appium for automating Android Chrome browser.

## Prerequisites
* Node.js (v14 or higher)
* Java JDK
* Android SDK
* Appium
* Chrome browser on Android device/emulator

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Android device:
Enable Developer options
Enable USB debugging
Install Chrome browser
 
 ## Project Structure
 mobile-automation/
├── test/
│   ├── data/           # Test data
│   │   └── test.data.ts
│   ├── pages/         # Page objects
│   │   ├── base.page.ts
│   │   ├── chrome.page.ts
│   │   ├── elfie.page.ts
│   │   └── google.page.ts
│   ├── specs/         # Test specifications
│   │   └── elfie.test.ts
│   └── utils/         # Utilities
│       ├── helper.ts
│       └── logger.ts
├── wdio.conf.js       # WebdriverIO config
└── tsconfig.json      # TypeScript config

## Running Tests
Run all tests:
```bash
npm test
```

## Test Cases
* Open Chrome browser
* Navigate to Google
* Search for keywords
* Verify website elements
* Take screenshots for evidence

## Libraries Used
* WebdriverIO
* TypeScript
* Appium
* Mocha
* Allure Reporter