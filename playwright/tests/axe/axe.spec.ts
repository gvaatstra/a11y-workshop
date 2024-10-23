import { test, expect } from '../../fixtures/fixtures';
import { AxeResults } from 'axe-core';
test.describe('axe', () => {
  test('Axe - should give you some hints where to look on the before page', async ({ page, axeBuilder }) => {
    await page.goto('');
    const accessibilityScanResults = await axeBuilder.analyze();

    addAnnotationsToPlaywrightReport(accessibilityScanResults);
    logResultsToConsole(accessibilityScanResults);
  });

  test('Axe - Should show you x amount of violations on the after page', async ({ page, axeBuilder }) => {
    await page.goto('https://a11y-assessments.pages.oit.duke.edu/accessible-u/after_u.html');
    await page.waitForTimeout(2000);
    const accessibilityScanResults = await axeBuilder.analyze();

    addAnnotationsToPlaywrightReport(accessibilityScanResults);
    logResultsToConsole(accessibilityScanResults);});
});


function addAnnotationsToPlaywrightReport(data: AxeResults) {
    test.info().annotations.push(...getViolations(data));
}

function logResultsToConsole(data: AxeResults) {
    console.table(getViolations(data));
}
function getViolations(data: AxeResults) {
    const results: {type: string, description: string}[] = [];
    for(let i=0; i<data.violations.length; i++) {
        results.push({
            type: `Axe violation ${i}`,
            description: data.violations[i].description,
        });
        for(let j=0; j<data.violations[i].nodes.length; j++) {
            results.push({
                type: `Axe violation ${i} - HTML`,
                description: data.violations[i].nodes[j].target.toString()
            });
        }
    }
    return results;
}

