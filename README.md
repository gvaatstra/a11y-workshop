# a11y-workshop
This repo contains optional submodules for the websites used in the workshop. The websites are also hosted online, but if you'd like to make local changes, you can use the submodules.

## Using the submodules
You can clone the repo with the submodules by running the following command:
```bash
git clone --recurse-submodules https://github.com/gvaatstra/a11y-workshop.git
```

If you forgot to clone with the submodules, you can initialize them by running the following command:
```bash
git submodule update --init --recursive
```

## Install
First in the root of the repo run the following command to install the dependencies. This also installs Cypress:
```bash
npm install
```
To install the playwright specific dependencies, go to `playwright` and run the following command:
```bash
npm install
```
If you're using an editor like VSCode or Cursor, you can install the recommended Playwright extension to get linting and code assistance for the Playwright tests.


## The websites
The following websites are used in the tests:
- https://a11y-assessments.pages.oit.duke.edu/accessible-u/before_u.html
- https://www.washington.edu/accesscomputing/AU/before.html

If you want to use the submodules, you can host them locally from within the specific site folder.
Go to the `sites` folder and and go to one of the sites, then run the following command:    
```bash
npx live-server
```

## Running tests
There are various ways to run tests:

### Playwright
To run the tests with Playwright, you can go to the `playwright` folder and run the following commands to run all tests, or a specific test:
```bash
cd playwright
npx playwright test
npx playwright test --grep "some part of the test name"
npx playwright test tests/axe/axe.spec.ts
```

### Cypress
To run the tests with Cypress, you can go to the `cypress` folder and run the following commands to open the UI to run tests
```
cd cypress
npx cypress open
```

## Resources
[Wick-A11Y (Cypress)](https://github.com/sclavijosuero/wick-a11y)