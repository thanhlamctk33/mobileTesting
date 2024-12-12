import BasePage from './base.page';
import { Logger } from '@/utils/logger';

class GooglePage extends BasePage {
    private get searchResults() {
        return $$('div.g');
    }

    async searchFor(keyword: string) {
        await this.waitAndSetValue('input[name="q"]', keyword);
        await browser.keys(['Enter']);
        await Logger.logStep(`Searched for: ${keyword}`);
        await browser.pause(2000);
    }

    async clickFirstResult() {
        const results = await this.searchResults;
        const resultsLength = await results.length;
        if (resultsLength > 0) {
            await results[0].click();
            await Logger.logStep('Clicked first search result');
        }
        await browser.pause(2000);
    }
}

export default new GooglePage();