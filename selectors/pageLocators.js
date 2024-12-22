import {
  partialClassSelector,
  partialClassLinkWithText,
  partialClassBlockWithText,
  idSelector,
  buttonWithTextSelector,
  linkWithHrefAndText,
  twoClassesSelector,
  linkWithTextSelector,
  tableCellSelector,
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
  productInCart: (productName) => linkWithTextSelector(productName),
  removeFromCartButton: partialClassSelector(
    "product-item-component_bin-button"
  ),
  emptyCartText: partialClassSelector("empty-basket-component_extra-info"),
};
export const PDP = {
  addToCartButton: twoClassesSelector(
    "add-to-basket-cta-component_add",
    "button-component-module_default"
  ),
  quantityDropdown: twoClassesSelector(
    "dropdown-component-module_dropdown-wrapper",
    "dropdown-component-module"
  ),
  dropdownOption: (quantity) =>
    partialClassBlockWithText("add-to-basket-cta-component_qty-opt", quantity),
  unitPriceElement: partialClassSelector(
    "add-to-basket-cta-component_unit-price"
  ),
  tableCell: (rowText, columnIndex) => tableCellSelector(rowText, columnIndex),
  addToPartsListButton: partialClassSelector(
    "add-to-basket-cta-component_add-parts"
  ),
};
