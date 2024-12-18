const { expect } = require("@playwright/test");

// Accept cookies on the website
async function acceptCookies(page) {
  const acceptCookiesButton = page.locator("button#ensCloseBanner");
  await acceptCookiesButton.click();
  await expect(acceptCookiesButton).toBeHidden();
}

// Navigate through menu to Battery Charger Leads
async function navigateToBatteryChargerLeads(page) {
  await page
    .locator("div", { hasText: /^Products$/ })
    .first()
    .click();
  await page.locator('[id="\\32 "]').click();
  await page.locator("text=Batteries & Chargers").click();
  await page.locator("text=Battery & Charger Accessories").click();
  await page.locator("text=Battery Charger Leads").click();
}

// Add the first available product to the cart
async function addFirstProductToCart(page, productText) {
  const addToCartButton = page
    .locator("div")
    .filter({ hasText: productText })
    .getByRole("button");

  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();
}

// Go to the basket page and verify product is present
async function goToBasketAndVerifyProduct(page, productName) {
  const viewBasketButton = page.locator(
    'a[aria-disabled="false"][href="/basket"]'
  );
  await expect(viewBasketButton).toBeVisible();
  await viewBasketButton.click();

  await expect(page).toHaveURL(/.*\/cart/);

  const productInBasket = page.locator("a").filter({ hasText: productName });
  await expect(productInBasket).toBeVisible();
}

module.exports = {
  acceptCookies,
  navigateToBatteryChargerLeads,
  addFirstProductToCart,
  goToBasketAndVerifyProduct,
};
