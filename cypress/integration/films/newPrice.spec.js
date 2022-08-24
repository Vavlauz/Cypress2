const login = require("../../fixtures/login.json");
const selector = require("../../fixtures/selectors.json");
const testData = require("../../fixtures/testData.json");
const price = require("../../fixtures/prices.json");

it("Should new price configuration", () => {
  cy.visit(testData.adminUrl);
  cy.login(login.login1, login.password1);
  cy.get(selector.hallPrice).click();
  cy.get(selector.standart).clear().type(price.standart);
  cy.get(selector.vip).clear().type(price.vip);
  cy.get(selector.savePrice).click();
});
