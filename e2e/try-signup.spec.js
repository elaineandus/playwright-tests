import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Sign up here' }).click();

  await page.getByPlaceholder('Enter your first name').fill('wonder');
  await page.getByPlaceholder('Enter your last name').fill('woman');
  await page.getByRole('textbox', { name: 'Email address' }).fill('wonderwoman@gmail.com');

  await page.getByLabel('Password min. 8 char').fill('password');
  await page.getByLabel('Confirm password').fill('password');

  await page.getByLabel('By joining, I agree to the Terms of use and Privacy policy').check();

  await page.getByRole('button', { name: 'Sign up' }).click();
});