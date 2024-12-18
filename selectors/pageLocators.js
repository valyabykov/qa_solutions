import {
  partialClassSelector,
  partialClassLinkWithText,
  partialClassBlockWithText,
  idSelector,
  buttonWithTextSelector,
  linkWithHrefAndText,
} from "./cssSelectors";

export const HOMEPAGE = {
  acceptCookiesButton: idSelector("ensCloseBanner"),
};

export const HEADER = {
  productsMenu: partialClassSelector("menu-icon-container"),
};

export const CATEGORY_PAGE = {
  electronicsCategory: idSelector("\\32 "),
  chargersCategory: partialClassBlockWithText(
    "desktop-categories-component_category",
    "Batteries & Chargers"
  ),
  accessoriesLink: partialClassLinkWithText(
    "desktop-categories-component_category",
    "Battery & Charger Accessories (582)"
  ),
  chargerLeadsLink: partialClassBlockWithText(
    "level-children-component_details",
    "Battery Charger Leads"
  ),
};

export const LISTING = {
  addToCartButton: buttonWithTextSelector(
    "list-product-card-component_add",
    "Add to basket"
  ),
  viewBasketButton: linkWithHrefAndText("/basket", "View Basket"),
};

export const CART_PAGE = {
  productInCart: (productName) =>
    linkWithHrefAndText(
      "/product/lovato/bcgx00/lovato-bcgx00-battery-charger-for-lead-acid/2483640",
      productName
    ),
  removeFromCartButton: partialClassSelector(
    "product-item-component_bin-button"
  ),
  emptyCartText: partialClassSelector("empty-basket-component_extra-info"),
};
