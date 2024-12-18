const { test } = require("@playwright/test");
const {
  acceptCookies,
  navigateToBatteryChargerLeads,
  addFirstProductToCart,
  goToBasketAndVerifyProduct,
} = require("../functions/functions");

test.describe("Add Product to Cart on export.rsdelivers.com", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://export.rsdelivers.com/");
    await acceptCookies(page);
  });

  test("Add a product to the cart and verify it in the cart", async ({
    page,
  }) => {
    const productText =
      /^1Available in multiples of 11€ 8\.57Add to basketAdd to basket$/;
    const productName = "Lovato BCGX00 Battery Charger";

    await navigateToBatteryChargerLeads(page);
    await addFirstProductToCart(page, productText);
    await goToBasketAndVerifyProduct(page, productName);
  });

  test.afterEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
  });
});
