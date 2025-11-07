import { test, expect } from '@playwright/test';

test.describe('two tests', () => {
  test('one', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('two', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page.locator('h1')).toContainText('Playwright');
  });
});
