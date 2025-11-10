import { test, expect } from '@playwright/test';

test('Launch Application', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator("xpath=//*[@id='username']").fill("username123");
    await page.locator("css=#password").fill("password123");
});