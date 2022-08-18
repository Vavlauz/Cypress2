const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "txii5i",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern:
      "cypress/{e2e,integration}/{**,*}/*{.cy.{js,jsx,ts,tsx},.spec.js}",
  },
});
