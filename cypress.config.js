const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); //for allure report
const initCypressMousePositionPlugin = require('cypress-mouse-position/plugin'); //for mouse pointer location

module.exports = defineConfig({
  projectId: 'opzyxc',
  env: {
    url: 'https://cyborg.staging.topschool.co.in',
    urlQAPreSetup: 'https://liverpool.staging.topschool.co.in',
    urlStagingPostSetup: 'https://new.staging.topschool.co.in',
    urlStaging: 'https://boys.staging.topschool.co.in',
    urlMain: 'https://wwe.staging.topschool.co.in',
    urlQA: 'https://srilanka.staging.topschool.co.in',
    urlStagingERP: "https://liverpool.staging.topschool.co.in"
  },
  video: false,
  defaultCommandTimeout: 20000,
  execTimeout: 10000,
  requestTimeout: 20000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  screenshotOnRunFailure: true,
  //modifyObstructiveCode:false,
  //reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  retries: {
    runMode: 0,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      initCypressMousePositionPlugin(on);
      allureWriter(on, config);
      return config;
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(config);
    },
    specPattern: 'cypress/e2e/**/*.js'
  }
});


