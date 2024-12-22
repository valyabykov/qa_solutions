const { test, expect } = require("../fixtures/fixtures");
const {
  HOMEPAGE,
  PDP,
  LISTING,
  CART_PAGE,
} = require("../selectors/pageLocators");

test.describe("Add Product to Cart from PDP", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Open PDP and accept cookies", async () => {
      await page.goto(
        "https://export.rsdelivers.com/product/rs-pro/rs-pro-orange-indicator-lamp-220/250v-ba9s-base/0105039?backToResults=1"
      );
      await page.locator(HOMEPAGE.acceptCookiesButton).click();
      await expect(page.locator(HOMEPAGE.acceptCookiesButton)).toBeHidden();
    });
  });

  test("Add a product to the cart from PDP and verify it in the cart", async ({
    page,
  }) => {
    await test.step("Add product to the cart", async () => {
      await expect(page.locator(PDP.addToCartButton).first()).toBeVisible();
      await page.locator(PDP.addToCartButton).first().click();
    });

    await test.step("Verify the product in the cart", async () => {
      await expect(page.locator(LISTING.viewBasketButton)).toBeVisible();
      await page.locator(LISTING.viewBasketButton).click();
      await expect(page).toHaveURL(/.*\/cart/);
      const productInCart = page.locator(
        CART_PAGE.productInCart(
          "RS PRO Orange Indicator Lamp, 220/250V, BA9s Base"
        )
      );
      await expect(productInCart).toBeVisible();
    });
  });

  test.afterEach(async ({ page }) => {
    await test.step("Clear local storage after test", async () => {
      await page.evaluate(() => localStorage.clear());
    });
  });
});
