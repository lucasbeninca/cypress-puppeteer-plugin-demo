const { defineConfig } = require('cypress')

const puppeteerSetup = require('./cypress/support/puppeteer')
//const { getChromiumWebBrowsers } = require('./cypress/support/utils')

module.exports = defineConfig({
  projectId: 'u8w8pa',
  e2e: {
    setupNodeEvents(on, config) {
      puppeteerSetup(on)
      setup({
        on,
        onMessage: {
          async myMessageHander (browser) {
            // Utilize the Puppeteer browser instance and the Puppeteer API to interact with and automate the browser
          },
        },
      })

      // return getChromiumWebBrowsers(config)
    },
  },
  fixturesFolder: false,
})
