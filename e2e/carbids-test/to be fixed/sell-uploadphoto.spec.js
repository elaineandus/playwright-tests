import { test, expect } from '@playwright/test';

test('seller should be able to upload photos completely', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();
 
  await page.getByLabel('Title').fill('aba');
  await page.getByLabel('Auction Start').fill('2023-04-23T10:40');
  await page.getByLabel('Auction End').fill('2023-04-24T10:40');
 
  await page.getByLabel('Current Biding Amount').fill('100001');
  await page.getByRole('combobox', { name: 'Make' }).selectOption('1');
  await page.getByLabel('Model').fill('n/a');
  await page.locator('#id_year').fill('1');
  await page.getByLabel('Year').fill('1');

  await page.getByRole('combobox', { name: 'Body Style' }).selectOption('Compact');
  await page.getByRole('combobox', { name: 'Fuel Type' }).selectOption('Gasoline');
  await page.getByLabel('Engine').fill('n/a');
  await page.locator('#id_transmission').selectOption('Automatic');
  await page.locator('#id_drivetrain').selectOption('AWD');
  await page.getByLabel('Exterior Color').fill('n/a');
  await page.getByLabel('Interior Color').fill('n/a');

  await page.frameLocator('iframe[title="Rich Text Editor\\, id_highlights"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_known_flaws"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_equipment"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_modifications"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_recent_service_history"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_other_items"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_ownership_history"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_seller_notes"]').locator('body').fill('buy now');

// Drag and drop #exterior input field
const exteriorInputSelector = '#exterior input[type="file"]';
const exteriorInputElement = await page.$(exteriorInputSelector);
const exteriorFilePath = 'C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carext2.jpeg';

const exteriorInputBox = await exteriorInputElement.boundingBox();
const exteriorInputCenter = {
  x: exteriorInputBox.x + exteriorInputBox.width / 2,
  y: exteriorInputBox.y + exteriorInputBox.height / 2,
};

await page.mouse.move(exteriorInputCenter.x, exteriorInputCenter.y);
await page.mouse.down();
await page.mouse.move(exteriorInputCenter.x + 10, exteriorInputCenter.y + 10);
await page.mouse.up();
await exteriorInputElement.setInputFiles(exteriorFilePath);

  const exteriorComplete = 'text=Upload complete';
  await page.waitForSelector(exteriorComplete, { timeout: 10000 });
  await expect(await page.$(exteriorComplete)).not.toBeNull();

// Upload #interior input field manually
const interiorInputSelector = '#interior input[type="file"]';
await page.setInputFiles(interiorInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);

  const interiorComplete = 'text=Upload complete';
  await page.waitForSelector(interiorComplete, { timeout: 8000 });
  await expect(await page.$(interiorComplete)).not.toBeNull();

// Upload #others input field manually
const othersInputSelector = '#others input[type="file"]';
await page.setInputFiles(othersInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carothers1.jpeg']);

  const othersComplete = 'text=Upload complete';
  await page.waitForSelector(othersComplete, { timeout: 7000 });
  await expect(await page.$(othersComplete)).not.toBeNull();

  await page.getByRole('button', { name: 'Save and continue' }).click();

  const successCreate = await page.locator('text=Success');
  await expect(successCreate).toContainText('Success');
/* }); */

},60000);