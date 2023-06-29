const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // false si pas de vidéos
  e2e: {
    baseUrl: "https://orteil.dashnet.org/cookieclicker",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
