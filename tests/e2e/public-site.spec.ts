import { test, expect } from '@playwright/test';
test('discovery to cart and removal works without a backend', async ({ page }) => {
  await page.goto('/courses?q=نقش');
  await expect(page.getByRole('heading', { name: 'دوره‌های آموزشی', exact: true })).toBeVisible();
  await page.locator('.course-card__cover').first().click();
  await page.getByRole('button', { name: 'ثبت‌نام در دوره', exact: true }).click();
  await page.getByRole('link', { name: 'مشاهده سبد خرید', exact: true }).click();
  await expect(page.getByRole('button', { name: 'ادامه و پرداخت' })).toBeDisabled();
  await page.reload();
  await expect(page.getByRole('button', { name: /حذف/ })).toHaveCount(1);
  await page.getByRole('button', { name: /حذف/ }).click();
  await expect(page.getByRole('heading', { name: 'سبد خرید شما خالی است' })).toBeVisible();
});
test('free filter, empty state and missing course', async ({ page }) => {
  await page.goto('/courses?free=true');
  await expect(page.locator('.course-card')).toHaveCount(1);
  await page.goto('/courses?q=unavailable-course');
  await expect(page.getByRole('heading', { name: 'دوره‌ای پیدا نشد' })).toBeVisible();
  await page.goto('/courses/missing-course');
  await expect(page.getByRole('heading', { name: 'صفحه پیدا نشد' })).toBeVisible();
  await expect(page.locator('meta[name=robots]').first()).toHaveAttribute('content', 'noindex');
});
test('home has local assets, no broken images, runtime errors or horizontal overflow', async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/');
  for (const slot of await page
    .locator('.hero, .campaign, .course-card, .roadmap-step, .benefit, .article-card, .site-footer')
    .all()) {
    await slot.scrollIntoViewIfNeeded();
  }
  await page.waitForFunction(() =>
    Array.from(document.images)
      .filter((image) => image.getClientRects().length > 0)
      .every((image) => image.complete && image.naturalWidth > 0),
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  expect(errors).toEqual([]);
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({
    path: testInfo.outputPath('home.png'),
    fullPage: true,
    scale: 'css',
  });
});
test('malformed cart storage and script-like queries remain inert', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.setItem('dokohe:cart:v1', '{invalid'));
  await page.goto('/cart');
  await expect(page.getByRole('heading', { name: 'سبد خرید شما خالی است' })).toBeVisible();
  await page.goto('/courses?q=%3Cscript%3Ewindow.injected%3Dtrue%3C%2Fscript%3E');
  expect(await page.evaluate(() => Object.prototype.hasOwnProperty.call(window, 'injected'))).toBe(
    false,
  );
});

test('header remains accessible while scrolling and roadmap uses the updated design', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  await page.locator('#roadmap').scrollIntoViewIfNeeded();
  await expect
    .poll(async () => Math.round((await page.locator('.site-header').boundingBox())?.y ?? -1))
    .toBe(testInfo.project.name === 'mobile' ? 8 : 16);
  await expect(page.locator('.roadmap-step__border')).toHaveCount(4);
  await page.locator('.site-header a[aria-label="صفحه اصلی به رسم دوکوهه"]').click();
  await expect(page.getByRole('heading', { name: 'آکادمی آموزش به رسم دوکوهه' })).toBeVisible();
});
