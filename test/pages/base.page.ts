import { Logger } from '@/utils/logger';
import allure from '@wdio/allure-reporter';

export default class BasePage {
    async waitAndClick(selector: string, timeout: number = 10000) {
        try {
            const element = await $(selector);
            await element.waitForDisplayed({ timeout });
            await element.click();
            await Logger.logStep(`Clicked on element: ${selector}`);
        } catch (error) {
            await Logger.logError(error as Error);
            throw error;
        }
    }

    async waitAndSetValue(selector: string, value: string, timeout: number = 10000) {
        try {
            const element = await $(selector);
            await element.waitForDisplayed({ timeout });
            await element.setValue(value);
            await Logger.logStep(`Set value "${value}" on element: ${selector}`);
        } catch (error) {
            await Logger.logError(error as Error);
            throw error;
        }
    }

    async takeScreenshot(name: string) {
        try {
            const path = `./reports/screenshots/${name}.png`;
            await browser.saveScreenshot(path);
            await allure.addAttachment(name, Buffer.from(await browser.takeScreenshot(), 'base64'), 'image/png');
            await Logger.logStep(`Screenshot taken: ${name}`);
        } catch (error) {
            await Logger.logError(error as Error);
            throw error;
        }
    }

    async scrollToElement(selector: string) {
        try {
            const element = await $(selector);
            await element.scrollIntoView();
            await Logger.logStep(`Scrolled to element: ${selector}`);
        } catch (error) {
            await Logger.logError(error as Error);
            throw error;
        }
    }

    async verifyElementDisplayed(selector: string) {
        try {
            const element = await $(selector);
            await expect(element).toBeDisplayed();
            await Logger.logStep(`Verified element is displayed: ${selector}`);
        } catch (error) {
            await Logger.logError(error as Error);
            throw error;
        }
    }
}