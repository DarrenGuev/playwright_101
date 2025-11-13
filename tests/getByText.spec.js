const {test, expect} = require('@playwright/test');

test('Test getByText', async ({page}) => {
    await page.goto('https://login.salesforce.com/');
    await page.getByText('Forgot Your Password?').click();
});