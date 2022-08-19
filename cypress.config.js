const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'wc4py4',
  defaultCommandTimeout: 20000,
  execTimeout: 10000,
  requestTimeout: 20000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  env: {
    url: 'https://cyborg.staging.topschool.co.in',
    urlQAPreSetup: 'https://liverpool.staging.topschool.co.in',
    urlStagingPostSetup: 'https://new.staging.topschool.co.in',
    urlStaging: 'https://boys.staging.topschool.co.in',
    urlMain: 'https://wwe.staging.topschool.co.in',
    urlQA: 'https://srilanka.staging.topschool.co.in',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
