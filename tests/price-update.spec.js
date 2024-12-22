const { test, expect } = require("../fixtures/fixtures");
const { PDP, HOMEPAGE } = require("../selectors/pageLocators");

test.describe("Product Page Quantity and Price Verification", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Open Product Page and accept cookies", async () => {
      await page.goto(
        "https://export.rsdelivers.com/product/rs-pro/rs-pro-orange-indicator-lamp-220/250v-ba9s-base/0105039?backToResults=1"
      );
      await page.locator(HOMEPAGE.acceptCookiesButton).click();
      await expect(page.locator(HOMEPAGE.acceptCookiesButton)).toBeHidden();
    });
  });

  const selectQuantityAndVerifyPrice = async (
    page,
    quantity,
    expectedUnitPrice,
    range
  ) => {
    await test.step("Open quantity dropdown", async () => {
      await page.locator(PDP.quantityDropdown).first().click();
    });

    await test.step(`Select quantity ${quantity} from dropdown`, async () => {
      await page.locator(PDP.dropdownOption(quantity)).first().click();
    });

    await test.step("Verify unit price on the page", async () => {
      await expect(
        page.locator(PDP.unitPriceElement).first().textContent()
      ).resolves.toBe(expectedUnitPrice.trim());
    });

    await test.step("Verify unit price in the price table", async () => {
      await expect(
        page.locator(PDP.tableCell(range, 2)).textContent()
      ).resolves.toBe(expectedUnitPrice.trim());
    });
  };

  test("Verify price for selected quantities matches table data", async ({
    page,
  }) => {
    const testCases = [
      { quantity: "90", expectedUnitPrice: "€ 1.238", range: "10 - 90" },
      { quantity: "150", expectedUnitPrice: "€ 1.115", range: "100 - 240" },
    ];

    for (const { quantity, expectedUnitPrice, range } of testCases) {
      await test.step(`Verify price for quantity ${quantity}`, async () => {
        await selectQuantityAndVerifyPrice(
          page,
          quantity,
          expectedUnitPrice,
          range
        );
      });
    }
  });

  test.afterEach(async ({ page }) => {
    await test.step("Clear local storage after test", async () => {
      await page.evaluate(() => localStorage.clear());
    });
  });
});
