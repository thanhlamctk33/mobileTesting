import allure from '@wdio/allure-reporter';

export class Logger {
    static async logStep(description: string) {
        allure.addStep(description);
        console.log(`Step: ${description}`);
    }

    static async logError(error: Error) {
        allure.addStep(`Error: ${error.message}`, {}, 'failed');
        console.error(`Error: ${error.message}`);
    }
}