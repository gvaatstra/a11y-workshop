import { test as base } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
// Declare the types of your fixtures.
type CustomFixtures = {
  axeBuilder: AxeBuilder;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<CustomFixtures>({
  axeBuilder: async ({ page }, use) => {
    await use(new AxeBuilder({ page }));
  },
});
export { expect } from '@playwright/test';