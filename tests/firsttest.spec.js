const {test, expect } = require('@playwright/test');

test('Launch Application', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle('Facebook - log in or sign up');
});