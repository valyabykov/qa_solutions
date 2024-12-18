const { test, expect } = require("../fixtures/fixtures");
const { CART_PAGE } = require("../selectors/pageLocators");

test.describe("Remove Item from Cart", () => {
  test("Remove an item from the cart", async ({ cartPrepared }) => {
    await test.step("Verify the Remove button is visible", async () => {
      await expect(
        cartPrepared.locator(CART_PAGE.removeFromCartButton)
      ).toBeVisible();
    });

    await test.step("Click the Remove button", async () => {
      await cartPrepared.locator(CART_PAGE.removeFromCartButton).click();
    });

    await test.step("Verify the cart is empty", async () => {
      await expect(cartPrepared.locator(CART_PAGE.emptyCartText)).toBeVisible();
    });
  });

  test.afterEach(async ({ page }) => {
    await test.step("Clear local storage after test", async () => {
      await page.evaluate(() => localStorage.clear());
    });
  });
});
