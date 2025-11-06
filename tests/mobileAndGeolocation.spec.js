import { test, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13 Pro'],
  locale: 'en-US',
  geolocation: { longitude: 12.492507, latitude: 41.889938 },
  permissions: ['geolocation'],
})

test('Mobile and geolocation', async ({ page }) => {
  await page.goto('https://maps.google.com');
  await page.getByRole('button', { name: 'Go back to Web' }).click();
  await page.getByText('Your location').click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'colosseum-iphone.png' });
});