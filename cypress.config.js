const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // false si pas de vidéos
  e2e: {
    baseUrl: "https://ozh.github.io/cookieclicker",
    setupNodeEvents(on, config) {},
  },
});
