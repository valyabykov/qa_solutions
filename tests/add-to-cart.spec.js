const { test, expect } = require("../fixtures/fixtures");
const {
  HOMEPAGE,
  HEADER,
  CATEGORY_PAGE,
  LISTING,
  CART_PAGE,
} = require("../selectors/pageLocators");

test.describe("Add Product to Cart on export.rsdelivers.com", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Open homepage and accept cookies", async () => {
      await page.goto("https://export.rsdelivers.com/");
      await page.locator(HOMEPAGE.acceptCookiesButton).click();
      await expect(page.locator(HOMEPAGE.acceptCookiesButton)).toBeHidden();
    });
  });

  test("Add a product to the cart and verify it in the cart", async ({
    page,
  }) => {
    await test.step("Navigate to the Battery Charger Leads category", async () => {
      await page.locator(HEADER.productsMenu).click();
      await page.locator(CATEGORY_PAGE.electronicsCategory).click();
      await page.locator(CATEGORY_PAGE.chargersCategory).click();
      await page.locator(CATEGORY_PAGE.accessoriesLink).click();
      await page.locator(CATEGORY_PAGE.chargerLeadsLink).click();
    });

    await test.step("Add the first product to the cart", async () => {
      await expect(page.locator(LISTING.addToCartButton).first()).toBeVisible();
      await page.locator(LISTING.addToCartButton).first().click();
    });

    await test.step("Verify the product in the cart", async () => {
      await expect(page.locator(LISTING.viewBasketButton)).toBeVisible();
      await page.locator(LISTING.viewBasketButton).click();

      await expect(page).toHaveURL(/.*\/cart/);

      const productInCart = page.locator(
        CART_PAGE.productInCart(
          "Lovato BCGX00 Battery Charger for Lead-acid Batteries Charger"
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
