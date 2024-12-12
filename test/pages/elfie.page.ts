import BasePage from './base.page';
import { Logger } from '@/utils/logger';
import { TestData } from '@/data/test.data';

class ElfiePage extends BasePage {
    private get logo() {
        return $('.navbar-brand img');
    }

    private get hamburgerMenu() {
        return $('.navbar-toggler');
    }

    private get copyright() {
        return $(`//div[contains(text(), "${TestData.copyright}")]`);
    }

    async verifyLogoAndCapture() {
        await this.verifyElementDisplayed(await this.logo.selector);
        await this.takeScreenshot('elfie_logo');
        await Logger.logStep('Verified logo and captured screenshot');
    }

    async clickHamburgerAndVerify() {
        await this.waitAndClick(await this.hamburgerMenu.selector);
        await this.verifyElementDisplayed('button.navbar-toggler[aria-expanded="true"]');
        await this.takeScreenshot('hamburger_menu');
        await Logger.logStep('Verified hamburger menu and captured screenshot');
    }

    async verifyCopyrightAndCapture() {
        await this.scrollToElement(await this.copyright.selector);
        await this.verifyElementDisplayed(await this.copyright.selector);
        await this.takeScreenshot('copyright_text');
        await Logger.logStep('Verified copyright text and captured screenshot');
    }
}

export default new ElfiePage();