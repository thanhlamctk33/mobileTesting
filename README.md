# Mobile Automation Framework

## Project Structure
```
mobile-automation/
├── package.json
├── tsconfig.json
├── wdio.conf.ts
├── test/
│   ├── specs/
│   │   └── chrome.test.ts
│   └── testdata/
│       └── searchData.json
├── pages/
│   ├── base.page.ts
│   ├── chrome.page.ts
│   ├── google.page.ts
│   └── elfie.page.ts
├── utils/
│   └── helper.ts
├── apps/
├── screenshots/
└── allure-results/
```

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```

2. Place Chrome APK in the apps directory

3. Run tests:
   ```bash
   npm test
   ```

4. Generate Allure report:
   ```bash
   npm run report
   ```
# mobileTesting
