import { test, expect } from '../../fixtures/fixtures';
import { AxeResults } from 'axe-core';
test.describe('axe', () => {
  test('should give you some hints where to look', async ({ page, axeBuilder }) => {
    await page.goto('');
    const accessibilityScanResults = await axeBuilder.analyze();

    addAnnotationsToPlaywrightReport(accessibilityScanResults);
    logResultsToConsole(accessibilityScanResults);
  });
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

