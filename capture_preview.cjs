const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Ensure assets directory exists
    const assetsDir = path.join(__dirname, '../src/assets');
    if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
    }

    console.log('Capturing Desktop View...');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    // Wait a bit for animations
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(assetsDir, 'preview-desktop.png') });

    console.log('Capturing Mobile View...');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(assetsDir, 'preview-mobile.png') });

    await browser.close();
    console.log('Screenshots saved to src/assets/');
})();
