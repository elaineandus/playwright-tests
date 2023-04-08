import { test, expect } from '@playwright/test';

test('seller should be able to respond to the operations message', async ({ page }) => {
  await page.setDefaultTimeout(60000);
  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Inbox' }).click();
 /*  await page.setDefaultTimeout(60000); */
  await page.locator('[data-href*="/messages/thread/"]').first().click();

  /* await page.locator('#id_content').click(); */
  await page.locator('#id_content').fill('butera');

  await page.getByRole('button', { name: 'Send' }).click();

  await expect(page).toHaveURL('https://stag.carbids.ph/messages/inbox/');

  await page.locator('[data-href*="/messages/thread/"]').first().click();

  await expect(page.getByText('butera')).toBeVisible();

  /* const successRespond = await page.locator('div').filter({ hasText: 'bb' }).nth(1)
  await expect(successRespond).toContainText('bb'); */
});