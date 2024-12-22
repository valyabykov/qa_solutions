const { test, expect } = require("../fixtures/fixtures");
const { PDP, HOMEPAGE } = require("../selectors/pageLocators");

test.describe("Add to Parts List Redirection", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Open Product Page and accept cookies", async () => {
      await page.goto(
        "https://export.rsdelivers.com/product/rs-pro/rs-pro-orange-indicator-lamp-220/250v-ba9s-base/0105039?backToResults=1"
      );
      await page.locator(HOMEPAGE.acceptCookiesButton).click();
      await expect(page.locator(HOMEPAGE.acceptCookiesButton)).toBeHidden();
    });
  });

  test("Verify redirection to login page when clicking 'Add to parts list'", async ({
    page,
  }) => {
    await test.step("Click 'Add to parts list' button", async () => {
      await page.locator(PDP.addToPartsListButton).first().click();
    });

    await test.step("Verify redirection to login page", async () => {
      await expect(page).toHaveURL(/\/user\/login/);
    });
  });

  test.afterEach(async ({ page }) => {
    await test.step("Clear local storage after test", async () => {
      await page.evaluate(() => localStorage.clear());
    });
  });
});
