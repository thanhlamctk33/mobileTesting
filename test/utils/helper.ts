// Import required WebdriverIO types
import { Element } from 'webdriverio';
import allure from '@wdio/allure-reporter';

/**
 * Types and Interfaces
 */
interface WaitForOptions {
    timeout?: number;
    timeoutMsg?: string;
    interval?: number;
}

interface ElementOptions {
    selector: string;
    timeout?: number;
}

/**
 * Helper class providing utility functions for test automation
 */
export class Helper {
    /**
     * Wait for a specific amount of time
     * @param ms Time to wait in milliseconds
     */
    public static async wait(ms: number): Promise<void> {
        await browser.pause(ms);
    }

    /**
     * Take screenshot and attach to allure report
     * @param name Name of the screenshot
     * @returns Promise<void>
     */
    public static async takeScreenshot(name: string): Promise<void> {
        try {
            const screenshot: string = await browser.takeScreenshot();
            await allure.addAttachment(name, Buffer.from(screenshot, 'base64'), 'image/png');
        } catch (error: any) {
            console.error(`Failed to take screenshot: ${error.message}`);
        }
    }

    /**
     * Find element by selector
     * @param options Element options containing selector and timeout
     * @returns Promise<Element>
     */
    public static async findElement(options: ElementOptions): Promise<Element> {
        const { selector, timeout = 10000 } = options;
        const element: Element = await $(selector);
        await element.waitForExist({ timeout });
        return element;
    }

    /**
     * Find elements by selector
     * @