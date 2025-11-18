import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page does not work in mobile yet');

  await page.goto('https://playwright.dev');
});

test('user profile', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Playwright');
});