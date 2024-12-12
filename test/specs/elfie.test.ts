import ChromePage from '../pages/chrome.page';
import GooglePage from '../pages/google.page';
import ElfiePage from '../pages/elfie.page'; 
import { TestData } from '../data/test.data';
import allure from '@wdio/allure-reporter';

describe('Elfie Website End-to-End Test', () => {
    before(async () => {
        allure.addFeature('Chrome Navigation');
        allure.addStory('Elfie Website Verification');
        await ChromePage.setupBrowser();
    });

    it('should verify Elfie website elements', async () => {
        allure.addSeverity('critical');
        
        // Navigate to Google
        await ChromePage.navigateToUrl(TestData.url);
        await browser.pause(2000);

        // Search for Elfie
        await GooglePage.searchFor(TestData.searchKeyword);
        await browser.pause(2000);
        
        await GooglePage.clickFirstResult();
        await browser.pause(2000);

        // Verify Elfie website elements
        await ElfiePage.verifyLogoAndCapture();
        await ElfiePage.clickHamburgerAndVerify();
        await ElfiePage.verifyCopyrightAndCapture();
    });
});