// TEST DONE

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="13"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('3506.99.0');
  await page.locator('a').filter({ hasText: '3506.99.00- - Other' }).click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'RCEP' }).click();

  // this code has trace on
  try {
  // Check if these years are existing
  const concessionYearRCEP = await page.locator('tr#concessionYearRCEP');
  await expect(concessionYearRCEP).toContainText('RCEP AHTN / HS Code	2023	2024	2025	2026	2027');
  } catch (error) {
    console.error(error);
  }

/* 
  // Select the second cell in the same row (the "2019" column)
  try {
  const k19Cell = await page.locator('#exConcessionRate td:nth-child(2)');
  await expect(k19Cell).toContainText('10');
  } catch (error) {
    await test.fail();
  }

  try {
  // Select the third cell in the same row (the "2020" column)
  const k20Cell = await page.locator('#exConcessionRate td:nth-child(3)');
  await expect(k20Cell).toContainText('10');
  } catch (error) {
    await test.fail();
  }

  // Select the fourth cell in the same row (the "2021" column)
  try {
  const k21Cell = await page.locator('#exConcessionRate td:nth-child(4)');
  await expect(k21Cell).toContainText('7');
  } catch (error) {
    await test.fail();
  }

  // Select the fifth cell in the same row (the "2022" column)
  try {
  const k22Cell = await page.locator('#exConcessionRate td:nth-child(2)');
  await expect(k22Cell).toContainText('7');
  } catch (error) {
    await test.fail();
  }
 */

  // Select the fifth cell in the same row (the "2023" column)
  try {
  const k23Cell = await page.locator('#concessionRateRCEP td:nth-child(3)');
  await expect(k23Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the fifth cell in the same row (the "2024" column)
  try {
  const k24Cell = await page.locator('#concessionRateRCEP td:nth-child(4)');
  await expect(k24Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the fifth cell in the same row (the "2025" column)
  try {
  const k25Cell = await page.locator('#concessionRateRCEP td:nth-child(5)');
  await expect(k25Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the fifth cell in the same row (the "2026" column)
  try {
  const k26Cell = await page.locator('#concessionRateRCEP td:nth-child(6)');
  await expect(k26Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the fifth cell in the same row (the "2027" column)
  try {
  const k27Cell = await page.locator('#concessionRateRCEP td:nth-child(7)');
  await expect(k27Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  await page.getByRole('link', { name: 'Applied for ASEAN, AU, CN, KR, and NZ. For JP, refer to Section D.' }).click();

  try {
  const countryModal = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal');
  await expect(countryModal).toContainText('RCEP AHTN / HS Code	2023	2024	2025	2026	2027');
  } catch (error) {
    await test.fail();
  }

});