import { test, expect } from '@playwright/test';

test('buyer can browse a list of cars in the marketplace', async ({ page }) => {

    await page.goto('https://stag.carbids.ph/');

    await page.getByRole('link', { name: 'Sign in' }).click();

    await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
    await page.locator('#signin-password').fill('password');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.getByRole('button', { name: 'Cars' }).click();
    await page.getByRole('link', { name: 'Car Marketplace' }).click();

    await expect(page).toHaveTitle('Carbids.ph | Marketplace');

    await page.getByRole('button', { name: 'Make' }).click();
    await page.getByRole('link', { name: 'Chevrolet', exact: true }).click();
    await page.getByRole('button', { name: 'Trans' }).click();
    await page.getByRole('link', { name: 'Manual' }).click();
    await page.getByRole('button', { name: 'Body Type' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.locator('form').filter({ hasText: 'Chevrolet All Abarth AC Acura Aixam Alfa Romeo ALPINA Artega Asia Motors Aston M' }).getByRole('button', { name: 'Search' }).click();

    await page.locator('.card').first().click();

    await expect(page).toHaveTitle('Carbids.ph | Single Car');
  
});