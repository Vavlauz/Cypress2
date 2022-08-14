const selector = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");
const prices = require("../../fixtures/prices.json");
const testData = require("../../fixtures/testData.json");

it("Should enter new tickets price", () => {
  cy.visit(testData.adminUrl);
  cy.login();
  cy.createHall();
  cy.get(selector.newHallCheck).click({ multiple: true, force: true });
  cy.get(selector.priceStd).clear().type(400);
  cy.get(selector.priceVip).clear().type(700);
  cy.get(selector.priceConnfSave).click();
  cy.get(selector.lastStdPrice).should("be.visible");
  cy.deleteHall();
});
