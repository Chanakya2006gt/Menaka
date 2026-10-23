import { test, expect } from '@playwright/test';

test.describe('Menaka Jewellers Smoke & Feature Suite', () => {

  test('Homepage renders all core sections and verified claims', async ({ page }) => {
    await page.goto('/');

    // 1. Verify Brand Header
    await expect(page.locator('text=MENAKA').first()).toBeVisible();

    // 2. Verify Hero
    await expect(page.locator('text=Sacred Heritage').first()).toBeVisible();
    await expect(page.locator('text=Est. 1982').first()).toBeVisible();

    // 3. Verify Verified Claims in Assurance Section
    const assurance = page.locator('section').filter({ hasText: 'The Menaka Assurance' });
    await expect(assurance.getByText('100% BIS Hallmark Gold')).toBeVisible();
    await expect(assurance.getByText('Bespoke Custom Designs')).toBeVisible();
    await expect(assurance.getByText('Ships across India & USA')).toBeVisible();
    await expect(assurance.getByText('Based in Warangal')).toBeVisible();

    // 4. Verify 6 Category Tiles inside #categories section
    const categories = ['Gold', 'Diamond', 'Bridal', 'Vaddanam', 'Earrings', 'Bangles'];
    for (const cat of categories) {
      await expect(page.locator('#categories').getByText(cat, { exact: true }).first()).toBeVisible();
    }

    // 5. Verify Demo Badges on Products
    const demoBadges = page.locator('text=Demo Piece');
    expect(await demoBadges.count()).toBeGreaterThanOrEqual(4);

    // 6. Verify WhatsApp Links have pre-filled text format
    const whatsappLinks = page.locator('a[href*="wa.me"]');
    expect(await whatsappLinks.count()).toBeGreaterThan(0);
    const firstHref = await whatsappLinks.first().getAttribute('href');
    expect(firstHref).toContain('wa.me/');
    expect(firstHref).toContain('text=');
  });

  test('Collection page renders category products and switches categories', async ({ page }) => {
    await page.goto('/collection/gold');

    await expect(page.locator('h1')).toContainText('Gold Jewellery');
    await expect(page.locator('text=Demo Piece').first()).toBeVisible();

    // Switch to Diamond category via pill inside main
    await page.locator('main').getByRole('link', { name: 'Diamond', exact: true }).first().click();
    await expect(page).toHaveURL(/.*collection\/diamond/);
    await expect(page.locator('h1')).toContainText('Diamond Jewellery');
  });

  test('Product detail page displays large image, details, and prefilled WhatsApp link', async ({ page }) => {
    await page.goto('/product/diamond-emerald-choker');

    // Title & SKU
    await expect(page.locator('h1')).toContainText('Diamond & Emerald Grandeur Choker');
    await expect(page.locator('text=MJ-DM-01').first()).toBeVisible();

    // Demo Piece disclosure
    await expect(page.locator('text=Demo Piece').first()).toBeVisible();

    // WhatsApp enquiry button
    const whatsappButton = page.locator('a:has-text("Enquire on WhatsApp")');
    await expect(whatsappButton).toBeVisible();
    const href = await whatsappButton.getAttribute('href');
    expect(href).toContain('wa.me/');
    expect(href).toContain(encodeURIComponent('Diamond & Emerald Grandeur Choker'));
    expect(href).toContain(encodeURIComponent('MJ-DM-01'));

    // 3 Related Products
    await expect(page.locator('text=Related Creations')).toBeVisible();
  });

  test('404 Route handling gracefully returns to home', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.locator('text=Page Not Found')).toBeVisible();
    await page.getByRole('link', { name: 'Return to Catalog Home' }).click();
    await expect(page).toHaveURL('/');
  });

  test('Unknown product and category IDs display not-found experience', async ({ page }) => {
    // Unknown product ID
    await page.goto('/product/non-existent-product-id');
    await expect(page.locator('text=Page Not Found')).toBeVisible();

    // Unknown category ID
    await page.goto('/collection/non-existent-category');
    await expect(page.locator('text=Page Not Found')).toBeVisible();
  });

  test('Subpage navigation to Heritage section resolves correctly to homepage section', async ({ page }) => {
    await page.goto('/collection/gold');
    
    const hamburger = page.locator('button[aria-label="Toggle navigation menu"]');
    if (await hamburger.isVisible()) {
      await hamburger.click();
      await page.getByRole('link', { name: 'Heritage & Craft' }).click();
    } else {
      await page.locator('nav').getByRole('link', { name: 'Heritage' }).first().click();
    }

    await expect(page).toHaveURL(/.*#heritage/);
    await expect(page.locator('#heritage')).toBeVisible();
  });

});
