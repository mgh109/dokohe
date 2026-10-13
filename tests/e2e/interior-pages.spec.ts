import { test, expect } from '@playwright/test';

const pages = [
  ['/courses', 'دوره‌های آموزشی'],
  ['/courses/course-1', 'نقش و جایگاه حلقه‌های میانی در گسترش حجاب و عفاف'],
  ['/articles', 'وبلاگ آموزشی و مقالات'],
  ['/articles/article-1', 'نقش و جایگاه حلقه‌های میانی در گسترش حجاب و عفاف'],
  ['/about', 'درباره ما'],
  ['/contact', 'تماس با ما'],
  ['/login', 'ورود موبایل'],
  ['/cart', 'سبد خرید'],
] as const;

for (const [path, title] of pages) {
  test(`${path} renders with local assets and fits the viewport`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(path);
    await expect(page.getByRole('heading', { name: title, exact: true, level: 1 })).toBeVisible();
    if (path === '/cart') await expect(page.getByRole('dialog')).toBeVisible();
    const images =
      path === '/cart'
        ? page.locator('dialog img')
        : page.locator('main img:not(.interior-lights img)');
    for (const image of await images.all()) {
      if (await image.isVisible()) await image.scrollIntoViewIfNeeded();
    }
    await expect
      .poll(async () =>
        images.evaluateAll((items) =>
          items
            .filter((item) => item instanceof HTMLImageElement && item.checkVisibility())
            .every(
              (item) => item instanceof HTMLImageElement && item.complete && item.naturalWidth > 0,
            ),
        ),
      )
      .toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({
      path: testInfo.outputPath('page.png'),
      fullPage: true,
      scale: 'css',
      animations: 'disabled',
    });
  });
}

test('motion respects reduced-motion and cart can be dismissed with Escape', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.home-decoration').first()).toHaveCSS('animation-name', 'none');
  await page.goto('/cart');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page).toHaveURL(/\/courses$/);
});
