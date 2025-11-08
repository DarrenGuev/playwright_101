// tag all tests in a group or provide multiple tags

import { test, expect } from '@playwright/test';

test.describe('group', {
  tag: '@report',
}, () => {
  test('test report header', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle(/Facebook/);
  });

  test('test full report', {
    tag: ['@slow', '@vrt'],
  }, async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toHaveText('Example Domain');
  });
});