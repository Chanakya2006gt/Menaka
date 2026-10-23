import { test, expect } from '@playwright/test';

test.describe('Web Quality & WCAG 2.2 Accessibility Audits', () => {

  test('Homepage passes accessibility, semantics, and mobile viewport checks', async ({ page }) => {
    await page.goto('/');

    // 1. Language attribute check
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).toBe('en');

    // 2. Headings hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // 3. Image alternative text validation
    const images = page.locator('img');
    const imgCount = await images.count();
    expect(imgCount).toBeGreaterThan(0);
    for (let i = 0; i < imgCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt, `Image at index ${i} must have alt text`).toBeTruthy();
      expect(alt?.trim().length).toBeGreaterThan(0);
    }

    // 4. Interactive elements must have accessible text or label
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    for (let i = 0; i < buttonCount; i++) {
      const text = await buttons.nth(i).innerText();
      const ariaLabel = await buttons.nth(i).getAttribute('aria-label');
      expect(Boolean(text?.trim() || ariaLabel?.trim())).toBe(true);
    }

    // 5. Mobile horizontal overflow check
    const isOverflowing = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(isOverflowing).toBe(false);

    // 6. Strict Claim Hygiene: Verify no invented marketing buzzwords
    const pageText = await page.locator('body').innerText();
    expect(pageText).not.toContain('5-star rating');
    expect(pageText).not.toContain('Award-winning');
    expect(pageText).not.toContain('10,000+ Happy Customers');
  });

  test('Product detail page passes accessibility and meta audit', async ({ page }) => {
    await page.goto('/product/diamond-emerald-choker');

    // 1. Title & Heading
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText('Diamond & Emerald Grandeur Choker');

    // 2. Images check
    const productImgs = page.locator('img');
    const count = await productImgs.count();
    for (let i = 0; i < count; i++) {
      const alt = await productImgs.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }

    // 3. Touch target check for primary WhatsApp button
    const cta = page.locator('a:has-text("Enquire on WhatsApp")');
    await expect(cta).toBeVisible();
    const box = await cta.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(44);
    }

    // 4. Mobile overflow check on inner page
    const isOverflowing = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(isOverflowing).toBe(false);
  });

  test('Collection page passes accessibility and category hierarchy', async ({ page }) => {
    await page.goto('/collection/bridal');

    const h1 = page.locator('h1');
    await expect(h1).toContainText('Bridal Jewellery');

    const isOverflowing = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(isOverflowing).toBe(false);
  });

});
