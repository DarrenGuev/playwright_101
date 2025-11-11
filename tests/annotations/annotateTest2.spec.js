import { test, expect } from '@playwright/test';

test.describe('report tests', {
    annotation: { type: 'category', description: 'report' },
}, () => {
    test('test report header', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await expect(page).toHaveTitle(/Test Login | Practice Test Automation/);
    });

    test('test full report', {
        annotation: [
            { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
            { type: 'performance', description: 'very slow test!' },
        ],
    }, async ({ page }) => {
        test.setTimeout(60000);

        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.fill('#username', 'student');
        await page.fill('#password', 'Password123');
        await page.click('#submit');

        await page.waitForURL('**/logged-in-successfully/');
        await expect(page.locator('h1')).toHaveText('Logged In Successfully');
    });
});