import { test, expect } from '@playwright/test';

test('login test for demo site', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.waitForSelector('#username');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  // Wait for navigation and verify
  await page.waitForURL('**/logged-in-successfully/');
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});
