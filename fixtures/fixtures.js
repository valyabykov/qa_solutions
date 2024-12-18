const { test: base, expect } = require("@playwright/test");
const {
  HOMEPAGE,
  HEADER,
  CATEGORY_PAGE,
  LISTING,
} = require("../selectors/pageLocators");

exports.test = base.extend({
  cartPrepared: async ({ page }, use) => {
    await page.goto("https://export.rsdelivers.com/");
    await page.locator(HOMEPAGE.acceptCookiesButton).click();

    await page.locator(HEADER.productsMenu).click();
    await page.locator(CATEGORY_PAGE.electronicsCategory).click();
    await page.locator(CATEGORY_PAGE.chargersCategory).click();
    await page.locator(CATEGORY_PAGE.accessoriesLink).click();
    await page.locator(CATEGORY_PAGE.chargerLeadsLink).click();

    const addToCartButton = page.locator(LISTING.addToCartButton).first();
    await addToCartButton.click();

    await page.locator(LISTING.viewBasketButton).click();

    await use(page);
  },
});

exports.expect = expect;
