// @ts-check
const { test, expect } = require('@playwright/test')
const { toHaveTitle } = require('expect-playwright');

//test
test('Test Case 1: check privacy policy', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
    const page1 = await page1Promise;

    expect(page1.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/privacy.html');
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('MyWebClass.org');
})
