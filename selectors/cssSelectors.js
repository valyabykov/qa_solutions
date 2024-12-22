export const partialClassSelector = (selector) => `[class*="${selector}"]`;
export const partialClassLinkWithText = (className, text) =>
  `a[class*="${className}"]:has-text("${text}")`;
export const partialClassBlockWithText = (className, text) =>
  `[class*="${className}"] :has-text("${text}")`;
export const idSelector = (id) => `[id="${id}"]`;
export const buttonWithTextSelector = (className, text) =>
  `button[class*="${className}"] :has-text("${text}")`;
export const linkWithHrefAndText = (href, text) =>
  `a[href="${href}"]:has-text("${text}")`;
export const twoClassesSelector = (selector1, selector2) =>
  `[class*="${selector1}"][class*="${selector2}"]`;
export const linkWithTextSelector = (text) => `a:has-text("${text}")`;
export const tableCellSelector = (rowText, columnIndex) =>
  `tr:has-text("${rowText}") td:nth-child(${columnIndex})`;
