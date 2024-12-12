import BasePage from './base.page';
import { Logger } from '../utils/logger';  // Sửa đường dẫn import

class ChromePage extends BasePage {
    private get acceptButton() {
        return $('android=new UiSelector().text("Accept & continue")');
    }

    private get noThanksButton() {
        return $('android=new UiSelector().text("No thanks")');
    }

    private get yesImInButton() {
        return $('android=new UiSelector().text("Yes, I\'m in")');
    }

    private get urlBar() {
        return $('android=new UiSelector().resourceId("com.android.chrome:id/url_bar")');
    }

    async acceptTermsAndConditions() {
        try {
            await this.acceptButton.waitForDisplayed({ timeout: 10000 });
            await this.acceptButton.click();
            await Logger.logStep('Accepted terms and conditions');
            await browser.pause(2000);
        } catch (e) {
            await Logger.logStep('Accept button not found or already accepted');
        }
    }

    async handleSyncScreen() {
        try {
            await this.noThanksButton.waitForDisplayed({ timeout: 5000 });
            await this.noThanksButton.click();
            await Logger.logStep('Clicked No thanks on sync screen');
            await browser.pause(2000);
        } catch (e) {
            try {
                await this.yesImInButton.waitForDisplayed({ timeout: 5000 });
                await this.yesImInButton.click();
                await Logger.logStep('Clicked Yes, I\'m in on sync screen');
            } catch (error) {
                await Logger.logStep('Sync screen not found or already handled');
            }
        }
    }

    async navigateToUrl(url: string) {
        await this.urlBar.waitForDisplayed({ timeout: 10000 });
        await this.urlBar.click();
        await this.urlBar.setValue(`${url}\n`);
        await Logger.logStep(`Navigated to URL: ${url}`);
        await browser.pause(2000);
    }

    async setupBrowser() {
        await this.acceptTermsAndConditions();
        await this.handleSyncScreen();
        await browser.pause(2000);
    }
}

export default new ChromePage();