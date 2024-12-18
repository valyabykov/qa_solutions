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
