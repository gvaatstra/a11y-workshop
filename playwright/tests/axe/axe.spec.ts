import { test, expect } from '../../fixtures/fixtures';
import { AxeResults } from 'axe-core';
test.describe('axe', () => {
  test('should give you some hints where to look', async ({ page, axeBuilder }) => {
    await page.goto('');
    const accessibilityScanResults = await axeBuilder.analyze();

    addAnnotations(accessibilityScanResults);
    // expect(accessibilityScanResults.violations).toEqual([]);
  });
});


function addAnnotations(data: AxeResults) {
    for(let i=0; i<data.violations.length; i++) {
        test.info().annotations.push({
            type: `Axe violation ${i}`,
            description: data.violations[i].description,
        });
        for(let j=0; j<data.violations[i].nodes.length; j++) {
            test.info().annotations.push({
                type: `Axe violation ${i} - HTML`,
                description: data.violations[i].nodes[j].target.toString()
            });
        }
    }
}

