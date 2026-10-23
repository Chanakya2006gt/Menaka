import { chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function renderLogo() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1024, height: 1024 },
    deviceScaleFactor: 2, // 2x retina = 2048x2048 crispness
  });

  const filePath = `file://${path.resolve(__dirname, 'logo_recreation.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle' });

  // Wait for Google fonts to render
  await page.evaluateHandle('document.fonts.ready');
  await page.waitForTimeout(1000);

  const container = page.locator('.logo-container');
  await container.screenshot({
    path: path.resolve(__dirname, 'public/assets/logo/logo.png'),
    omitBackground: true,
  });

  console.log('Logo rendered successfully to public/assets/logo.png');
  await browser.close();
}

renderLogo().catch(console.error);
